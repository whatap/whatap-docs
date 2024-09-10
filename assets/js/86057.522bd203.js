(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[86057],{

/***/ 42960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ autocomplete)
});

;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/debounce.js
function debounce(fn, time) {
  var timerId = undefined;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
      return fn.apply(void 0, args);
    }, time);
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/safelyRunOnBrowser.js
/**
 * Safely runs code meant for browser environments only.
 */
function safelyRunOnBrowser(callback) {
  if (typeof window !== 'undefined') {
    return callback({
      window: window
    });
  }
  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/createRef.js
function createRef(initialValue) {
  return {
    current: initialValue
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/isEqual.js
function isPrimitive(obj) {
  return obj !== Object(obj);
}
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (isPrimitive(first) || isPrimitive(second) || typeof first === 'function' || typeof second === 'function') {
    return first === second;
  }
  if (Object.keys(first).length !== Object.keys(second).length) {
    return false;
  }
  for (var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (!(key in second)) {
      return false;
    }
    if (!isEqual(first[key], second[key])) {
      return false;
    }
  }
  return true;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js
var noop = function noop() {};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createClickedEvent.js
function createClickedEvent(_ref) {
  var item = _ref.item,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  return {
    index: item.__autocomplete_indexName,
    items: [item],
    positions: [1 + items.findIndex(function (x) {
      return x.objectID === item.objectID;
    })],
    queryID: item.__autocomplete_queryID,
    algoliaSource: ['autocomplete']
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/isModernInsightsClient.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Determines if a given insights `client` supports the optional call to `init`
 * and the ability to set credentials via extra parameters when sending events.
 */
function isModernInsightsClient(client) {
  var _split$map = (client.version || '').split('.').map(Number),
    _split$map2 = _slicedToArray(_split$map, 2),
    major = _split$map2[0],
    minor = _split$map2[1];

  /* eslint-disable @typescript-eslint/camelcase */
  var v3 = major >= 3;
  var v2_4 = major === 2 && minor >= 4;
  var v1_10 = major === 1 && minor >= 10;
  return v3 || v2_4 || v1_10;
  /* eslint-enable @typescript-eslint/camelcase */
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createSearchInsightsApi.js
var _excluded = ["items"],
  _excluded2 = ["items"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || createSearchInsightsApi_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function createSearchInsightsApi_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return createSearchInsightsApi_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return createSearchInsightsApi_arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return createSearchInsightsApi_arrayLikeToArray(arr); }
function createSearchInsightsApi_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function chunk(item) {
  var chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var chunks = [];
  for (var i = 0; i < item.objectIDs.length; i += chunkSize) {
    chunks.push(_objectSpread(_objectSpread({}, item), {}, {
      objectIDs: item.objectIDs.slice(i, i + chunkSize)
    }));
  }
  return chunks;
}
function mapToInsightsParamsApi(params) {
  return params.map(function (_ref) {
    var items = _ref.items,
      param = _objectWithoutProperties(_ref, _excluded);
    return _objectSpread(_objectSpread({}, param), {}, {
      objectIDs: (items === null || items === void 0 ? void 0 : items.map(function (_ref2) {
        var objectID = _ref2.objectID;
        return objectID;
      })) || param.objectIDs
    });
  });
}
function createSearchInsightsApi(searchInsights) {
  var canSendHeaders = isModernInsightsClient(searchInsights);
  function sendToInsights(method, payloads, items) {
    if (canSendHeaders && typeof items !== 'undefined') {
      var _items$0$__autocomple = items[0].__autocomplete_algoliaCredentials,
        appId = _items$0$__autocomple.appId,
        apiKey = _items$0$__autocomple.apiKey;
      var headers = {
        'X-Algolia-Application-Id': appId,
        'X-Algolia-API-Key': apiKey
      };
      searchInsights.apply(void 0, [method].concat(_toConsumableArray(payloads), [{
        headers: headers
      }]));
    } else {
      searchInsights.apply(void 0, [method].concat(_toConsumableArray(payloads)));
    }
  }
  return {
    /**
     * Initializes Insights with Algolia credentials.
     */
    init: function init(appId, apiKey) {
      searchInsights('init', {
        appId: appId,
        apiKey: apiKey
      });
    },
    /**
     * Sets the authenticated user token to attach to events.
     * Unsets the authenticated token by passing `undefined`.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/set-authenticated-user-token/
     */
    setAuthenticatedUserToken: function setAuthenticatedUserToken(authenticatedUserToken) {
      searchInsights('setAuthenticatedUserToken', authenticatedUserToken);
    },
    /**
     * Sets the user token to attach to events.
     */
    setUserToken: function setUserToken(userToken) {
      searchInsights('setUserToken', userToken);
    },
    /**
     * Sends click events to capture a query and its clicked items and positions.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/clicked-object-ids-after-search/
     */
    clickedObjectIDsAfterSearch: function clickedObjectIDsAfterSearch() {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }
      if (params.length > 0) {
        sendToInsights('clickedObjectIDsAfterSearch', mapToInsightsParamsApi(params), params[0].items);
      }
    },
    /**
     * Sends click events to capture clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/clicked-object-ids/
     */
    clickedObjectIDs: function clickedObjectIDs() {
      for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }
      if (params.length > 0) {
        sendToInsights('clickedObjectIDs', mapToInsightsParamsApi(params), params[0].items);
      }
    },
    /**
     * Sends click events to capture the filters a user clicks on.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/clicked-filters/
     */
    clickedFilters: function clickedFilters() {
      for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
      }
      if (params.length > 0) {
        searchInsights.apply(void 0, ['clickedFilters'].concat(params));
      }
    },
    /**
     * Sends conversion events to capture a query and its clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/converted-object-ids-after-search/
     */
    convertedObjectIDsAfterSearch: function convertedObjectIDsAfterSearch() {
      for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
      }
      if (params.length > 0) {
        sendToInsights('convertedObjectIDsAfterSearch', mapToInsightsParamsApi(params), params[0].items);
      }
    },
    /**
     * Sends conversion events to capture clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/converted-object-ids/
     */
    convertedObjectIDs: function convertedObjectIDs() {
      for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        params[_key5] = arguments[_key5];
      }
      if (params.length > 0) {
        sendToInsights('convertedObjectIDs', mapToInsightsParamsApi(params), params[0].items);
      }
    },
    /**
     * Sends conversion events to capture the filters a user uses when converting.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/converted-filters/
     */
    convertedFilters: function convertedFilters() {
      for (var _len6 = arguments.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        params[_key6] = arguments[_key6];
      }
      if (params.length > 0) {
        searchInsights.apply(void 0, ['convertedFilters'].concat(params));
      }
    },
    /**
     * Sends view events to capture clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/viewed-object-ids/
     */
    viewedObjectIDs: function viewedObjectIDs() {
      for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        params[_key7] = arguments[_key7];
      }
      if (params.length > 0) {
        params.reduce(function (acc, _ref3) {
          var items = _ref3.items,
            param = _objectWithoutProperties(_ref3, _excluded2);
          return [].concat(_toConsumableArray(acc), _toConsumableArray(chunk(_objectSpread(_objectSpread({}, param), {}, {
            objectIDs: (items === null || items === void 0 ? void 0 : items.map(function (_ref4) {
              var objectID = _ref4.objectID;
              return objectID;
            })) || param.objectIDs
          })).map(function (payload) {
            return {
              items: items,
              payload: payload
            };
          })));
        }, []).forEach(function (_ref5) {
          var items = _ref5.items,
            payload = _ref5.payload;
          return sendToInsights('viewedObjectIDs', [payload], items);
        });
      }
    },
    /**
     * Sends view events to capture the filters a user uses when viewing.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/viewed-filters/
     */
    viewedFilters: function viewedFilters() {
      for (var _len8 = arguments.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        params[_key8] = arguments[_key8];
      }
      if (params.length > 0) {
        searchInsights.apply(void 0, ['viewedFilters'].concat(params));
      }
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createViewedEvents.js
function createViewedEvents(_ref) {
  var items = _ref.items;
  var itemsByIndexName = items.reduce(function (acc, current) {
    var _acc$current$__autoco;
    acc[current.__autocomplete_indexName] = ((_acc$current$__autoco = acc[current.__autocomplete_indexName]) !== null && _acc$current$__autoco !== void 0 ? _acc$current$__autoco : []).concat(current);
    return acc;
  }, {});
  return Object.keys(itemsByIndexName).map(function (indexName) {
    var items = itemsByIndexName[indexName];
    return {
      index: indexName,
      items: items,
      algoliaSource: ['autocomplete']
    };
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/isAlgoliaInsightsHit.js
function isAlgoliaInsightsHit(hit) {
  return hit.objectID && hit.__autocomplete_indexName && hit.__autocomplete_queryID;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createAlgoliaInsightsPlugin.js
function createAlgoliaInsightsPlugin_typeof(obj) { "@babel/helpers - typeof"; return createAlgoliaInsightsPlugin_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createAlgoliaInsightsPlugin_typeof(obj); }
function createAlgoliaInsightsPlugin_toConsumableArray(arr) { return createAlgoliaInsightsPlugin_arrayWithoutHoles(arr) || createAlgoliaInsightsPlugin_iterableToArray(arr) || createAlgoliaInsightsPlugin_unsupportedIterableToArray(arr) || createAlgoliaInsightsPlugin_nonIterableSpread(); }
function createAlgoliaInsightsPlugin_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function createAlgoliaInsightsPlugin_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return createAlgoliaInsightsPlugin_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return createAlgoliaInsightsPlugin_arrayLikeToArray(o, minLen); }
function createAlgoliaInsightsPlugin_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function createAlgoliaInsightsPlugin_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return createAlgoliaInsightsPlugin_arrayLikeToArray(arr); }
function createAlgoliaInsightsPlugin_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createAlgoliaInsightsPlugin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createAlgoliaInsightsPlugin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createAlgoliaInsightsPlugin_ownKeys(Object(source), !0).forEach(function (key) { createAlgoliaInsightsPlugin_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createAlgoliaInsightsPlugin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createAlgoliaInsightsPlugin_defineProperty(obj, key, value) { key = createAlgoliaInsightsPlugin_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createAlgoliaInsightsPlugin_toPropertyKey(arg) { var key = createAlgoliaInsightsPlugin_toPrimitive(arg, "string"); return createAlgoliaInsightsPlugin_typeof(key) === "symbol" ? key : String(key); }
function createAlgoliaInsightsPlugin_toPrimitive(input, hint) { if (createAlgoliaInsightsPlugin_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createAlgoliaInsightsPlugin_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var VIEW_EVENT_DELAY = 400;
var ALGOLIA_INSIGHTS_VERSION = '2.15.0';
var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@".concat(ALGOLIA_INSIGHTS_VERSION, "/dist/search-insights.min.js");
var sendViewedObjectIDs = debounce(function (_ref) {
  var onItemsChange = _ref.onItemsChange,
    items = _ref.items,
    insights = _ref.insights,
    state = _ref.state;
  onItemsChange({
    insights: insights,
    insightsEvents: createViewedEvents({
      items: items
    }).map(function (event) {
      return createAlgoliaInsightsPlugin_objectSpread({
        eventName: 'Items Viewed'
      }, event);
    }),
    state: state
  });
}, VIEW_EVENT_DELAY);
function createAlgoliaInsightsPlugin(options) {
  var _getOptions = getOptions(options),
    providedInsightsClient = _getOptions.insightsClient,
    insightsInitParams = _getOptions.insightsInitParams,
    onItemsChange = _getOptions.onItemsChange,
    onSelectEvent = _getOptions.onSelect,
    onActiveEvent = _getOptions.onActive,
    __autocomplete_clickAnalytics = _getOptions.__autocomplete_clickAnalytics;
  var insightsClient = providedInsightsClient;
  if (!providedInsightsClient) {
    safelyRunOnBrowser(function (_ref2) {
      var window = _ref2.window;
      var pointer = window.AlgoliaAnalyticsObject || 'aa';
      if (typeof pointer === 'string') {
        insightsClient = window[pointer];
      }
      if (!insightsClient) {
        window.AlgoliaAnalyticsObject = pointer;
        if (!window[pointer]) {
          window[pointer] = function () {
            if (!window[pointer].queue) {
              window[pointer].queue = [];
            }
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            window[pointer].queue.push(args);
          };
        }
        window[pointer].version = ALGOLIA_INSIGHTS_VERSION;
        insightsClient = window[pointer];
        loadInsights(window);
      }
    });
  }

  // We return an empty plugin if `insightsClient` is still undefined at
  // this stage, which can happen in server environments.
  if (!insightsClient) {
    return {};
  }
  if (insightsInitParams) {
    insightsClient('init', createAlgoliaInsightsPlugin_objectSpread({
      partial: true
    }, insightsInitParams));
  }
  var insights = createSearchInsightsApi(insightsClient);
  var previousItems = createRef([]);
  var debouncedOnStateChange = debounce(function (_ref3) {
    var state = _ref3.state;
    if (!state.isOpen) {
      return;
    }
    var items = state.collections.reduce(function (acc, current) {
      return [].concat(createAlgoliaInsightsPlugin_toConsumableArray(acc), createAlgoliaInsightsPlugin_toConsumableArray(current.items));
    }, []).filter(isAlgoliaInsightsHit);
    if (!isEqual(previousItems.current.map(function (x) {
      return x.objectID;
    }), items.map(function (x) {
      return x.objectID;
    }))) {
      previousItems.current = items;
      if (items.length > 0) {
        sendViewedObjectIDs({
          onItemsChange: onItemsChange,
          items: items,
          insights: insights,
          state: state
        });
      }
    }
  }, 0);
  return {
    name: 'aa.algoliaInsightsPlugin',
    subscribe: function subscribe(_ref4) {
      var setContext = _ref4.setContext,
        onSelect = _ref4.onSelect,
        onActive = _ref4.onActive;
      var isAuthenticatedToken = false;
      function setInsightsContext(userToken) {
        setContext({
          algoliaInsightsPlugin: {
            __algoliaSearchParameters: createAlgoliaInsightsPlugin_objectSpread(createAlgoliaInsightsPlugin_objectSpread({}, __autocomplete_clickAnalytics ? {
              clickAnalytics: true
            } : {}), userToken ? {
              userToken: normalizeUserToken(userToken)
            } : {}),
            insights: insights
          }
        });
      }
      insightsClient('addAlgoliaAgent', 'insights-plugin');
      setInsightsContext();

      // Handles user token changes
      insightsClient('onUserTokenChange', function (userToken) {
        if (!isAuthenticatedToken) {
          setInsightsContext(userToken);
        }
      });
      insightsClient('getUserToken', null, function (_error, userToken) {
        if (!isAuthenticatedToken) {
          setInsightsContext(userToken);
        }
      });

      // Handles authenticated user token changes
      insightsClient('onAuthenticatedUserTokenChange', function (authenticatedUserToken) {
        if (authenticatedUserToken) {
          isAuthenticatedToken = true;
          setInsightsContext(authenticatedUserToken);
        } else {
          isAuthenticatedToken = false;
          insightsClient('getUserToken', null, function (_error, userToken) {
            return setInsightsContext(userToken);
          });
        }
      });
      insightsClient('getAuthenticatedUserToken', null, function (_error, authenticatedUserToken) {
        if (authenticatedUserToken) {
          isAuthenticatedToken = true;
          setInsightsContext(authenticatedUserToken);
        }
      });
      onSelect(function (_ref5) {
        var item = _ref5.item,
          state = _ref5.state,
          event = _ref5.event,
          source = _ref5.source;
        if (!isAlgoliaInsightsHit(item)) {
          return;
        }
        onSelectEvent({
          state: state,
          event: event,
          insights: insights,
          item: item,
          insightsEvents: [createAlgoliaInsightsPlugin_objectSpread({
            eventName: 'Item Selected'
          }, createClickedEvent({
            item: item,
            items: source.getItems().filter(isAlgoliaInsightsHit)
          }))]
        });
      });
      onActive(function (_ref6) {
        var item = _ref6.item,
          source = _ref6.source,
          state = _ref6.state,
          event = _ref6.event;
        if (!isAlgoliaInsightsHit(item)) {
          return;
        }
        onActiveEvent({
          state: state,
          event: event,
          insights: insights,
          item: item,
          insightsEvents: [createAlgoliaInsightsPlugin_objectSpread({
            eventName: 'Item Active'
          }, createClickedEvent({
            item: item,
            items: source.getItems().filter(isAlgoliaInsightsHit)
          }))]
        });
      });
    },
    onStateChange: function onStateChange(_ref7) {
      var state = _ref7.state;
      debouncedOnStateChange({
        state: state
      });
    },
    __autocomplete_pluginOptions: options
  };
}
function getAlgoliaSources() {
  var _context$algoliaInsig;
  var algoliaSourceBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var context = arguments.length > 1 ? arguments[1] : undefined;
  return [].concat(createAlgoliaInsightsPlugin_toConsumableArray(algoliaSourceBase), ['autocomplete-internal'], createAlgoliaInsightsPlugin_toConsumableArray((_context$algoliaInsig = context.algoliaInsightsPlugin) !== null && _context$algoliaInsig !== void 0 && _context$algoliaInsig.__automaticInsights ? ['autocomplete-automatic'] : []));
}
function getOptions(options) {
  return createAlgoliaInsightsPlugin_objectSpread({
    onItemsChange: function onItemsChange(_ref8) {
      var insights = _ref8.insights,
        insightsEvents = _ref8.insightsEvents,
        state = _ref8.state;
      insights.viewedObjectIDs.apply(insights, createAlgoliaInsightsPlugin_toConsumableArray(insightsEvents.map(function (event) {
        return createAlgoliaInsightsPlugin_objectSpread(createAlgoliaInsightsPlugin_objectSpread({}, event), {}, {
          algoliaSource: getAlgoliaSources(event.algoliaSource, state.context)
        });
      })));
    },
    onSelect: function onSelect(_ref9) {
      var insights = _ref9.insights,
        insightsEvents = _ref9.insightsEvents,
        state = _ref9.state;
      insights.clickedObjectIDsAfterSearch.apply(insights, createAlgoliaInsightsPlugin_toConsumableArray(insightsEvents.map(function (event) {
        return createAlgoliaInsightsPlugin_objectSpread(createAlgoliaInsightsPlugin_objectSpread({}, event), {}, {
          algoliaSource: getAlgoliaSources(event.algoliaSource, state.context)
        });
      })));
    },
    onActive: noop,
    __autocomplete_clickAnalytics: true
  }, options);
}
function loadInsights(environment) {
  var errorMessage = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
  try {
    var script = environment.document.createElement('script');
    script.async = true;
    script.src = ALGOLIA_INSIGHTS_SRC;
    script.onerror = function () {
      // eslint-disable-next-line no-console
      console.error(errorMessage);
    };
    document.body.appendChild(script);
  } catch (cause) {
    // eslint-disable-next-line no-console
    console.error(errorMessage);
  }
}

/**
 * While `search-insights` supports both string and number user tokens,
 * the Search API only accepts strings. This function normalizes the user token.
 */
function normalizeUserToken(userToken) {
  return typeof userToken === 'number' ? userToken.toString() : userToken;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js

function checkOptions(options) {
   false ? 0 : void 0;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js
function createCancelablePromiseList() {
  var list = [];
  return {
    add: function add(cancelablePromise) {
      list.push(cancelablePromise);
      return cancelablePromise.finally(function () {
        list = list.filter(function (item) {
          return item !== cancelablePromise;
        });
      });
    },
    cancelAll: function cancelAll() {
      list.forEach(function (promise) {
        return promise.cancel();
      });
    },
    isEmpty: function isEmpty() {
      return list.length === 0;
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/createStore.js
function createStore_typeof(obj) { "@babel/helpers - typeof"; return createStore_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createStore_typeof(obj); }
function createStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createStore_ownKeys(Object(source), !0).forEach(function (key) { createStore_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createStore_defineProperty(obj, key, value) { key = createStore_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createStore_toPropertyKey(arg) { var key = createStore_toPrimitive(arg, "string"); return createStore_typeof(key) === "symbol" ? key : String(key); }
function createStore_toPrimitive(input, hint) { if (createStore_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createStore_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function createStore(reducer, props, onStoreStateChange) {
  var state = props.initialState;
  return {
    getState: function getState() {
      return state;
    },
    dispatch: function dispatch(action, payload) {
      var prevState = createStore_objectSpread({}, state);
      state = reducer(state, {
        type: action,
        props: props,
        payload: payload
      });
      onStoreStateChange({
        state: state,
        prevState: prevState
      });
    },
    pendingRequests: createCancelablePromiseList()
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js
function flatten(values) {
  return values.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js
function getAutocompleteSetters_typeof(obj) { "@babel/helpers - typeof"; return getAutocompleteSetters_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getAutocompleteSetters_typeof(obj); }
function getAutocompleteSetters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getAutocompleteSetters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getAutocompleteSetters_ownKeys(Object(source), !0).forEach(function (key) { getAutocompleteSetters_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getAutocompleteSetters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getAutocompleteSetters_defineProperty(obj, key, value) { key = getAutocompleteSetters_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getAutocompleteSetters_toPropertyKey(arg) { var key = getAutocompleteSetters_toPrimitive(arg, "string"); return getAutocompleteSetters_typeof(key) === "symbol" ? key : String(key); }
function getAutocompleteSetters_toPrimitive(input, hint) { if (getAutocompleteSetters_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getAutocompleteSetters_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function getAutocompleteSetters(_ref) {
  var store = _ref.store;
  var setActiveItemId = function setActiveItemId(value) {
    store.dispatch('setActiveItemId', value);
  };
  var setQuery = function setQuery(value) {
    store.dispatch('setQuery', value);
  };
  var setCollections = function setCollections(rawValue) {
    var baseItemId = 0;
    var value = rawValue.map(function (collection) {
      return getAutocompleteSetters_objectSpread(getAutocompleteSetters_objectSpread({}, collection), {}, {
        // We flatten the stored items to support calling `getAlgoliaResults`
        // from the source itself.
        items: flatten(collection.items).map(function (item) {
          return getAutocompleteSetters_objectSpread(getAutocompleteSetters_objectSpread({}, item), {}, {
            __autocomplete_id: baseItemId++
          });
        })
      });
    });
    store.dispatch('setCollections', value);
  };
  var setIsOpen = function setIsOpen(value) {
    store.dispatch('setIsOpen', value);
  };
  var setStatus = function setStatus(value) {
    store.dispatch('setStatus', value);
  };
  var setContext = function setContext(value) {
    store.dispatch('setContext', value);
  };
  return {
    setActiveItemId: setActiveItemId,
    setQuery: setQuery,
    setCollections: setCollections,
    setIsOpen: setIsOpen,
    setStatus: setStatus,
    setContext: setContext
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js
function getItemsCount(state) {
  if (state.collections.length === 0) {
    return 0;
  }
  return state.collections.reduce(function (sum, collection) {
    return sum + collection.items.length;
  }, 0);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js
var autocompleteId = 0;
function generateAutocompleteId() {
  return "autocomplete-".concat(autocompleteId++);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js
/**
 * Throws an error if the condition is not met in development mode.
 * This is used to make development a better experience to provide guidance as
 * to where the error comes from.
 */
function invariant(condition, message) {
  if (true) {
    return;
  }
  if (!condition) {
    throw new Error("[Autocomplete] ".concat(typeof message === 'function' ? message() : message));
  }
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js
function decycle_slicedToArray(arr, i) { return decycle_arrayWithHoles(arr) || decycle_iterableToArrayLimit(arr, i) || decycle_unsupportedIterableToArray(arr, i) || decycle_nonIterableRest(); }
function decycle_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function decycle_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return decycle_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return decycle_arrayLikeToArray(o, minLen); }
function decycle_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function decycle_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function decycle_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function decycle_typeof(obj) { "@babel/helpers - typeof"; return decycle_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, decycle_typeof(obj); }
/**
 * Decycles objects with circular references.
 * This is used to print cyclic structures in development environment only.
 */
function decycle(obj) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();
  if (true) {
    return obj;
  }
  if (seen.has(obj)) {
    return '[Circular]';
  }
  var newSeen = seen.add(obj);
  if (Array.isArray(obj)) {
    return obj.map(function (x) {
      return decycle(x, newSeen);
    });
  }
  return Object.fromEntries(Object.entries(obj).map(function (_ref) {
    var _ref2 = decycle_slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return [key, decycle(value, newSeen)];
  }));
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js
function getNormalizedSources_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getNormalizedSources_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getNormalizedSources_ownKeys(Object(source), !0).forEach(function (key) { getNormalizedSources_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getNormalizedSources_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getNormalizedSources_defineProperty(obj, key, value) { key = getNormalizedSources_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getNormalizedSources_toPropertyKey(arg) { var key = getNormalizedSources_toPrimitive(arg, "string"); return getNormalizedSources_typeof(key) === "symbol" ? key : String(key); }
function getNormalizedSources_toPrimitive(input, hint) { if (getNormalizedSources_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getNormalizedSources_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getNormalizedSources_typeof(obj) { "@babel/helpers - typeof"; return getNormalizedSources_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getNormalizedSources_typeof(obj); }

function getNormalizedSources(getSources, params) {
  var seenSourceIds = [];
  return Promise.resolve(getSources(params)).then(function (sources) {
    invariant(Array.isArray(sources), function () {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(getNormalizedSources_typeof(sources)), ":\n\n").concat(JSON.stringify(decycle(sources), null, 2));
    });
    return Promise.all(sources
    // We allow `undefined` and `false` sources to allow users to use
    // `Boolean(query) && source` (=> `false`).
    // We need to remove these values at this point.
    .filter(function (maybeSource) {
      return Boolean(maybeSource);
    }).map(function (source) {
      invariant(typeof source.sourceId === 'string', 'A source must provide a `sourceId` string.');
      if (seenSourceIds.includes(source.sourceId)) {
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(source.sourceId), " is not unique."));
      }
      seenSourceIds.push(source.sourceId);
      var defaultSource = {
        getItemInputValue: function getItemInputValue(_ref) {
          var state = _ref.state;
          return state.query;
        },
        getItemUrl: function getItemUrl() {
          return undefined;
        },
        onSelect: function onSelect(_ref2) {
          var setIsOpen = _ref2.setIsOpen;
          setIsOpen(false);
        },
        onActive: noop,
        onResolve: noop
      };
      Object.keys(defaultSource).forEach(function (key) {
        defaultSource[key].__default = true;
      });
      var normalizedSource = getNormalizedSources_objectSpread(getNormalizedSources_objectSpread({}, defaultSource), source);
      return Promise.resolve(normalizedSource);
    }));
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js
function getDefaultProps_typeof(obj) { "@babel/helpers - typeof"; return getDefaultProps_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getDefaultProps_typeof(obj); }
function getDefaultProps_toConsumableArray(arr) { return getDefaultProps_arrayWithoutHoles(arr) || getDefaultProps_iterableToArray(arr) || getDefaultProps_unsupportedIterableToArray(arr) || getDefaultProps_nonIterableSpread(); }
function getDefaultProps_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function getDefaultProps_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getDefaultProps_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getDefaultProps_arrayLikeToArray(o, minLen); }
function getDefaultProps_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function getDefaultProps_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return getDefaultProps_arrayLikeToArray(arr); }
function getDefaultProps_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function getDefaultProps_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getDefaultProps_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getDefaultProps_ownKeys(Object(source), !0).forEach(function (key) { getDefaultProps_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getDefaultProps_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getDefaultProps_defineProperty(obj, key, value) { key = getDefaultProps_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getDefaultProps_toPropertyKey(arg) { var key = getDefaultProps_toPrimitive(arg, "string"); return getDefaultProps_typeof(key) === "symbol" ? key : String(key); }
function getDefaultProps_toPrimitive(input, hint) { if (getDefaultProps_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getDefaultProps_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function getDefaultProps(props, pluginSubscribers) {
  var _props$id;
  /* eslint-disable no-restricted-globals */
  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */
  var plugins = props.plugins || [];
  return getDefaultProps_objectSpread(getDefaultProps_objectSpread({
    debug: false,
    openOnFocus: false,
    enterKeyHint: undefined,
    ignoreCompositionEvents: false,
    placeholder: '',
    autoFocus: false,
    defaultActiveItemId: null,
    stallThreshold: 300,
    insights: undefined,
    environment: environment,
    shouldPanelOpen: function shouldPanelOpen(_ref) {
      var state = _ref.state;
      return getItemsCount(state) > 0;
    },
    reshape: function reshape(_ref2) {
      var sources = _ref2.sources;
      return sources;
    }
  }, props), {}, {
    // Since `generateAutocompleteId` triggers a side effect (it increments
    // an internal counter), we don't want to execute it if unnecessary.
    id: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : generateAutocompleteId(),
    plugins: plugins,
    // The following props need to be deeply defaulted.
    initialState: getDefaultProps_objectSpread({
      activeItemId: null,
      query: '',
      completion: null,
      collections: [],
      isOpen: false,
      status: 'idle',
      context: {}
    }, props.initialState),
    onStateChange: function onStateChange(params) {
      var _props$onStateChange;
      (_props$onStateChange = props.onStateChange) === null || _props$onStateChange === void 0 ? void 0 : _props$onStateChange.call(props, params);
      plugins.forEach(function (x) {
        var _x$onStateChange;
        return (_x$onStateChange = x.onStateChange) === null || _x$onStateChange === void 0 ? void 0 : _x$onStateChange.call(x, params);
      });
    },
    onSubmit: function onSubmit(params) {
      var _props$onSubmit;
      (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0 ? void 0 : _props$onSubmit.call(props, params);
      plugins.forEach(function (x) {
        var _x$onSubmit;
        return (_x$onSubmit = x.onSubmit) === null || _x$onSubmit === void 0 ? void 0 : _x$onSubmit.call(x, params);
      });
    },
    onReset: function onReset(params) {
      var _props$onReset;
      (_props$onReset = props.onReset) === null || _props$onReset === void 0 ? void 0 : _props$onReset.call(props, params);
      plugins.forEach(function (x) {
        var _x$onReset;
        return (_x$onReset = x.onReset) === null || _x$onReset === void 0 ? void 0 : _x$onReset.call(x, params);
      });
    },
    getSources: function getSources(params) {
      return Promise.all([].concat(getDefaultProps_toConsumableArray(plugins.map(function (plugin) {
        return plugin.getSources;
      })), [props.getSources]).filter(Boolean).map(function (getSources) {
        return getNormalizedSources(getSources, params);
      })).then(function (nested) {
        return flatten(nested);
      }).then(function (sources) {
        return sources.map(function (source) {
          return getDefaultProps_objectSpread(getDefaultProps_objectSpread({}, source), {}, {
            onSelect: function onSelect(params) {
              source.onSelect(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onSelect;
                return (_x$onSelect = x.onSelect) === null || _x$onSelect === void 0 ? void 0 : _x$onSelect.call(x, params);
              });
            },
            onActive: function onActive(params) {
              source.onActive(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onActive;
                return (_x$onActive = x.onActive) === null || _x$onActive === void 0 ? void 0 : _x$onActive.call(x, params);
              });
            },
            onResolve: function onResolve(params) {
              source.onResolve(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onResolve;
                return (_x$onResolve = x.onResolve) === null || _x$onResolve === void 0 ? void 0 : _x$onResolve.call(x, params);
              });
            }
          });
        });
      });
    },
    navigator: getDefaultProps_objectSpread({
      navigate: function navigate(_ref3) {
        var itemUrl = _ref3.itemUrl;
        environment.location.assign(itemUrl);
      },
      navigateNewTab: function navigateNewTab(_ref4) {
        var itemUrl = _ref4.itemUrl;
        var windowReference = environment.open(itemUrl, '_blank', 'noopener');
        windowReference === null || windowReference === void 0 ? void 0 : windowReference.focus();
      },
      navigateNewWindow: function navigateNewWindow(_ref5) {
        var itemUrl = _ref5.itemUrl;
        environment.open(itemUrl, '_blank', 'noopener');
      }
    }, props.navigator)
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/reshape.js
function reshape_typeof(obj) { "@babel/helpers - typeof"; return reshape_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, reshape_typeof(obj); }
function reshape_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function reshape_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? reshape_ownKeys(Object(source), !0).forEach(function (key) { reshape_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : reshape_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function reshape_defineProperty(obj, key, value) { key = reshape_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function reshape_toPropertyKey(arg) { var key = reshape_toPrimitive(arg, "string"); return reshape_typeof(key) === "symbol" ? key : String(key); }
function reshape_toPrimitive(input, hint) { if (reshape_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (reshape_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function reshape(_ref) {
  var collections = _ref.collections,
    props = _ref.props,
    state = _ref.state;
  // Sources are grouped by `sourceId` to conveniently pick them via destructuring.
  // Example: `const { recentSearchesPlugin } = sourcesBySourceId`
  var originalSourcesBySourceId = collections.reduce(function (acc, collection) {
    return reshape_objectSpread(reshape_objectSpread({}, acc), {}, reshape_defineProperty({}, collection.source.sourceId, reshape_objectSpread(reshape_objectSpread({}, collection.source), {}, {
      getItems: function getItems() {
        // We provide the resolved items from the collection to the `reshape` prop.
        return flatten(collection.items);
      }
    })));
  }, {});
  var _props$plugins$reduce = props.plugins.reduce(function (acc, plugin) {
      if (plugin.reshape) {
        return plugin.reshape(acc);
      }
      return acc;
    }, {
      sourcesBySourceId: originalSourcesBySourceId,
      state: state
    }),
    sourcesBySourceId = _props$plugins$reduce.sourcesBySourceId;
  var reshapeSources = props.reshape({
    sourcesBySourceId: sourcesBySourceId,
    sources: Object.values(sourcesBySourceId),
    state: state
  });

  // We reconstruct the collections with the items modified by the `reshape` prop.
  return flatten(reshapeSources).filter(Boolean).map(function (source) {
    return {
      source: source,
      items: source.getItems()
    };
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js
function mapToAlgoliaResponse(rawResults) {
  return {
    results: rawResults,
    hits: rawResults.map(function (result) {
      return result.hits;
    }).filter(Boolean),
    facetHits: rawResults.map(function (result) {
      var _facetHits;
      return (_facetHits = result.facetHits) === null || _facetHits === void 0 ? void 0 : _facetHits.map(function (facetHit) {
        // Bring support for the highlighting components.
        return {
          label: facetHit.value,
          count: facetHit.count,
          _highlightResult: {
            label: {
              value: facetHit.highlighted
            }
          }
        };
      });
    }).filter(Boolean)
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/resolve.js
function resolve_typeof(obj) { "@babel/helpers - typeof"; return resolve_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, resolve_typeof(obj); }
function resolve_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function resolve_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? resolve_ownKeys(Object(source), !0).forEach(function (key) { resolve_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : resolve_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function resolve_defineProperty(obj, key, value) { key = resolve_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function resolve_toPropertyKey(arg) { var key = resolve_toPrimitive(arg, "string"); return resolve_typeof(key) === "symbol" ? key : String(key); }
function resolve_toPrimitive(input, hint) { if (resolve_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (resolve_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function resolve_toConsumableArray(arr) { return resolve_arrayWithoutHoles(arr) || resolve_iterableToArray(arr) || resolve_unsupportedIterableToArray(arr) || resolve_nonIterableSpread(); }
function resolve_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function resolve_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return resolve_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return resolve_arrayLikeToArray(o, minLen); }
function resolve_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function resolve_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return resolve_arrayLikeToArray(arr); }
function resolve_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function isDescription(item) {
  return Boolean(item.execute);
}
function isRequesterDescription(description) {
  return Boolean(description === null || description === void 0 ? void 0 : description.execute);
}
function preResolve(itemsOrDescription, sourceId, state) {
  if (isRequesterDescription(itemsOrDescription)) {
    var contextParameters = itemsOrDescription.requesterId === 'algolia' ? Object.assign.apply(Object, [{}].concat(resolve_toConsumableArray(Object.keys(state.context).map(function (key) {
      var _state$context$key;
      return (_state$context$key = state.context[key]) === null || _state$context$key === void 0 ? void 0 : _state$context$key.__algoliaSearchParameters;
    })))) : {};
    return resolve_objectSpread(resolve_objectSpread({}, itemsOrDescription), {}, {
      requests: itemsOrDescription.queries.map(function (query) {
        return {
          query: itemsOrDescription.requesterId === 'algolia' ? resolve_objectSpread(resolve_objectSpread({}, query), {}, {
            params: resolve_objectSpread(resolve_objectSpread({}, contextParameters), query.params)
          }) : query,
          sourceId: sourceId,
          transformResponse: itemsOrDescription.transformResponse
        };
      })
    });
  }
  return {
    items: itemsOrDescription,
    sourceId: sourceId
  };
}
function resolve(items) {
  var packed = items.reduce(function (acc, current) {
    if (!isDescription(current)) {
      acc.push(current);
      return acc;
    }
    var searchClient = current.searchClient,
      execute = current.execute,
      requesterId = current.requesterId,
      requests = current.requests;
    var container = acc.find(function (item) {
      return isDescription(current) && isDescription(item) && item.searchClient === searchClient && Boolean(requesterId) && item.requesterId === requesterId;
    });
    if (container) {
      var _container$items;
      (_container$items = container.items).push.apply(_container$items, resolve_toConsumableArray(requests));
    } else {
      var request = {
        execute: execute,
        requesterId: requesterId,
        items: requests,
        searchClient: searchClient
      };
      acc.push(request);
    }
    return acc;
  }, []);
  var values = packed.map(function (maybeDescription) {
    if (!isDescription(maybeDescription)) {
      return Promise.resolve(maybeDescription);
    }
    var _ref = maybeDescription,
      execute = _ref.execute,
      items = _ref.items,
      searchClient = _ref.searchClient;
    return execute({
      searchClient: searchClient,
      requests: items
    });
  });
  return Promise.all(values).then(function (responses) {
    return flatten(responses);
  });
}
function postResolve(responses, sources, store) {
  return sources.map(function (source) {
    var matches = responses.filter(function (response) {
      return response.sourceId === source.sourceId;
    });
    var results = matches.map(function (_ref2) {
      var items = _ref2.items;
      return items;
    });
    var transform = matches[0].transformResponse;
    var items = transform ? transform(mapToAlgoliaResponse(results)) : results;
    source.onResolve({
      source: source,
      results: results,
      items: items,
      state: store.getState()
    });
    invariant(Array.isArray(items), function () {
      return "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned type ").concat(JSON.stringify(resolve_typeof(items)), ":\n\n").concat(JSON.stringify(decycle(items), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
    });
    invariant(items.every(Boolean), "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned ").concat(JSON.stringify(undefined), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"));
    return {
      source: source,
      items: items
    };
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js
/**
 * Creates a runner that executes promises in a concurrent-safe way.
 *
 * This is useful to prevent older promises to resolve after a newer promise,
 * otherwise resulting in stale resolved values.
 */
function createConcurrentSafePromise() {
  var basePromiseId = -1;
  var latestResolvedId = -1;
  var latestResolvedValue = undefined;
  return function runConcurrentSafePromise(promise) {
    basePromiseId++;
    var currentPromiseId = basePromiseId;
    return Promise.resolve(promise).then(function (x) {
      // The promise might take too long to resolve and get outdated. This would
      // result in resolving stale values.
      // When this happens, we ignore the promise value and return the one
      // coming from the latest resolved value.
      //
      // +----------------------------------+
      // |        100ms                     |
      // | run(1) +--->  R1                 |
      // |        300ms                     |
      // | run(2) +-------------> R2 (SKIP) |
      // |        200ms                     |
      // | run(3) +--------> R3             |
      // +----------------------------------+
      if (latestResolvedValue && currentPromiseId < latestResolvedId) {
        return latestResolvedValue;
      }
      latestResolvedId = currentPromiseId;
      latestResolvedValue = x;
      return x;
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js
function createInternalCancelablePromise(promise, initialState) {
  var state = initialState;
  return {
    then: function then(onfulfilled, onrejected) {
      return createInternalCancelablePromise(promise.then(createCallback(onfulfilled, state, promise), createCallback(onrejected, state, promise)), state);
    },
    catch: function _catch(onrejected) {
      return createInternalCancelablePromise(promise.catch(createCallback(onrejected, state, promise)), state);
    },
    finally: function _finally(onfinally) {
      if (onfinally) {
        state.onCancelList.push(onfinally);
      }
      return createInternalCancelablePromise(promise.finally(createCallback(onfinally && function () {
        state.onCancelList = [];
        return onfinally();
      }, state, promise)), state);
    },
    cancel: function cancel() {
      state.isCanceled = true;
      var callbacks = state.onCancelList;
      state.onCancelList = [];
      callbacks.forEach(function (callback) {
        callback();
      });
    },
    isCanceled: function isCanceled() {
      return state.isCanceled === true;
    }
  };
}
function createCancelablePromise(executor) {
  return createInternalCancelablePromise(new Promise(function (resolve, reject) {
    return executor(resolve, reject);
  }), {
    isCanceled: false,
    onCancelList: []
  });
}
createCancelablePromise.resolve = function (value) {
  return cancelable(Promise.resolve(value));
};
createCancelablePromise.reject = function (reason) {
  return cancelable(Promise.reject(reason));
};
function cancelable(promise) {
  return createInternalCancelablePromise(promise, {
    isCanceled: false,
    onCancelList: []
  });
}
function createCallback(onResult, state, fallback) {
  if (!onResult) {
    return fallback;
  }
  return function callback(arg) {
    if (state.isCanceled) {
      return arg;
    }
    return onResult(arg);
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js
// We don't have access to the autocomplete source when we call `onKeyDown`
// or `onClick` because those are native browser events.
// However, we can get the source from the suggestion index.
function getCollectionFromActiveItemId(state) {
  // Given 3 sources with respectively 1, 2 and 3 suggestions: [1, 2, 3]
  // We want to get the accumulated counts:
  // [1, 1 + 2, 1 + 2 + 3] = [1, 3, 3 + 3] = [1, 3, 6]
  var accumulatedCollectionsCount = state.collections.map(function (collections) {
    return collections.items.length;
  }).reduce(function (acc, collectionsCount, index) {
    var previousValue = acc[index - 1] || 0;
    var nextValue = previousValue + collectionsCount;
    acc.push(nextValue);
    return acc;
  }, []);

  // Based on the accumulated counts, we can infer the index of the suggestion.
  var collectionIndex = accumulatedCollectionsCount.reduce(function (acc, current) {
    if (current <= state.activeItemId) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return state.collections[collectionIndex];
}

/**
 * Gets the highlighted index relative to a suggestion object (not the absolute
 * highlighted index).
 *
 * Example:
 *  [['a', 'b'], ['c', 'd', 'e'], ['f']]
 *                      ↑
 *         (absolute: 3, relative: 1)
 */
function getRelativeActiveItemId(_ref) {
  var state = _ref.state,
    collection = _ref.collection;
  var isOffsetFound = false;
  var counter = 0;
  var previousItemsOffset = 0;
  while (isOffsetFound === false) {
    var currentCollection = state.collections[counter];
    if (currentCollection === collection) {
      isOffsetFound = true;
      break;
    }
    previousItemsOffset += currentCollection.items.length;
    counter++;
  }
  return state.activeItemId - previousItemsOffset;
}
function getActiveItem(state) {
  var collection = getCollectionFromActiveItemId(state);
  if (!collection) {
    return null;
  }
  var item = collection.items[getRelativeActiveItemId({
    state: state,
    collection: collection
  })];
  var source = collection.source;
  var itemInputValue = source.getItemInputValue({
    item: item,
    state: state
  });
  var itemUrl = source.getItemUrl({
    item: item,
    state: state
  });
  return {
    item: item,
    itemInputValue: itemInputValue,
    itemUrl: itemUrl,
    source: source
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/onInput.js
function onInput_typeof(obj) { "@babel/helpers - typeof"; return onInput_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, onInput_typeof(obj); }
var onInput_excluded = ["event", "nextState", "props", "query", "refresh", "store"];
function onInput_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function onInput_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? onInput_ownKeys(Object(source), !0).forEach(function (key) { onInput_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : onInput_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function onInput_defineProperty(obj, key, value) { key = onInput_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function onInput_toPropertyKey(arg) { var key = onInput_toPrimitive(arg, "string"); return onInput_typeof(key) === "symbol" ? key : String(key); }
function onInput_toPrimitive(input, hint) { if (onInput_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (onInput_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function onInput_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = onInput_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function onInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var lastStalledId = null;
var runConcurrentSafePromise = createConcurrentSafePromise();
function onInput(_ref) {
  var event = _ref.event,
    _ref$nextState = _ref.nextState,
    nextState = _ref$nextState === void 0 ? {} : _ref$nextState,
    props = _ref.props,
    query = _ref.query,
    refresh = _ref.refresh,
    store = _ref.store,
    setters = onInput_objectWithoutProperties(_ref, onInput_excluded);
  if (lastStalledId) {
    props.environment.clearTimeout(lastStalledId);
  }
  var setCollections = setters.setCollections,
    setIsOpen = setters.setIsOpen,
    setQuery = setters.setQuery,
    setActiveItemId = setters.setActiveItemId,
    setStatus = setters.setStatus,
    setContext = setters.setContext;
  setQuery(query);
  setActiveItemId(props.defaultActiveItemId);
  if (!query && props.openOnFocus === false) {
    var _nextState$isOpen;
    var collections = store.getState().collections.map(function (collection) {
      return onInput_objectSpread(onInput_objectSpread({}, collection), {}, {
        items: []
      });
    });
    setStatus('idle');
    setCollections(collections);
    setIsOpen((_nextState$isOpen = nextState.isOpen) !== null && _nextState$isOpen !== void 0 ? _nextState$isOpen : props.shouldPanelOpen({
      state: store.getState()
    }));

    // We make sure to update the latest resolved value of the tracked
    // promises to keep late resolving promises from "cancelling" the state
    // updates performed in this code path.
    // We chain with a void promise to respect `onInput`'s expected return type.
    var _request = cancelable(runConcurrentSafePromise(collections).then(function () {
      return Promise.resolve();
    }));
    return store.pendingRequests.add(_request);
  }
  setStatus('loading');
  lastStalledId = props.environment.setTimeout(function () {
    setStatus('stalled');
  }, props.stallThreshold);

  // We track the entire promise chain triggered by `onInput` before mutating
  // the Autocomplete state to make sure that any state manipulation is based on
  // fresh data regardless of when promises individually resolve.
  // We don't track nested promises and only rely on the full chain resolution,
  // meaning we should only ever manipulate the state once this concurrent-safe
  // promise is resolved.
  var request = cancelable(runConcurrentSafePromise(props.getSources(onInput_objectSpread({
    query: query,
    refresh: refresh,
    state: store.getState()
  }, setters)).then(function (sources) {
    return Promise.all(sources.map(function (source) {
      return Promise.resolve(source.getItems(onInput_objectSpread({
        query: query,
        refresh: refresh,
        state: store.getState()
      }, setters))).then(function (itemsOrDescription) {
        return preResolve(itemsOrDescription, source.sourceId, store.getState());
      });
    })).then(resolve).then(function (responses) {
      var __automaticInsights = responses.some(function (_ref2) {
        var items = _ref2.items;
        return isSearchResponseWithAutomaticInsightsFlag(items);
      });

      // No need to pollute the context if `__automaticInsights=false`
      if (__automaticInsights) {
        var _store$getState$conte;
        setContext({
          algoliaInsightsPlugin: onInput_objectSpread(onInput_objectSpread({}, ((_store$getState$conte = store.getState().context) === null || _store$getState$conte === void 0 ? void 0 : _store$getState$conte.algoliaInsightsPlugin) || {}), {}, {
            __automaticInsights: __automaticInsights
          })
        });
      }
      return postResolve(responses, sources, store);
    }).then(function (collections) {
      return reshape({
        collections: collections,
        props: props,
        state: store.getState()
      });
    });
  }))).then(function (collections) {
    var _nextState$isOpen2;
    // Parameters passed to `onInput` could be stale when the following code
    // executes, because `onInput` calls may not resolve in order.
    // If it becomes a problem we'll need to save the last passed parameters.
    // See: https://codesandbox.io/s/agitated-cookies-y290z

    setStatus('idle');
    setCollections(collections);
    var isPanelOpen = props.shouldPanelOpen({
      state: store.getState()
    });
    setIsOpen((_nextState$isOpen2 = nextState.isOpen) !== null && _nextState$isOpen2 !== void 0 ? _nextState$isOpen2 : props.openOnFocus && !query && isPanelOpen || isPanelOpen);
    var highlightedItem = getActiveItem(store.getState());
    if (store.getState().activeItemId !== null && highlightedItem) {
      var item = highlightedItem.item,
        itemInputValue = highlightedItem.itemInputValue,
        itemUrl = highlightedItem.itemUrl,
        source = highlightedItem.source;
      source.onActive(onInput_objectSpread({
        event: event,
        item: item,
        itemInputValue: itemInputValue,
        itemUrl: itemUrl,
        refresh: refresh,
        source: source,
        state: store.getState()
      }, setters));
    }
  }).finally(function () {
    setStatus('idle');
    if (lastStalledId) {
      props.environment.clearTimeout(lastStalledId);
    }
  });
  return store.pendingRequests.add(request);
}
function isSearchResponseWithAutomaticInsightsFlag(items) {
  return !Array.isArray(items) && Boolean(items === null || items === void 0 ? void 0 : items._automaticInsights);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/getAutocompleteElementId.js
/**
 * Returns a full element id for an autocomplete element.
 *
 * @param autocompleteInstanceId The id of the autocomplete instance
 * @param elementId The specific element id
 * @param source The source of the element, when it needs to be scoped
 */
function getAutocompleteElementId(autocompleteInstanceId, elementId, source) {
  return [autocompleteInstanceId, source === null || source === void 0 ? void 0 : source.sourceId, elementId].filter(Boolean).join('-').replace(/\s/g, '');
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js
function onKeyDown_typeof(obj) { "@babel/helpers - typeof"; return onKeyDown_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, onKeyDown_typeof(obj); }
var onKeyDown_excluded = ["event", "props", "refresh", "store"];
function onKeyDown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function onKeyDown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? onKeyDown_ownKeys(Object(source), !0).forEach(function (key) { onKeyDown_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : onKeyDown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function onKeyDown_defineProperty(obj, key, value) { key = onKeyDown_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function onKeyDown_toPropertyKey(arg) { var key = onKeyDown_toPrimitive(arg, "string"); return onKeyDown_typeof(key) === "symbol" ? key : String(key); }
function onKeyDown_toPrimitive(input, hint) { if (onKeyDown_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (onKeyDown_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function onKeyDown_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = onKeyDown_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function onKeyDown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function onKeyDown_onKeyDown(_ref) {
  var event = _ref.event,
    props = _ref.props,
    refresh = _ref.refresh,
    store = _ref.store,
    setters = onKeyDown_objectWithoutProperties(_ref, onKeyDown_excluded);
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    // eslint-disable-next-line no-inner-declarations
    var triggerScrollIntoView = function triggerScrollIntoView() {
      var highlightedItem = getActiveItem(store.getState());
      var nodeItem = props.environment.document.getElementById(getAutocompleteElementId(props.id, "item-".concat(store.getState().activeItemId), highlightedItem === null || highlightedItem === void 0 ? void 0 : highlightedItem.source));
      if (nodeItem) {
        if (nodeItem.scrollIntoViewIfNeeded) {
          nodeItem.scrollIntoViewIfNeeded(false);
        } else {
          nodeItem.scrollIntoView(false);
        }
      }
    }; // eslint-disable-next-line no-inner-declarations
    var triggerOnActive = function triggerOnActive() {
      var highlightedItem = getActiveItem(store.getState());
      if (store.getState().activeItemId !== null && highlightedItem) {
        var item = highlightedItem.item,
          itemInputValue = highlightedItem.itemInputValue,
          itemUrl = highlightedItem.itemUrl,
          source = highlightedItem.source;
        source.onActive(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      }
    }; // Default browser behavior changes the caret placement on ArrowUp and
    // ArrowDown.
    event.preventDefault();

    // When re-opening the panel, we need to split the logic to keep the actions
    // synchronized as `onInput` returns a promise.
    if (store.getState().isOpen === false && (props.openOnFocus || Boolean(store.getState().query))) {
      onInput(onKeyDown_objectSpread({
        event: event,
        props: props,
        query: store.getState().query,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        store.dispatch(event.key, {
          nextActiveItemId: props.defaultActiveItemId
        });
        triggerOnActive();
        // Since we rely on the DOM, we need to wait for all the micro tasks to
        // finish (which include re-opening the panel) to make sure all the
        // elements are available.
        setTimeout(triggerScrollIntoView, 0);
      });
    } else {
      store.dispatch(event.key, {});
      triggerOnActive();
      triggerScrollIntoView();
    }
  } else if (event.key === 'Escape') {
    // This prevents the default browser behavior on `input[type="search"]`
    // from removing the query right away because we first want to close the
    // panel.
    event.preventDefault();
    store.dispatch(event.key, null);

    // Hitting the `Escape` key signals the end of a user interaction with the
    // autocomplete. At this point, we should ignore any requests that are still
    // pending and could reopen the panel once they resolve, because that would
    // result in an unsolicited UI behavior.
    store.pendingRequests.cancelAll();
  } else if (event.key === 'Tab') {
    store.dispatch('blur', null);

    // Hitting the `Tab` key signals the end of a user interaction with the
    // autocomplete. At this point, we should ignore any requests that are still
    // pending and could reopen the panel once they resolve, because that would
    // result in an unsolicited UI behavior.
    store.pendingRequests.cancelAll();
  } else if (event.key === 'Enter') {
    // No active item, so we let the browser handle the native `onSubmit` form
    // event.
    if (store.getState().activeItemId === null || store.getState().collections.every(function (collection) {
      return collection.items.length === 0;
    })) {
      // If requests are still pending when the panel closes, they could reopen
      // the panel once they resolve.
      // We want to prevent any subsequent query from reopening the panel
      // because it would result in an unsolicited UI behavior.
      if (!props.debug) {
        store.pendingRequests.cancelAll();
      }
      return;
    }

    // This prevents the `onSubmit` event to be sent because an item is
    // highlighted.
    event.preventDefault();
    var _ref2 = getActiveItem(store.getState()),
      item = _ref2.item,
      itemInputValue = _ref2.itemInputValue,
      itemUrl = _ref2.itemUrl,
      source = _ref2.source;
    if (event.metaKey || event.ctrlKey) {
      if (itemUrl !== undefined) {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewTab({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.shiftKey) {
      if (itemUrl !== undefined) {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewWindow({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.altKey) {
      // Keep native browser behavior
    } else {
      if (itemUrl !== undefined) {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigate({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
        return;
      }
      onInput(onKeyDown_objectSpread({
        event: event,
        nextState: {
          isOpen: false
        },
        props: props,
        query: itemInputValue,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      });
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js
function isOrContainsNode(parent, child) {
  return parent === child || parent.contains(child);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js
var regex = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
function isSamsung(userAgent) {
  return Boolean(userAgent && userAgent.match(regex));
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/getNativeEvent.js
function getNativeEvent(event) {
  return event.nativeEvent || event;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js
function getPropGetters_typeof(obj) { "@babel/helpers - typeof"; return getPropGetters_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getPropGetters_typeof(obj); }
var getPropGetters_excluded = ["props", "refresh", "store"],
  getPropGetters_excluded2 = ["inputElement", "formElement", "panelElement"],
  _excluded3 = ["inputElement"],
  _excluded4 = ["inputElement", "maxLength"],
  _excluded5 = ["source"],
  _excluded6 = ["item", "source"];
function getPropGetters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getPropGetters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getPropGetters_ownKeys(Object(source), !0).forEach(function (key) { getPropGetters_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getPropGetters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getPropGetters_defineProperty(obj, key, value) { key = getPropGetters_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getPropGetters_toPropertyKey(arg) { var key = getPropGetters_toPrimitive(arg, "string"); return getPropGetters_typeof(key) === "symbol" ? key : String(key); }
function getPropGetters_toPrimitive(input, hint) { if (getPropGetters_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getPropGetters_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getPropGetters_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = getPropGetters_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function getPropGetters_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function getPropGetters(_ref) {
  var props = _ref.props,
    refresh = _ref.refresh,
    store = _ref.store,
    setters = getPropGetters_objectWithoutProperties(_ref, getPropGetters_excluded);
  var getEnvironmentProps = function getEnvironmentProps(providedProps) {
    var inputElement = providedProps.inputElement,
      formElement = providedProps.formElement,
      panelElement = providedProps.panelElement,
      rest = getPropGetters_objectWithoutProperties(providedProps, getPropGetters_excluded2);
    function onMouseDownOrTouchStart(event) {
      // The `onTouchStart`/`onMouseDown` events shouldn't trigger the `blur`
      // handler when it's not an interaction with Autocomplete.
      // We detect it with the following heuristics:
      // - the panel is closed AND there are no pending requests
      //   (no interaction with the autocomplete, no future state updates)
      // - OR the touched target is the input element (should open the panel)
      var isAutocompleteInteraction = store.getState().isOpen || !store.pendingRequests.isEmpty();
      if (!isAutocompleteInteraction || event.target === inputElement) {
        return;
      }

      // @TODO: support cases where there are multiple Autocomplete instances.
      // Right now, a second instance makes this computation return false.
      var isTargetWithinAutocomplete = [formElement, panelElement].some(function (contextNode) {
        return isOrContainsNode(contextNode, event.target);
      });
      if (isTargetWithinAutocomplete === false) {
        store.dispatch('blur', null);

        // If requests are still pending when the user closes the panel, they
        // could reopen the panel once they resolve.
        // We want to prevent any subsequent query from reopening the panel
        // because it would result in an unsolicited UI behavior.
        if (!props.debug) {
          store.pendingRequests.cancelAll();
        }
      }
    }
    return getPropGetters_objectSpread({
      // We do not rely on the native `blur` event of the input to close the
      // panel, but rather on a custom `touchstart`/`mousedown` event outside
      // of the autocomplete elements.
      // This ensures we don't mistakenly interpret interactions within the
      // autocomplete (but outside of the input) as a signal to close the panel.
      // For example, clicking reset button causes an input blur, but if
      // `openOnFocus=true`, it shouldn't close the panel.
      // On touch devices, scrolling results (`touchmove`) causes an input blur
      // but shouldn't close the panel.
      onTouchStart: onMouseDownOrTouchStart,
      onMouseDown: onMouseDownOrTouchStart,
      // When scrolling on touch devices (mobiles, tablets, etc.), we want to
      // mimic the native platform behavior where the input is blurred to
      // hide the virtual keyboard. This gives more vertical space to
      // discover all the suggestions showing up in the panel.
      onTouchMove: function onTouchMove(event) {
        if (store.getState().isOpen === false || inputElement !== props.environment.document.activeElement || event.target === inputElement) {
          return;
        }
        inputElement.blur();
      }
    }, rest);
  };
  var getRootProps = function getRootProps(rest) {
    return getPropGetters_objectSpread({
      role: 'combobox',
      'aria-expanded': store.getState().isOpen,
      'aria-haspopup': 'listbox',
      'aria-owns': store.getState().isOpen ? store.getState().collections.map(function (_ref2) {
        var source = _ref2.source;
        return getAutocompleteElementId(props.id, 'list', source);
      }).join(' ') : undefined,
      'aria-labelledby': getAutocompleteElementId(props.id, 'label')
    }, rest);
  };
  var getFormProps = function getFormProps(providedProps) {
    var inputElement = providedProps.inputElement,
      rest = getPropGetters_objectWithoutProperties(providedProps, _excluded3);
    return getPropGetters_objectSpread({
      action: '',
      noValidate: true,
      role: 'search',
      onSubmit: function onSubmit(event) {
        var _providedProps$inputE;
        event.preventDefault();
        props.onSubmit(getPropGetters_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('submit', null);
        (_providedProps$inputE = providedProps.inputElement) === null || _providedProps$inputE === void 0 ? void 0 : _providedProps$inputE.blur();
      },
      onReset: function onReset(event) {
        var _providedProps$inputE2;
        event.preventDefault();
        props.onReset(getPropGetters_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('reset', null);
        (_providedProps$inputE2 = providedProps.inputElement) === null || _providedProps$inputE2 === void 0 ? void 0 : _providedProps$inputE2.focus();
      }
    }, rest);
  };
  var getInputProps = function getInputProps(providedProps) {
    var _props$environment$na;
    function onFocus(event) {
      // We want to trigger a query when `openOnFocus` is true
      // because the panel should open with the current query.
      if (props.openOnFocus || Boolean(store.getState().query)) {
        onInput(getPropGetters_objectSpread({
          event: event,
          props: props,
          query: store.getState().completion || store.getState().query,
          refresh: refresh,
          store: store
        }, setters));
      }
      store.dispatch('focus', null);
    }
    var _ref3 = providedProps || {},
      inputElement = _ref3.inputElement,
      _ref3$maxLength = _ref3.maxLength,
      maxLength = _ref3$maxLength === void 0 ? 512 : _ref3$maxLength,
      rest = getPropGetters_objectWithoutProperties(_ref3, _excluded4);
    var activeItem = getActiveItem(store.getState());
    var userAgent = ((_props$environment$na = props.environment.navigator) === null || _props$environment$na === void 0 ? void 0 : _props$environment$na.userAgent) || '';
    var shouldFallbackKeyHint = isSamsung(userAgent);
    var enterKeyHint = props.enterKeyHint || (activeItem !== null && activeItem !== void 0 && activeItem.itemUrl && !shouldFallbackKeyHint ? 'go' : 'search');
    return getPropGetters_objectSpread({
      'aria-autocomplete': 'both',
      'aria-activedescendant': store.getState().isOpen && store.getState().activeItemId !== null ? getAutocompleteElementId(props.id, "item-".concat(store.getState().activeItemId), activeItem === null || activeItem === void 0 ? void 0 : activeItem.source) : undefined,
      'aria-controls': store.getState().isOpen ? store.getState().collections.map(function (_ref4) {
        var source = _ref4.source;
        return getAutocompleteElementId(props.id, 'list', source);
      }).join(' ') : undefined,
      'aria-labelledby': getAutocompleteElementId(props.id, 'label'),
      value: store.getState().completion || store.getState().query,
      id: getAutocompleteElementId(props.id, 'input'),
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      enterKeyHint: enterKeyHint,
      spellCheck: 'false',
      autoFocus: props.autoFocus,
      placeholder: props.placeholder,
      maxLength: maxLength,
      type: 'search',
      onChange: function onChange(event) {
        var value = event.currentTarget.value;
        if (props.ignoreCompositionEvents && getNativeEvent(event).isComposing) {
          setters.setQuery(value);
          return;
        }
        onInput(getPropGetters_objectSpread({
          event: event,
          props: props,
          query: value.slice(0, maxLength),
          refresh: refresh,
          store: store
        }, setters));
      },
      onCompositionEnd: function onCompositionEnd(event) {
        onInput(getPropGetters_objectSpread({
          event: event,
          props: props,
          query: event.currentTarget.value.slice(0, maxLength),
          refresh: refresh,
          store: store
        }, setters));
      },
      onKeyDown: function onKeyDown(event) {
        if (getNativeEvent(event).isComposing) {
          return;
        }
        onKeyDown_onKeyDown(getPropGetters_objectSpread({
          event: event,
          props: props,
          refresh: refresh,
          store: store
        }, setters));
      },
      onFocus: onFocus,
      // We don't rely on the `blur` event.
      // See explanation in `onTouchStart`/`onMouseDown`.
      // @MAJOR See if we need to keep this handler.
      onBlur: noop,
      onClick: function onClick(event) {
        // When the panel is closed and you click on the input while
        // the input is focused, the `onFocus` event is not triggered
        // (default browser behavior).
        // In an autocomplete context, it makes sense to open the panel in this
        // case.
        // We mimic this event by catching the `onClick` event which
        // triggers the `onFocus` for the panel to open.
        if (providedProps.inputElement === props.environment.document.activeElement && !store.getState().isOpen) {
          onFocus(event);
        }
      }
    }, rest);
  };
  var getLabelProps = function getLabelProps(rest) {
    return getPropGetters_objectSpread({
      htmlFor: getAutocompleteElementId(props.id, 'input'),
      id: getAutocompleteElementId(props.id, 'label')
    }, rest);
  };
  var getListProps = function getListProps(providedProps) {
    var _ref5 = providedProps || {},
      source = _ref5.source,
      rest = getPropGetters_objectWithoutProperties(_ref5, _excluded5);
    return getPropGetters_objectSpread({
      role: 'listbox',
      'aria-labelledby': getAutocompleteElementId(props.id, 'label'),
      id: getAutocompleteElementId(props.id, 'list', source)
    }, rest);
  };
  var getPanelProps = function getPanelProps(rest) {
    return getPropGetters_objectSpread({
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the panel so
        // that the blur event is not triggered, otherwise it closes the
        // panel.
        event.preventDefault();
      },
      onMouseLeave: function onMouseLeave() {
        store.dispatch('mouseleave', null);
      }
    }, rest);
  };
  var getItemProps = function getItemProps(providedProps) {
    var item = providedProps.item,
      source = providedProps.source,
      rest = getPropGetters_objectWithoutProperties(providedProps, _excluded6);
    return getPropGetters_objectSpread({
      id: getAutocompleteElementId(props.id, "item-".concat(item.__autocomplete_id), source),
      role: 'option',
      'aria-selected': store.getState().activeItemId === item.__autocomplete_id,
      onMouseMove: function onMouseMove(event) {
        if (item.__autocomplete_id === store.getState().activeItemId) {
          return;
        }
        store.dispatch('mousemove', item.__autocomplete_id);
        var activeItem = getActiveItem(store.getState());
        if (store.getState().activeItemId !== null && activeItem) {
          var _item = activeItem.item,
            itemInputValue = activeItem.itemInputValue,
            itemUrl = activeItem.itemUrl,
            _source = activeItem.source;
          _source.onActive(getPropGetters_objectSpread({
            event: event,
            item: _item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: _source,
            state: store.getState()
          }, setters));
        }
      },
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the item so it
        // can remain with the current `activeElement`.
        event.preventDefault();
      },
      onClick: function onClick(event) {
        var itemInputValue = source.getItemInputValue({
          item: item,
          state: store.getState()
        });
        var itemUrl = source.getItemUrl({
          item: item,
          state: store.getState()
        });

        // If `getItemUrl` is provided, it means that the suggestion
        // is a link, not plain text that aims at updating the query.
        // We can therefore skip the state change because it will update
        // the `activeItemId`, resulting in a UI flash, especially
        // noticeable on mobile.
        var runPreCommand = itemUrl ? Promise.resolve() : onInput(getPropGetters_objectSpread({
          event: event,
          nextState: {
            isOpen: false
          },
          props: props,
          query: itemInputValue,
          refresh: refresh,
          store: store
        }, setters));
        runPreCommand.then(function () {
          source.onSelect(getPropGetters_objectSpread({
            event: event,
            item: item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: source,
            state: store.getState()
          }, setters));
        });
      }
    }, rest);
  };
  return {
    getEnvironmentProps: getEnvironmentProps,
    getRootProps: getRootProps,
    getFormProps: getFormProps,
    getLabelProps: getLabelProps,
    getInputProps: getInputProps,
    getPanelProps: getPanelProps,
    getListProps: getListProps,
    getItemProps: getItemProps
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/version.js
var version = '1.17.4';
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js

var userAgents = [{
  segment: 'autocomplete-core',
  version: version
}];
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/metadata.js
function metadata_typeof(obj) { "@babel/helpers - typeof"; return metadata_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, metadata_typeof(obj); }
function metadata_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function metadata_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? metadata_ownKeys(Object(source), !0).forEach(function (key) { metadata_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : metadata_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function metadata_defineProperty(obj, key, value) { key = metadata_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function metadata_toPropertyKey(arg) { var key = metadata_toPrimitive(arg, "string"); return metadata_typeof(key) === "symbol" ? key : String(key); }
function metadata_toPrimitive(input, hint) { if (metadata_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (metadata_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function getMetadata(_ref) {
  var _, _options$__autocomple, _options$__autocomple2, _options$__autocomple3;
  var plugins = _ref.plugins,
    options = _ref.options;
  var optionsKey = (_ = (((_options$__autocomple = options.__autocomplete_metadata) === null || _options$__autocomple === void 0 ? void 0 : _options$__autocomple.userAgents) || [])[0]) === null || _ === void 0 ? void 0 : _.segment;
  var extraOptions = optionsKey ? metadata_defineProperty({}, optionsKey, Object.keys(((_options$__autocomple2 = options.__autocomplete_metadata) === null || _options$__autocomple2 === void 0 ? void 0 : _options$__autocomple2.options) || {})) : {};
  return {
    plugins: plugins.map(function (plugin) {
      return {
        name: plugin.name,
        options: Object.keys(plugin.__autocomplete_pluginOptions || [])
      };
    }),
    options: metadata_objectSpread({
      'autocomplete-core': Object.keys(options)
    }, extraOptions),
    ua: userAgents.concat(((_options$__autocomple3 = options.__autocomplete_metadata) === null || _options$__autocomple3 === void 0 ? void 0 : _options$__autocomple3.userAgents) || [])
  };
}
function injectMetadata(_ref3) {
  var _environment$navigato, _environment$navigato2;
  var metadata = _ref3.metadata,
    environment = _ref3.environment;
  var isMetadataEnabled = (_environment$navigato = environment.navigator) === null || _environment$navigato === void 0 ? void 0 : (_environment$navigato2 = _environment$navigato.userAgent) === null || _environment$navigato2 === void 0 ? void 0 : _environment$navigato2.includes('Algolia Crawler');
  if (isMetadataEnabled) {
    var metadataContainer = environment.document.createElement('meta');
    var headRef = environment.document.querySelector('head');
    metadataContainer.name = 'algolia:metadata';
    setTimeout(function () {
      metadataContainer.content = JSON.stringify(metadata);
      headRef.appendChild(metadataContainer);
    }, 0);
  }
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js

function getCompletion(_ref) {
  var _getActiveItem;
  var state = _ref.state;
  if (state.isOpen === false || state.activeItemId === null) {
    return null;
  }
  return ((_getActiveItem = getActiveItem(state)) === null || _getActiveItem === void 0 ? void 0 : _getActiveItem.itemInputValue) || null;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js
/**
 * Returns the next active item ID from the current state.
 *
 * We allow circular keyboard navigation from the base index.
 * The base index can either be `null` (nothing is highlighted) or `0`
 * (the first item is highlighted).
 * The base index is allowed to get assigned `null` only if
 * `props.defaultActiveItemId` is `null`. This pattern allows to "stop"
 * by the actual query before navigating to other suggestions as seen on
 * Google or Amazon.
 *
 * @param moveAmount The offset to increment (or decrement) the last index
 * @param baseIndex The current index to compute the next index from
 * @param itemCount The number of items
 * @param defaultActiveItemId The default active index to fallback to
 */
function getNextActiveItemId(moveAmount, baseIndex, itemCount, defaultActiveItemId) {
  if (!itemCount) {
    return null;
  }
  if (moveAmount < 0 && (baseIndex === null || defaultActiveItemId !== null && baseIndex === 0)) {
    return itemCount + moveAmount;
  }
  var numericIndex = (baseIndex === null ? -1 : baseIndex) + moveAmount;
  if (numericIndex <= -1 || numericIndex >= itemCount) {
    return defaultActiveItemId === null ? null : 0;
  }
  return numericIndex;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js
function stateReducer_typeof(obj) { "@babel/helpers - typeof"; return stateReducer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, stateReducer_typeof(obj); }
function stateReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function stateReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? stateReducer_ownKeys(Object(source), !0).forEach(function (key) { stateReducer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : stateReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function stateReducer_defineProperty(obj, key, value) { key = stateReducer_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function stateReducer_toPropertyKey(arg) { var key = stateReducer_toPrimitive(arg, "string"); return stateReducer_typeof(key) === "symbol" ? key : String(key); }
function stateReducer_toPrimitive(input, hint) { if (stateReducer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (stateReducer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var stateReducer = function stateReducer(state, action) {
  switch (action.type) {
    case 'setActiveItemId':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }
    case 'setQuery':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          query: action.payload,
          completion: null
        });
      }
    case 'setCollections':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          collections: action.payload
        });
      }
    case 'setIsOpen':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          isOpen: action.payload
        });
      }
    case 'setStatus':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          status: action.payload
        });
      }
    case 'setContext':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          context: stateReducer_objectSpread(stateReducer_objectSpread({}, state.context), action.payload)
        });
      }
    case 'ArrowDown':
      {
        var nextState = stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.payload.hasOwnProperty('nextActiveItemId') ? action.payload.nextActiveItemId : getNextActiveItemId(1, state.activeItemId, getItemsCount(state), action.props.defaultActiveItemId)
        });
        return stateReducer_objectSpread(stateReducer_objectSpread({}, nextState), {}, {
          completion: getCompletion({
            state: nextState
          })
        });
      }
    case 'ArrowUp':
      {
        var _nextState = stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: getNextActiveItemId(-1, state.activeItemId, getItemsCount(state), action.props.defaultActiveItemId)
        });
        return stateReducer_objectSpread(stateReducer_objectSpread({}, _nextState), {}, {
          completion: getCompletion({
            state: _nextState
          })
        });
      }
    case 'Escape':
      {
        if (state.isOpen) {
          return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
            activeItemId: null,
            isOpen: false,
            completion: null
          });
        }
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: null,
          query: '',
          status: 'idle',
          collections: []
        });
      }
    case 'submit':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: null,
          isOpen: false,
          status: 'idle'
        });
      }
    case 'reset':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId:
          // Since we open the panel on reset when openOnFocus=true
          // we need to restore the highlighted index to the defaultActiveItemId. (DocSearch use-case)

          // Since we close the panel when openOnFocus=false
          // we lose track of the highlighted index. (Query-suggestions use-case)
          action.props.openOnFocus === true ? action.props.defaultActiveItemId : null,
          status: 'idle',
          completion: null,
          query: ''
        });
      }
    case 'focus':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId,
          isOpen: (action.props.openOnFocus || Boolean(state.query)) && action.props.shouldPanelOpen({
            state: state
          })
        });
      }
    case 'blur':
      {
        if (action.props.debug) {
          return state;
        }
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          isOpen: false,
          activeItemId: null
        });
      }
    case 'mousemove':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }
    case 'mouseleave':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId
        });
      }
    default:
      invariant(false, "The reducer action ".concat(JSON.stringify(action.type), " is not supported."));
      return state;
  }
};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js
function createAutocomplete_typeof(obj) { "@babel/helpers - typeof"; return createAutocomplete_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createAutocomplete_typeof(obj); }
function createAutocomplete_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createAutocomplete_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createAutocomplete_ownKeys(Object(source), !0).forEach(function (key) { createAutocomplete_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createAutocomplete_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createAutocomplete_defineProperty(obj, key, value) { key = createAutocomplete_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createAutocomplete_toPropertyKey(arg) { var key = createAutocomplete_toPrimitive(arg, "string"); return createAutocomplete_typeof(key) === "symbol" ? key : String(key); }
function createAutocomplete_toPrimitive(input, hint) { if (createAutocomplete_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createAutocomplete_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









function createAutocomplete(options) {
  checkOptions(options);
  var subscribers = [];
  var props = getDefaultProps(options, subscribers);
  var store = createStore(stateReducer, props, onStoreStateChange);
  var setters = getAutocompleteSetters({
    store: store
  });
  var propGetters = getPropGetters(createAutocomplete_objectSpread({
    props: props,
    refresh: refresh,
    store: store,
    navigator: props.navigator
  }, setters));
  function onStoreStateChange(_ref) {
    var _state$context, _state$context$algoli;
    var prevState = _ref.prevState,
      state = _ref.state;
    props.onStateChange(createAutocomplete_objectSpread({
      prevState: prevState,
      state: state,
      refresh: refresh,
      navigator: props.navigator
    }, setters));
    if (!isAlgoliaInsightsPluginEnabled() && (_state$context = state.context) !== null && _state$context !== void 0 && (_state$context$algoli = _state$context.algoliaInsightsPlugin) !== null && _state$context$algoli !== void 0 && _state$context$algoli.__automaticInsights && props.insights !== false) {
      var plugin = createAlgoliaInsightsPlugin({
        __autocomplete_clickAnalytics: false
      });
      props.plugins.push(plugin);
      subscribePlugins([plugin]);
    }
  }
  function refresh() {
    return onInput(createAutocomplete_objectSpread({
      event: new Event('input'),
      nextState: {
        isOpen: store.getState().isOpen
      },
      props: props,
      navigator: props.navigator,
      query: store.getState().query,
      refresh: refresh,
      store: store
    }, setters));
  }
  function subscribePlugins(plugins) {
    plugins.forEach(function (plugin) {
      var _plugin$subscribe;
      return (_plugin$subscribe = plugin.subscribe) === null || _plugin$subscribe === void 0 ? void 0 : _plugin$subscribe.call(plugin, createAutocomplete_objectSpread(createAutocomplete_objectSpread({}, setters), {}, {
        navigator: props.navigator,
        refresh: refresh,
        onSelect: function onSelect(fn) {
          subscribers.push({
            onSelect: fn
          });
        },
        onActive: function onActive(fn) {
          subscribers.push({
            onActive: fn
          });
        },
        onResolve: function onResolve(fn) {
          subscribers.push({
            onResolve: fn
          });
        }
      }));
    });
  }
  function isAlgoliaInsightsPluginEnabled() {
    return props.plugins.some(function (plugin) {
      return plugin.name === 'aa.algoliaInsightsPlugin';
    });
  }
  if (props.insights && !isAlgoliaInsightsPluginEnabled()) {
    var insightsParams = typeof props.insights === 'boolean' ? {} : props.insights;
    props.plugins.push(createAlgoliaInsightsPlugin(insightsParams));
  }
  subscribePlugins(props.plugins);
  injectMetadata({
    metadata: getMetadata({
      plugins: props.plugins,
      options: options
    }),
    environment: props.environment
  });
  return createAutocomplete_objectSpread(createAutocomplete_objectSpread({
    refresh: refresh,
    navigator: props.navigator
  }, propGetters), setters);
}
;// CONCATENATED MODULE: ./node_modules/htm/dist/htm.module.js
var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a)}return e},t=new Map;/* harmony default export */ function htm_module(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e=""},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0])}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/elements/SearchIcon.js
var SearchIcon = function SearchIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-SubmitIcon');
  element.setAttribute('viewBox', '0 0 24 24');
  element.setAttribute('width', '20');
  element.setAttribute('height', '20');
  element.setAttribute('fill', 'currentColor');
  var path = environment.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z');
  element.appendChild(path);
  return element;
};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/elements/ClearIcon.js
var ClearIcon = function ClearIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-ClearIcon');
  element.setAttribute('viewBox', '0 0 24 24');
  element.setAttribute('width', '18');
  element.setAttribute('height', '18');
  element.setAttribute('fill', 'currentColor');
  var path = environment.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z');
  element.appendChild(path);
  return element;
};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/elements/LoadingIcon.js
var LoadingIcon = function LoadingIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-LoadingIcon');
  element.setAttribute('viewBox', '0 0 100 100');
  element.setAttribute('width', '20');
  element.setAttribute('height', '20');
  element.innerHTML = "<circle\n  cx=\"50\"\n  cy=\"50\"\n  fill=\"none\"\n  r=\"35\"\n  stroke=\"currentColor\"\n  stroke-dasharray=\"164.93361431346415 56.97787143782138\"\n  stroke-width=\"6\"\n>\n  <animateTransform\n    attributeName=\"transform\"\n    type=\"rotate\"\n    repeatCount=\"indefinite\"\n    dur=\"1s\"\n    values=\"0 50 50;90 50 50;180 50 50;360 50 50\"\n    keyTimes=\"0;0.40;0.65;1\"\n  />\n</circle>";
  return element;
};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js
/* eslint-disable */

/**
 * Touch-specific event aliases
 *
 * See https://w3c.github.io/touch-events/#extensions-to-the-globaleventhandlers-mixin
 */
var TOUCH_EVENTS_ALIASES = ['ontouchstart', 'ontouchend', 'ontouchmove', 'ontouchcancel'];

/*
 * Taken from Preact
 *
 * See https://github.com/preactjs/preact/blob/6ab49d9020740127577bf4af66bf63f4af7f9fee/src/diff/props.js#L58-L151
 */

function setStyle(style, key, value) {
  if (value === null) {
    style[key] = '';
  } else if (typeof value !== 'number') {
    style[key] = value;
  } else {
    style[key] = value + 'px';
  }
}

/**
 * Proxy an event to hooked event handlers
 */
function eventProxy(event) {
  this._listeners[event.type](event);
}

/**
 * Set a property value on a DOM node
 */
function setProperty(dom, name, value) {
  var useCapture;
  var nameLower;
  var oldValue = dom[name];
  if (name === 'style') {
    if (typeof value == 'string') {
      dom.style = value;
    } else {
      if (value === null) {
        dom.style = '';
      } else {
        for (name in value) {
          if (!oldValue || value[name] !== oldValue[name]) {
            setStyle(dom.style, name, value[name]);
          }
        }
      }
    }
  }
  // Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
  else if (name[0] === 'o' && name[1] === 'n') {
    useCapture = name !== (name = name.replace(/Capture$/, ''));
    nameLower = name.toLowerCase();
    if (nameLower in dom || TOUCH_EVENTS_ALIASES.includes(nameLower)) name = nameLower;
    name = name.slice(2);
    if (!dom._listeners) dom._listeners = {};
    dom._listeners[name] = value;
    if (value) {
      if (!oldValue) dom.addEventListener(name, eventProxy, useCapture);
    } else {
      dom.removeEventListener(name, eventProxy, useCapture);
    }
  } else if (name !== 'list' && name !== 'tagName' &&
  // HTMLButtonElement.form and HTMLInputElement.form are read-only but can be set using
  // setAttribute
  name !== 'form' && name !== 'type' && name !== 'size' && name !== 'download' && name !== 'href' && name in dom) {
    dom[name] = value == null ? '' : value;
  } else if (typeof value != 'function' && name !== 'dangerouslySetInnerHTML') {
    if (value == null || value === false &&
    // ARIA-attributes have a different notion of boolean values.
    // The value `false` is different from the attribute not
    // existing on the DOM, so we can't remove it. For non-boolean
    // ARIA-attributes we could treat false as a removal, but the
    // amount of exceptions would cost us too many bytes. On top of
    // that other VDOM frameworks also always stringify `false`.
    !/^ar/.test(name)) {
      dom.removeAttribute(name);
    } else {
      dom.setAttribute(name, value);
    }
  }
}
function getNormalizedName(name) {
  switch (name) {
    case 'onChange':
      return 'onInput';
    // see: https://github.com/preactjs/preact/issues/1978
    case 'onCompositionEnd':
      return 'oncompositionend';
    default:
      return name;
  }
}
function setProperties(dom, props) {
  for (var name in props) {
    setProperty(dom, getNormalizedName(name), props[name]);
  }
}
function setPropertiesWithoutEvents(dom, props) {
  for (var name in props) {
    if (!(name[0] === 'o' && name[1] === 'n')) {
      setProperty(dom, getNormalizedName(name), props[name]);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js
var getCreateDomElement_excluded = ["children"];
function getCreateDomElement_toConsumableArray(arr) { return getCreateDomElement_arrayWithoutHoles(arr) || getCreateDomElement_iterableToArray(arr) || getCreateDomElement_unsupportedIterableToArray(arr) || getCreateDomElement_nonIterableSpread(); }
function getCreateDomElement_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function getCreateDomElement_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getCreateDomElement_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getCreateDomElement_arrayLikeToArray(o, minLen); }
function getCreateDomElement_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function getCreateDomElement_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return getCreateDomElement_arrayLikeToArray(arr); }
function getCreateDomElement_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function getCreateDomElement_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = getCreateDomElement_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function getCreateDomElement_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function getCreateDomElement(environment) {
  return function createDomElement(tagName, _ref) {
    var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      props = getCreateDomElement_objectWithoutProperties(_ref, getCreateDomElement_excluded);
    var element = environment.document.createElement(tagName);
    setProperties(element, props);
    element.append.apply(element, getCreateDomElement_toConsumableArray(children));
    return element;
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/elements/Input.js
function Input_typeof(obj) { "@babel/helpers - typeof"; return Input_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Input_typeof(obj); }
var Input_excluded = ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "isDetached", "state"];
function Input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Input_ownKeys(Object(source), !0).forEach(function (key) { Input_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Input_defineProperty(obj, key, value) { key = Input_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Input_toPropertyKey(arg) { var key = Input_toPrimitive(arg, "string"); return Input_typeof(key) === "symbol" ? key : String(key); }
function Input_toPrimitive(input, hint) { if (Input_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Input_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var Input = function Input(_ref) {
  var autocompleteScopeApi = _ref.autocompleteScopeApi,
    environment = _ref.environment,
    classNames = _ref.classNames,
    getInputProps = _ref.getInputProps,
    getInputPropsCore = _ref.getInputPropsCore,
    isDetached = _ref.isDetached,
    state = _ref.state,
    props = Input_objectWithoutProperties(_ref, Input_excluded);
  var createDomElement = getCreateDomElement(environment);
  var element = createDomElement('input', props);
  var inputProps = getInputProps(Input_objectSpread({
    state: state,
    props: getInputPropsCore({
      inputElement: element
    }),
    inputElement: element
  }, autocompleteScopeApi));
  setProperties(element, Input_objectSpread(Input_objectSpread({}, inputProps), {}, {
    onKeyDown: function onKeyDown(event) {
      // In detached mode we don't want to close the panel when hitting `Tab`.
      if (isDetached && event.key === 'Tab') {
        return;
      }
      inputProps.onKeyDown(event);
    }
  }));
  return element;
};
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/createAutocompleteDom.js
function createAutocompleteDom_typeof(obj) { "@babel/helpers - typeof"; return createAutocompleteDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createAutocompleteDom_typeof(obj); }
function createAutocompleteDom_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createAutocompleteDom_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createAutocompleteDom_ownKeys(Object(source), !0).forEach(function (key) { createAutocompleteDom_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createAutocompleteDom_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createAutocompleteDom_defineProperty(obj, key, value) { key = createAutocompleteDom_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createAutocompleteDom_toPropertyKey(arg) { var key = createAutocompleteDom_toPrimitive(arg, "string"); return createAutocompleteDom_typeof(key) === "symbol" ? key : String(key); }
function createAutocompleteDom_toPrimitive(input, hint) { if (createAutocompleteDom_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createAutocompleteDom_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function createAutocompleteDom(_ref) {
  var autocomplete = _ref.autocomplete,
    autocompleteScopeApi = _ref.autocompleteScopeApi,
    classNames = _ref.classNames,
    environment = _ref.environment,
    isDetached = _ref.isDetached,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Search' : _ref$placeholder,
    propGetters = _ref.propGetters,
    setIsModalOpen = _ref.setIsModalOpen,
    state = _ref.state,
    translations = _ref.translations;
  var createDomElement = getCreateDomElement(environment);
  var rootProps = propGetters.getRootProps(createAutocompleteDom_objectSpread({
    state: state,
    props: autocomplete.getRootProps({})
  }, autocompleteScopeApi));
  var root = createDomElement('div', createAutocompleteDom_objectSpread({
    class: classNames.root
  }, rootProps));
  var detachedContainer = createDomElement('div', {
    class: classNames.detachedContainer,
    onMouseDown: function onMouseDown(event) {
      event.stopPropagation();
    }
  });
  var detachedOverlay = createDomElement('div', {
    class: classNames.detachedOverlay,
    children: [detachedContainer],
    onMouseDown: function onMouseDown() {
      setIsModalOpen(false);
      autocomplete.setIsOpen(false);
    }
  });
  var labelProps = propGetters.getLabelProps(createAutocompleteDom_objectSpread({
    state: state,
    props: autocomplete.getLabelProps({})
  }, autocompleteScopeApi));
  var submitButton = createDomElement('button', {
    class: classNames.submitButton,
    type: 'submit',
    title: translations.submitButtonTitle,
    children: [SearchIcon({
      environment: environment
    })]
  });
  // @MAJOR Remove the label wrapper for the submit button.
  // The submit button is sufficient for accessibility purposes, and
  // wrapping it with the label actually makes it less accessible (see CR-6077).
  var label = createDomElement('label', createAutocompleteDom_objectSpread({
    class: classNames.label,
    children: [submitButton],
    ariaLabel: translations.submitButtonTitle
  }, labelProps));
  var clearButton = createDomElement('button', {
    class: classNames.clearButton,
    type: 'reset',
    title: translations.clearButtonTitle,
    children: [ClearIcon({
      environment: environment
    })]
  });
  var loadingIndicator = createDomElement('div', {
    class: classNames.loadingIndicator,
    children: [LoadingIcon({
      environment: environment
    })]
  });
  var input = Input({
    class: classNames.input,
    environment: environment,
    state: state,
    getInputProps: propGetters.getInputProps,
    getInputPropsCore: autocomplete.getInputProps,
    autocompleteScopeApi: autocompleteScopeApi,
    isDetached: isDetached
  });
  var inputWrapperPrefix = createDomElement('div', {
    class: classNames.inputWrapperPrefix,
    children: [label, loadingIndicator]
  });
  var inputWrapperSuffix = createDomElement('div', {
    class: classNames.inputWrapperSuffix,
    children: [clearButton]
  });
  var inputWrapper = createDomElement('div', {
    class: classNames.inputWrapper,
    children: [input]
  });
  var formProps = propGetters.getFormProps(createAutocompleteDom_objectSpread({
    state: state,
    props: autocomplete.getFormProps({
      inputElement: input
    })
  }, autocompleteScopeApi));
  var form = createDomElement('form', createAutocompleteDom_objectSpread({
    class: classNames.form,
    children: [inputWrapperPrefix, inputWrapper, inputWrapperSuffix]
  }, formProps));
  var panelProps = propGetters.getPanelProps(createAutocompleteDom_objectSpread({
    state: state,
    props: autocomplete.getPanelProps({})
  }, autocompleteScopeApi));
  var panel = createDomElement('div', createAutocompleteDom_objectSpread({
    class: classNames.panel
  }, panelProps));
  var detachedSearchButtonQuery = createDomElement('div', {
    class: classNames.detachedSearchButtonQuery,
    textContent: state.query
  });
  var detachedSearchButtonPlaceholder = createDomElement('div', {
    class: classNames.detachedSearchButtonPlaceholder,
    hidden: Boolean(state.query),
    textContent: placeholder
  });
  if (false) {}
  if (isDetached) {
    var detachedSearchButtonIcon = createDomElement('div', {
      class: classNames.detachedSearchButtonIcon,
      children: [SearchIcon({
        environment: environment
      })]
    });
    var detachedSearchButton = createDomElement('button', {
      type: 'button',
      class: classNames.detachedSearchButton,
      title: translations.detachedSearchButtonTitle,
      id: labelProps.id,
      onClick: function onClick() {
        setIsModalOpen(true);
      },
      children: [detachedSearchButtonIcon, detachedSearchButtonPlaceholder, detachedSearchButtonQuery]
    });
    var detachedCancelButton = createDomElement('button', {
      type: 'button',
      class: classNames.detachedCancelButton,
      textContent: translations.detachedCancelButtonText,
      // Prevent `onTouchStart` from closing the panel
      // since it should be initiated by `onClick` only
      onTouchStart: function onTouchStart(event) {
        event.stopPropagation();
      },
      onClick: function onClick() {
        autocomplete.setIsOpen(false);
        setIsModalOpen(false);
      }
    });
    var detachedFormContainer = createDomElement('div', {
      class: classNames.detachedFormContainer,
      children: [form, detachedCancelButton]
    });
    detachedContainer.appendChild(detachedFormContainer);
    root.appendChild(detachedSearchButton);
  } else {
    root.appendChild(form);
  }
  return {
    detachedContainer: detachedContainer,
    detachedOverlay: detachedOverlay,
    detachedSearchButtonQuery: detachedSearchButtonQuery,
    detachedSearchButtonPlaceholder: detachedSearchButtonPlaceholder,
    inputWrapper: inputWrapper,
    input: input,
    root: root,
    form: form,
    label: label,
    submitButton: submitButton,
    clearButton: clearButton,
    loadingIndicator: loadingIndicator,
    panel: panel
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/createEffectWrapper.js
function createEffectWrapper() {
  var effects = [];
  var cleanups = [];
  function runEffect(fn) {
    effects.push(fn);
    var effectCleanup = fn();
    cleanups.push(effectCleanup);
  }
  return {
    runEffect: runEffect,
    cleanupEffects: function cleanupEffects() {
      var currentCleanups = cleanups;
      cleanups = [];
      currentCleanups.forEach(function (cleanup) {
        cleanup();
      });
    },
    runEffects: function runEffects() {
      var currentEffects = effects;
      effects = [];
      currentEffects.forEach(function (effect) {
        runEffect(effect);
      });
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/createReactiveWrapper.js
function createReactiveWrapper() {
  var reactives = [];
  return {
    reactive: function reactive(value) {
      var current = value();
      var reactive = {
        _fn: value,
        _ref: {
          current: current
        },
        get value() {
          return this._ref.current;
        },
        set value(value) {
          this._ref.current = value;
        }
      };
      reactives.push(reactive);
      return reactive;
    },
    runReactives: function runReactives() {
      reactives.forEach(function (value) {
        value._ref.current = value._fn();
      });
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/preact/dist/preact.module.js
var preact_module_n,l,u,preact_module_t,i,o,r,f,e,c,s,a,h={},p=[],v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function w(n){var l=n.parentNode;l&&l.removeChild(n)}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?preact_module_n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u:r,__i:-1,__u:0};return null==r&&null!=l.vnode&&l.vnode(f),f}function m(){return{current:null}}function k(n){return n.children}function b(n,l){this.props=n,this.context=l}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?x(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!P.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(P)}function P(){var n,u,t,o,r,e,c,s;for(i.sort(f);n=i.shift();)n.__d&&(u=i.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d({},r)).__v=r.__v+1,l.vnode&&l.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j(c,o,s),o.__e!=e&&C(o)),i.length>u&&i.sort(f));P.__r=0}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h:_[y.__i]||h,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?(e&&"string"==typeof y.type&&!n.contains(e)&&(e=x(v)),e=I(y,e,n)):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y(i)?g(k,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a=f-r:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&a++,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o))}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(y(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++}}return-1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v.test(l)?u:u+"px"}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e,n.addEventListener(l,o?s:c,o)):n.removeEventListener(l,o?s:c,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e++;else if(u.t<t.u)return;return t(l.event?l.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b(m,M),h.constructor=T,h.render=q),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u)}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_)})}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y(L=null!=a&&a.type===k&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null)}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l.__e(n,u,t)}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z(t.__e,u,t,i,o,r,f,c,s);(a=l.diffed)&&a(u)}function j(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function z(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1}if(null===b)m===k||e&&l.data===k||(l.data=k);else{if(r=r&&preact_module_n.call(l.childNodes),m=t.props||h,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A(l,s,null,d,o)}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A(l,s,g,m[s],o))}return l}function N(n,u,t){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,t)}}function V(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function q(n,l,u){return this.constructor(n,u)}function B(u,t,i){var o,r,f,e;l.__&&l.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(k,null,[u]),r||h,h,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?preact_module_n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j(f,u,e)}function D(n,l){B(n,l,D)}function E(l,u,t){var i,o,r,f,e=d({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?preact_module_n.call(arguments,2):t),g(l.type,e,i||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,M(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}preact_module_n=p.slice,l={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},u=0,preact_module_t=function(n){return null!=n&&null==n.constructor},b.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this))},b.prototype.render=k,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e=0,c=F(!1),s=F(!0),a=0;
//# sourceMappingURL=preact.module.js.map

;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js
function getAttributeValueByPath(record, path) {
  return path.reduce(function (current, key) {
    return current && current[key];
  }, record);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js
var HIGHLIGHT_PRE_TAG = '__aa-highlight__';
var HIGHLIGHT_POST_TAG = '__/aa-highlight__';
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js

/**
 * Creates a data structure that allows to concatenate similar highlighting
 * parts in a single value.
 */
function createAttributeSet() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = initialValue;
  return {
    get: function get() {
      return value;
    },
    add: function add(part) {
      var lastPart = value[value.length - 1];
      if ((lastPart === null || lastPart === void 0 ? void 0 : lastPart.isHighlighted) === part.isHighlighted) {
        value[value.length - 1] = {
          value: lastPart.value + part.value,
          isHighlighted: lastPart.isHighlighted
        };
      } else {
        value.push(part);
      }
    }
  };
}
function parseAttribute(_ref) {
  var highlightedValue = _ref.highlightedValue;
  var preTagParts = highlightedValue.split(HIGHLIGHT_PRE_TAG);
  var firstValue = preTagParts.shift();
  var parts = createAttributeSet(firstValue ? [{
    value: firstValue,
    isHighlighted: false
  }] : []);
  preTagParts.forEach(function (part) {
    var postTagParts = part.split(HIGHLIGHT_POST_TAG);
    parts.add({
      value: postTagParts[0],
      isHighlighted: true
    });
    if (postTagParts[1] !== '') {
      parts.add({
        value: postTagParts[1],
        isHighlighted: false
      });
    }
  });
  return parts.get();
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js
function parseAlgoliaHitHighlight_toConsumableArray(arr) { return parseAlgoliaHitHighlight_arrayWithoutHoles(arr) || parseAlgoliaHitHighlight_iterableToArray(arr) || parseAlgoliaHitHighlight_unsupportedIterableToArray(arr) || parseAlgoliaHitHighlight_nonIterableSpread(); }
function parseAlgoliaHitHighlight_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function parseAlgoliaHitHighlight_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return parseAlgoliaHitHighlight_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return parseAlgoliaHitHighlight_arrayLikeToArray(o, minLen); }
function parseAlgoliaHitHighlight_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function parseAlgoliaHitHighlight_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return parseAlgoliaHitHighlight_arrayLikeToArray(arr); }
function parseAlgoliaHitHighlight_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function parseAlgoliaHitHighlight(_ref) {
  var hit = _ref.hit,
    attribute = _ref.attribute;
  var path = Array.isArray(attribute) ? attribute : [attribute];
  var highlightedValue = getAttributeValueByPath(hit, ['_highlightResult'].concat(parseAlgoliaHitHighlight_toConsumableArray(path), ['value']));
  if (typeof highlightedValue !== 'string') {
     false ? 0 : void 0;
    highlightedValue = getAttributeValueByPath(hit, path) || '';
  }
  return parseAttribute({
    highlightedValue: highlightedValue
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/components/Highlight.js

function createHighlightComponent(_ref) {
  var createElement = _ref.createElement,
    Fragment = _ref.Fragment;
  function Highlight(_ref2) {
    var hit = _ref2.hit,
      attribute = _ref2.attribute,
      _ref2$tagName = _ref2.tagName,
      tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, parseAlgoliaHitHighlight({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }
  Highlight.__autocomplete_componentName = 'Highlight';
  return Highlight;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/isPartHighlighted.js
var htmlEscapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};
var hasAlphanumeric = new RegExp(/\w/i);
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);
function isPartHighlighted_unescape(value) {
  return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function (character) {
    return htmlEscapes[character];
  }) : value;
}
function isPartHighlighted(parts, i) {
  var _parts, _parts2;
  var current = parts[i];
  var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
  var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;
  if (!hasAlphanumeric.test(isPartHighlighted_unescape(current.value)) && isPreviousHighlighted === isNextHighlighted) {
    return isPreviousHighlighted;
  }
  return current.isHighlighted;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js
function reverseHighlightedParts_typeof(obj) { "@babel/helpers - typeof"; return reverseHighlightedParts_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, reverseHighlightedParts_typeof(obj); }
function reverseHighlightedParts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function reverseHighlightedParts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? reverseHighlightedParts_ownKeys(Object(source), !0).forEach(function (key) { reverseHighlightedParts_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : reverseHighlightedParts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function reverseHighlightedParts_defineProperty(obj, key, value) { key = reverseHighlightedParts_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function reverseHighlightedParts_toPropertyKey(arg) { var key = reverseHighlightedParts_toPrimitive(arg, "string"); return reverseHighlightedParts_typeof(key) === "symbol" ? key : String(key); }
function reverseHighlightedParts_toPrimitive(input, hint) { if (reverseHighlightedParts_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (reverseHighlightedParts_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function reverseHighlightedParts(parts) {
  // We don't want to highlight the whole word when no parts match.
  if (!parts.some(function (part) {
    return part.isHighlighted;
  })) {
    return parts.map(function (part) {
      return reverseHighlightedParts_objectSpread(reverseHighlightedParts_objectSpread({}, part), {}, {
        isHighlighted: false
      });
    });
  }
  return parts.map(function (part, i) {
    return reverseHighlightedParts_objectSpread(reverseHighlightedParts_objectSpread({}, part), {}, {
      isHighlighted: !isPartHighlighted(parts, i)
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseHighlight.js


function parseAlgoliaHitReverseHighlight(props) {
  return reverseHighlightedParts(parseAlgoliaHitHighlight(props));
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseHighlight.js

function createReverseHighlightComponent(_ref) {
  var createElement = _ref.createElement,
    Fragment = _ref.Fragment;
  function ReverseHighlight(_ref2) {
    var hit = _ref2.hit,
      attribute = _ref2.attribute,
      _ref2$tagName = _ref2.tagName,
      tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, parseAlgoliaHitReverseHighlight({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }
  ReverseHighlight.__autocomplete_componentName = 'ReverseHighlight';
  return ReverseHighlight;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js
function parseAlgoliaHitSnippet_toConsumableArray(arr) { return parseAlgoliaHitSnippet_arrayWithoutHoles(arr) || parseAlgoliaHitSnippet_iterableToArray(arr) || parseAlgoliaHitSnippet_unsupportedIterableToArray(arr) || parseAlgoliaHitSnippet_nonIterableSpread(); }
function parseAlgoliaHitSnippet_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function parseAlgoliaHitSnippet_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return parseAlgoliaHitSnippet_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return parseAlgoliaHitSnippet_arrayLikeToArray(o, minLen); }
function parseAlgoliaHitSnippet_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function parseAlgoliaHitSnippet_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return parseAlgoliaHitSnippet_arrayLikeToArray(arr); }
function parseAlgoliaHitSnippet_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function parseAlgoliaHitSnippet(_ref) {
  var hit = _ref.hit,
    attribute = _ref.attribute;
  var path = Array.isArray(attribute) ? attribute : [attribute];
  var highlightedValue = getAttributeValueByPath(hit, ['_snippetResult'].concat(parseAlgoliaHitSnippet_toConsumableArray(path), ['value']));
  if (typeof highlightedValue !== 'string') {
     false ? 0 : void 0;
    highlightedValue = getAttributeValueByPath(hit, path) || '';
  }
  return parseAttribute({
    highlightedValue: highlightedValue
  });
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseSnippet.js


function parseAlgoliaHitReverseSnippet(props) {
  return reverseHighlightedParts(parseAlgoliaHitSnippet(props));
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseSnippet.js

function createReverseSnippetComponent(_ref) {
  var createElement = _ref.createElement,
    Fragment = _ref.Fragment;
  function ReverseSnippet(_ref2) {
    var hit = _ref2.hit,
      attribute = _ref2.attribute,
      _ref2$tagName = _ref2.tagName,
      tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, parseAlgoliaHitReverseSnippet({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }
  ReverseSnippet.__autocomplete_componentName = 'ReverseSnippet';
  return ReverseSnippet;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/components/Snippet.js

function createSnippetComponent(_ref) {
  var createElement = _ref.createElement,
    Fragment = _ref.Fragment;
  function Snippet(_ref2) {
    var hit = _ref2.hit,
      attribute = _ref2.attribute,
      _ref2$tagName = _ref2.tagName,
      tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, parseAlgoliaHitSnippet({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }
  Snippet.__autocomplete_componentName = 'Snippet';
  return Snippet;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/utils/getHTMLElement.js

function getHTMLElement(environment, value) {
  if (typeof value === 'string') {
    var element = environment.document.querySelector(value);
    invariant(element !== null, "The element ".concat(JSON.stringify(value), " is not in the document."));
    return element;
  }
  return value;
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeClassNames.js
function mergeClassNames() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return values.reduce(function (acc, current) {
    Object.keys(current).forEach(function (key) {
      var accValue = acc[key];
      var currentValue = current[key];
      if (accValue !== currentValue) {
        acc[key] = [accValue, currentValue].filter(Boolean).join(' ');
      }
    });
    return acc;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/getDefaultOptions.js
function getDefaultOptions_typeof(obj) { "@babel/helpers - typeof"; return getDefaultOptions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getDefaultOptions_typeof(obj); }
var getDefaultOptions_excluded = ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"];
function getDefaultOptions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getDefaultOptions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getDefaultOptions_ownKeys(Object(source), !0).forEach(function (key) { getDefaultOptions_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getDefaultOptions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getDefaultOptions_defineProperty(obj, key, value) { key = getDefaultOptions_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getDefaultOptions_toPropertyKey(arg) { var key = getDefaultOptions_toPrimitive(arg, "string"); return getDefaultOptions_typeof(key) === "symbol" ? key : String(key); }
function getDefaultOptions_toPrimitive(input, hint) { if (getDefaultOptions_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getDefaultOptions_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getDefaultOptions_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = getDefaultOptions_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function getDefaultOptions_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var defaultClassNames = {
  clearButton: 'aa-ClearButton',
  detachedCancelButton: 'aa-DetachedCancelButton',
  detachedContainer: 'aa-DetachedContainer',
  detachedFormContainer: 'aa-DetachedFormContainer',
  detachedOverlay: 'aa-DetachedOverlay',
  detachedSearchButton: 'aa-DetachedSearchButton',
  detachedSearchButtonIcon: 'aa-DetachedSearchButtonIcon',
  detachedSearchButtonPlaceholder: 'aa-DetachedSearchButtonPlaceholder',
  detachedSearchButtonQuery: 'aa-DetachedSearchButtonQuery',
  form: 'aa-Form',
  input: 'aa-Input',
  inputWrapper: 'aa-InputWrapper',
  inputWrapperPrefix: 'aa-InputWrapperPrefix',
  inputWrapperSuffix: 'aa-InputWrapperSuffix',
  item: 'aa-Item',
  label: 'aa-Label',
  list: 'aa-List',
  loadingIndicator: 'aa-LoadingIndicator',
  panel: 'aa-Panel',
  panelLayout: 'aa-PanelLayout aa-Panel--scrollable',
  root: 'aa-Autocomplete',
  source: 'aa-Source',
  sourceFooter: 'aa-SourceFooter',
  sourceHeader: 'aa-SourceHeader',
  sourceNoResults: 'aa-SourceNoResults',
  submitButton: 'aa-SubmitButton'
};
var defaultRender = function defaultRender(_ref, root) {
  var children = _ref.children,
    render = _ref.render;
  render(children, root);
};
var defaultRenderer = {
  createElement: _,
  Fragment: k,
  render: B
};
function getDefaultOptions(options) {
  var _core$id;
  var classNames = options.classNames,
    container = options.container,
    getEnvironmentProps = options.getEnvironmentProps,
    getFormProps = options.getFormProps,
    getInputProps = options.getInputProps,
    getItemProps = options.getItemProps,
    getLabelProps = options.getLabelProps,
    getListProps = options.getListProps,
    getPanelProps = options.getPanelProps,
    getRootProps = options.getRootProps,
    panelContainer = options.panelContainer,
    panelPlacement = options.panelPlacement,
    render = options.render,
    renderNoResults = options.renderNoResults,
    renderer = options.renderer,
    detachedMediaQuery = options.detachedMediaQuery,
    components = options.components,
    translations = options.translations,
    core = getDefaultOptions_objectWithoutProperties(options, getDefaultOptions_excluded);

  /* eslint-disable no-restricted-globals */
  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */
  var containerElement = getHTMLElement(environment, container);
  invariant(containerElement.tagName !== 'INPUT', 'The `container` option does not support `input` elements. You need to change the container to a `div`.');
   false ? 0 : void 0;
   false ? 0 : void 0;
  var defaultedRenderer = getDefaultOptions_objectSpread(getDefaultOptions_objectSpread({}, defaultRenderer), renderer);
  var defaultComponents = {
    Highlight: createHighlightComponent(defaultedRenderer),
    ReverseHighlight: createReverseHighlightComponent(defaultedRenderer),
    ReverseSnippet: createReverseSnippetComponent(defaultedRenderer),
    Snippet: createSnippetComponent(defaultedRenderer)
  };
  var defaultTranslations = {
    clearButtonTitle: 'Clear',
    detachedCancelButtonText: 'Cancel',
    detachedSearchButtonTitle: 'Search',
    submitButtonTitle: 'Submit'
  };
  return {
    renderer: {
      classNames: mergeClassNames(defaultClassNames, classNames !== null && classNames !== void 0 ? classNames : {}),
      container: containerElement,
      getEnvironmentProps: getEnvironmentProps !== null && getEnvironmentProps !== void 0 ? getEnvironmentProps : function (_ref2) {
        var props = _ref2.props;
        return props;
      },
      getFormProps: getFormProps !== null && getFormProps !== void 0 ? getFormProps : function (_ref3) {
        var props = _ref3.props;
        return props;
      },
      getInputProps: getInputProps !== null && getInputProps !== void 0 ? getInputProps : function (_ref4) {
        var props = _ref4.props;
        return props;
      },
      getItemProps: getItemProps !== null && getItemProps !== void 0 ? getItemProps : function (_ref5) {
        var props = _ref5.props;
        return props;
      },
      getLabelProps: getLabelProps !== null && getLabelProps !== void 0 ? getLabelProps : function (_ref6) {
        var props = _ref6.props;
        return props;
      },
      getListProps: getListProps !== null && getListProps !== void 0 ? getListProps : function (_ref7) {
        var props = _ref7.props;
        return props;
      },
      getPanelProps: getPanelProps !== null && getPanelProps !== void 0 ? getPanelProps : function (_ref8) {
        var props = _ref8.props;
        return props;
      },
      getRootProps: getRootProps !== null && getRootProps !== void 0 ? getRootProps : function (_ref9) {
        var props = _ref9.props;
        return props;
      },
      panelContainer: panelContainer ? getHTMLElement(environment, panelContainer) : environment.document.body,
      panelPlacement: panelPlacement !== null && panelPlacement !== void 0 ? panelPlacement : 'input-wrapper-width',
      render: render !== null && render !== void 0 ? render : defaultRender,
      renderNoResults: renderNoResults,
      renderer: defaultedRenderer,
      detachedMediaQuery: detachedMediaQuery !== null && detachedMediaQuery !== void 0 ? detachedMediaQuery : getComputedStyle(environment.document.documentElement).getPropertyValue('--aa-detached-media-query'),
      components: getDefaultOptions_objectSpread(getDefaultOptions_objectSpread({}, defaultComponents), components),
      translations: getDefaultOptions_objectSpread(getDefaultOptions_objectSpread({}, defaultTranslations), translations)
    },
    core: getDefaultOptions_objectSpread(getDefaultOptions_objectSpread({}, core), {}, {
      id: (_core$id = core.id) !== null && _core$id !== void 0 ? _core$id : generateAutocompleteId(),
      environment: environment
    })
  };
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/getPanelPlacementStyle.js
function getPanelPlacementStyle(_ref) {
  var panelPlacement = _ref.panelPlacement,
    container = _ref.container,
    form = _ref.form,
    environment = _ref.environment;
  var containerRect = container.getBoundingClientRect();
  // Some browsers have specificities to retrieve the document scroll position.
  // See https://stackoverflow.com/a/28633515/9940315
  var scrollTop = environment.pageYOffset || environment.document.documentElement.scrollTop || environment.document.body.scrollTop || 0;
  var top = scrollTop + containerRect.top + containerRect.height;
  switch (panelPlacement) {
    case 'start':
      {
        return {
          top: top,
          left: containerRect.left
        };
      }
    case 'end':
      {
        return {
          top: top,
          right: environment.document.documentElement.clientWidth - (containerRect.left + containerRect.width)
        };
      }
    case 'full-width':
      {
        return {
          top: top,
          left: 0,
          right: 0,
          width: 'unset',
          maxWidth: 'unset'
        };
      }
    case 'input-wrapper-width':
      {
        var formRect = form.getBoundingClientRect();
        return {
          top: top,
          left: formRect.left,
          right: environment.document.documentElement.clientWidth - (formRect.left + formRect.width),
          width: 'unset',
          maxWidth: 'unset'
        };
      }
    default:
      {
        throw new Error("[Autocomplete] The `panelPlacement` value ".concat(JSON.stringify(panelPlacement), " is not valid."));
      }
  }
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/render.js
function render_typeof(obj) { "@babel/helpers - typeof"; return render_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, render_typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function render_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function render_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? render_ownKeys(Object(source), !0).forEach(function (key) { render_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : render_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function render_defineProperty(obj, key, value) { key = render_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function render_toPropertyKey(arg) { var key = render_toPrimitive(arg, "string"); return render_typeof(key) === "symbol" ? key : String(key); }
function render_toPrimitive(input, hint) { if (render_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (render_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/** @jsxRuntime classic */
/** @jsx renderer.createElement */


function renderSearchBox(_ref) {
  var autocomplete = _ref.autocomplete,
    autocompleteScopeApi = _ref.autocompleteScopeApi,
    dom = _ref.dom,
    propGetters = _ref.propGetters,
    state = _ref.state;
  setPropertiesWithoutEvents(dom.root, propGetters.getRootProps(render_objectSpread({
    state: state,
    props: autocomplete.getRootProps({})
  }, autocompleteScopeApi)));
  setPropertiesWithoutEvents(dom.input, propGetters.getInputProps(render_objectSpread({
    state: state,
    props: autocomplete.getInputProps({
      inputElement: dom.input
    }),
    inputElement: dom.input
  }, autocompleteScopeApi)));
  setProperties(dom.label, {
    hidden: state.status === 'stalled'
  });
  setProperties(dom.loadingIndicator, {
    hidden: state.status !== 'stalled'
  });
  setProperties(dom.clearButton, {
    hidden: !state.query
  });
  setProperties(dom.detachedSearchButtonQuery, {
    textContent: state.query
  });
  setProperties(dom.detachedSearchButtonPlaceholder, {
    hidden: Boolean(state.query)
  });
}
function renderPanel(render, _ref2) {
  var autocomplete = _ref2.autocomplete,
    autocompleteScopeApi = _ref2.autocompleteScopeApi,
    classNames = _ref2.classNames,
    html = _ref2.html,
    dom = _ref2.dom,
    panelContainer = _ref2.panelContainer,
    propGetters = _ref2.propGetters,
    state = _ref2.state,
    components = _ref2.components,
    renderer = _ref2.renderer;
  if (!state.isOpen) {
    if (panelContainer.contains(dom.panel)) {
      panelContainer.removeChild(dom.panel);
    }
    return;
  }

  // We add the panel element to the DOM when it's not yet appended and that the
  // items are fetched.
  if (!panelContainer.contains(dom.panel) && state.status !== 'loading') {
    panelContainer.appendChild(dom.panel);
  }
  dom.panel.classList.toggle('aa-Panel--stalled', state.status === 'stalled');
  var sections = state.collections.filter(function (_ref3) {
    var source = _ref3.source,
      items = _ref3.items;
    return source.templates.noResults || items.length > 0;
  }).map(function (_ref4, sourceIndex) {
    var source = _ref4.source,
      items = _ref4.items;
    return renderer.createElement("section", {
      key: sourceIndex,
      className: classNames.source,
      "data-autocomplete-source-id": source.sourceId
    }, source.templates.header && renderer.createElement("div", {
      className: classNames.sourceHeader
    }, source.templates.header({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      items: items,
      source: source,
      state: state,
      html: html
    })), source.templates.noResults && items.length === 0 ? renderer.createElement("div", {
      className: classNames.sourceNoResults
    }, source.templates.noResults({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      source: source,
      state: state,
      html: html
    })) : renderer.createElement("ul", _extends({
      className: classNames.list
    }, propGetters.getListProps(render_objectSpread({
      state: state,
      props: autocomplete.getListProps({
        source: source
      })
    }, autocompleteScopeApi))), items.map(function (item) {
      var itemProps = autocomplete.getItemProps({
        item: item,
        source: source
      });
      return renderer.createElement("li", _extends({
        key: itemProps.id,
        className: classNames.item
      }, propGetters.getItemProps(render_objectSpread({
        state: state,
        props: itemProps
      }, autocompleteScopeApi))), source.templates.item({
        components: components,
        createElement: renderer.createElement,
        Fragment: renderer.Fragment,
        item: item,
        state: state,
        html: html
      }));
    })), source.templates.footer && renderer.createElement("div", {
      className: classNames.sourceFooter
    }, source.templates.footer({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      items: items,
      source: source,
      state: state,
      html: html
    })));
  });
  var children = renderer.createElement(renderer.Fragment, null, renderer.createElement("div", {
    className: classNames.panelLayout
  }, sections), renderer.createElement("div", {
    className: "aa-GradientBottom"
  }));
  var elements = sections.reduce(function (acc, current) {
    acc[current.props['data-autocomplete-source-id']] = current;
    return acc;
  }, {});
  render(render_objectSpread(render_objectSpread({
    children: children,
    state: state,
    sections: sections,
    elements: elements
  }, renderer), {}, {
    components: components,
    html: html
  }, autocompleteScopeApi), dom.panel);
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js

var userAgents_userAgents = [{
  segment: 'autocomplete-js',
  version: version
}];
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeDeep.js
function mergeDeep_toConsumableArray(arr) { return mergeDeep_arrayWithoutHoles(arr) || mergeDeep_iterableToArray(arr) || mergeDeep_unsupportedIterableToArray(arr) || mergeDeep_nonIterableSpread(); }
function mergeDeep_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function mergeDeep_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mergeDeep_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mergeDeep_arrayLikeToArray(o, minLen); }
function mergeDeep_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function mergeDeep_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return mergeDeep_arrayLikeToArray(arr); }
function mergeDeep_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function mergeDeep_typeof(obj) { "@babel/helpers - typeof"; return mergeDeep_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, mergeDeep_typeof(obj); }
var isPlainObject = function isPlainObject(value) {
  return value && mergeDeep_typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Object]';
};
function mergeDeep() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return values.reduce(function (acc, current) {
    Object.keys(current).forEach(function (key) {
      var accValue = acc[key];
      var currentValue = current[key];
      if (Array.isArray(accValue) && Array.isArray(currentValue)) {
        acc[key] = accValue.concat.apply(accValue, mergeDeep_toConsumableArray(currentValue));
      } else if (isPlainObject(accValue) && isPlainObject(currentValue)) {
        acc[key] = mergeDeep(accValue, currentValue);
      } else {
        acc[key] = currentValue;
      }
    });
    return acc;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/utils/pickBy.js
function pickBy_typeof(obj) { "@babel/helpers - typeof"; return pickBy_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, pickBy_typeof(obj); }
function pickBy_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function pickBy_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? pickBy_ownKeys(Object(source), !0).forEach(function (key) { pickBy_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : pickBy_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function pickBy_defineProperty(obj, key, value) { key = pickBy_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function pickBy_toPropertyKey(arg) { var key = pickBy_toPrimitive(arg, "string"); return pickBy_typeof(key) === "symbol" ? key : String(key); }
function pickBy_toPrimitive(input, hint) { if (pickBy_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (pickBy_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function pickBy_slicedToArray(arr, i) { return pickBy_arrayWithHoles(arr) || pickBy_iterableToArrayLimit(arr, i) || pickBy_unsupportedIterableToArray(arr, i) || pickBy_nonIterableRest(); }
function pickBy_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function pickBy_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return pickBy_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pickBy_arrayLikeToArray(o, minLen); }
function pickBy_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function pickBy_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function pickBy_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function pickBy(obj, predicate) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = pickBy_slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (predicate({
      key: key,
      value: value
    })) {
      return pickBy_objectSpread(pickBy_objectSpread({}, acc), {}, pickBy_defineProperty({}, key, value));
    }
    return acc;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js
var autocomplete_excluded = ["components"];
function autocomplete_typeof(obj) { "@babel/helpers - typeof"; return autocomplete_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, autocomplete_typeof(obj); }
function autocomplete_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = autocomplete_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function autocomplete_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function autocomplete_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function autocomplete_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? autocomplete_ownKeys(Object(source), !0).forEach(function (key) { autocomplete_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : autocomplete_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function autocomplete_defineProperty(obj, key, value) { key = autocomplete_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function autocomplete_toPropertyKey(arg) { var key = autocomplete_toPrimitive(arg, "string"); return autocomplete_typeof(key) === "symbol" ? key : String(key); }
function autocomplete_toPrimitive(input, hint) { if (autocomplete_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (autocomplete_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











var instancesCount = 0;
function autocomplete(options) {
  var _createEffectWrapper = createEffectWrapper(),
    runEffect = _createEffectWrapper.runEffect,
    cleanupEffects = _createEffectWrapper.cleanupEffects,
    runEffects = _createEffectWrapper.runEffects;
  var _createReactiveWrappe = createReactiveWrapper(),
    reactive = _createReactiveWrappe.reactive,
    runReactives = _createReactiveWrappe.runReactives;
  var hasNoResultsSourceTemplateRef = createRef(false);
  var optionsRef = createRef(options);
  var onStateChangeRef = createRef(undefined);
  var props = reactive(function () {
    return getDefaultOptions(optionsRef.current);
  });
  var isDetached = reactive(function () {
    return props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;
  });
  var autocomplete = reactive(function () {
    return createAutocomplete(autocomplete_objectSpread(autocomplete_objectSpread({}, props.value.core), {}, {
      onStateChange: function onStateChange(params) {
        var _onStateChangeRef$cur, _props$value$core$onS, _props$value$core;
        hasNoResultsSourceTemplateRef.current = params.state.collections.some(function (collection) {
          return collection.source.templates.noResults;
        });
        (_onStateChangeRef$cur = onStateChangeRef.current) === null || _onStateChangeRef$cur === void 0 ? void 0 : _onStateChangeRef$cur.call(onStateChangeRef, params);
        (_props$value$core$onS = (_props$value$core = props.value.core).onStateChange) === null || _props$value$core$onS === void 0 ? void 0 : _props$value$core$onS.call(_props$value$core, params);
      },
      shouldPanelOpen: optionsRef.current.shouldPanelOpen || function (_ref) {
        var state = _ref.state;
        if (isDetached.value) {
          return true;
        }
        var hasItems = getItemsCount(state) > 0;
        if (!props.value.core.openOnFocus && !state.query) {
          return hasItems;
        }
        var hasNoResultsTemplate = Boolean(hasNoResultsSourceTemplateRef.current || props.value.renderer.renderNoResults);
        return !hasItems && hasNoResultsTemplate || hasItems;
      },
      __autocomplete_metadata: {
        userAgents: userAgents_userAgents,
        options: options
      }
    }));
  });
  var lastStateRef = createRef(autocomplete_objectSpread({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle'
  }, props.value.core.initialState));
  var propGetters = {
    getEnvironmentProps: props.value.renderer.getEnvironmentProps,
    getFormProps: props.value.renderer.getFormProps,
    getInputProps: props.value.renderer.getInputProps,
    getItemProps: props.value.renderer.getItemProps,
    getLabelProps: props.value.renderer.getLabelProps,
    getListProps: props.value.renderer.getListProps,
    getPanelProps: props.value.renderer.getPanelProps,
    getRootProps: props.value.renderer.getRootProps
  };
  var autocompleteScopeApi = {
    setActiveItemId: autocomplete.value.setActiveItemId,
    setQuery: autocomplete.value.setQuery,
    setCollections: autocomplete.value.setCollections,
    setIsOpen: autocomplete.value.setIsOpen,
    setStatus: autocomplete.value.setStatus,
    setContext: autocomplete.value.setContext,
    refresh: autocomplete.value.refresh,
    navigator: autocomplete.value.navigator
  };
  var html = reactive(function () {
    return htm_module.bind(props.value.renderer.renderer.createElement);
  });
  var dom = reactive(function () {
    return createAutocompleteDom({
      autocomplete: autocomplete.value,
      autocompleteScopeApi: autocompleteScopeApi,
      classNames: props.value.renderer.classNames,
      environment: props.value.core.environment,
      isDetached: isDetached.value,
      placeholder: props.value.core.placeholder,
      propGetters: propGetters,
      setIsModalOpen: setIsModalOpen,
      state: lastStateRef.current,
      translations: props.value.renderer.translations
    });
  });
  function setPanelPosition() {
    setProperties(dom.value.panel, {
      style: isDetached.value ? {} : getPanelPlacementStyle({
        panelPlacement: props.value.renderer.panelPlacement,
        container: dom.value.root,
        form: dom.value.form,
        environment: props.value.core.environment
      })
    });
  }
  function scheduleRender(state) {
    lastStateRef.current = state;
    var renderProps = {
      autocomplete: autocomplete.value,
      autocompleteScopeApi: autocompleteScopeApi,
      classNames: props.value.renderer.classNames,
      components: props.value.renderer.components,
      container: props.value.renderer.container,
      html: html.value,
      dom: dom.value,
      panelContainer: isDetached.value ? dom.value.detachedContainer : props.value.renderer.panelContainer,
      propGetters: propGetters,
      state: lastStateRef.current,
      renderer: props.value.renderer.renderer
    };
    var render = !getItemsCount(state) && !hasNoResultsSourceTemplateRef.current && props.value.renderer.renderNoResults || props.value.renderer.render;
    renderSearchBox(renderProps);
    renderPanel(render, renderProps);
  }
  runEffect(function () {
    var environmentProps = autocomplete.value.getEnvironmentProps({
      formElement: dom.value.form,
      panelElement: dom.value.panel,
      inputElement: dom.value.input
    });
    setProperties(props.value.core.environment, environmentProps);
    return function () {
      setProperties(props.value.core.environment, Object.keys(environmentProps).reduce(function (acc, key) {
        return autocomplete_objectSpread(autocomplete_objectSpread({}, acc), {}, autocomplete_defineProperty({}, key, undefined));
      }, {}));
    };
  });
  runEffect(function () {
    var panelContainerElement = isDetached.value ? props.value.core.environment.document.body : props.value.renderer.panelContainer;
    var panelElement = isDetached.value ? dom.value.detachedOverlay : dom.value.panel;
    if (isDetached.value && lastStateRef.current.isOpen) {
      setIsModalOpen(true);
    }
    scheduleRender(lastStateRef.current);
    return function () {
      if (panelContainerElement.contains(panelElement)) {
        panelContainerElement.removeChild(panelElement);
        panelContainerElement.classList.remove('aa-Detached');
      }
    };
  });
  runEffect(function () {
    var containerElement = props.value.renderer.container;
    containerElement.appendChild(dom.value.root);
    return function () {
      containerElement.removeChild(dom.value.root);
    };
  });
  runEffect(function () {
    var debouncedRender = debounce(function (_ref2) {
      var state = _ref2.state;
      scheduleRender(state);
    }, 0);
    onStateChangeRef.current = function (_ref3) {
      var state = _ref3.state,
        prevState = _ref3.prevState;
      if (isDetached.value && prevState.isOpen !== state.isOpen) {
        setIsModalOpen(state.isOpen);
      }

      // The outer DOM might have changed since the last time the panel was
      // positioned. The layout might have shifted vertically for instance.
      // It's therefore safer to re-calculate the panel position before opening
      // it again.
      if (!isDetached.value && state.isOpen && !prevState.isOpen) {
        setPanelPosition();
      }

      // We scroll to the top of the panel whenever the query changes (i.e. new
      // results come in) so that users don't have to.
      if (state.query !== prevState.query) {
        var scrollablePanels = props.value.core.environment.document.querySelectorAll('.aa-Panel--scrollable');
        scrollablePanels.forEach(function (scrollablePanel) {
          if (scrollablePanel.scrollTop !== 0) {
            scrollablePanel.scrollTop = 0;
          }
        });
      }
      debouncedRender({
        state: state
      });
    };
    return function () {
      onStateChangeRef.current = undefined;
    };
  });
  runEffect(function () {
    var onResize = debounce(function () {
      var previousIsDetached = isDetached.value;
      isDetached.value = props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;
      if (previousIsDetached !== isDetached.value) {
        update({});
      } else {
        requestAnimationFrame(setPanelPosition);
      }
    }, 20);
    props.value.core.environment.addEventListener('resize', onResize);
    return function () {
      props.value.core.environment.removeEventListener('resize', onResize);
    };
  });
  runEffect(function () {
    if (!isDetached.value) {
      return function () {};
    }
    function toggleModalClassname(isActive) {
      dom.value.detachedContainer.classList.toggle('aa-DetachedContainer--modal', isActive);
    }
    function onChange(event) {
      toggleModalClassname(event.matches);
    }
    var isModalDetachedMql = props.value.core.environment.matchMedia(getComputedStyle(props.value.core.environment.document.documentElement).getPropertyValue('--aa-detached-modal-media-query'));
    toggleModalClassname(isModalDetachedMql.matches);

    // Prior to Safari 14, `MediaQueryList` isn't based on `EventTarget`,
    // so we must use `addListener` and `removeListener` to observe media query lists.
    // See https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
    var hasModernEventListener = Boolean(isModalDetachedMql.addEventListener);
    hasModernEventListener ? isModalDetachedMql.addEventListener('change', onChange) : isModalDetachedMql.addListener(onChange);
    return function () {
      hasModernEventListener ? isModalDetachedMql.removeEventListener('change', onChange) : isModalDetachedMql.removeListener(onChange);
    };
  });
  runEffect(function () {
    requestAnimationFrame(setPanelPosition);
    return function () {};
  });
  function destroy() {
    instancesCount--;
    cleanupEffects();
  }
  function update() {
    var updatedOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    cleanupEffects();
    var _props$value$renderer = props.value.renderer,
      components = _props$value$renderer.components,
      rendererProps = autocomplete_objectWithoutProperties(_props$value$renderer, autocomplete_excluded);
    optionsRef.current = mergeDeep(rendererProps, props.value.core, {
      // We need to filter out default components so they can be replaced with
      // a new `renderer`, without getting rid of user components.
      // @MAJOR Deal with registering components with the same name as the
      // default ones. If we disallow overriding default components, we'd just
      // need to pass all `components` here.
      components: pickBy(components, function (_ref4) {
        var value = _ref4.value;
        return !value.hasOwnProperty('__autocomplete_componentName');
      }),
      initialState: lastStateRef.current
    }, updatedOptions);
    runReactives();
    runEffects();
    autocomplete.value.refresh().then(function () {
      scheduleRender(lastStateRef.current);
    });
  }
  function setIsModalOpen(value) {
    var prevValue = props.value.core.environment.document.body.contains(dom.value.detachedOverlay);
    if (value === prevValue) {
      return;
    }
    if (value) {
      props.value.core.environment.document.body.appendChild(dom.value.detachedOverlay);
      props.value.core.environment.document.body.classList.add('aa-Detached');
      dom.value.input.focus();
    } else {
      props.value.core.environment.document.body.removeChild(dom.value.detachedOverlay);
      props.value.core.environment.document.body.classList.remove('aa-Detached');
    }
  }
   false ? 0 : void 0;
  instancesCount++;
  return autocomplete_objectSpread(autocomplete_objectSpread({}, autocompleteScopeApi), {}, {
    update: update,
    destroy: destroy
  });
}

/***/ }),

/***/ 61237:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	0;
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var browserPolyfill = createCommonjsModule(function (module) {
	  (function (self) {
	    (function (exports) {
	      var support = {
	        searchParams: 'URLSearchParams' in self,
	        iterable: 'Symbol' in self && 'iterator' in Symbol,
	        blob: 'FileReader' in self && 'Blob' in self && function () {
	          try {
	            new Blob();
	            return true;
	          } catch (e) {
	            return false;
	          }
	        }(),
	        formData: 'FormData' in self,
	        arrayBuffer: 'ArrayBuffer' in self
	      };
	      function isDataView(obj) {
	        return obj && DataView.prototype.isPrototypeOf(obj);
	      }
	      if (support.arrayBuffer) {
	        var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
	        var isArrayBufferView = ArrayBuffer.isView || function (obj) {
	          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
	        };
	      }
	      function normalizeName(name) {
	        if (typeof name !== 'string') {
	          name = String(name);
	        }
	        if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
	          throw new TypeError('Invalid character in header field name');
	        }
	        return name.toLowerCase();
	      }
	      function normalizeValue(value) {
	        if (typeof value !== 'string') {
	          value = String(value);
	        }
	        return value;
	      }

	      // Build a destructive iterator for the value list
	      function iteratorFor(items) {
	        var iterator = {
	          next: function () {
	            var value = items.shift();
	            return {
	              done: value === undefined,
	              value: value
	            };
	          }
	        };
	        if (support.iterable) {
	          iterator[Symbol.iterator] = function () {
	            return iterator;
	          };
	        }
	        return iterator;
	      }
	      function Headers(headers) {
	        this.map = {};
	        if (headers instanceof Headers) {
	          headers.forEach(function (value, name) {
	            this.append(name, value);
	          }, this);
	        } else if (Array.isArray(headers)) {
	          headers.forEach(function (header) {
	            this.append(header[0], header[1]);
	          }, this);
	        } else if (headers) {
	          Object.getOwnPropertyNames(headers).forEach(function (name) {
	            this.append(name, headers[name]);
	          }, this);
	        }
	      }
	      Headers.prototype.append = function (name, value) {
	        name = normalizeName(name);
	        value = normalizeValue(value);
	        var oldValue = this.map[name];
	        this.map[name] = oldValue ? oldValue + ', ' + value : value;
	      };
	      Headers.prototype['delete'] = function (name) {
	        delete this.map[normalizeName(name)];
	      };
	      Headers.prototype.get = function (name) {
	        name = normalizeName(name);
	        return this.has(name) ? this.map[name] : null;
	      };
	      Headers.prototype.has = function (name) {
	        return this.map.hasOwnProperty(normalizeName(name));
	      };
	      Headers.prototype.set = function (name, value) {
	        this.map[normalizeName(name)] = normalizeValue(value);
	      };
	      Headers.prototype.forEach = function (callback, thisArg) {
	        for (var name in this.map) {
	          if (this.map.hasOwnProperty(name)) {
	            callback.call(thisArg, this.map[name], name, this);
	          }
	        }
	      };
	      Headers.prototype.keys = function () {
	        var items = [];
	        this.forEach(function (value, name) {
	          items.push(name);
	        });
	        return iteratorFor(items);
	      };
	      Headers.prototype.values = function () {
	        var items = [];
	        this.forEach(function (value) {
	          items.push(value);
	        });
	        return iteratorFor(items);
	      };
	      Headers.prototype.entries = function () {
	        var items = [];
	        this.forEach(function (value, name) {
	          items.push([name, value]);
	        });
	        return iteratorFor(items);
	      };
	      if (support.iterable) {
	        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	      }
	      function consumed(body) {
	        if (body.bodyUsed) {
	          return Promise.reject(new TypeError('Already read'));
	        }
	        body.bodyUsed = true;
	      }
	      function fileReaderReady(reader) {
	        return new Promise(function (resolve, reject) {
	          reader.onload = function () {
	            resolve(reader.result);
	          };
	          reader.onerror = function () {
	            reject(reader.error);
	          };
	        });
	      }
	      function readBlobAsArrayBuffer(blob) {
	        var reader = new FileReader();
	        var promise = fileReaderReady(reader);
	        reader.readAsArrayBuffer(blob);
	        return promise;
	      }
	      function readBlobAsText(blob) {
	        var reader = new FileReader();
	        var promise = fileReaderReady(reader);
	        reader.readAsText(blob);
	        return promise;
	      }
	      function readArrayBufferAsText(buf) {
	        var view = new Uint8Array(buf);
	        var chars = new Array(view.length);
	        for (var i = 0; i < view.length; i++) {
	          chars[i] = String.fromCharCode(view[i]);
	        }
	        return chars.join('');
	      }
	      function bufferClone(buf) {
	        if (buf.slice) {
	          return buf.slice(0);
	        } else {
	          var view = new Uint8Array(buf.byteLength);
	          view.set(new Uint8Array(buf));
	          return view.buffer;
	        }
	      }
	      function Body() {
	        this.bodyUsed = false;
	        this._initBody = function (body) {
	          this._bodyInit = body;
	          if (!body) {
	            this._bodyText = '';
	          } else if (typeof body === 'string') {
	            this._bodyText = body;
	          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	            this._bodyBlob = body;
	          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	            this._bodyFormData = body;
	          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	            this._bodyText = body.toString();
	          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	            this._bodyArrayBuffer = bufferClone(body.buffer);
	            // IE 10-11 can't handle a DataView body.
	            this._bodyInit = new Blob([this._bodyArrayBuffer]);
	          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	            this._bodyArrayBuffer = bufferClone(body);
	          } else {
	            this._bodyText = body = Object.prototype.toString.call(body);
	          }
	          if (!this.headers.get('content-type')) {
	            if (typeof body === 'string') {
	              this.headers.set('content-type', 'text/plain;charset=UTF-8');
	            } else if (this._bodyBlob && this._bodyBlob.type) {
	              this.headers.set('content-type', this._bodyBlob.type);
	            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	              this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	            }
	          }
	        };
	        if (support.blob) {
	          this.blob = function () {
	            var rejected = consumed(this);
	            if (rejected) {
	              return rejected;
	            }
	            if (this._bodyBlob) {
	              return Promise.resolve(this._bodyBlob);
	            } else if (this._bodyArrayBuffer) {
	              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
	            } else if (this._bodyFormData) {
	              throw new Error('could not read FormData body as blob');
	            } else {
	              return Promise.resolve(new Blob([this._bodyText]));
	            }
	          };
	          this.arrayBuffer = function () {
	            if (this._bodyArrayBuffer) {
	              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
	            } else {
	              return this.blob().then(readBlobAsArrayBuffer);
	            }
	          };
	        }
	        this.text = function () {
	          var rejected = consumed(this);
	          if (rejected) {
	            return rejected;
	          }
	          if (this._bodyBlob) {
	            return readBlobAsText(this._bodyBlob);
	          } else if (this._bodyArrayBuffer) {
	            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
	          } else if (this._bodyFormData) {
	            throw new Error('could not read FormData body as text');
	          } else {
	            return Promise.resolve(this._bodyText);
	          }
	        };
	        if (support.formData) {
	          this.formData = function () {
	            return this.text().then(decode);
	          };
	        }
	        this.json = function () {
	          return this.text().then(JSON.parse);
	        };
	        return this;
	      }

	      // HTTP methods whose capitalization should be normalized
	      var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
	      function normalizeMethod(method) {
	        var upcased = method.toUpperCase();
	        return methods.indexOf(upcased) > -1 ? upcased : method;
	      }
	      function Request(input, options) {
	        options = options || {};
	        var body = options.body;
	        if (input instanceof Request) {
	          if (input.bodyUsed) {
	            throw new TypeError('Already read');
	          }
	          this.url = input.url;
	          this.credentials = input.credentials;
	          if (!options.headers) {
	            this.headers = new Headers(input.headers);
	          }
	          this.method = input.method;
	          this.mode = input.mode;
	          this.signal = input.signal;
	          if (!body && input._bodyInit != null) {
	            body = input._bodyInit;
	            input.bodyUsed = true;
	          }
	        } else {
	          this.url = String(input);
	        }
	        this.credentials = options.credentials || this.credentials || 'same-origin';
	        if (options.headers || !this.headers) {
	          this.headers = new Headers(options.headers);
	        }
	        this.method = normalizeMethod(options.method || this.method || 'GET');
	        this.mode = options.mode || this.mode || null;
	        this.signal = options.signal || this.signal;
	        this.referrer = null;
	        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	          throw new TypeError('Body not allowed for GET or HEAD requests');
	        }
	        this._initBody(body);
	      }
	      Request.prototype.clone = function () {
	        return new Request(this, {
	          body: this._bodyInit
	        });
	      };
	      function decode(body) {
	        var form = new FormData();
	        body.trim().split('&').forEach(function (bytes) {
	          if (bytes) {
	            var split = bytes.split('=');
	            var name = split.shift().replace(/\+/g, ' ');
	            var value = split.join('=').replace(/\+/g, ' ');
	            form.append(decodeURIComponent(name), decodeURIComponent(value));
	          }
	        });
	        return form;
	      }
	      function parseHeaders(rawHeaders) {
	        var headers = new Headers();
	        // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	        // https://tools.ietf.org/html/rfc7230#section-3.2
	        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
	        preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
	          var parts = line.split(':');
	          var key = parts.shift().trim();
	          if (key) {
	            var value = parts.join(':').trim();
	            headers.append(key, value);
	          }
	        });
	        return headers;
	      }
	      Body.call(Request.prototype);
	      function Response(bodyInit, options) {
	        if (!options) {
	          options = {};
	        }
	        this.type = 'default';
	        this.status = options.status === undefined ? 200 : options.status;
	        this.ok = this.status >= 200 && this.status < 300;
	        this.statusText = 'statusText' in options ? options.statusText : 'OK';
	        this.headers = new Headers(options.headers);
	        this.url = options.url || '';
	        this._initBody(bodyInit);
	      }
	      Body.call(Response.prototype);
	      Response.prototype.clone = function () {
	        return new Response(this._bodyInit, {
	          status: this.status,
	          statusText: this.statusText,
	          headers: new Headers(this.headers),
	          url: this.url
	        });
	      };
	      Response.error = function () {
	        var response = new Response(null, {
	          status: 0,
	          statusText: ''
	        });
	        response.type = 'error';
	        return response;
	      };
	      var redirectStatuses = [301, 302, 303, 307, 308];
	      Response.redirect = function (url, status) {
	        if (redirectStatuses.indexOf(status) === -1) {
	          throw new RangeError('Invalid status code');
	        }
	        return new Response(null, {
	          status: status,
	          headers: {
	            location: url
	          }
	        });
	      };
	      exports.DOMException = self.DOMException;
	      try {
	        new exports.DOMException();
	      } catch (err) {
	        exports.DOMException = function (message, name) {
	          this.message = message;
	          this.name = name;
	          var error = Error(message);
	          this.stack = error.stack;
	        };
	        exports.DOMException.prototype = Object.create(Error.prototype);
	        exports.DOMException.prototype.constructor = exports.DOMException;
	      }
	      function fetch(input, init) {
	        return new Promise(function (resolve, reject) {
	          var request = new Request(input, init);
	          if (request.signal && request.signal.aborted) {
	            return reject(new exports.DOMException('Aborted', 'AbortError'));
	          }
	          var xhr = new XMLHttpRequest();
	          function abortXhr() {
	            xhr.abort();
	          }
	          xhr.onload = function () {
	            var options = {
	              status: xhr.status,
	              statusText: xhr.statusText,
	              headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	            };
	            options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	            var body = 'response' in xhr ? xhr.response : xhr.responseText;
	            resolve(new Response(body, options));
	          };
	          xhr.onerror = function () {
	            reject(new TypeError('Network request failed'));
	          };
	          xhr.ontimeout = function () {
	            reject(new TypeError('Network request failed'));
	          };
	          xhr.onabort = function () {
	            reject(new exports.DOMException('Aborted', 'AbortError'));
	          };
	          xhr.open(request.method, request.url, true);
	          if (request.credentials === 'include') {
	            xhr.withCredentials = true;
	          } else if (request.credentials === 'omit') {
	            xhr.withCredentials = false;
	          }
	          if ('responseType' in xhr && support.blob) {
	            xhr.responseType = 'blob';
	          }
	          request.headers.forEach(function (value, name) {
	            xhr.setRequestHeader(name, value);
	          });
	          if (request.signal) {
	            request.signal.addEventListener('abort', abortXhr);
	            xhr.onreadystatechange = function () {
	              // DONE (success or failure)
	              if (xhr.readyState === 4) {
	                request.signal.removeEventListener('abort', abortXhr);
	              }
	            };
	          }
	          xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	        });
	      }
	      fetch.polyfill = true;
	      if (!self.fetch) {
	        self.fetch = fetch;
	        self.Headers = Headers;
	        self.Request = Request;
	        self.Response = Response;
	      }
	      exports.Headers = Headers;
	      exports.Request = Request;
	      exports.Response = Response;
	      exports.fetch = fetch;
	      Object.defineProperty(exports, '__esModule', {
	        value: true
	      });
	      return exports;
	    })({});
	  })(typeof self !== 'undefined' ? self : commonjsGlobal);
	});

	var instantMeilisearch_umd = createCommonjsModule(function (module, exports) {
	  (function (global, factory) {
	    factory(exports, browserPolyfill) ;
	  })(commonjsGlobal, function (exports) {

	    /******************************************************************************
	    Copyright (c) Microsoft Corporation.
	      Permission to use, copy, modify, and/or distribute this software for any
	    purpose with or without fee is hereby granted.
	      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	    PERFORMANCE OF THIS SOFTWARE.
	    ***************************************************************************** */
	    var __assign = function () {
	      __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	          s = arguments[i];
	          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	      };
	      return __assign.apply(this, arguments);
	    };
	    function __rest(s, e) {
	      var t = {};
	      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	      }
	      return t;
	    }
	    function __awaiter(thisArg, _arguments, P, generator) {
	      function adopt(value) {
	        return value instanceof P ? value : new P(function (resolve) {
	          resolve(value);
	        });
	      }
	      return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	          try {
	            step(generator.next(value));
	          } catch (e) {
	            reject(e);
	          }
	        }
	        function rejected(value) {
	          try {
	            step(generator["throw"](value));
	          } catch (e) {
	            reject(e);
	          }
	        }
	        function step(result) {
	          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	      });
	    }
	    function __generator(thisArg, body) {
	      var _ = {
	          label: 0,
	          sent: function () {
	            if (t[0] & 1) throw t[1];
	            return t[1];
	          },
	          trys: [],
	          ops: []
	        },
	        f,
	        y,
	        t,
	        g;
	      return g = {
	        next: verb(0),
	        "throw": verb(1),
	        "return": verb(2)
	      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
	        return this;
	      }), g;
	      function verb(n) {
	        return function (v) {
	          return step([n, v]);
	        };
	      }
	      function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (g && (g = 0, op[0] && (_ = 0)), _) try {
	          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	          if (y = 0, t) op = [op[0] & 2, t.value];
	          switch (op[0]) {
	            case 0:
	            case 1:
	              t = op;
	              break;
	            case 4:
	              _.label++;
	              return {
	                value: op[1],
	                done: false
	              };
	            case 5:
	              _.label++;
	              y = op[1];
	              op = [0];
	              continue;
	            case 7:
	              op = _.ops.pop();
	              _.trys.pop();
	              continue;
	            default:
	              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
	                _ = 0;
	                continue;
	              }
	              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
	                _.label = op[1];
	                break;
	              }
	              if (op[0] === 6 && _.label < t[1]) {
	                _.label = t[1];
	                t = op;
	                break;
	              }
	              if (t && _.label < t[2]) {
	                _.label = t[2];
	                _.ops.push(op);
	                break;
	              }
	              if (t[2]) _.ops.pop();
	              _.trys.pop();
	              continue;
	          }
	          op = body.call(thisArg, _);
	        } catch (e) {
	          op = [6, e];
	          y = 0;
	        } finally {
	          f = t = 0;
	        }
	        if (op[0] & 5) throw op[1];
	        return {
	          value: op[0] ? op[1] : void 0,
	          done: true
	        };
	      }
	    }
	    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
	      var e = new Error(message);
	      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	    };
	    var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};
	    function createCommonjsModule(fn) {
	      var module = {
	        exports: {}
	      };
	      return fn(module, module.exports), module.exports;
	    }
	    var meilisearch_umd = createCommonjsModule(function (module, exports) {
	      (function (global, factory) {
	        factory(exports);
	      })(commonjsGlobal$1, function (exports) {
	        // Type definitions for meilisearch
	        // Project: https://github.com/meilisearch/meilisearch-js
	        // Definitions by: qdequele <quentin@meilisearch.com> <https://github.com/meilisearch>
	        // Definitions: https://github.com/meilisearch/meilisearch-js
	        // TypeScript Version: ^3.8.3
	        /*
	         * SEARCH PARAMETERS
	         */
	        var MatchingStrategies = {
	          ALL: 'all',
	          LAST: 'last'
	        };
	        var ContentTypeEnum = {
	          JSON: 'application/json',
	          CSV: 'text/csv',
	          NDJSON: 'application/x-ndjson'
	        };
	        /*
	         ** TASKS
	         */
	        var TaskStatus = {
	          TASK_SUCCEEDED: 'succeeded',
	          TASK_PROCESSING: 'processing',
	          TASK_FAILED: 'failed',
	          TASK_ENQUEUED: 'enqueued',
	          TASK_CANCELED: 'canceled'
	        };
	        var TaskTypes = {
	          DOCUMENTS_ADDITION_OR_UPDATE: 'documentAdditionOrUpdate',
	          DOCUMENT_DELETION: 'documentDeletion',
	          DUMP_CREATION: 'dumpCreation',
	          INDEX_CREATION: 'indexCreation',
	          INDEX_DELETION: 'indexDeletion',
	          INDEXES_SWAP: 'indexSwap',
	          INDEX_UPDATE: 'indexUpdate',
	          SETTINGS_UPDATE: 'settingsUpdate',
	          SNAPSHOT_CREATION: 'snapshotCreation',
	          TASK_CANCELATION: 'taskCancelation',
	          TASK_DELETION: 'taskDeletion'
	        };
	        var ErrorStatusCode = {
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#index_creation_failed */
	          INDEX_CREATION_FAILED: 'index_creation_failed',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_index_uid */
	          MISSING_INDEX_UID: 'missing_index_uid',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#index_already_exists */
	          INDEX_ALREADY_EXISTS: 'index_already_exists',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#index_not_found */
	          INDEX_NOT_FOUND: 'index_not_found',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_index_uid */
	          INVALID_INDEX_UID: 'invalid_index_uid',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#index_not_accessible */
	          INDEX_NOT_ACCESSIBLE: 'index_not_accessible',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_index_offset */
	          INVALID_INDEX_OFFSET: 'invalid_index_offset',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_index_limit */
	          INVALID_INDEX_LIMIT: 'invalid_index_limit',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_state */
	          INVALID_STATE: 'invalid_state',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#primary_key_inference_failed */
	          PRIMARY_KEY_INFERENCE_FAILED: 'primary_key_inference_failed',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#index_primary_key_already_exists */
	          INDEX_PRIMARY_KEY_ALREADY_EXISTS: 'index_primary_key_already_exists',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_index_primary_key */
	          INVALID_INDEX_PRIMARY_KEY: 'invalid_index_primary_key',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#max_fields_limit_exceeded */
	          DOCUMENTS_FIELDS_LIMIT_REACHED: 'document_fields_limit_reached',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_document_id */
	          MISSING_DOCUMENT_ID: 'missing_document_id',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_document_id */
	          INVALID_DOCUMENT_ID: 'invalid_document_id',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_content_type */
	          INVALID_CONTENT_TYPE: 'invalid_content_type',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_content_type */
	          MISSING_CONTENT_TYPE: 'missing_content_type',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_document_fields */
	          INVALID_DOCUMENT_FIELDS: 'invalid_document_fields',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_document_limit */
	          INVALID_DOCUMENT_LIMIT: 'invalid_document_limit',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_document_offset */
	          INVALID_DOCUMENT_OFFSET: 'invalid_document_offset',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_document_filter */
	          INVALID_DOCUMENT_FILTER: 'invalid_document_filter',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_document_filter */
	          MISSING_DOCUMENT_FILTER: 'missing_document_filter',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_document_vectors_field */
	          INVALID_DOCUMENT_VECTORS_FIELD: 'invalid_document_vectors_field',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#payload_too_large */
	          PAYLOAD_TOO_LARGE: 'payload_too_large',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_payload */
	          MISSING_PAYLOAD: 'missing_payload',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#malformed_payload */
	          MALFORMED_PAYLOAD: 'malformed_payload',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#no_space_left_on_device */
	          NO_SPACE_LEFT_ON_DEVICE: 'no_space_left_on_device',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_store_file */
	          INVALID_STORE_FILE: 'invalid_store_file',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_ranking_rules */
	          INVALID_RANKING_RULES: 'missing_document_id',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_request */
	          INVALID_REQUEST: 'invalid_request',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_document_geo_field */
	          INVALID_DOCUMENT_GEO_FIELD: 'invalid_document_geo_field',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_q */
	          INVALID_SEARCH_Q: 'invalid_search_q',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_offset */
	          INVALID_SEARCH_OFFSET: 'invalid_search_offset',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_limit */
	          INVALID_SEARCH_LIMIT: 'invalid_search_limit',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_page */
	          INVALID_SEARCH_PAGE: 'invalid_search_page',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_hits_per_page */
	          INVALID_SEARCH_HITS_PER_PAGE: 'invalid_search_hits_per_page',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_attributes_to_retrieve */
	          INVALID_SEARCH_ATTRIBUTES_TO_RETRIEVE: 'invalid_search_attributes_to_retrieve',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_attributes_to_crop */
	          INVALID_SEARCH_ATTRIBUTES_TO_CROP: 'invalid_search_attributes_to_crop',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_crop_length */
	          INVALID_SEARCH_CROP_LENGTH: 'invalid_search_crop_length',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_attributes_to_highlight */
	          INVALID_SEARCH_ATTRIBUTES_TO_HIGHLIGHT: 'invalid_search_attributes_to_highlight',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_show_matches_position */
	          INVALID_SEARCH_SHOW_MATCHES_POSITION: 'invalid_search_show_matches_position',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_filter */
	          INVALID_SEARCH_FILTER: 'invalid_search_filter',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_sort */
	          INVALID_SEARCH_SORT: 'invalid_search_sort',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_facets */
	          INVALID_SEARCH_FACETS: 'invalid_search_facets',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_highlight_pre_tag */
	          INVALID_SEARCH_HIGHLIGHT_PRE_TAG: 'invalid_search_highlight_pre_tag',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_highlight_post_tag */
	          INVALID_SEARCH_HIGHLIGHT_POST_TAG: 'invalid_search_highlight_post_tag',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_crop_marker */
	          INVALID_SEARCH_CROP_MARKER: 'invalid_search_crop_marker',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_matching_strategy */
	          INVALID_SEARCH_MATCHING_STRATEGY: 'invalid_search_matching_strategy',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_vector */
	          INVALID_SEARCH_VECTOR: 'invalid_search_vector',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_search_attributes_to_search_on */
	          INVALID_SEARCH_ATTRIBUTES_TO_SEARCH_ON: 'invalid_search_attributes_to_search_on',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#bad_request */
	          BAD_REQUEST: 'bad_request',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#document_not_found */
	          DOCUMENT_NOT_FOUND: 'document_not_found',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#internal */
	          INTERNAL: 'internal',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_api_key */
	          INVALID_API_KEY: 'invalid_api_key',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_api_key_description */
	          INVALID_API_KEY_DESCRIPTION: 'invalid_api_key_description',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_api_key_actions */
	          INVALID_API_KEY_ACTIONS: 'invalid_api_key_actions',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_api_key_indexes */
	          INVALID_API_KEY_INDEXES: 'invalid_api_key_indexes',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_api_key_expires_at */
	          INVALID_API_KEY_EXPIRES_AT: 'invalid_api_key_expires_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#api_key_not_found */
	          API_KEY_NOT_FOUND: 'api_key_not_found',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#immutable_api_key_uid */
	          IMMUTABLE_API_KEY_UID: 'immutable_api_key_uid',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#immutable_api_key_actions */
	          IMMUTABLE_API_KEY_ACTIONS: 'immutable_api_key_actions',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#immutable_api_key_indexes */
	          IMMUTABLE_API_KEY_INDEXES: 'immutable_api_key_indexes',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#immutable_api_key_expires_at */
	          IMMUTABLE_API_KEY_EXPIRES_AT: 'immutable_api_key_expires_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#immutable_api_key_created_at */
	          IMMUTABLE_API_KEY_CREATED_AT: 'immutable_api_key_created_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#immutable_api_key_updated_at */
	          IMMUTABLE_API_KEY_UPDATED_AT: 'immutable_api_key_updated_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_authorization_header */
	          MISSING_AUTHORIZATION_HEADER: 'missing_authorization_header',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#unretrievable_document */
	          UNRETRIEVABLE_DOCUMENT: 'unretrievable_document',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#database_size_limit_reached */
	          MAX_DATABASE_SIZE_LIMIT_REACHED: 'database_size_limit_reached',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#task_not_found */
	          TASK_NOT_FOUND: 'task_not_found',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#dump_process_failed */
	          DUMP_PROCESS_FAILED: 'dump_process_failed',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#dump_not_found */
	          DUMP_NOT_FOUND: 'dump_not_found',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_swap_duplicate_index_found */
	          INVALID_SWAP_DUPLICATE_INDEX_FOUND: 'invalid_swap_duplicate_index_found',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_swap_indexes */
	          INVALID_SWAP_INDEXES: 'invalid_swap_indexes',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_swap_indexes */
	          MISSING_SWAP_INDEXES: 'missing_swap_indexes',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_master_key */
	          MISSING_MASTER_KEY: 'missing_master_key',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_types */
	          INVALID_TASK_TYPES: 'invalid_task_types',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_uids */
	          INVALID_TASK_UIDS: 'invalid_task_uids',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_statuses */
	          INVALID_TASK_STATUSES: 'invalid_task_statuses',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_limit */
	          INVALID_TASK_LIMIT: 'invalid_task_limit',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_from */
	          INVALID_TASK_FROM: 'invalid_task_from',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_canceled_by */
	          INVALID_TASK_CANCELED_BY: 'invalid_task_canceled_by',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_task_filters */
	          MISSING_TASK_FILTERS: 'missing_task_filters',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#too_many_open_files */
	          TOO_MANY_OPEN_FILES: 'too_many_open_files',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#io_error */
	          IO_ERROR: 'io_error',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_index_uids */
	          INVALID_TASK_INDEX_UIDS: 'invalid_task_index_uids',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#immutable_index_uid */
	          IMMUTABLE_INDEX_UID: 'immutable_index_uid',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#immutable_index_created_at */
	          IMMUTABLE_INDEX_CREATED_AT: 'immutable_index_created_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#immutable_index_updated_at */
	          IMMUTABLE_INDEX_UPDATED_AT: 'immutable_index_updated_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_displayed_attributes */
	          INVALID_SETTINGS_DISPLAYED_ATTRIBUTES: 'invalid_settings_displayed_attributes',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_searchable_attributes */
	          INVALID_SETTINGS_SEARCHABLE_ATTRIBUTES: 'invalid_settings_searchable_attributes',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_filterable_attributes */
	          INVALID_SETTINGS_FILTERABLE_ATTRIBUTES: 'invalid_settings_filterable_attributes',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_sortable_attributes */
	          INVALID_SETTINGS_SORTABLE_ATTRIBUTES: 'invalid_settings_sortable_attributes',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_ranking_rules */
	          INVALID_SETTINGS_RANKING_RULES: 'invalid_settings_ranking_rules',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_stop_words */
	          INVALID_SETTINGS_STOP_WORDS: 'invalid_settings_stop_words',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_synonyms */
	          INVALID_SETTINGS_SYNONYMS: 'invalid_settings_synonyms',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_distinct_attribute */
	          INVALID_SETTINGS_DISTINCT_ATTRIBUTE: 'invalid_settings_distinct_attribute',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_typo_tolerance */
	          INVALID_SETTINGS_TYPO_TOLERANCE: 'invalid_settings_typo_tolerance',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_faceting */
	          INVALID_SETTINGS_FACETING: 'invalid_settings_faceting',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_settings_pagination */
	          INVALID_SETTINGS_PAGINATION: 'invalid_settings_pagination',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_before_enqueued_at */
	          INVALID_TASK_BEFORE_ENQUEUED_AT: 'invalid_task_before_enqueued_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_after_enqueued_at */
	          INVALID_TASK_AFTER_ENQUEUED_AT: 'invalid_task_after_enqueued_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_before_started_at */
	          INVALID_TASK_BEFORE_STARTED_AT: 'invalid_task_before_started_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_after_started_at */
	          INVALID_TASK_AFTER_STARTED_AT: 'invalid_task_after_started_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_before_finished_at */
	          INVALID_TASK_BEFORE_FINISHED_AT: 'invalid_task_before_finished_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_task_after_finished_at */
	          INVALID_TASK_AFTER_FINISHED_AT: 'invalid_task_after_finished_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_api_key_actions */
	          MISSING_API_KEY_ACTIONS: 'missing_api_key_actions',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_api_key_indexes */
	          MISSING_API_KEY_INDEXES: 'missing_api_key_indexes',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_api_key_expires_at */
	          MISSING_API_KEY_EXPIRES_AT: 'missing_api_key_expires_at',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_api_key_limit */
	          INVALID_API_KEY_LIMIT: 'invalid_api_key_limit',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_api_key_offset */
	          INVALID_API_KEY_OFFSET: 'invalid_api_key_offset',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_facet_search_facet_name */
	          INVALID_FACET_SEARCH_FACET_NAME: 'invalid_facet_search_facet_name',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#missing_facet_search_facet_name */
	          MISSING_FACET_SEARCH_FACET_NAME: 'missing_facet_search_facet_name',
	          /** @see https://www.meilisearch.com/docs/reference/errors/error_codes#invalid_facet_search_facet_query */
	          INVALID_FACET_SEARCH_FACET_QUERY: 'invalid_facet_search_facet_query'
	        };
	        function _iterableToArrayLimit(r, l) {
	          var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	          if (null != t) {
	            var e,
	              n,
	              i,
	              u,
	              a = [],
	              f = !0,
	              o = !1;
	            try {
	              if (i = (t = t.call(r)).next, 0 === l) {
	                if (Object(t) !== t) return;
	                f = !1;
	              } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
	            } catch (r) {
	              o = !0, n = r;
	            } finally {
	              try {
	                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
	              } finally {
	                if (o) throw n;
	              }
	            }
	            return a;
	          }
	        }
	        function _regeneratorRuntime() {
	          _regeneratorRuntime = function () {
	            return e;
	          };
	          var t,
	            e = {},
	            r = Object.prototype,
	            n = r.hasOwnProperty,
	            o = Object.defineProperty || function (t, e, r) {
	              t[e] = r.value;
	            },
	            i = "function" == typeof Symbol ? Symbol : {},
	            a = i.iterator || "@@iterator",
	            c = i.asyncIterator || "@@asyncIterator",
	            u = i.toStringTag || "@@toStringTag";
	          function define(t, e, r) {
	            return Object.defineProperty(t, e, {
	              value: r,
	              enumerable: !0,
	              configurable: !0,
	              writable: !0
	            }), t[e];
	          }
	          try {
	            define({}, "");
	          } catch (t) {
	            define = function (t, e, r) {
	              return t[e] = r;
	            };
	          }
	          function wrap(t, e, r, n) {
	            var i = e && e.prototype instanceof Generator ? e : Generator,
	              a = Object.create(i.prototype),
	              c = new Context(n || []);
	            return o(a, "_invoke", {
	              value: makeInvokeMethod(t, r, c)
	            }), a;
	          }
	          function tryCatch(t, e, r) {
	            try {
	              return {
	                type: "normal",
	                arg: t.call(e, r)
	              };
	            } catch (t) {
	              return {
	                type: "throw",
	                arg: t
	              };
	            }
	          }
	          e.wrap = wrap;
	          var h = "suspendedStart",
	            l = "suspendedYield",
	            f = "executing",
	            s = "completed",
	            y = {};
	          function Generator() {}
	          function GeneratorFunction() {}
	          function GeneratorFunctionPrototype() {}
	          var p = {};
	          define(p, a, function () {
	            return this;
	          });
	          var d = Object.getPrototypeOf,
	            v = d && d(d(values([])));
	          v && v !== r && n.call(v, a) && (p = v);
	          var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
	          function defineIteratorMethods(t) {
	            ["next", "throw", "return"].forEach(function (e) {
	              define(t, e, function (t) {
	                return this._invoke(e, t);
	              });
	            });
	          }
	          function AsyncIterator(t, e) {
	            function invoke(r, o, i, a) {
	              var c = tryCatch(t[r], t, o);
	              if ("throw" !== c.type) {
	                var u = c.arg,
	                  h = u.value;
	                return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
	                  invoke("next", t, i, a);
	                }, function (t) {
	                  invoke("throw", t, i, a);
	                }) : e.resolve(h).then(function (t) {
	                  u.value = t, i(u);
	                }, function (t) {
	                  return invoke("throw", t, i, a);
	                });
	              }
	              a(c.arg);
	            }
	            var r;
	            o(this, "_invoke", {
	              value: function (t, n) {
	                function callInvokeWithMethodAndArg() {
	                  return new e(function (e, r) {
	                    invoke(t, n, e, r);
	                  });
	                }
	                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	              }
	            });
	          }
	          function makeInvokeMethod(e, r, n) {
	            var o = h;
	            return function (i, a) {
	              if (o === f) throw new Error("Generator is already running");
	              if (o === s) {
	                if ("throw" === i) throw a;
	                return {
	                  value: t,
	                  done: !0
	                };
	              }
	              for (n.method = i, n.arg = a;;) {
	                var c = n.delegate;
	                if (c) {
	                  var u = maybeInvokeDelegate(c, n);
	                  if (u) {
	                    if (u === y) continue;
	                    return u;
	                  }
	                }
	                if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
	                  if (o === h) throw o = s, n.arg;
	                  n.dispatchException(n.arg);
	                } else "return" === n.method && n.abrupt("return", n.arg);
	                o = f;
	                var p = tryCatch(e, r, n);
	                if ("normal" === p.type) {
	                  if (o = n.done ? s : l, p.arg === y) continue;
	                  return {
	                    value: p.arg,
	                    done: n.done
	                  };
	                }
	                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
	              }
	            };
	          }
	          function maybeInvokeDelegate(e, r) {
	            var n = r.method,
	              o = e.iterator[n];
	            if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
	            var i = tryCatch(o, e.iterator, r.arg);
	            if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
	            var a = i.arg;
	            return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
	          }
	          function pushTryEntry(t) {
	            var e = {
	              tryLoc: t[0]
	            };
	            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
	          }
	          function resetTryEntry(t) {
	            var e = t.completion || {};
	            e.type = "normal", delete e.arg, t.completion = e;
	          }
	          function Context(t) {
	            this.tryEntries = [{
	              tryLoc: "root"
	            }], t.forEach(pushTryEntry, this), this.reset(!0);
	          }
	          function values(e) {
	            if (e || "" === e) {
	              var r = e[a];
	              if (r) return r.call(e);
	              if ("function" == typeof e.next) return e;
	              if (!isNaN(e.length)) {
	                var o = -1,
	                  i = function next() {
	                    for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
	                    return next.value = t, next.done = !0, next;
	                  };
	                return i.next = i;
	              }
	            }
	            throw new TypeError(typeof e + " is not iterable");
	          }
	          return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
	            value: GeneratorFunctionPrototype,
	            configurable: !0
	          }), o(GeneratorFunctionPrototype, "constructor", {
	            value: GeneratorFunction,
	            configurable: !0
	          }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
	            var e = "function" == typeof t && t.constructor;
	            return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
	          }, e.mark = function (t) {
	            return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
	          }, e.awrap = function (t) {
	            return {
	              __await: t
	            };
	          }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
	            return this;
	          }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
	            void 0 === i && (i = Promise);
	            var a = new AsyncIterator(wrap(t, r, n, o), i);
	            return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
	              return t.done ? t.value : a.next();
	            });
	          }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
	            return this;
	          }), define(g, "toString", function () {
	            return "[object Generator]";
	          }), e.keys = function (t) {
	            var e = Object(t),
	              r = [];
	            for (var n in e) r.push(n);
	            return r.reverse(), function next() {
	              for (; r.length;) {
	                var t = r.pop();
	                if (t in e) return next.value = t, next.done = !1, next;
	              }
	              return next.done = !0, next;
	            };
	          }, e.values = values, Context.prototype = {
	            constructor: Context,
	            reset: function (e) {
	              if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
	            },
	            stop: function () {
	              this.done = !0;
	              var t = this.tryEntries[0].completion;
	              if ("throw" === t.type) throw t.arg;
	              return this.rval;
	            },
	            dispatchException: function (e) {
	              if (this.done) throw e;
	              var r = this;
	              function handle(n, o) {
	                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
	              }
	              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
	                var i = this.tryEntries[o],
	                  a = i.completion;
	                if ("root" === i.tryLoc) return handle("end");
	                if (i.tryLoc <= this.prev) {
	                  var c = n.call(i, "catchLoc"),
	                    u = n.call(i, "finallyLoc");
	                  if (c && u) {
	                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
	                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
	                  } else if (c) {
	                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
	                  } else {
	                    if (!u) throw new Error("try statement without catch or finally");
	                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
	                  }
	                }
	              }
	            },
	            abrupt: function (t, e) {
	              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
	                var o = this.tryEntries[r];
	                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
	                  var i = o;
	                  break;
	                }
	              }
	              i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
	              var a = i ? i.completion : {};
	              return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
	            },
	            complete: function (t, e) {
	              if ("throw" === t.type) throw t.arg;
	              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
	            },
	            finish: function (t) {
	              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
	                var r = this.tryEntries[e];
	                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
	              }
	            },
	            catch: function (t) {
	              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
	                var r = this.tryEntries[e];
	                if (r.tryLoc === t) {
	                  var n = r.completion;
	                  if ("throw" === n.type) {
	                    var o = n.arg;
	                    resetTryEntry(r);
	                  }
	                  return o;
	                }
	              }
	              throw new Error("illegal catch attempt");
	            },
	            delegateYield: function (e, r, n) {
	              return this.delegate = {
	                iterator: values(e),
	                resultName: r,
	                nextLoc: n
	              }, "next" === this.method && (this.arg = t), y;
	            }
	          }, e;
	        }
	        function _toPrimitive(t, r) {
	          if ("object" != typeof t || !t) return t;
	          var e = t[Symbol.toPrimitive];
	          if (void 0 !== e) {
	            var i = e.call(t, r || "default");
	            if ("object" != typeof i) return i;
	            throw new TypeError("@@toPrimitive must return a primitive value.");
	          }
	          return ("string" === r ? String : Number)(t);
	        }
	        function _toPropertyKey(t) {
	          var i = _toPrimitive(t, "string");
	          return "symbol" == typeof i ? i : String(i);
	        }
	        function _typeof(o) {
	          "@babel/helpers - typeof";

	          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	            return typeof o;
	          } : function (o) {
	            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	          }, _typeof(o);
	        }
	        function _classCallCheck(instance, Constructor) {
	          if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	          }
	        }
	        function _defineProperties(target, props) {
	          for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];
	            descriptor.enumerable = descriptor.enumerable || false;
	            descriptor.configurable = true;
	            if ("value" in descriptor) descriptor.writable = true;
	            Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	          }
	        }
	        function _createClass(Constructor, protoProps, staticProps) {
	          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	          if (staticProps) _defineProperties(Constructor, staticProps);
	          Object.defineProperty(Constructor, "prototype", {
	            writable: false
	          });
	          return Constructor;
	        }
	        function _defineProperty(obj, key, value) {
	          key = _toPropertyKey(key);
	          if (key in obj) {
	            Object.defineProperty(obj, key, {
	              value: value,
	              enumerable: true,
	              configurable: true,
	              writable: true
	            });
	          } else {
	            obj[key] = value;
	          }
	          return obj;
	        }
	        function _inherits(subClass, superClass) {
	          if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function");
	          }
	          subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	              value: subClass,
	              writable: true,
	              configurable: true
	            }
	          });
	          Object.defineProperty(subClass, "prototype", {
	            writable: false
	          });
	          if (superClass) _setPrototypeOf(subClass, superClass);
	        }
	        function _getPrototypeOf(o) {
	          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	            return o.__proto__ || Object.getPrototypeOf(o);
	          };
	          return _getPrototypeOf(o);
	        }
	        function _setPrototypeOf(o, p) {
	          _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	            o.__proto__ = p;
	            return o;
	          };
	          return _setPrototypeOf(o, p);
	        }
	        function _isNativeReflectConstruct() {
	          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	          if (Reflect.construct.sham) return false;
	          if (typeof Proxy === "function") return true;
	          try {
	            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	            return true;
	          } catch (e) {
	            return false;
	          }
	        }
	        function _construct(Parent, args, Class) {
	          if (_isNativeReflectConstruct()) {
	            _construct = Reflect.construct.bind();
	          } else {
	            _construct = function _construct(Parent, args, Class) {
	              var a = [null];
	              a.push.apply(a, args);
	              var Constructor = Function.bind.apply(Parent, a);
	              var instance = new Constructor();
	              if (Class) _setPrototypeOf(instance, Class.prototype);
	              return instance;
	            };
	          }
	          return _construct.apply(null, arguments);
	        }
	        function _isNativeFunction(fn) {
	          try {
	            return Function.toString.call(fn).indexOf("[native code]") !== -1;
	          } catch (e) {
	            return typeof fn === "function";
	          }
	        }
	        function _wrapNativeSuper(Class) {
	          var _cache = typeof Map === "function" ? new Map() : undefined;
	          _wrapNativeSuper = function _wrapNativeSuper(Class) {
	            if (Class === null || !_isNativeFunction(Class)) return Class;
	            if (typeof Class !== "function") {
	              throw new TypeError("Super expression must either be null or a function");
	            }
	            if (typeof _cache !== "undefined") {
	              if (_cache.has(Class)) return _cache.get(Class);
	              _cache.set(Class, Wrapper);
	            }
	            function Wrapper() {
	              return _construct(Class, arguments, _getPrototypeOf(this).constructor);
	            }
	            Wrapper.prototype = Object.create(Class.prototype, {
	              constructor: {
	                value: Wrapper,
	                enumerable: false,
	                writable: true,
	                configurable: true
	              }
	            });
	            return _setPrototypeOf(Wrapper, Class);
	          };
	          return _wrapNativeSuper(Class);
	        }
	        function _assertThisInitialized(self) {
	          if (self === void 0) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	          }
	          return self;
	        }
	        function _possibleConstructorReturn(self, call) {
	          if (call && (typeof call === "object" || typeof call === "function")) {
	            return call;
	          } else if (call !== void 0) {
	            throw new TypeError("Derived constructors may only return object or undefined");
	          }
	          return _assertThisInitialized(self);
	        }
	        function _createSuper(Derived) {
	          var hasNativeReflectConstruct = _isNativeReflectConstruct();
	          return function _createSuperInternal() {
	            var Super = _getPrototypeOf(Derived),
	              result;
	            if (hasNativeReflectConstruct) {
	              var NewTarget = _getPrototypeOf(this).constructor;
	              result = Reflect.construct(Super, arguments, NewTarget);
	            } else {
	              result = Super.apply(this, arguments);
	            }
	            return _possibleConstructorReturn(this, result);
	          };
	        }
	        function _slicedToArray(arr, i) {
	          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	        }
	        function _arrayWithHoles(arr) {
	          if (Array.isArray(arr)) return arr;
	        }
	        function _unsupportedIterableToArray(o, minLen) {
	          if (!o) return;
	          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	          var n = Object.prototype.toString.call(o).slice(8, -1);
	          if (n === "Object" && o.constructor) n = o.constructor.name;
	          if (n === "Map" || n === "Set") return Array.from(o);
	          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	        }
	        function _arrayLikeToArray(arr, len) {
	          if (len == null || len > arr.length) len = arr.length;
	          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	          return arr2;
	        }
	        function _nonIterableRest() {
	          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	        }
	        function _createForOfIteratorHelper(o, allowArrayLike) {
	          var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	          if (!it) {
	            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	              if (it) o = it;
	              var i = 0;
	              var F = function () {};
	              return {
	                s: F,
	                n: function () {
	                  if (i >= o.length) return {
	                    done: true
	                  };
	                  return {
	                    done: false,
	                    value: o[i++]
	                  };
	                },
	                e: function (e) {
	                  throw e;
	                },
	                f: F
	              };
	            }
	            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	          }
	          var normalCompletion = true,
	            didErr = false,
	            err;
	          return {
	            s: function () {
	              it = it.call(o);
	            },
	            n: function () {
	              var step = it.next();
	              normalCompletion = step.done;
	              return step;
	            },
	            e: function (e) {
	              didErr = true;
	              err = e;
	            },
	            f: function () {
	              try {
	                if (!normalCompletion && it.return != null) it.return();
	              } finally {
	                if (didErr) throw err;
	              }
	            }
	          };
	        }

	        /******************************************************************************
	        Copyright (c) Microsoft Corporation.
	          Permission to use, copy, modify, and/or distribute this software for any
	        purpose with or without fee is hereby granted.
	          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	        PERFORMANCE OF THIS SOFTWARE.
	        ***************************************************************************** */

	        function __awaiter(thisArg, _arguments, P, generator) {
	          function adopt(value) {
	            return value instanceof P ? value : new P(function (resolve) {
	              resolve(value);
	            });
	          }
	          return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) {
	              try {
	                step(generator.next(value));
	              } catch (e) {
	                reject(e);
	              }
	            }
	            function rejected(value) {
	              try {
	                step(generator["throw"](value));
	              } catch (e) {
	                reject(e);
	              }
	            }
	            function step(result) {
	              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
	            }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	          });
	        }
	        var MeiliSearchError = /*#__PURE__*/function (_Error) {
	          _inherits(MeiliSearchError, _Error);
	          var _super = _createSuper(MeiliSearchError);
	          function MeiliSearchError(message) {
	            var _this;
	            _classCallCheck(this, MeiliSearchError);
	            _this = _super.call(this, message);
	            // Make errors comparison possible. ex: error instanceof MeiliSearchError.
	            Object.setPrototypeOf(_assertThisInitialized(_this), MeiliSearchError.prototype);
	            _this.name = 'MeiliSearchError';
	            if (Error.captureStackTrace) {
	              Error.captureStackTrace(_assertThisInitialized(_this), MeiliSearchError);
	            }
	            return _this;
	          }
	          return _createClass(MeiliSearchError);
	        }( /*#__PURE__*/_wrapNativeSuper(Error));
	        var MeiliSearchCommunicationError = /*#__PURE__*/function (_MeiliSearchError) {
	          _inherits(MeiliSearchCommunicationError, _MeiliSearchError);
	          var _super = _createSuper(MeiliSearchCommunicationError);
	          function MeiliSearchCommunicationError(message, body, url, stack) {
	            var _this;
	            _classCallCheck(this, MeiliSearchCommunicationError);
	            var _a, _b, _c;
	            _this = _super.call(this, message);
	            // Make errors comparison possible. ex: error instanceof MeiliSearchCommunicationError.
	            Object.setPrototypeOf(_assertThisInitialized(_this), MeiliSearchCommunicationError.prototype);
	            _this.name = 'MeiliSearchCommunicationError';
	            if (body instanceof Response) {
	              _this.message = body.statusText;
	              _this.statusCode = body.status;
	            }
	            if (body instanceof Error) {
	              _this.errno = body.errno;
	              _this.code = body.code;
	            }
	            if (stack) {
	              _this.stack = stack;
	              _this.stack = (_a = _this.stack) === null || _a === void 0 ? void 0 : _a.replace(/(TypeError|FetchError)/, _this.name);
	              _this.stack = (_b = _this.stack) === null || _b === void 0 ? void 0 : _b.replace('Failed to fetch', "request to ".concat(url, " failed, reason: connect ECONNREFUSED"));
	              _this.stack = (_c = _this.stack) === null || _c === void 0 ? void 0 : _c.replace('Not Found', "Not Found: ".concat(url));
	            } else {
	              if (Error.captureStackTrace) {
	                Error.captureStackTrace(_assertThisInitialized(_this), MeiliSearchCommunicationError);
	              }
	            }
	            return _this;
	          }
	          return _createClass(MeiliSearchCommunicationError);
	        }(MeiliSearchError);
	        var MeiliSearchApiError = /*#__PURE__*/function (_MeiliSearchError) {
	          _inherits(MeiliSearchApiError, _MeiliSearchError);
	          var _super = _createSuper(MeiliSearchApiError);
	          function MeiliSearchApiError(error, status) {
	            var _this;
	            _classCallCheck(this, MeiliSearchApiError);
	            _this = _super.call(this, error.message);
	            // Make errors comparison possible. ex: error instanceof MeiliSearchApiError.
	            Object.setPrototypeOf(_assertThisInitialized(_this), MeiliSearchApiError.prototype);
	            _this.name = 'MeiliSearchApiError';
	            _this.code = error.code;
	            _this.type = error.type;
	            _this.link = error.link;
	            _this.message = error.message;
	            _this.httpStatus = status;
	            if (Error.captureStackTrace) {
	              Error.captureStackTrace(_assertThisInitialized(_this), MeiliSearchApiError);
	            }
	            return _this;
	          }
	          return _createClass(MeiliSearchApiError);
	        }(MeiliSearchError);
	        function httpResponseErrorHandler(response) {
	          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
	            var responseBody;
	            return _regeneratorRuntime().wrap(function _callee$(_context) {
	              while (1) switch (_context.prev = _context.next) {
	                case 0:
	                  if (response.ok) {
	                    _context.next = 11;
	                    break;
	                  }
	                  _context.prev = 1;
	                  _context.next = 4;
	                  return response.json();
	                case 4:
	                  responseBody = _context.sent;
	                  _context.next = 10;
	                  break;
	                case 7:
	                  _context.prev = 7;
	                  _context.t0 = _context["catch"](1);
	                  throw new MeiliSearchCommunicationError(response.statusText, response, response.url);
	                case 10:
	                  throw new MeiliSearchApiError(responseBody, response.status);
	                case 11:
	                  return _context.abrupt("return", response);
	                case 12:
	                case "end":
	                  return _context.stop();
	              }
	            }, _callee, null, [[1, 7]]);
	          }));
	        }
	        function httpErrorHandler(response, stack, url) {
	          if (response.name !== 'MeiliSearchApiError') {
	            throw new MeiliSearchCommunicationError(response.message, response, url, stack);
	          }
	          throw response;
	        }
	        var MeiliSearchTimeOutError = /*#__PURE__*/function (_MeiliSearchError) {
	          _inherits(MeiliSearchTimeOutError, _MeiliSearchError);
	          var _super = _createSuper(MeiliSearchTimeOutError);
	          function MeiliSearchTimeOutError(message) {
	            var _this;
	            _classCallCheck(this, MeiliSearchTimeOutError);
	            _this = _super.call(this, message);
	            // Make errors comparison possible. ex: error instanceof MeiliSearchTimeOutError.
	            Object.setPrototypeOf(_assertThisInitialized(_this), MeiliSearchTimeOutError.prototype);
	            _this.name = 'MeiliSearchTimeOutError';
	            if (Error.captureStackTrace) {
	              Error.captureStackTrace(_assertThisInitialized(_this), MeiliSearchTimeOutError);
	            }
	            return _this;
	          }
	          return _createClass(MeiliSearchTimeOutError);
	        }(MeiliSearchError);
	        function versionErrorHintMessage(message, method) {
	          return "".concat(message, "\nHint: It might not be working because maybe you're not up to date with the Meilisearch version that ").concat(method, " call requires.");
	        }

	        /** Removes undefined entries from object */
	        function removeUndefinedFromObject(obj) {
	          return Object.entries(obj).reduce(function (acc, curEntry) {
	            var _curEntry = _slicedToArray(curEntry, 2),
	              key = _curEntry[0],
	              val = _curEntry[1];
	            if (val !== undefined) acc[key] = val;
	            return acc;
	          }, {});
	        }
	        function sleep(ms) {
	          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
	            return _regeneratorRuntime().wrap(function _callee$(_context) {
	              while (1) switch (_context.prev = _context.next) {
	                case 0:
	                  _context.next = 2;
	                  return new Promise(function (resolve) {
	                    return setTimeout(resolve, ms);
	                  });
	                case 2:
	                  return _context.abrupt("return", _context.sent);
	                case 3:
	                case "end":
	                  return _context.stop();
	              }
	            }, _callee);
	          }));
	        }
	        function addProtocolIfNotPresent(host) {
	          if (!(host.startsWith('https://') || host.startsWith('http://'))) {
	            return "http://".concat(host);
	          }
	          return host;
	        }
	        function addTrailingSlash(url) {
	          if (!url.endsWith('/')) {
	            url += '/';
	          }
	          return url;
	        }
	        var PACKAGE_VERSION = '0.37.0';
	        function toQueryParams(parameters) {
	          var params = Object.keys(parameters);
	          var queryParams = params.reduce(function (acc, key) {
	            var value = parameters[key];
	            if (value === undefined) {
	              return acc;
	            } else if (Array.isArray(value)) {
	              return Object.assign(Object.assign({}, acc), _defineProperty({}, key, value.join(',')));
	            } else if (value instanceof Date) {
	              return Object.assign(Object.assign({}, acc), _defineProperty({}, key, value.toISOString()));
	            }
	            return Object.assign(Object.assign({}, acc), _defineProperty({}, key, value));
	          }, {});
	          return queryParams;
	        }
	        function constructHostURL(host) {
	          try {
	            host = addProtocolIfNotPresent(host);
	            host = addTrailingSlash(host);
	            return host;
	          } catch (e) {
	            throw new MeiliSearchError('The provided host is not valid.');
	          }
	        }
	        function cloneAndParseHeaders(headers) {
	          if (Array.isArray(headers)) {
	            return headers.reduce(function (acc, headerPair) {
	              acc[headerPair[0]] = headerPair[1];
	              return acc;
	            }, {});
	          } else if ('has' in headers) {
	            var clonedHeaders = {};
	            headers.forEach(function (value, key) {
	              return clonedHeaders[key] = value;
	            });
	            return clonedHeaders;
	          } else {
	            return Object.assign({}, headers);
	          }
	        }
	        function createHeaders(config) {
	          var _a, _b;
	          var agentHeader = 'X-Meilisearch-Client';
	          var packageAgent = "Meilisearch JavaScript (v".concat(PACKAGE_VERSION, ")");
	          var contentType = 'Content-Type';
	          var authorization = 'Authorization';
	          var headers = cloneAndParseHeaders((_b = (_a = config.requestConfig) === null || _a === void 0 ? void 0 : _a.headers) !== null && _b !== void 0 ? _b : {});
	          // do not override if user provided the header
	          if (config.apiKey && !headers[authorization]) {
	            headers[authorization] = "Bearer ".concat(config.apiKey);
	          }
	          if (!headers[contentType]) {
	            headers['Content-Type'] = 'application/json';
	          }
	          // Creates the custom user agent with information on the package used.
	          if (config.clientAgents && Array.isArray(config.clientAgents)) {
	            var clients = config.clientAgents.concat(packageAgent);
	            headers[agentHeader] = clients.join(' ; ');
	          } else if (config.clientAgents && !Array.isArray(config.clientAgents)) {
	            // If the header is defined but not an array
	            throw new MeiliSearchError("Meilisearch: The header \"".concat(agentHeader, "\" should be an array of string(s).\n"));
	          } else {
	            headers[agentHeader] = packageAgent;
	          }
	          return headers;
	        }
	        var HttpRequests = /*#__PURE__*/function () {
	          function HttpRequests(config) {
	            _classCallCheck(this, HttpRequests);
	            this.headers = createHeaders(config);
	            this.requestConfig = config.requestConfig;
	            this.httpClient = config.httpClient;
	            this.requestTimeout = config.timeout;
	            try {
	              var host = constructHostURL(config.host);
	              this.url = new URL(host);
	            } catch (e) {
	              throw new MeiliSearchError('The provided host is not valid.');
	            }
	          }
	          _createClass(HttpRequests, [{
	            key: "request",
	            value: function request(_ref) {
	              var method = _ref.method,
	                url = _ref.url,
	                params = _ref.params,
	                body = _ref.body,
	                _ref$config = _ref.config,
	                config = _ref$config === void 0 ? {} : _ref$config;
	              var _a;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
	                var constructURL, queryParams, headers, result, response, parsedBody, stack;
	                return _regeneratorRuntime().wrap(function _callee$(_context) {
	                  while (1) switch (_context.prev = _context.next) {
	                    case 0:
	                      constructURL = new URL(url, this.url);
	                      if (params) {
	                        queryParams = new URLSearchParams();
	                        Object.keys(params).filter(function (x) {
	                          return params[x] !== null;
	                        }).map(function (x) {
	                          return queryParams.set(x, params[x]);
	                        });
	                        constructURL.search = queryParams.toString();
	                      }
	                      // in case a custom content-type is provided
	                      // do not stringify body
	                      if (!((_a = config.headers) === null || _a === void 0 ? void 0 : _a['Content-Type'])) {
	                        body = JSON.stringify(body);
	                      }
	                      headers = Object.assign(Object.assign({}, this.headers), config.headers);
	                      _context.prev = 5;
	                      result = this.fetchWithTimeout(constructURL.toString(), Object.assign(Object.assign(Object.assign({}, config), this.requestConfig), {
	                        method: method,
	                        body: body,
	                        headers: headers
	                      }), this.requestTimeout); // When using a custom HTTP client, the response is returned to allow the user to parse/handle it as they see fit
	                      if (!this.httpClient) {
	                        _context.next = 11;
	                        break;
	                      }
	                      _context.next = 10;
	                      return result;
	                    case 10:
	                      return _context.abrupt("return", _context.sent);
	                    case 11:
	                      _context.next = 13;
	                      return result.then(function (res) {
	                        return httpResponseErrorHandler(res);
	                      });
	                    case 13:
	                      response = _context.sent;
	                      _context.next = 16;
	                      return response.json().catch(function () {
	                        return undefined;
	                      });
	                    case 16:
	                      parsedBody = _context.sent;
	                      return _context.abrupt("return", parsedBody);
	                    case 20:
	                      _context.prev = 20;
	                      _context.t0 = _context["catch"](5);
	                      stack = _context.t0.stack;
	                      httpErrorHandler(_context.t0, stack, constructURL.toString());
	                    case 24:
	                    case "end":
	                      return _context.stop();
	                  }
	                }, _callee, this, [[5, 20]]);
	              }));
	            }
	          }, {
	            key: "fetchWithTimeout",
	            value: function fetchWithTimeout(url, options, timeout) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
	                var _this = this;
	                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	                  while (1) switch (_context2.prev = _context2.next) {
	                    case 0:
	                      return _context2.abrupt("return", new Promise(function (resolve, reject) {
	                        var fetchFn = _this.httpClient ? _this.httpClient : fetch;
	                        var fetchPromise = fetchFn(url, options);
	                        var promises = [fetchPromise];
	                        // TimeoutPromise will not run if undefined or zero
	                        var timeoutId;
	                        if (timeout) {
	                          var timeoutPromise = new Promise(function (_, reject) {
	                            timeoutId = setTimeout(function () {
	                              reject(new Error('Error: Request Timed Out'));
	                            }, timeout);
	                          });
	                          promises.push(timeoutPromise);
	                        }
	                        Promise.race(promises).then(resolve).catch(reject).finally(function () {
	                          clearTimeout(timeoutId);
	                        });
	                      }));
	                    case 1:
	                    case "end":
	                      return _context2.stop();
	                  }
	                }, _callee2);
	              }));
	            }
	          }, {
	            key: "get",
	            value: function get(url, params, config) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
	                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
	                  while (1) switch (_context3.prev = _context3.next) {
	                    case 0:
	                      _context3.next = 2;
	                      return this.request({
	                        method: 'GET',
	                        url: url,
	                        params: params,
	                        config: config
	                      });
	                    case 2:
	                      return _context3.abrupt("return", _context3.sent);
	                    case 3:
	                    case "end":
	                      return _context3.stop();
	                  }
	                }, _callee3, this);
	              }));
	            }
	          }, {
	            key: "post",
	            value: function post(url, data, params, config) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
	                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
	                  while (1) switch (_context4.prev = _context4.next) {
	                    case 0:
	                      _context4.next = 2;
	                      return this.request({
	                        method: 'POST',
	                        url: url,
	                        body: data,
	                        params: params,
	                        config: config
	                      });
	                    case 2:
	                      return _context4.abrupt("return", _context4.sent);
	                    case 3:
	                    case "end":
	                      return _context4.stop();
	                  }
	                }, _callee4, this);
	              }));
	            }
	          }, {
	            key: "put",
	            value: function put(url, data, params, config) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
	                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
	                  while (1) switch (_context5.prev = _context5.next) {
	                    case 0:
	                      _context5.next = 2;
	                      return this.request({
	                        method: 'PUT',
	                        url: url,
	                        body: data,
	                        params: params,
	                        config: config
	                      });
	                    case 2:
	                      return _context5.abrupt("return", _context5.sent);
	                    case 3:
	                    case "end":
	                      return _context5.stop();
	                  }
	                }, _callee5, this);
	              }));
	            }
	          }, {
	            key: "patch",
	            value: function patch(url, data, params, config) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
	                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
	                  while (1) switch (_context6.prev = _context6.next) {
	                    case 0:
	                      _context6.next = 2;
	                      return this.request({
	                        method: 'PATCH',
	                        url: url,
	                        body: data,
	                        params: params,
	                        config: config
	                      });
	                    case 2:
	                      return _context6.abrupt("return", _context6.sent);
	                    case 3:
	                    case "end":
	                      return _context6.stop();
	                  }
	                }, _callee6, this);
	              }));
	            }
	          }, {
	            key: "delete",
	            value: function _delete(url, data, params, config) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
	                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
	                  while (1) switch (_context7.prev = _context7.next) {
	                    case 0:
	                      _context7.next = 2;
	                      return this.request({
	                        method: 'DELETE',
	                        url: url,
	                        body: data,
	                        params: params,
	                        config: config
	                      });
	                    case 2:
	                      return _context7.abrupt("return", _context7.sent);
	                    case 3:
	                    case "end":
	                      return _context7.stop();
	                  }
	                }, _callee7, this);
	              }));
	            }
	          }]);
	          return HttpRequests;
	        }();
	        var EnqueuedTask = /*#__PURE__*/_createClass(function EnqueuedTask(task) {
	          _classCallCheck(this, EnqueuedTask);
	          this.taskUid = task.taskUid;
	          this.indexUid = task.indexUid;
	          this.status = task.status;
	          this.type = task.type;
	          this.enqueuedAt = new Date(task.enqueuedAt);
	        });
	        var Task = /*#__PURE__*/_createClass(function Task(task) {
	          _classCallCheck(this, Task);
	          this.indexUid = task.indexUid;
	          this.status = task.status;
	          this.type = task.type;
	          this.uid = task.uid;
	          this.details = task.details;
	          this.canceledBy = task.canceledBy;
	          this.error = task.error;
	          this.duration = task.duration;
	          this.startedAt = new Date(task.startedAt);
	          this.enqueuedAt = new Date(task.enqueuedAt);
	          this.finishedAt = new Date(task.finishedAt);
	        });
	        var TaskClient = /*#__PURE__*/function () {
	          function TaskClient(config) {
	            _classCallCheck(this, TaskClient);
	            this.httpRequest = new HttpRequests(config);
	          }
	          /**
	           * Get one task
	           *
	           * @param uid - Unique identifier of the task
	           * @returns
	           */
	          _createClass(TaskClient, [{
	            key: "getTask",
	            value: function getTask(uid) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
	                var url, taskItem;
	                return _regeneratorRuntime().wrap(function _callee$(_context) {
	                  while (1) switch (_context.prev = _context.next) {
	                    case 0:
	                      url = "tasks/".concat(uid);
	                      _context.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      taskItem = _context.sent;
	                      return _context.abrupt("return", new Task(taskItem));
	                    case 5:
	                    case "end":
	                      return _context.stop();
	                  }
	                }, _callee, this);
	              }));
	            }
	            /**
	             * Get tasks
	             *
	             * @param parameters - Parameters to browse the tasks
	             * @returns Promise containing all tasks
	             */
	          }, {
	            key: "getTasks",
	            value: function getTasks() {
	              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
	                var url, tasks;
	                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	                  while (1) switch (_context2.prev = _context2.next) {
	                    case 0:
	                      url = "tasks";
	                      _context2.next = 3;
	                      return this.httpRequest.get(url, toQueryParams(parameters));
	                    case 3:
	                      tasks = _context2.sent;
	                      return _context2.abrupt("return", Object.assign(Object.assign({}, tasks), {
	                        results: tasks.results.map(function (task) {
	                          return new Task(task);
	                        })
	                      }));
	                    case 5:
	                    case "end":
	                      return _context2.stop();
	                  }
	                }, _callee2, this);
	              }));
	            }
	            /**
	             * Wait for a task to be processed.
	             *
	             * @param taskUid - Task identifier
	             * @param options - Additional configuration options
	             * @returns Promise returning a task after it has been processed
	             */
	          }, {
	            key: "waitForTask",
	            value: function waitForTask(taskUid) {
	              var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	                _ref$timeOutMs = _ref.timeOutMs,
	                timeOutMs = _ref$timeOutMs === void 0 ? 5000 : _ref$timeOutMs,
	                _ref$intervalMs = _ref.intervalMs,
	                intervalMs = _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
	                var startingTime, response;
	                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
	                  while (1) switch (_context3.prev = _context3.next) {
	                    case 0:
	                      startingTime = Date.now();
	                    case 1:
	                      if (!(Date.now() - startingTime < timeOutMs)) {
	                        _context3.next = 11;
	                        break;
	                      }
	                      _context3.next = 4;
	                      return this.getTask(taskUid);
	                    case 4:
	                      response = _context3.sent;
	                      if ([TaskStatus.TASK_ENQUEUED, TaskStatus.TASK_PROCESSING].includes(response.status)) {
	                        _context3.next = 7;
	                        break;
	                      }
	                      return _context3.abrupt("return", response);
	                    case 7:
	                      _context3.next = 9;
	                      return sleep(intervalMs);
	                    case 9:
	                      _context3.next = 1;
	                      break;
	                    case 11:
	                      throw new MeiliSearchTimeOutError("timeout of ".concat(timeOutMs, "ms has exceeded on process ").concat(taskUid, " when waiting a task to be resolved."));
	                    case 12:
	                    case "end":
	                      return _context3.stop();
	                  }
	                }, _callee3, this);
	              }));
	            }
	            /**
	             * Waits for multiple tasks to be processed
	             *
	             * @param taskUids - Tasks identifier list
	             * @param options - Wait options
	             * @returns Promise returning a list of tasks after they have been processed
	             */
	          }, {
	            key: "waitForTasks",
	            value: function waitForTasks(taskUids) {
	              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	                _ref2$timeOutMs = _ref2.timeOutMs,
	                timeOutMs = _ref2$timeOutMs === void 0 ? 5000 : _ref2$timeOutMs,
	                _ref2$intervalMs = _ref2.intervalMs,
	                intervalMs = _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
	                var tasks, _iterator, _step, taskUid, task;
	                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
	                  while (1) switch (_context4.prev = _context4.next) {
	                    case 0:
	                      tasks = [];
	                      _iterator = _createForOfIteratorHelper(taskUids);
	                      _context4.prev = 2;
	                      _iterator.s();
	                    case 4:
	                      if ((_step = _iterator.n()).done) {
	                        _context4.next = 12;
	                        break;
	                      }
	                      taskUid = _step.value;
	                      _context4.next = 8;
	                      return this.waitForTask(taskUid, {
	                        timeOutMs: timeOutMs,
	                        intervalMs: intervalMs
	                      });
	                    case 8:
	                      task = _context4.sent;
	                      tasks.push(task);
	                    case 10:
	                      _context4.next = 4;
	                      break;
	                    case 12:
	                      _context4.next = 17;
	                      break;
	                    case 14:
	                      _context4.prev = 14;
	                      _context4.t0 = _context4["catch"](2);
	                      _iterator.e(_context4.t0);
	                    case 17:
	                      _context4.prev = 17;
	                      _iterator.f();
	                      return _context4.finish(17);
	                    case 20:
	                      return _context4.abrupt("return", tasks);
	                    case 21:
	                    case "end":
	                      return _context4.stop();
	                  }
	                }, _callee4, this, [[2, 14, 17, 20]]);
	              }));
	            }
	            /**
	             * Cancel a list of enqueued or processing tasks.
	             *
	             * @param parameters - Parameters to filter the tasks.
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "cancelTasks",
	            value: function cancelTasks() {
	              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
	                  while (1) switch (_context5.prev = _context5.next) {
	                    case 0:
	                      url = "tasks/cancel";
	                      _context5.next = 3;
	                      return this.httpRequest.post(url, {}, toQueryParams(parameters));
	                    case 3:
	                      task = _context5.sent;
	                      return _context5.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context5.stop();
	                  }
	                }, _callee5, this);
	              }));
	            }
	            /**
	             * Delete a list tasks.
	             *
	             * @param parameters - Parameters to filter the tasks.
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "deleteTasks",
	            value: function deleteTasks() {
	              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
	                  while (1) switch (_context6.prev = _context6.next) {
	                    case 0:
	                      url = "tasks";
	                      _context6.next = 3;
	                      return this.httpRequest.delete(url, {}, toQueryParams(parameters));
	                    case 3:
	                      task = _context6.sent;
	                      return _context6.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context6.stop();
	                  }
	                }, _callee6, this);
	              }));
	            }
	          }]);
	          return TaskClient;
	        }();

	        /*
	         * Bundle: MeiliSearch / Indexes
	         * Project: MeiliSearch - Javascript API
	         * Author: Quentin de Quelen <quentin@meilisearch.com>
	         * Copyright: 2019, MeiliSearch
	         */
	        var Index = /*#__PURE__*/function () {
	          /**
	           * @param config - Request configuration options
	           * @param uid - UID of the index
	           * @param primaryKey - Primary Key of the index
	           */
	          function Index(config, uid, primaryKey) {
	            _classCallCheck(this, Index);
	            this.uid = uid;
	            this.primaryKey = primaryKey;
	            this.httpRequest = new HttpRequests(config);
	            this.tasks = new TaskClient(config);
	          }
	          ///
	          /// SEARCH
	          ///
	          /**
	           * Search for documents into an index
	           *
	           * @param query - Query string
	           * @param options - Search options
	           * @param config - Additional request configuration options
	           * @returns Promise containing the search response
	           */
	          _createClass(Index, [{
	            key: "search",
	            value: function search(query, options, config) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee$(_context) {
	                  while (1) switch (_context.prev = _context.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/search");
	                      _context.next = 3;
	                      return this.httpRequest.post(url, removeUndefinedFromObject(Object.assign({
	                        q: query
	                      }, options)), undefined, config);
	                    case 3:
	                      return _context.abrupt("return", _context.sent);
	                    case 4:
	                    case "end":
	                      return _context.stop();
	                  }
	                }, _callee, this);
	              }));
	            }
	            /**
	             * Search for documents into an index using the GET method
	             *
	             * @param query - Query string
	             * @param options - Search options
	             * @param config - Additional request configuration options
	             * @returns Promise containing the search response
	             */
	          }, {
	            key: "searchGet",
	            value: function searchGet(query, options, config) {
	              var _a, _b, _c, _d, _e, _f, _g;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
	                var url, parseFilter, getParams;
	                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	                  while (1) switch (_context2.prev = _context2.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/search");
	                      parseFilter = function parseFilter(filter) {
	                        if (typeof filter === 'string') return filter;else if (Array.isArray(filter)) throw new MeiliSearchError('The filter query parameter should be in string format when using searchGet');else return undefined;
	                      };
	                      getParams = Object.assign(Object.assign({
	                        q: query
	                      }, options), {
	                        filter: parseFilter(options === null || options === void 0 ? void 0 : options.filter),
	                        sort: (_a = options === null || options === void 0 ? void 0 : options.sort) === null || _a === void 0 ? void 0 : _a.join(','),
	                        facets: (_b = options === null || options === void 0 ? void 0 : options.facets) === null || _b === void 0 ? void 0 : _b.join(','),
	                        attributesToRetrieve: (_c = options === null || options === void 0 ? void 0 : options.attributesToRetrieve) === null || _c === void 0 ? void 0 : _c.join(','),
	                        attributesToCrop: (_d = options === null || options === void 0 ? void 0 : options.attributesToCrop) === null || _d === void 0 ? void 0 : _d.join(','),
	                        attributesToHighlight: (_e = options === null || options === void 0 ? void 0 : options.attributesToHighlight) === null || _e === void 0 ? void 0 : _e.join(','),
	                        vector: (_f = options === null || options === void 0 ? void 0 : options.vector) === null || _f === void 0 ? void 0 : _f.join(','),
	                        attributesToSearchOn: (_g = options === null || options === void 0 ? void 0 : options.attributesToSearchOn) === null || _g === void 0 ? void 0 : _g.join(',')
	                      });
	                      _context2.next = 5;
	                      return this.httpRequest.get(url, removeUndefinedFromObject(getParams), config);
	                    case 5:
	                      return _context2.abrupt("return", _context2.sent);
	                    case 6:
	                    case "end":
	                      return _context2.stop();
	                  }
	                }, _callee2, this);
	              }));
	            }
	            /**
	             * Search for facet values
	             *
	             * @param params - Parameters used to search on the facets
	             * @param config - Additional request configuration options
	             * @returns Promise containing the search response
	             */
	          }, {
	            key: "searchForFacetValues",
	            value: function searchForFacetValues(params, config) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
	                  while (1) switch (_context3.prev = _context3.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/facet-search");
	                      _context3.next = 3;
	                      return this.httpRequest.post(url, removeUndefinedFromObject(params), undefined, config);
	                    case 3:
	                      return _context3.abrupt("return", _context3.sent);
	                    case 4:
	                    case "end":
	                      return _context3.stop();
	                  }
	                }, _callee3, this);
	              }));
	            }
	            ///
	            /// INDEX
	            ///
	            /**
	             * Get index information.
	             *
	             * @returns Promise containing index information
	             */
	          }, {
	            key: "getRawInfo",
	            value: function getRawInfo() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
	                var url, res;
	                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
	                  while (1) switch (_context4.prev = _context4.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid);
	                      _context4.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      res = _context4.sent;
	                      this.primaryKey = res.primaryKey;
	                      this.updatedAt = new Date(res.updatedAt);
	                      this.createdAt = new Date(res.createdAt);
	                      return _context4.abrupt("return", res);
	                    case 8:
	                    case "end":
	                      return _context4.stop();
	                  }
	                }, _callee4, this);
	              }));
	            }
	            /**
	             * Fetch and update Index information.
	             *
	             * @returns Promise to the current Index object with updated information
	             */
	          }, {
	            key: "fetchInfo",
	            value: function fetchInfo() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
	                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
	                  while (1) switch (_context5.prev = _context5.next) {
	                    case 0:
	                      _context5.next = 2;
	                      return this.getRawInfo();
	                    case 2:
	                      return _context5.abrupt("return", this);
	                    case 3:
	                    case "end":
	                      return _context5.stop();
	                  }
	                }, _callee5, this);
	              }));
	            }
	            /**
	             * Get Primary Key.
	             *
	             * @returns Promise containing the Primary Key of the index
	             */
	          }, {
	            key: "fetchPrimaryKey",
	            value: function fetchPrimaryKey() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
	                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
	                  while (1) switch (_context6.prev = _context6.next) {
	                    case 0:
	                      _context6.next = 2;
	                      return this.getRawInfo();
	                    case 2:
	                      this.primaryKey = _context6.sent.primaryKey;
	                      return _context6.abrupt("return", this.primaryKey);
	                    case 4:
	                    case "end":
	                      return _context6.stop();
	                  }
	                }, _callee6, this);
	              }));
	            }
	            /**
	             * Create an index.
	             *
	             * @param uid - Unique identifier of the Index
	             * @param options - Index options
	             * @param config - Request configuration options
	             * @returns Newly created Index object
	             */
	          }, {
	            key: "update",
	            value:
	            /**
	             * Update an index.
	             *
	             * @param data - Data to update
	             * @returns Promise to the current Index object with updated information
	             */
	            function update(data) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
	                  while (1) switch (_context7.prev = _context7.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid);
	                      _context7.next = 3;
	                      return this.httpRequest.patch(url, data);
	                    case 3:
	                      task = _context7.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context7.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context7.stop();
	                  }
	                }, _callee7, this);
	              }));
	            }
	            /**
	             * Delete an index.
	             *
	             * @returns Promise which resolves when index is deleted successfully
	             */
	          }, {
	            key: "delete",
	            value: function _delete() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
	                  while (1) switch (_context8.prev = _context8.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid);
	                      _context8.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context8.sent;
	                      return _context8.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context8.stop();
	                  }
	                }, _callee8, this);
	              }));
	            }
	            ///
	            /// TASKS
	            ///
	            /**
	             * Get the list of all the tasks of the index.
	             *
	             * @param parameters - Parameters to browse the tasks
	             * @returns Promise containing all tasks
	             */
	          }, {
	            key: "getTasks",
	            value: function getTasks() {
	              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
	                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
	                  while (1) switch (_context9.prev = _context9.next) {
	                    case 0:
	                      _context9.next = 2;
	                      return this.tasks.getTasks(Object.assign(Object.assign({}, parameters), {
	                        indexUids: [this.uid]
	                      }));
	                    case 2:
	                      return _context9.abrupt("return", _context9.sent);
	                    case 3:
	                    case "end":
	                      return _context9.stop();
	                  }
	                }, _callee9, this);
	              }));
	            }
	            /**
	             * Get one task of the index.
	             *
	             * @param taskUid - Task identifier
	             * @returns Promise containing a task
	             */
	          }, {
	            key: "getTask",
	            value: function getTask(taskUid) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
	                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
	                  while (1) switch (_context10.prev = _context10.next) {
	                    case 0:
	                      _context10.next = 2;
	                      return this.tasks.getTask(taskUid);
	                    case 2:
	                      return _context10.abrupt("return", _context10.sent);
	                    case 3:
	                    case "end":
	                      return _context10.stop();
	                  }
	                }, _callee10, this);
	              }));
	            }
	            /**
	             * Wait for multiple tasks to be processed.
	             *
	             * @param taskUids - Tasks identifier
	             * @param waitOptions - Options on timeout and interval
	             * @returns Promise containing an array of tasks
	             */
	          }, {
	            key: "waitForTasks",
	            value: function waitForTasks(taskUids) {
	              var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	                _ref$timeOutMs = _ref.timeOutMs,
	                timeOutMs = _ref$timeOutMs === void 0 ? 5000 : _ref$timeOutMs,
	                _ref$intervalMs = _ref.intervalMs,
	                intervalMs = _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
	                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
	                  while (1) switch (_context11.prev = _context11.next) {
	                    case 0:
	                      _context11.next = 2;
	                      return this.tasks.waitForTasks(taskUids, {
	                        timeOutMs: timeOutMs,
	                        intervalMs: intervalMs
	                      });
	                    case 2:
	                      return _context11.abrupt("return", _context11.sent);
	                    case 3:
	                    case "end":
	                      return _context11.stop();
	                  }
	                }, _callee11, this);
	              }));
	            }
	            /**
	             * Wait for a task to be processed.
	             *
	             * @param taskUid - Task identifier
	             * @param waitOptions - Options on timeout and interval
	             * @returns Promise containing an array of tasks
	             */
	          }, {
	            key: "waitForTask",
	            value: function waitForTask(taskUid) {
	              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	                _ref2$timeOutMs = _ref2.timeOutMs,
	                timeOutMs = _ref2$timeOutMs === void 0 ? 5000 : _ref2$timeOutMs,
	                _ref2$intervalMs = _ref2.intervalMs,
	                intervalMs = _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
	                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
	                  while (1) switch (_context12.prev = _context12.next) {
	                    case 0:
	                      _context12.next = 2;
	                      return this.tasks.waitForTask(taskUid, {
	                        timeOutMs: timeOutMs,
	                        intervalMs: intervalMs
	                      });
	                    case 2:
	                      return _context12.abrupt("return", _context12.sent);
	                    case 3:
	                    case "end":
	                      return _context12.stop();
	                  }
	                }, _callee12, this);
	              }));
	            }
	            ///
	            /// STATS
	            ///
	            /**
	             * Get stats of an index
	             *
	             * @returns Promise containing object with stats of the index
	             */
	          }, {
	            key: "getStats",
	            value: function getStats() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
	                  while (1) switch (_context13.prev = _context13.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/stats");
	                      _context13.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context13.abrupt("return", _context13.sent);
	                    case 4:
	                    case "end":
	                      return _context13.stop();
	                  }
	                }, _callee13, this);
	              }));
	            }
	            ///
	            /// DOCUMENTS
	            ///
	            /**
	             * Get documents of an index.
	             *
	             * @param parameters - Parameters to browse the documents. Parameters can
	             *   contain the `filter` field only available in Meilisearch v1.2 and newer
	             * @returns Promise containing the returned documents
	             */
	          }, {
	            key: "getDocuments",
	            value: function getDocuments() {
	              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              var _a;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
	                var url, _url, fields;
	                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
	                  while (1) switch (_context14.prev = _context14.next) {
	                    case 0:
	                      parameters = removeUndefinedFromObject(parameters);
	                      // In case `filter` is provided, use `POST /documents/fetch`
	                      if (!(parameters.filter !== undefined)) {
	                        _context14.next = 15;
	                        break;
	                      }
	                      _context14.prev = 2;
	                      url = "indexes/".concat(this.uid, "/documents/fetch");
	                      _context14.next = 6;
	                      return this.httpRequest.post(url, parameters);
	                    case 6:
	                      return _context14.abrupt("return", _context14.sent);
	                    case 9:
	                      _context14.prev = 9;
	                      _context14.t0 = _context14["catch"](2);
	                      if (_context14.t0 instanceof MeiliSearchCommunicationError) {
	                        _context14.t0.message = versionErrorHintMessage(_context14.t0.message, 'getDocuments');
	                      } else if (_context14.t0 instanceof MeiliSearchApiError) {
	                        _context14.t0.message = versionErrorHintMessage(_context14.t0.message, 'getDocuments');
	                      }
	                      throw _context14.t0;
	                    case 13:
	                      _context14.next = 20;
	                      break;
	                    case 15:
	                      _url = "indexes/".concat(this.uid, "/documents"); // Transform fields to query parameter string format
	                      fields = Array.isArray(parameters === null || parameters === void 0 ? void 0 : parameters.fields) ? {
	                        fields: (_a = parameters === null || parameters === void 0 ? void 0 : parameters.fields) === null || _a === void 0 ? void 0 : _a.join(',')
	                      } : {};
	                      _context14.next = 19;
	                      return this.httpRequest.get(_url, Object.assign(Object.assign({}, parameters), fields));
	                    case 19:
	                      return _context14.abrupt("return", _context14.sent);
	                    case 20:
	                    case "end":
	                      return _context14.stop();
	                  }
	                }, _callee14, this, [[2, 9]]);
	              }));
	            }
	            /**
	             * Get one document
	             *
	             * @param documentId - Document ID
	             * @param parameters - Parameters applied on a document
	             * @returns Promise containing Document response
	             */
	          }, {
	            key: "getDocument",
	            value: function getDocument(documentId, parameters) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
	                var url, fields;
	                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
	                  while (1) switch (_context15.prev = _context15.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/documents/").concat(documentId);
	                      fields = function () {
	                        var _a;
	                        if (Array.isArray(parameters === null || parameters === void 0 ? void 0 : parameters.fields)) {
	                          return (_a = parameters === null || parameters === void 0 ? void 0 : parameters.fields) === null || _a === void 0 ? void 0 : _a.join(',');
	                        }
	                        return undefined;
	                      }();
	                      _context15.next = 4;
	                      return this.httpRequest.get(url, removeUndefinedFromObject(Object.assign(Object.assign({}, parameters), {
	                        fields: fields
	                      })));
	                    case 4:
	                      return _context15.abrupt("return", _context15.sent);
	                    case 5:
	                    case "end":
	                      return _context15.stop();
	                  }
	                }, _callee15, this);
	              }));
	            }
	            /**
	             * Add or replace multiples documents to an index
	             *
	             * @param documents - Array of Document objects to add/replace
	             * @param options - Options on document addition
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "addDocuments",
	            value: function addDocuments(documents, options) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
	                  while (1) switch (_context16.prev = _context16.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/documents");
	                      _context16.next = 3;
	                      return this.httpRequest.post(url, documents, options);
	                    case 3:
	                      task = _context16.sent;
	                      return _context16.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context16.stop();
	                  }
	                }, _callee16, this);
	              }));
	            }
	            /**
	             * Add or replace multiples documents in a string format to an index. It only
	             * supports csv, ndjson and json formats.
	             *
	             * @param documents - Documents provided in a string to add/replace
	             * @param contentType - Content type of your document:
	             *   'text/csv'|'application/x-ndjson'|'application/json'
	             * @param options - Options on document addition
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "addDocumentsFromString",
	            value: function addDocumentsFromString(documents, contentType, queryParams) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee17$(_context17) {
	                  while (1) switch (_context17.prev = _context17.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/documents");
	                      _context17.next = 3;
	                      return this.httpRequest.post(url, documents, queryParams, {
	                        headers: {
	                          'Content-Type': contentType
	                        }
	                      });
	                    case 3:
	                      task = _context17.sent;
	                      return _context17.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context17.stop();
	                  }
	                }, _callee17, this);
	              }));
	            }
	            /**
	             * Add or replace multiples documents to an index in batches
	             *
	             * @param documents - Array of Document objects to add/replace
	             * @param batchSize - Size of the batch
	             * @param options - Options on document addition
	             * @returns Promise containing array of enqueued task objects for each batch
	             */
	          }, {
	            key: "addDocumentsInBatches",
	            value: function addDocumentsInBatches(documents) {
	              var batchSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
	              var options = arguments.length > 2 ? arguments[2] : undefined;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
	                var updates, i;
	                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
	                  while (1) switch (_context18.prev = _context18.next) {
	                    case 0:
	                      updates = [];
	                      i = 0;
	                    case 2:
	                      if (!(i < documents.length)) {
	                        _context18.next = 11;
	                        break;
	                      }
	                      _context18.t0 = updates;
	                      _context18.next = 6;
	                      return this.addDocuments(documents.slice(i, i + batchSize), options);
	                    case 6:
	                      _context18.t1 = _context18.sent;
	                      _context18.t0.push.call(_context18.t0, _context18.t1);
	                    case 8:
	                      i += batchSize;
	                      _context18.next = 2;
	                      break;
	                    case 11:
	                      return _context18.abrupt("return", updates);
	                    case 12:
	                    case "end":
	                      return _context18.stop();
	                  }
	                }, _callee18, this);
	              }));
	            }
	            /**
	             * Add or update multiples documents to an index
	             *
	             * @param documents - Array of Document objects to add/update
	             * @param options - Options on document update
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateDocuments",
	            value: function updateDocuments(documents, options) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee19$(_context19) {
	                  while (1) switch (_context19.prev = _context19.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/documents");
	                      _context19.next = 3;
	                      return this.httpRequest.put(url, documents, options);
	                    case 3:
	                      task = _context19.sent;
	                      return _context19.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context19.stop();
	                  }
	                }, _callee19, this);
	              }));
	            }
	            /**
	             * Add or update multiples documents to an index in batches
	             *
	             * @param documents - Array of Document objects to add/update
	             * @param batchSize - Size of the batch
	             * @param options - Options on document update
	             * @returns Promise containing array of enqueued task objects for each batch
	             */
	          }, {
	            key: "updateDocumentsInBatches",
	            value: function updateDocumentsInBatches(documents) {
	              var batchSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
	              var options = arguments.length > 2 ? arguments[2] : undefined;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
	                var updates, i;
	                return _regeneratorRuntime().wrap(function _callee20$(_context20) {
	                  while (1) switch (_context20.prev = _context20.next) {
	                    case 0:
	                      updates = [];
	                      i = 0;
	                    case 2:
	                      if (!(i < documents.length)) {
	                        _context20.next = 11;
	                        break;
	                      }
	                      _context20.t0 = updates;
	                      _context20.next = 6;
	                      return this.updateDocuments(documents.slice(i, i + batchSize), options);
	                    case 6:
	                      _context20.t1 = _context20.sent;
	                      _context20.t0.push.call(_context20.t0, _context20.t1);
	                    case 8:
	                      i += batchSize;
	                      _context20.next = 2;
	                      break;
	                    case 11:
	                      return _context20.abrupt("return", updates);
	                    case 12:
	                    case "end":
	                      return _context20.stop();
	                  }
	                }, _callee20, this);
	              }));
	            }
	            /**
	             * Add or update multiples documents in a string format to an index. It only
	             * supports csv, ndjson and json formats.
	             *
	             * @param documents - Documents provided in a string to add/update
	             * @param contentType - Content type of your document:
	             *   'text/csv'|'application/x-ndjson'|'application/json'
	             * @param queryParams - Options on raw document addition
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateDocumentsFromString",
	            value: function updateDocumentsFromString(documents, contentType, queryParams) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee21$(_context21) {
	                  while (1) switch (_context21.prev = _context21.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/documents");
	                      _context21.next = 3;
	                      return this.httpRequest.put(url, documents, queryParams, {
	                        headers: {
	                          'Content-Type': contentType
	                        }
	                      });
	                    case 3:
	                      task = _context21.sent;
	                      return _context21.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context21.stop();
	                  }
	                }, _callee21, this);
	              }));
	            }
	            /**
	             * Delete one document
	             *
	             * @param documentId - Id of Document to delete
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "deleteDocument",
	            value: function deleteDocument(documentId) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee22$(_context22) {
	                  while (1) switch (_context22.prev = _context22.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/documents/").concat(documentId);
	                      _context22.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context22.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context22.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context22.stop();
	                  }
	                }, _callee22, this);
	              }));
	            }
	            /**
	             * Delete multiples documents of an index.
	             *
	             * @param params - Params value can be:
	             *
	             *   - DocumentsDeletionQuery: An object containing the parameters to customize
	             *       your document deletion. Only available in Meilisearch v1.2 and newer
	             *   - DocumentsIds: An array of document ids to delete
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "deleteDocuments",
	            value: function deleteDocuments(params) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
	                var isDocumentsDeletionQuery, endpoint, url, task;
	                return _regeneratorRuntime().wrap(function _callee23$(_context23) {
	                  while (1) switch (_context23.prev = _context23.next) {
	                    case 0:
	                      // If params is of type DocumentsDeletionQuery
	                      isDocumentsDeletionQuery = !Array.isArray(params) && _typeof(params) === 'object';
	                      endpoint = isDocumentsDeletionQuery ? 'documents/delete' : 'documents/delete-batch';
	                      url = "indexes/".concat(this.uid, "/").concat(endpoint);
	                      _context23.prev = 3;
	                      _context23.next = 6;
	                      return this.httpRequest.post(url, params);
	                    case 6:
	                      task = _context23.sent;
	                      return _context23.abrupt("return", new EnqueuedTask(task));
	                    case 10:
	                      _context23.prev = 10;
	                      _context23.t0 = _context23["catch"](3);
	                      if (_context23.t0 instanceof MeiliSearchCommunicationError && isDocumentsDeletionQuery) {
	                        _context23.t0.message = versionErrorHintMessage(_context23.t0.message, 'deleteDocuments');
	                      } else if (_context23.t0 instanceof MeiliSearchApiError) {
	                        _context23.t0.message = versionErrorHintMessage(_context23.t0.message, 'deleteDocuments');
	                      }
	                      throw _context23.t0;
	                    case 14:
	                    case "end":
	                      return _context23.stop();
	                  }
	                }, _callee23, this, [[3, 10]]);
	              }));
	            }
	            /**
	             * Delete all documents of an index
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "deleteAllDocuments",
	            value: function deleteAllDocuments() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee24$(_context24) {
	                  while (1) switch (_context24.prev = _context24.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/documents");
	                      _context24.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context24.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context24.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context24.stop();
	                  }
	                }, _callee24, this);
	              }));
	            }
	            ///
	            /// SETTINGS
	            ///
	            /**
	             * Retrieve all settings
	             *
	             * @returns Promise containing Settings object
	             */
	          }, {
	            key: "getSettings",
	            value: function getSettings() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee25$(_context25) {
	                  while (1) switch (_context25.prev = _context25.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings");
	                      _context25.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context25.abrupt("return", _context25.sent);
	                    case 4:
	                    case "end":
	                      return _context25.stop();
	                  }
	                }, _callee25, this);
	              }));
	            }
	            /**
	             * Update all settings Any parameters not provided will be left unchanged.
	             *
	             * @param settings - Object containing parameters with their updated values
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateSettings",
	            value: function updateSettings(settings) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee26$(_context26) {
	                  while (1) switch (_context26.prev = _context26.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings");
	                      _context26.next = 3;
	                      return this.httpRequest.patch(url, settings);
	                    case 3:
	                      task = _context26.sent;
	                      task.enqueued = new Date(task.enqueuedAt);
	                      return _context26.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context26.stop();
	                  }
	                }, _callee26, this);
	              }));
	            }
	            /**
	             * Reset settings.
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetSettings",
	            value: function resetSettings() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee27$(_context27) {
	                  while (1) switch (_context27.prev = _context27.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings");
	                      _context27.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context27.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context27.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context27.stop();
	                  }
	                }, _callee27, this);
	              }));
	            }
	            ///
	            /// PAGINATION SETTINGS
	            ///
	            /**
	             * Get the pagination settings.
	             *
	             * @returns Promise containing object of pagination settings
	             */
	          }, {
	            key: "getPagination",
	            value: function getPagination() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee28$(_context28) {
	                  while (1) switch (_context28.prev = _context28.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/pagination");
	                      _context28.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context28.abrupt("return", _context28.sent);
	                    case 4:
	                    case "end":
	                      return _context28.stop();
	                  }
	                }, _callee28, this);
	              }));
	            }
	            /**
	             * Update the pagination settings.
	             *
	             * @param pagination - Pagination object
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updatePagination",
	            value: function updatePagination(pagination) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee29$(_context29) {
	                  while (1) switch (_context29.prev = _context29.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/pagination");
	                      _context29.next = 3;
	                      return this.httpRequest.patch(url, pagination);
	                    case 3:
	                      task = _context29.sent;
	                      return _context29.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context29.stop();
	                  }
	                }, _callee29, this);
	              }));
	            }
	            /**
	             * Reset the pagination settings.
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetPagination",
	            value: function resetPagination() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee30$(_context30) {
	                  while (1) switch (_context30.prev = _context30.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/pagination");
	                      _context30.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context30.sent;
	                      return _context30.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context30.stop();
	                  }
	                }, _callee30, this);
	              }));
	            }
	            ///
	            /// SYNONYMS
	            ///
	            /**
	             * Get the list of all synonyms
	             *
	             * @returns Promise containing object of synonym mappings
	             */
	          }, {
	            key: "getSynonyms",
	            value: function getSynonyms() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee31$(_context31) {
	                  while (1) switch (_context31.prev = _context31.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/synonyms");
	                      _context31.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context31.abrupt("return", _context31.sent);
	                    case 4:
	                    case "end":
	                      return _context31.stop();
	                  }
	                }, _callee31, this);
	              }));
	            }
	            /**
	             * Update the list of synonyms. Overwrite the old list.
	             *
	             * @param synonyms - Mapping of synonyms with their associated words
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateSynonyms",
	            value: function updateSynonyms(synonyms) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee32$(_context32) {
	                  while (1) switch (_context32.prev = _context32.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/synonyms");
	                      _context32.next = 3;
	                      return this.httpRequest.put(url, synonyms);
	                    case 3:
	                      task = _context32.sent;
	                      return _context32.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context32.stop();
	                  }
	                }, _callee32, this);
	              }));
	            }
	            /**
	             * Reset the synonym list to be empty again
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetSynonyms",
	            value: function resetSynonyms() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee33$(_context33) {
	                  while (1) switch (_context33.prev = _context33.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/synonyms");
	                      _context33.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context33.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context33.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context33.stop();
	                  }
	                }, _callee33, this);
	              }));
	            }
	            ///
	            /// STOP WORDS
	            ///
	            /**
	             * Get the list of all stop-words
	             *
	             * @returns Promise containing array of stop-words
	             */
	          }, {
	            key: "getStopWords",
	            value: function getStopWords() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee34$(_context34) {
	                  while (1) switch (_context34.prev = _context34.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/stop-words");
	                      _context34.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context34.abrupt("return", _context34.sent);
	                    case 4:
	                    case "end":
	                      return _context34.stop();
	                  }
	                }, _callee34, this);
	              }));
	            }
	            /**
	             * Update the list of stop-words. Overwrite the old list.
	             *
	             * @param stopWords - Array of strings that contains the stop-words.
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateStopWords",
	            value: function updateStopWords(stopWords) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee35$(_context35) {
	                  while (1) switch (_context35.prev = _context35.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/stop-words");
	                      _context35.next = 3;
	                      return this.httpRequest.put(url, stopWords);
	                    case 3:
	                      task = _context35.sent;
	                      return _context35.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context35.stop();
	                  }
	                }, _callee35, this);
	              }));
	            }
	            /**
	             * Reset the stop-words list to be empty again
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetStopWords",
	            value: function resetStopWords() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee36$(_context36) {
	                  while (1) switch (_context36.prev = _context36.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/stop-words");
	                      _context36.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context36.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context36.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context36.stop();
	                  }
	                }, _callee36, this);
	              }));
	            }
	            ///
	            /// RANKING RULES
	            ///
	            /**
	             * Get the list of all ranking-rules
	             *
	             * @returns Promise containing array of ranking-rules
	             */
	          }, {
	            key: "getRankingRules",
	            value: function getRankingRules() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee37$(_context37) {
	                  while (1) switch (_context37.prev = _context37.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/ranking-rules");
	                      _context37.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context37.abrupt("return", _context37.sent);
	                    case 4:
	                    case "end":
	                      return _context37.stop();
	                  }
	                }, _callee37, this);
	              }));
	            }
	            /**
	             * Update the list of ranking-rules. Overwrite the old list.
	             *
	             * @param rankingRules - Array that contain ranking rules sorted by order of
	             *   importance.
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateRankingRules",
	            value: function updateRankingRules(rankingRules) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee38$(_context38) {
	                  while (1) switch (_context38.prev = _context38.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/ranking-rules");
	                      _context38.next = 3;
	                      return this.httpRequest.put(url, rankingRules);
	                    case 3:
	                      task = _context38.sent;
	                      return _context38.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context38.stop();
	                  }
	                }, _callee38, this);
	              }));
	            }
	            /**
	             * Reset the ranking rules list to its default value
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetRankingRules",
	            value: function resetRankingRules() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee39$(_context39) {
	                  while (1) switch (_context39.prev = _context39.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/ranking-rules");
	                      _context39.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context39.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context39.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context39.stop();
	                  }
	                }, _callee39, this);
	              }));
	            }
	            ///
	            /// DISTINCT ATTRIBUTE
	            ///
	            /**
	             * Get the distinct-attribute
	             *
	             * @returns Promise containing the distinct-attribute of the index
	             */
	          }, {
	            key: "getDistinctAttribute",
	            value: function getDistinctAttribute() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee40$(_context40) {
	                  while (1) switch (_context40.prev = _context40.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
	                      _context40.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context40.abrupt("return", _context40.sent);
	                    case 4:
	                    case "end":
	                      return _context40.stop();
	                  }
	                }, _callee40, this);
	              }));
	            }
	            /**
	             * Update the distinct-attribute.
	             *
	             * @param distinctAttribute - Field name of the distinct-attribute
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateDistinctAttribute",
	            value: function updateDistinctAttribute(distinctAttribute) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee41$(_context41) {
	                  while (1) switch (_context41.prev = _context41.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
	                      _context41.next = 3;
	                      return this.httpRequest.put(url, distinctAttribute);
	                    case 3:
	                      task = _context41.sent;
	                      return _context41.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context41.stop();
	                  }
	                }, _callee41, this);
	              }));
	            }
	            /**
	             * Reset the distinct-attribute.
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetDistinctAttribute",
	            value: function resetDistinctAttribute() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee42$(_context42) {
	                  while (1) switch (_context42.prev = _context42.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
	                      _context42.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context42.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context42.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context42.stop();
	                  }
	                }, _callee42, this);
	              }));
	            }
	            ///
	            /// FILTERABLE ATTRIBUTES
	            ///
	            /**
	             * Get the filterable-attributes
	             *
	             * @returns Promise containing an array of filterable-attributes
	             */
	          }, {
	            key: "getFilterableAttributes",
	            value: function getFilterableAttributes() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee43$(_context43) {
	                  while (1) switch (_context43.prev = _context43.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
	                      _context43.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context43.abrupt("return", _context43.sent);
	                    case 4:
	                    case "end":
	                      return _context43.stop();
	                  }
	                }, _callee43, this);
	              }));
	            }
	            /**
	             * Update the filterable-attributes.
	             *
	             * @param filterableAttributes - Array of strings containing the attributes
	             *   that can be used as filters at query time
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateFilterableAttributes",
	            value: function updateFilterableAttributes(filterableAttributes) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee44$(_context44) {
	                  while (1) switch (_context44.prev = _context44.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
	                      _context44.next = 3;
	                      return this.httpRequest.put(url, filterableAttributes);
	                    case 3:
	                      task = _context44.sent;
	                      return _context44.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context44.stop();
	                  }
	                }, _callee44, this);
	              }));
	            }
	            /**
	             * Reset the filterable-attributes.
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetFilterableAttributes",
	            value: function resetFilterableAttributes() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee45$(_context45) {
	                  while (1) switch (_context45.prev = _context45.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
	                      _context45.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context45.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context45.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context45.stop();
	                  }
	                }, _callee45, this);
	              }));
	            }
	            ///
	            /// SORTABLE ATTRIBUTES
	            ///
	            /**
	             * Get the sortable-attributes
	             *
	             * @returns Promise containing array of sortable-attributes
	             */
	          }, {
	            key: "getSortableAttributes",
	            value: function getSortableAttributes() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee46$(_context46) {
	                  while (1) switch (_context46.prev = _context46.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
	                      _context46.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context46.abrupt("return", _context46.sent);
	                    case 4:
	                    case "end":
	                      return _context46.stop();
	                  }
	                }, _callee46, this);
	              }));
	            }
	            /**
	             * Update the sortable-attributes.
	             *
	             * @param sortableAttributes - Array of strings containing the attributes that
	             *   can be used to sort search results at query time
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateSortableAttributes",
	            value: function updateSortableAttributes(sortableAttributes) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee47$(_context47) {
	                  while (1) switch (_context47.prev = _context47.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
	                      _context47.next = 3;
	                      return this.httpRequest.put(url, sortableAttributes);
	                    case 3:
	                      task = _context47.sent;
	                      return _context47.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context47.stop();
	                  }
	                }, _callee47, this);
	              }));
	            }
	            /**
	             * Reset the sortable-attributes.
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetSortableAttributes",
	            value: function resetSortableAttributes() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee48$(_context48) {
	                  while (1) switch (_context48.prev = _context48.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
	                      _context48.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context48.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context48.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context48.stop();
	                  }
	                }, _callee48, this);
	              }));
	            }
	            ///
	            /// SEARCHABLE ATTRIBUTE
	            ///
	            /**
	             * Get the searchable-attributes
	             *
	             * @returns Promise containing array of searchable-attributes
	             */
	          }, {
	            key: "getSearchableAttributes",
	            value: function getSearchableAttributes() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee49$(_context49) {
	                  while (1) switch (_context49.prev = _context49.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
	                      _context49.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context49.abrupt("return", _context49.sent);
	                    case 4:
	                    case "end":
	                      return _context49.stop();
	                  }
	                }, _callee49, this);
	              }));
	            }
	            /**
	             * Update the searchable-attributes.
	             *
	             * @param searchableAttributes - Array of strings that contains searchable
	             *   attributes sorted by order of importance(most to least important)
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateSearchableAttributes",
	            value: function updateSearchableAttributes(searchableAttributes) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee50$(_context50) {
	                  while (1) switch (_context50.prev = _context50.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
	                      _context50.next = 3;
	                      return this.httpRequest.put(url, searchableAttributes);
	                    case 3:
	                      task = _context50.sent;
	                      return _context50.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context50.stop();
	                  }
	                }, _callee50, this);
	              }));
	            }
	            /**
	             * Reset the searchable-attributes.
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetSearchableAttributes",
	            value: function resetSearchableAttributes() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee51$(_context51) {
	                  while (1) switch (_context51.prev = _context51.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
	                      _context51.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context51.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context51.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context51.stop();
	                  }
	                }, _callee51, this);
	              }));
	            }
	            ///
	            /// DISPLAYED ATTRIBUTE
	            ///
	            /**
	             * Get the displayed-attributes
	             *
	             * @returns Promise containing array of displayed-attributes
	             */
	          }, {
	            key: "getDisplayedAttributes",
	            value: function getDisplayedAttributes() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee52$(_context52) {
	                  while (1) switch (_context52.prev = _context52.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
	                      _context52.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context52.abrupt("return", _context52.sent);
	                    case 4:
	                    case "end":
	                      return _context52.stop();
	                  }
	                }, _callee52, this);
	              }));
	            }
	            /**
	             * Update the displayed-attributes.
	             *
	             * @param displayedAttributes - Array of strings that contains attributes of
	             *   an index to display
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateDisplayedAttributes",
	            value: function updateDisplayedAttributes(displayedAttributes) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee53$(_context53) {
	                  while (1) switch (_context53.prev = _context53.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
	                      _context53.next = 3;
	                      return this.httpRequest.put(url, displayedAttributes);
	                    case 3:
	                      task = _context53.sent;
	                      return _context53.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context53.stop();
	                  }
	                }, _callee53, this);
	              }));
	            }
	            /**
	             * Reset the displayed-attributes.
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetDisplayedAttributes",
	            value: function resetDisplayedAttributes() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee54$(_context54) {
	                  while (1) switch (_context54.prev = _context54.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
	                      _context54.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context54.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context54.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context54.stop();
	                  }
	                }, _callee54, this);
	              }));
	            }
	            ///
	            /// TYPO TOLERANCE
	            ///
	            /**
	             * Get the typo tolerance settings.
	             *
	             * @returns Promise containing the typo tolerance settings.
	             */
	          }, {
	            key: "getTypoTolerance",
	            value: function getTypoTolerance() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee55$(_context55) {
	                  while (1) switch (_context55.prev = _context55.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
	                      _context55.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context55.abrupt("return", _context55.sent);
	                    case 4:
	                    case "end":
	                      return _context55.stop();
	                  }
	                }, _callee55, this);
	              }));
	            }
	            /**
	             * Update the typo tolerance settings.
	             *
	             * @param typoTolerance - Object containing the custom typo tolerance
	             *   settings.
	             * @returns Promise containing object of the enqueued update
	             */
	          }, {
	            key: "updateTypoTolerance",
	            value: function updateTypoTolerance(typoTolerance) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee56$(_context56) {
	                  while (1) switch (_context56.prev = _context56.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
	                      _context56.next = 3;
	                      return this.httpRequest.patch(url, typoTolerance);
	                    case 3:
	                      task = _context56.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context56.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context56.stop();
	                  }
	                }, _callee56, this);
	              }));
	            }
	            /**
	             * Reset the typo tolerance settings.
	             *
	             * @returns Promise containing object of the enqueued update
	             */
	          }, {
	            key: "resetTypoTolerance",
	            value: function resetTypoTolerance() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee57$(_context57) {
	                  while (1) switch (_context57.prev = _context57.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
	                      _context57.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context57.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context57.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context57.stop();
	                  }
	                }, _callee57, this);
	              }));
	            }
	            ///
	            /// FACETING
	            ///
	            /**
	             * Get the faceting settings.
	             *
	             * @returns Promise containing object of faceting index settings
	             */
	          }, {
	            key: "getFaceting",
	            value: function getFaceting() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee58$(_context58) {
	                  while (1) switch (_context58.prev = _context58.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/faceting");
	                      _context58.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context58.abrupt("return", _context58.sent);
	                    case 4:
	                    case "end":
	                      return _context58.stop();
	                  }
	                }, _callee58, this);
	              }));
	            }
	            /**
	             * Update the faceting settings.
	             *
	             * @param faceting - Faceting index settings object
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "updateFaceting",
	            value: function updateFaceting(faceting) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee59$(_context59) {
	                  while (1) switch (_context59.prev = _context59.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/faceting");
	                      _context59.next = 3;
	                      return this.httpRequest.patch(url, faceting);
	                    case 3:
	                      task = _context59.sent;
	                      return _context59.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context59.stop();
	                  }
	                }, _callee59, this);
	              }));
	            }
	            /**
	             * Reset the faceting settings.
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetFaceting",
	            value: function resetFaceting() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee60$(_context60) {
	                  while (1) switch (_context60.prev = _context60.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/faceting");
	                      _context60.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context60.sent;
	                      return _context60.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context60.stop();
	                  }
	                }, _callee60, this);
	              }));
	            }
	            ///
	            /// SEPARATOR TOKENS
	            ///
	            /**
	             * Get the list of all separator tokens.
	             *
	             * @returns Promise containing array of separator tokens
	             */
	          }, {
	            key: "getSeparatorTokens",
	            value: function getSeparatorTokens() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee61$(_context61) {
	                  while (1) switch (_context61.prev = _context61.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/separator-tokens");
	                      _context61.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context61.abrupt("return", _context61.sent);
	                    case 4:
	                    case "end":
	                      return _context61.stop();
	                  }
	                }, _callee61, this);
	              }));
	            }
	            /**
	             * Update the list of separator tokens. Overwrite the old list.
	             *
	             * @param separatorTokens - Array that contains separator tokens.
	             * @returns Promise containing an EnqueuedTask or null
	             */
	          }, {
	            key: "updateSeparatorTokens",
	            value: function updateSeparatorTokens(separatorTokens) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee62$(_context62) {
	                  while (1) switch (_context62.prev = _context62.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/separator-tokens");
	                      _context62.next = 3;
	                      return this.httpRequest.put(url, separatorTokens);
	                    case 3:
	                      task = _context62.sent;
	                      return _context62.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context62.stop();
	                  }
	                }, _callee62, this);
	              }));
	            }
	            /**
	             * Reset the separator tokens list to its default value
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetSeparatorTokens",
	            value: function resetSeparatorTokens() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee63$(_context63) {
	                  while (1) switch (_context63.prev = _context63.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/separator-tokens");
	                      _context63.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context63.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context63.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context63.stop();
	                  }
	                }, _callee63, this);
	              }));
	            }
	            ///
	            /// NON-SEPARATOR TOKENS
	            ///
	            /**
	             * Get the list of all non-separator tokens.
	             *
	             * @returns Promise containing array of non-separator tokens
	             */
	          }, {
	            key: "getNonSeparatorTokens",
	            value: function getNonSeparatorTokens() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee64$(_context64) {
	                  while (1) switch (_context64.prev = _context64.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/non-separator-tokens");
	                      _context64.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context64.abrupt("return", _context64.sent);
	                    case 4:
	                    case "end":
	                      return _context64.stop();
	                  }
	                }, _callee64, this);
	              }));
	            }
	            /**
	             * Update the list of non-separator tokens. Overwrite the old list.
	             *
	             * @param nonSeparatorTokens - Array that contains non-separator tokens.
	             * @returns Promise containing an EnqueuedTask or null
	             */
	          }, {
	            key: "updateNonSeparatorTokens",
	            value: function updateNonSeparatorTokens(nonSeparatorTokens) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee65$(_context65) {
	                  while (1) switch (_context65.prev = _context65.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/non-separator-tokens");
	                      _context65.next = 3;
	                      return this.httpRequest.put(url, nonSeparatorTokens);
	                    case 3:
	                      task = _context65.sent;
	                      return _context65.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context65.stop();
	                  }
	                }, _callee65, this);
	              }));
	            }
	            /**
	             * Reset the non-separator tokens list to its default value
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetNonSeparatorTokens",
	            value: function resetNonSeparatorTokens() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee66$(_context66) {
	                  while (1) switch (_context66.prev = _context66.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/non-separator-tokens");
	                      _context66.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context66.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context66.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context66.stop();
	                  }
	                }, _callee66, this);
	              }));
	            }
	            ///
	            /// DICTIONARY
	            ///
	            /**
	             * Get the dictionary settings of a Meilisearch index.
	             *
	             * @returns Promise containing the dictionary settings
	             */
	          }, {
	            key: "getDictionary",
	            value: function getDictionary() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee67() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee67$(_context67) {
	                  while (1) switch (_context67.prev = _context67.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/dictionary");
	                      _context67.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context67.abrupt("return", _context67.sent);
	                    case 4:
	                    case "end":
	                      return _context67.stop();
	                  }
	                }, _callee67, this);
	              }));
	            }
	            /**
	             * Update the dictionary settings. Overwrite the old settings.
	             *
	             * @param dictionary - Array that contains the new dictionary settings.
	             * @returns Promise containing an EnqueuedTask or null
	             */
	          }, {
	            key: "updateDictionary",
	            value: function updateDictionary(dictionary) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee68() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee68$(_context68) {
	                  while (1) switch (_context68.prev = _context68.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/dictionary");
	                      _context68.next = 3;
	                      return this.httpRequest.put(url, dictionary);
	                    case 3:
	                      task = _context68.sent;
	                      return _context68.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context68.stop();
	                  }
	                }, _callee68, this);
	              }));
	            }
	            /**
	             * Reset the dictionary settings to its default value
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetDictionary",
	            value: function resetDictionary() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee69$(_context69) {
	                  while (1) switch (_context69.prev = _context69.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/dictionary");
	                      _context69.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context69.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context69.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context69.stop();
	                  }
	                }, _callee69, this);
	              }));
	            }
	            ///
	            /// PROXIMITY PRECISION
	            ///
	            /**
	             * Get the proximity precision settings of a Meilisearch index.
	             *
	             * @returns Promise containing the proximity precision settings
	             */
	          }, {
	            key: "getProximityPrecision",
	            value: function getProximityPrecision() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee70$(_context70) {
	                  while (1) switch (_context70.prev = _context70.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/proximity-precision");
	                      _context70.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context70.abrupt("return", _context70.sent);
	                    case 4:
	                    case "end":
	                      return _context70.stop();
	                  }
	                }, _callee70, this);
	              }));
	            }
	            /**
	             * Update the proximity precision settings. Overwrite the old settings.
	             *
	             * @param proximityPrecision - String that contains the new proximity
	             *   precision settings.
	             * @returns Promise containing an EnqueuedTask or null
	             */
	          }, {
	            key: "updateProximityPrecision",
	            value: function updateProximityPrecision(proximityPrecision) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee71() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee71$(_context71) {
	                  while (1) switch (_context71.prev = _context71.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/proximity-precision");
	                      _context71.next = 3;
	                      return this.httpRequest.put(url, proximityPrecision);
	                    case 3:
	                      task = _context71.sent;
	                      return _context71.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context71.stop();
	                  }
	                }, _callee71, this);
	              }));
	            }
	            /**
	             * Reset the proximity precision settings to its default value
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetProximityPrecision",
	            value: function resetProximityPrecision() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee72() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee72$(_context72) {
	                  while (1) switch (_context72.prev = _context72.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/proximity-precision");
	                      _context72.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context72.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context72.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context72.stop();
	                  }
	                }, _callee72, this);
	              }));
	            }
	            ///
	            /// EMBEDDERS
	            ///
	            /**
	             * Get the embedders settings of a Meilisearch index.
	             *
	             * @returns Promise containing the embedders settings
	             */
	          }, {
	            key: "getEmbedders",
	            value: function getEmbedders() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee73$(_context73) {
	                  while (1) switch (_context73.prev = _context73.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/embedders");
	                      _context73.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context73.abrupt("return", _context73.sent);
	                    case 4:
	                    case "end":
	                      return _context73.stop();
	                  }
	                }, _callee73, this);
	              }));
	            }
	            /**
	             * Update the embedders settings. Overwrite the old settings.
	             *
	             * @param embedders - Object that contains the new embedders settings.
	             * @returns Promise containing an EnqueuedTask or null
	             */
	          }, {
	            key: "updateEmbedders",
	            value: function updateEmbedders(embedders) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee74() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee74$(_context74) {
	                  while (1) switch (_context74.prev = _context74.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/embedders");
	                      _context74.next = 3;
	                      return this.httpRequest.patch(url, embedders);
	                    case 3:
	                      task = _context74.sent;
	                      return _context74.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context74.stop();
	                  }
	                }, _callee74, this);
	              }));
	            }
	            /**
	             * Reset the embedders settings to its default value
	             *
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "resetEmbedders",
	            value: function resetEmbedders() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee75() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee75$(_context75) {
	                  while (1) switch (_context75.prev = _context75.next) {
	                    case 0:
	                      url = "indexes/".concat(this.uid, "/settings/embedders");
	                      _context75.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      task = _context75.sent;
	                      task.enqueuedAt = new Date(task.enqueuedAt);
	                      return _context75.abrupt("return", task);
	                    case 6:
	                    case "end":
	                      return _context75.stop();
	                  }
	                }, _callee75, this);
	              }));
	            }
	          }], [{
	            key: "create",
	            value: function create(uid) {
	              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	              var config = arguments.length > 2 ? arguments[2] : undefined;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee76() {
	                var url, req, task;
	                return _regeneratorRuntime().wrap(function _callee76$(_context76) {
	                  while (1) switch (_context76.prev = _context76.next) {
	                    case 0:
	                      url = "indexes";
	                      req = new HttpRequests(config);
	                      _context76.next = 4;
	                      return req.post(url, Object.assign(Object.assign({}, options), {
	                        uid: uid
	                      }));
	                    case 4:
	                      task = _context76.sent;
	                      return _context76.abrupt("return", new EnqueuedTask(task));
	                    case 6:
	                    case "end":
	                      return _context76.stop();
	                  }
	                }, _callee76);
	              }));
	            }
	          }]);
	          return Index;
	        }();

	        /*
	         * Bundle: MeiliSearch
	         * Project: MeiliSearch - Javascript API
	         * Author: Quentin de Quelen <quentin@meilisearch.com>
	         * Copyright: 2019, MeiliSearch
	         */
	        var Client = /*#__PURE__*/function () {
	          /**
	           * Creates new MeiliSearch instance
	           *
	           * @param config - Configuration object
	           */
	          function Client(config) {
	            _classCallCheck(this, Client);
	            this.config = config;
	            this.httpRequest = new HttpRequests(config);
	            this.tasks = new TaskClient(config);
	          }
	          /**
	           * Return an Index instance
	           *
	           * @param indexUid - The index UID
	           * @returns Instance of Index
	           */
	          _createClass(Client, [{
	            key: "index",
	            value: function index(indexUid) {
	              return new Index(this.config, indexUid);
	            }
	            /**
	             * Gather information about an index by calling MeiliSearch and return an
	             * Index instance with the gathered information
	             *
	             * @param indexUid - The index UID
	             * @returns Promise returning Index instance
	             */
	          }, {
	            key: "getIndex",
	            value: function getIndex(indexUid) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
	                return _regeneratorRuntime().wrap(function _callee$(_context) {
	                  while (1) switch (_context.prev = _context.next) {
	                    case 0:
	                      return _context.abrupt("return", new Index(this.config, indexUid).fetchInfo());
	                    case 1:
	                    case "end":
	                      return _context.stop();
	                  }
	                }, _callee, this);
	              }));
	            }
	            /**
	             * Gather information about an index by calling MeiliSearch and return the raw
	             * JSON response
	             *
	             * @param indexUid - The index UID
	             * @returns Promise returning index information
	             */
	          }, {
	            key: "getRawIndex",
	            value: function getRawIndex(indexUid) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
	                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	                  while (1) switch (_context2.prev = _context2.next) {
	                    case 0:
	                      return _context2.abrupt("return", new Index(this.config, indexUid).getRawInfo());
	                    case 1:
	                    case "end":
	                      return _context2.stop();
	                  }
	                }, _callee2, this);
	              }));
	            }
	            /**
	             * Get all the indexes as Index instances.
	             *
	             * @param parameters - Parameters to browse the indexes
	             * @returns Promise returning array of raw index information
	             */
	          }, {
	            key: "getIndexes",
	            value: function getIndexes() {
	              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
	                var _this = this;
	                var rawIndexes, indexes;
	                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
	                  while (1) switch (_context3.prev = _context3.next) {
	                    case 0:
	                      _context3.next = 2;
	                      return this.getRawIndexes(parameters);
	                    case 2:
	                      rawIndexes = _context3.sent;
	                      indexes = rawIndexes.results.map(function (index) {
	                        return new Index(_this.config, index.uid, index.primaryKey);
	                      });
	                      return _context3.abrupt("return", Object.assign(Object.assign({}, rawIndexes), {
	                        results: indexes
	                      }));
	                    case 5:
	                    case "end":
	                      return _context3.stop();
	                  }
	                }, _callee3, this);
	              }));
	            }
	            /**
	             * Get all the indexes in their raw value (no Index instances).
	             *
	             * @param parameters - Parameters to browse the indexes
	             * @returns Promise returning array of raw index information
	             */
	          }, {
	            key: "getRawIndexes",
	            value: function getRawIndexes() {
	              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
	                  while (1) switch (_context4.prev = _context4.next) {
	                    case 0:
	                      url = "indexes";
	                      _context4.next = 3;
	                      return this.httpRequest.get(url, parameters);
	                    case 3:
	                      return _context4.abrupt("return", _context4.sent);
	                    case 4:
	                    case "end":
	                      return _context4.stop();
	                  }
	                }, _callee4, this);
	              }));
	            }
	            /**
	             * Create a new index
	             *
	             * @param uid - The index UID
	             * @param options - Index options
	             * @returns Promise returning Index instance
	             */
	          }, {
	            key: "createIndex",
	            value: function createIndex(uid) {
	              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
	                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
	                  while (1) switch (_context5.prev = _context5.next) {
	                    case 0:
	                      _context5.next = 2;
	                      return Index.create(uid, options, this.config);
	                    case 2:
	                      return _context5.abrupt("return", _context5.sent);
	                    case 3:
	                    case "end":
	                      return _context5.stop();
	                  }
	                }, _callee5, this);
	              }));
	            }
	            /**
	             * Update an index
	             *
	             * @param uid - The index UID
	             * @param options - Index options to update
	             * @returns Promise returning Index instance after updating
	             */
	          }, {
	            key: "updateIndex",
	            value: function updateIndex(uid) {
	              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
	                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
	                  while (1) switch (_context6.prev = _context6.next) {
	                    case 0:
	                      _context6.next = 2;
	                      return new Index(this.config, uid).update(options);
	                    case 2:
	                      return _context6.abrupt("return", _context6.sent);
	                    case 3:
	                    case "end":
	                      return _context6.stop();
	                  }
	                }, _callee6, this);
	              }));
	            }
	            /**
	             * Delete an index
	             *
	             * @param uid - The index UID
	             * @returns Promise which resolves when index is deleted successfully
	             */
	          }, {
	            key: "deleteIndex",
	            value: function deleteIndex(uid) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
	                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
	                  while (1) switch (_context7.prev = _context7.next) {
	                    case 0:
	                      _context7.next = 2;
	                      return new Index(this.config, uid).delete();
	                    case 2:
	                      return _context7.abrupt("return", _context7.sent);
	                    case 3:
	                    case "end":
	                      return _context7.stop();
	                  }
	                }, _callee7, this);
	              }));
	            }
	            /**
	             * Deletes an index if it already exists.
	             *
	             * @param uid - The index UID
	             * @returns Promise which resolves to true when index exists and is deleted
	             *   successfully, otherwise false if it does not exist
	             */
	          }, {
	            key: "deleteIndexIfExists",
	            value: function deleteIndexIfExists(uid) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
	                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
	                  while (1) switch (_context8.prev = _context8.next) {
	                    case 0:
	                      _context8.prev = 0;
	                      _context8.next = 3;
	                      return this.deleteIndex(uid);
	                    case 3:
	                      return _context8.abrupt("return", true);
	                    case 6:
	                      _context8.prev = 6;
	                      _context8.t0 = _context8["catch"](0);
	                      if (!(_context8.t0.code === ErrorStatusCode.INDEX_NOT_FOUND)) {
	                        _context8.next = 10;
	                        break;
	                      }
	                      return _context8.abrupt("return", false);
	                    case 10:
	                      throw _context8.t0;
	                    case 11:
	                    case "end":
	                      return _context8.stop();
	                  }
	                }, _callee8, this, [[0, 6]]);
	              }));
	            }
	            /**
	             * Swaps a list of index tuples.
	             *
	             * @param params - List of indexes tuples to swap.
	             * @returns Promise returning object of the enqueued task
	             */
	          }, {
	            key: "swapIndexes",
	            value: function swapIndexes(params) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
	                  while (1) switch (_context9.prev = _context9.next) {
	                    case 0:
	                      url = '/swap-indexes';
	                      _context9.next = 3;
	                      return this.httpRequest.post(url, params);
	                    case 3:
	                      return _context9.abrupt("return", _context9.sent);
	                    case 4:
	                    case "end":
	                      return _context9.stop();
	                  }
	                }, _callee9, this);
	              }));
	            }
	            ///
	            /// Multi Search
	            ///
	            /**
	             * Perform multiple search queries.
	             *
	             * It is possible to make multiple search queries on the same index or on
	             * different ones
	             *
	             * @example
	             *
	             * ```ts
	             * client.multiSearch({
	             *   queries: [
	             *     { indexUid: 'movies', q: 'wonder' },
	             *     { indexUid: 'books', q: 'flower' },
	             *   ],
	             * })
	             * ```
	             *
	             * @param queries - Search queries
	             * @param config - Additional request configuration options
	             * @returns Promise containing the search responses
	             */
	          }, {
	            key: "multiSearch",
	            value: function multiSearch(queries, config) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
	                  while (1) switch (_context10.prev = _context10.next) {
	                    case 0:
	                      url = "multi-search";
	                      _context10.next = 3;
	                      return this.httpRequest.post(url, queries, undefined, config);
	                    case 3:
	                      return _context10.abrupt("return", _context10.sent);
	                    case 4:
	                    case "end":
	                      return _context10.stop();
	                  }
	                }, _callee10, this);
	              }));
	            }
	            ///
	            /// TASKS
	            ///
	            /**
	             * Get the list of all client tasks
	             *
	             * @param parameters - Parameters to browse the tasks
	             * @returns Promise returning all tasks
	             */
	          }, {
	            key: "getTasks",
	            value: function getTasks() {
	              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
	                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
	                  while (1) switch (_context11.prev = _context11.next) {
	                    case 0:
	                      _context11.next = 2;
	                      return this.tasks.getTasks(parameters);
	                    case 2:
	                      return _context11.abrupt("return", _context11.sent);
	                    case 3:
	                    case "end":
	                      return _context11.stop();
	                  }
	                }, _callee11, this);
	              }));
	            }
	            /**
	             * Get one task on the client scope
	             *
	             * @param taskUid - Task identifier
	             * @returns Promise returning a task
	             */
	          }, {
	            key: "getTask",
	            value: function getTask(taskUid) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
	                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
	                  while (1) switch (_context12.prev = _context12.next) {
	                    case 0:
	                      _context12.next = 2;
	                      return this.tasks.getTask(taskUid);
	                    case 2:
	                      return _context12.abrupt("return", _context12.sent);
	                    case 3:
	                    case "end":
	                      return _context12.stop();
	                  }
	                }, _callee12, this);
	              }));
	            }
	            /**
	             * Wait for multiple tasks to be finished.
	             *
	             * @param taskUids - Tasks identifier
	             * @param waitOptions - Options on timeout and interval
	             * @returns Promise returning an array of tasks
	             */
	          }, {
	            key: "waitForTasks",
	            value: function waitForTasks(taskUids) {
	              var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	                _ref$timeOutMs = _ref.timeOutMs,
	                timeOutMs = _ref$timeOutMs === void 0 ? 5000 : _ref$timeOutMs,
	                _ref$intervalMs = _ref.intervalMs,
	                intervalMs = _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
	                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
	                  while (1) switch (_context13.prev = _context13.next) {
	                    case 0:
	                      _context13.next = 2;
	                      return this.tasks.waitForTasks(taskUids, {
	                        timeOutMs: timeOutMs,
	                        intervalMs: intervalMs
	                      });
	                    case 2:
	                      return _context13.abrupt("return", _context13.sent);
	                    case 3:
	                    case "end":
	                      return _context13.stop();
	                  }
	                }, _callee13, this);
	              }));
	            }
	            /**
	             * Wait for a task to be finished.
	             *
	             * @param taskUid - Task identifier
	             * @param waitOptions - Options on timeout and interval
	             * @returns Promise returning an array of tasks
	             */
	          }, {
	            key: "waitForTask",
	            value: function waitForTask(taskUid) {
	              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	                _ref2$timeOutMs = _ref2.timeOutMs,
	                timeOutMs = _ref2$timeOutMs === void 0 ? 5000 : _ref2$timeOutMs,
	                _ref2$intervalMs = _ref2.intervalMs,
	                intervalMs = _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
	                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
	                  while (1) switch (_context14.prev = _context14.next) {
	                    case 0:
	                      _context14.next = 2;
	                      return this.tasks.waitForTask(taskUid, {
	                        timeOutMs: timeOutMs,
	                        intervalMs: intervalMs
	                      });
	                    case 2:
	                      return _context14.abrupt("return", _context14.sent);
	                    case 3:
	                    case "end":
	                      return _context14.stop();
	                  }
	                }, _callee14, this);
	              }));
	            }
	            /**
	             * Cancel a list of enqueued or processing tasks.
	             *
	             * @param parameters - Parameters to filter the tasks.
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "cancelTasks",
	            value: function cancelTasks(parameters) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
	                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
	                  while (1) switch (_context15.prev = _context15.next) {
	                    case 0:
	                      _context15.next = 2;
	                      return this.tasks.cancelTasks(parameters);
	                    case 2:
	                      return _context15.abrupt("return", _context15.sent);
	                    case 3:
	                    case "end":
	                      return _context15.stop();
	                  }
	                }, _callee15, this);
	              }));
	            }
	            /**
	             * Delete a list of tasks.
	             *
	             * @param parameters - Parameters to filter the tasks.
	             * @returns Promise containing an EnqueuedTask
	             */
	          }, {
	            key: "deleteTasks",
	            value: function deleteTasks() {
	              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
	                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
	                  while (1) switch (_context16.prev = _context16.next) {
	                    case 0:
	                      _context16.next = 2;
	                      return this.tasks.deleteTasks(parameters);
	                    case 2:
	                      return _context16.abrupt("return", _context16.sent);
	                    case 3:
	                    case "end":
	                      return _context16.stop();
	                  }
	                }, _callee16, this);
	              }));
	            }
	            ///
	            /// KEYS
	            ///
	            /**
	             * Get all API keys
	             *
	             * @param parameters - Parameters to browse the indexes
	             * @returns Promise returning an object with keys
	             */
	          }, {
	            key: "getKeys",
	            value: function getKeys() {
	              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
	                var url, keys;
	                return _regeneratorRuntime().wrap(function _callee17$(_context17) {
	                  while (1) switch (_context17.prev = _context17.next) {
	                    case 0:
	                      url = "keys";
	                      _context17.next = 3;
	                      return this.httpRequest.get(url, parameters);
	                    case 3:
	                      keys = _context17.sent;
	                      keys.results = keys.results.map(function (key) {
	                        return Object.assign(Object.assign({}, key), {
	                          createdAt: new Date(key.createdAt),
	                          updatedAt: new Date(key.updatedAt)
	                        });
	                      });
	                      return _context17.abrupt("return", keys);
	                    case 6:
	                    case "end":
	                      return _context17.stop();
	                  }
	                }, _callee17, this);
	              }));
	            }
	            /**
	             * Get one API key
	             *
	             * @param keyOrUid - Key or uid of the API key
	             * @returns Promise returning a key
	             */
	          }, {
	            key: "getKey",
	            value: function getKey(keyOrUid) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
	                  while (1) switch (_context18.prev = _context18.next) {
	                    case 0:
	                      url = "keys/".concat(keyOrUid);
	                      _context18.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context18.abrupt("return", _context18.sent);
	                    case 4:
	                    case "end":
	                      return _context18.stop();
	                  }
	                }, _callee18, this);
	              }));
	            }
	            /**
	             * Create one API key
	             *
	             * @param options - Key options
	             * @returns Promise returning a key
	             */
	          }, {
	            key: "createKey",
	            value: function createKey(options) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee19$(_context19) {
	                  while (1) switch (_context19.prev = _context19.next) {
	                    case 0:
	                      url = "keys";
	                      _context19.next = 3;
	                      return this.httpRequest.post(url, options);
	                    case 3:
	                      return _context19.abrupt("return", _context19.sent);
	                    case 4:
	                    case "end":
	                      return _context19.stop();
	                  }
	                }, _callee19, this);
	              }));
	            }
	            /**
	             * Update one API key
	             *
	             * @param keyOrUid - Key
	             * @param options - Key options
	             * @returns Promise returning a key
	             */
	          }, {
	            key: "updateKey",
	            value: function updateKey(keyOrUid, options) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee20$(_context20) {
	                  while (1) switch (_context20.prev = _context20.next) {
	                    case 0:
	                      url = "keys/".concat(keyOrUid);
	                      _context20.next = 3;
	                      return this.httpRequest.patch(url, options);
	                    case 3:
	                      return _context20.abrupt("return", _context20.sent);
	                    case 4:
	                    case "end":
	                      return _context20.stop();
	                  }
	                }, _callee20, this);
	              }));
	            }
	            /**
	             * Delete one API key
	             *
	             * @param keyOrUid - Key
	             * @returns
	             */
	          }, {
	            key: "deleteKey",
	            value: function deleteKey(keyOrUid) {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee21$(_context21) {
	                  while (1) switch (_context21.prev = _context21.next) {
	                    case 0:
	                      url = "keys/".concat(keyOrUid);
	                      _context21.next = 3;
	                      return this.httpRequest.delete(url);
	                    case 3:
	                      return _context21.abrupt("return", _context21.sent);
	                    case 4:
	                    case "end":
	                      return _context21.stop();
	                  }
	                }, _callee21, this);
	              }));
	            }
	            ///
	            /// HEALTH
	            ///
	            /**
	             * Checks if the server is healthy, otherwise an error will be thrown.
	             *
	             * @returns Promise returning an object with health details
	             */
	          }, {
	            key: "health",
	            value: function health() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee22$(_context22) {
	                  while (1) switch (_context22.prev = _context22.next) {
	                    case 0:
	                      url = "health";
	                      _context22.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context22.abrupt("return", _context22.sent);
	                    case 4:
	                    case "end":
	                      return _context22.stop();
	                  }
	                }, _callee22, this);
	              }));
	            }
	            /**
	             * Checks if the server is healthy, return true or false.
	             *
	             * @returns Promise returning a boolean
	             */
	          }, {
	            key: "isHealthy",
	            value: function isHealthy() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee23$(_context23) {
	                  while (1) switch (_context23.prev = _context23.next) {
	                    case 0:
	                      _context23.prev = 0;
	                      url = "health";
	                      _context23.next = 4;
	                      return this.httpRequest.get(url);
	                    case 4:
	                      return _context23.abrupt("return", true);
	                    case 7:
	                      _context23.prev = 7;
	                      _context23.t0 = _context23["catch"](0);
	                      return _context23.abrupt("return", false);
	                    case 10:
	                    case "end":
	                      return _context23.stop();
	                  }
	                }, _callee23, this, [[0, 7]]);
	              }));
	            }
	            ///
	            /// STATS
	            ///
	            /**
	             * Get the stats of all the database
	             *
	             * @returns Promise returning object of all the stats
	             */
	          }, {
	            key: "getStats",
	            value: function getStats() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee24$(_context24) {
	                  while (1) switch (_context24.prev = _context24.next) {
	                    case 0:
	                      url = "stats";
	                      _context24.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context24.abrupt("return", _context24.sent);
	                    case 4:
	                    case "end":
	                      return _context24.stop();
	                  }
	                }, _callee24, this);
	              }));
	            }
	            ///
	            /// VERSION
	            ///
	            /**
	             * Get the version of MeiliSearch
	             *
	             * @returns Promise returning object with version details
	             */
	          }, {
	            key: "getVersion",
	            value: function getVersion() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
	                var url;
	                return _regeneratorRuntime().wrap(function _callee25$(_context25) {
	                  while (1) switch (_context25.prev = _context25.next) {
	                    case 0:
	                      url = "version";
	                      _context25.next = 3;
	                      return this.httpRequest.get(url);
	                    case 3:
	                      return _context25.abrupt("return", _context25.sent);
	                    case 4:
	                    case "end":
	                      return _context25.stop();
	                  }
	                }, _callee25, this);
	              }));
	            }
	            ///
	            /// DUMPS
	            ///
	            /**
	             * Creates a dump
	             *
	             * @returns Promise returning object of the enqueued task
	             */
	          }, {
	            key: "createDump",
	            value: function createDump() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee26$(_context26) {
	                  while (1) switch (_context26.prev = _context26.next) {
	                    case 0:
	                      url = "dumps";
	                      _context26.next = 3;
	                      return this.httpRequest.post(url);
	                    case 3:
	                      task = _context26.sent;
	                      return _context26.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context26.stop();
	                  }
	                }, _callee26, this);
	              }));
	            }
	            ///
	            /// SNAPSHOTS
	            ///
	            /**
	             * Creates a snapshot
	             *
	             * @returns Promise returning object of the enqueued task
	             */
	          }, {
	            key: "createSnapshot",
	            value: function createSnapshot() {
	              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
	                var url, task;
	                return _regeneratorRuntime().wrap(function _callee27$(_context27) {
	                  while (1) switch (_context27.prev = _context27.next) {
	                    case 0:
	                      url = "snapshots";
	                      _context27.next = 3;
	                      return this.httpRequest.post(url);
	                    case 3:
	                      task = _context27.sent;
	                      return _context27.abrupt("return", new EnqueuedTask(task));
	                    case 5:
	                    case "end":
	                      return _context27.stop();
	                  }
	                }, _callee27, this);
	              }));
	            }
	            ///
	            /// TOKENS
	            ///
	            /**
	             * Generate a tenant token
	             *
	             * @param apiKeyUid - The uid of the api key used as issuer of the token.
	             * @param searchRules - Search rules that are applied to every search.
	             * @param options - Token options to customize some aspect of the token.
	             * @returns The token in JWT format.
	             */
	          }, {
	            key: "generateTenantToken",
	            value: function generateTenantToken(_apiKeyUid, _searchRules, _options) {
	              var error = new Error();
	              throw new Error("Meilisearch: failed to generate a tenant token. Generation of a token only works in a node environment \n ".concat(error.stack, "."));
	            }
	          }]);
	          return Client;
	        }();
	        var MeiliSearch = /*#__PURE__*/function (_Client) {
	          _inherits(MeiliSearch, _Client);
	          var _super = _createSuper(MeiliSearch);
	          function MeiliSearch(config) {
	            _classCallCheck(this, MeiliSearch);
	            return _super.call(this, config);
	          }
	          return _createClass(MeiliSearch);
	        }(Client);
	        exports.ContentTypeEnum = ContentTypeEnum;
	        exports.ErrorStatusCode = ErrorStatusCode;
	        exports.Index = Index;
	        exports.MatchingStrategies = MatchingStrategies;
	        exports.MeiliSearch = MeiliSearch;
	        exports.MeiliSearchApiError = MeiliSearchApiError;
	        exports.MeiliSearchCommunicationError = MeiliSearchCommunicationError;
	        exports.MeiliSearchError = MeiliSearchError;
	        exports.MeiliSearchTimeOutError = MeiliSearchTimeOutError;
	        exports.Meilisearch = MeiliSearch;
	        exports.TaskStatus = TaskStatus;
	        exports.TaskTypes = TaskTypes;
	        exports["default"] = MeiliSearch;
	        exports.httpErrorHandler = httpErrorHandler;
	        exports.httpResponseErrorHandler = httpResponseErrorHandler;
	        exports.versionErrorHintMessage = versionErrorHintMessage;
	        Object.defineProperty(exports, '__esModule', {
	          value: true
	        });
	      });
	    });
	    function isPureObject(data) {
	      return typeof data === 'object' && !Array.isArray(data) && data !== null;
	    }

	    /**
	     * Get the configuration of instant meilisearch
	     *
	     * @param {InstantMeiliSearchOptions} option
	     * @returns {InstantMeiliSearchConfig}
	     */
	    function getInstantMeilisearchConfig(options) {
	      var defaultOptions = {
	        placeholderSearch: true,
	        keepZeroFacets: false,
	        clientAgents: [],
	        finitePagination: false
	      };
	      return __assign(__assign({}, defaultOptions), options);
	    }
	    /**
	     * Resolves apiKey if it is a function
	     * @param  {string | ApiKeyCallback} apiKey
	     * @returns {string} api key value
	     */
	    function getApiKey(apiKey) {
	      // If apiKey is function, call it to get the apiKey
	      if (typeof apiKey === 'function') {
	        var apiKeyFnValue = apiKey();
	        if (typeof apiKeyFnValue !== 'string') {
	          throw new TypeError('Provided apiKey function (2nd parameter) did not return a string, expected string');
	        }
	        return apiKeyFnValue;
	      }
	      return apiKey;
	    }
	    /**
	     * Validates host and apiKey parameters, throws if invalid
	     * @param hostUrl
	     * @param apiKey
	     */
	    function validateInstantMeiliSearchParams(hostUrl, apiKey, instantMeiliSearchOptions) {
	      var requestConfig = instantMeiliSearchOptions.requestConfig,
	        httpClient = instantMeiliSearchOptions.httpClient;
	      // Validate host url
	      if (typeof hostUrl !== 'string') {
	        throw new TypeError('Provided hostUrl value (1st parameter) is not a string, expected string');
	      }
	      // Validate api key
	      if (typeof apiKey !== 'string' && typeof apiKey !== 'function') {
	        throw new TypeError('Provided apiKey value (2nd parameter) is not a string or a function, expected string or function');
	      }
	      // Validate requestConfig
	      if (requestConfig !== undefined && !isPureObject(requestConfig)) {
	        throw new TypeError('Provided requestConfig should be an object');
	      }
	      // Validate custom HTTP client
	      if (httpClient && typeof httpClient !== 'function') {
	        throw new TypeError('Provided custom httpClient should be a function');
	      }
	    }

	    /**
	     * @param  {ResponseCacher} cache
	     */
	    function SearchResolver(client, cache) {
	      return {
	        multiSearch: function (searchQueries, instantSearchPagination) {
	          return __awaiter(this, void 0, void 0, function () {
	            var key, cachedResponse, searchResponses, responseWithPagination;
	            return __generator(this, function (_a) {
	              switch (_a.label) {
	                case 0:
	                  key = cache.formatKey([searchQueries]);
	                  cachedResponse = cache.getEntry(key);
	                  // Check if specific request is already cached with its associated search response.
	                  if (cachedResponse) return [2 /*return*/, cachedResponse];
	                  return [4 /*yield*/, client.multiSearch({
	                    queries: searchQueries
	                  })];
	                case 1:
	                  searchResponses = _a.sent();
	                  responseWithPagination = searchResponses.results.map(function (response, index) {
	                    return __assign(__assign({}, response), {
	                      // TODO: should be removed at one point
	                      pagination: instantSearchPagination[index] || {}
	                    });
	                  });
	                  // Cache response
	                  cache.setEntry(key, responseWithPagination);
	                  return [2 /*return*/, responseWithPagination];
	              }
	            });
	          });
	        }
	      };
	    }
	    function adaptGeoSearch(_a) {
	      var insideBoundingBox = _a.insideBoundingBox,
	        aroundLatLng = _a.aroundLatLng,
	        aroundRadius = _a.aroundRadius,
	        minimumAroundRadius = _a.minimumAroundRadius;
	      var middlePoint;
	      var radius;
	      var filter;
	      if (aroundLatLng) {
	        var _b = aroundLatLng.split(',').map(function (pt) {
	            return Number.parseFloat(pt).toFixed(5);
	          }),
	          lat = _b[0],
	          lng = _b[1];
	        middlePoint = [lat, lng];
	      }
	      if (aroundRadius != null || minimumAroundRadius != null) {
	        if (aroundRadius === 'all') {
	          console.warn('instant-meilisearch is not compatible with the `all` value on the aroundRadius parameter');
	        } else if (aroundRadius != null) {
	          radius = aroundRadius;
	        } else {
	          radius = minimumAroundRadius;
	        }
	      }
	      if (insideBoundingBox && typeof insideBoundingBox === 'string') {
	        var _c = insideBoundingBox.split(',').map(function (pt) {
	            return parseFloat(pt);
	          }),
	          lat1 = _c[0],
	          lng1 = _c[1],
	          lat2 = _c[2],
	          lng2 = _c[3];
	        filter = "_geoBoundingBox([".concat(lat1, ", ").concat(lng1, "], [").concat(lat2, ", ").concat(lng2, "])");
	      } else if (middlePoint != null && radius != null) {
	        var lat = middlePoint[0],
	          lng = middlePoint[1];
	        filter = "_geoRadius(".concat(lat, ", ").concat(lng, ", ").concat(radius, ")");
	      }
	      return filter;
	    }
	    var filterEscapeRegExp = /([\\"])/g;
	    function getValueWithEscapedBackslashesAndQuotes(value) {
	      return value.replace(filterEscapeRegExp, '\\$1');
	    }
	    /**
	     * Transform InstantSearch [facet filter](https://www.algolia.com/doc/api-reference/api-parameters/facetFilters/)
	     * to Meilisearch compatible filter format.
	     * Change sign from `:` to `=`
	     * "facet:facetValue" becomes "facet=facetValue"
	     *
	     * Wrap both the facet and its facet value between quotes.
	     * This avoids formatting issues on facets containing multiple words.
	     * Escape backslash \\ and quote " characters.
	     *
	     * 'My facet:My facet value' becomes '"My facet":"My facet value"'
	     *
	     * @param {string} filter
	     * @returns {string}
	     */
	    function transformFacetFilter(filter) {
	      var escapedFilter = getValueWithEscapedBackslashesAndQuotes(filter);
	      var colonIndex = escapedFilter.indexOf(':');
	      var attribute = escapedFilter.slice(0, colonIndex);
	      var value = escapedFilter.slice(colonIndex + 1);
	      return "\"".concat(attribute, "\"=\"").concat(value, "\"");
	    }
	    /**
	     * Transform InstantSearch [numeric filter](https://www.algolia.com/doc/api-reference/api-parameters/numericFilters/)
	     * to Meilisearch compatible filter format.
	     *
	     * 'price:5.99 TO 100' becomes '"price" 5.99 TO 100'
	     *
	     * 'price = 5.99' becomes '"price"=5.99'
	     *
	     * Wrap the attribute between quotes.
	     * Escape backslash (\\) and quote (") characters.
	     *
	     * @param {string} filter
	     * @returns {string}
	     */
	    function transformNumericFilter(filter) {
	      var splitNumericFilter = function () {
	        var attributeMatch = filter.match(/^([^<!>:=]*)([<!>:=]+)(.*)$/);
	        if (attributeMatch) {
	          var _a = attributeMatch.slice(1),
	            attribute_1 = _a[0],
	            dirtyOperator = _a[1],
	            valueEnd = _a[2];
	          var operatorMatch = dirtyOperator.match(/^([<!>]?=|<|>|:){1}(.*)/) || ['', ''];
	          var _b = operatorMatch.slice(1),
	            operator_1 = _b[0],
	            valueStart = _b[1];
	          var cleanedValue = valueStart + valueEnd;
	          return [attribute_1, operator_1, cleanedValue];
	        }
	        return [filter, '', ''];
	      };
	      var _a = splitNumericFilter(),
	        attribute = _a[0],
	        operator = _a[1],
	        value = _a[2];
	      var escapedAttribute = getValueWithEscapedBackslashesAndQuotes(attribute);
	      return "\"".concat(escapedAttribute.trim(), "\"").concat(operator === ':' ? ' ' : operator).concat(value.trim());
	    }
	    /**
	     * Iterate over all filters.
	     * Return the filters in a Meilisearch compatible format.
	     *
	     * @param  {(filter: string) => string} transformCallback
	     * @param  {SearchContext['facetFilters']} filters
	     * @returns {Filter}
	     */
	    function transformFilters(transformCallback, filters) {
	      return typeof filters === 'string' ? transformCallback(filters) : filters.map(function (filter) {
	        return typeof filter === 'string' ? transformCallback(filter) : filter.map(function (nestedFilter) {
	          return transformCallback(nestedFilter);
	        });
	      });
	    }
	    /**
	     * Return the filter in an array if it is a string
	     * If filter is array, return without change.
	     *
	     * @param  {Filter} [filter]
	     * @returns {Array|undefined}
	     */
	    function filterToArray(filter) {
	      return typeof filter === 'string' ? [filter] : filter;
	    }
	    /**
	     * Merge filters, transformedNumericFilters and transformedFacetFilters
	     * together.
	     *
	     * @param  {string} filters
	     * @param  {Filter} transformedNumericFilters
	     * @param  {Filter} transformedFacetFilters
	     * @returns {Filter}
	     */
	    function mergeFilters(filters, transformedNumericFilters, transformedFacetFilters) {
	      var adaptedNumericFilters = filterToArray(transformedNumericFilters);
	      var adaptedFacetFilters = filterToArray(transformedFacetFilters);
	      var adaptedFilters = [];
	      if (filters !== undefined) {
	        adaptedFilters.push(filters);
	      }
	      if (adaptedNumericFilters !== undefined) {
	        adaptedFilters.push.apply(adaptedFilters, adaptedNumericFilters);
	      }
	      if (adaptedFacetFilters !== undefined) {
	        adaptedFilters.push.apply(adaptedFilters, adaptedFacetFilters);
	      }
	      return adaptedFilters;
	    }
	    /**
	     * Adapt instantsearch.js filters to Meilisearch filters by
	     * combining and transforming all provided filters.
	     *
	     * @param  {string|undefined} filters
	     * @param  {SearchContext['numericFilters']} numericFilters
	     * @param  {SearchContext['facetFilters']} facetFilters
	     * @returns {Filter}
	     */
	    function adaptFilters(filters, numericFilters, facetFilters) {
	      var transformedNumericFilters = numericFilters !== undefined ? transformFilters(transformNumericFilter, numericFilters) : numericFilters;
	      var transformedFacetFilters = facetFilters !== undefined ? transformFilters(transformFacetFilter, facetFilters) : facetFilters;
	      return mergeFilters(filters, transformedNumericFilters, transformedFacetFilters);
	    }
	    function isPaginationRequired(filter, query, placeholderSearch) {
	      // To disable pagination:
	      // placeholderSearch must be disabled
	      // The search query must be empty
	      // There must be no filters
	      return !(!placeholderSearch && !query && (!filter || filter.length === 0));
	    }
	    function setScrollPagination(pagination, paginationRequired) {
	      var page = pagination.page,
	        hitsPerPage = pagination.hitsPerPage;
	      if (!paginationRequired) {
	        return {
	          limit: 0,
	          offset: 0
	        };
	      }
	      return {
	        limit: hitsPerPage + 1,
	        offset: page * hitsPerPage
	      };
	    }
	    function setFinitePagination(pagination, paginationRequired) {
	      var page = pagination.page,
	        hitsPerPage = pagination.hitsPerPage;
	      if (!paginationRequired) {
	        return {
	          hitsPerPage: 0,
	          page: page + 1
	        };
	      } else {
	        return {
	          hitsPerPage: hitsPerPage,
	          page: page + 1
	        };
	      }
	    }
	    /**
	     * Adapts instantsearch.js and instant-meilisearch options
	     * to meilisearch search query parameters.
	     *
	     * @param  {SearchContext} searchContext
	     */
	    function MeiliParamsCreator(searchContext) {
	      var query = searchContext.query,
	        indexUid = searchContext.indexUid,
	        facets = searchContext.facets,
	        attributesToSnippet = searchContext.attributesToSnippet,
	        snippetEllipsisText = searchContext.snippetEllipsisText,
	        filters = searchContext.filters,
	        numericFilters = searchContext.numericFilters,
	        facetFilters = searchContext.facetFilters,
	        attributesToRetrieve = searchContext.attributesToRetrieve,
	        attributesToHighlight = searchContext.attributesToHighlight,
	        highlightPreTag = searchContext.highlightPreTag,
	        highlightPostTag = searchContext.highlightPostTag,
	        placeholderSearch = searchContext.placeholderSearch,
	        pagination = searchContext.pagination,
	        sort = searchContext.sort,
	        restrictSearchableAttributes = searchContext.restrictSearchableAttributes,
	        overrideParams = searchContext.meiliSearchParams;
	      var meiliSearchParams = {
	        indexUid: indexUid
	      };
	      var meilisearchFilters = adaptFilters(filters, numericFilters, facetFilters);
	      return {
	        getParams: function () {
	          return meiliSearchParams;
	        },
	        addQuery: function () {
	          meiliSearchParams.q = query;
	        },
	        addFacets: function () {
	          var value = facets;
	          if (value !== undefined) {
	            // despite Instantsearch.js typing it as `string[]`,
	            // it still can send `string`
	            meiliSearchParams.facets = typeof value === 'string' ? [value] : value;
	          }
	        },
	        addAttributesToCrop: function () {
	          var _a;
	          var value = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.attributesToCrop) !== null && _a !== void 0 ? _a : attributesToSnippet;
	          if (value !== undefined) {
	            meiliSearchParams.attributesToCrop = value;
	          }
	        },
	        addCropLength: function () {
	          var value = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.cropLength;
	          if (value !== undefined) {
	            meiliSearchParams.cropLength = value;
	          }
	        },
	        addCropMarker: function () {
	          var _a;
	          var value = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.cropMarker) !== null && _a !== void 0 ? _a : snippetEllipsisText;
	          if (value !== undefined) {
	            meiliSearchParams.cropMarker = value;
	          }
	        },
	        addFilters: function () {
	          if (meilisearchFilters.length) {
	            meiliSearchParams.filter = meilisearchFilters;
	          }
	        },
	        addAttributesToRetrieve: function () {
	          var _a;
	          var value = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.attributesToRetrieve) !== null && _a !== void 0 ? _a : attributesToRetrieve;
	          if (value !== undefined) {
	            meiliSearchParams.attributesToRetrieve = value;
	          }
	        },
	        addAttributesToHighlight: function () {
	          var _a, _b;
	          meiliSearchParams.attributesToHighlight = (_b = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.attributesToHighlight) !== null && _a !== void 0 ? _a : attributesToHighlight) !== null && _b !== void 0 ? _b : ['*'];
	        },
	        addPreTag: function () {
	          var _a, _b;
	          meiliSearchParams.highlightPreTag = (_b = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.highlightPreTag) !== null && _a !== void 0 ? _a : highlightPreTag) !== null && _b !== void 0 ? _b : '__ais-highlight__';
	        },
	        addPostTag: function () {
	          var _a, _b;
	          meiliSearchParams.highlightPostTag = (_b = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.highlightPostTag) !== null && _a !== void 0 ? _a : highlightPostTag) !== null && _b !== void 0 ? _b : '__/ais-highlight__';
	        },
	        addPagination: function () {
	          var paginationRequired = isPaginationRequired(meilisearchFilters, query, placeholderSearch);
	          if (pagination.finite) {
	            var _a = setFinitePagination(pagination, paginationRequired),
	              hitsPerPage = _a.hitsPerPage,
	              page = _a.page;
	            meiliSearchParams.hitsPerPage = hitsPerPage;
	            meiliSearchParams.page = page;
	          } else {
	            var _b = setScrollPagination(pagination, paginationRequired),
	              limit = _b.limit,
	              offset = _b.offset;
	            meiliSearchParams.limit = limit;
	            meiliSearchParams.offset = offset;
	          }
	        },
	        addSort: function () {
	          if (sort === null || sort === void 0 ? void 0 : sort.length) {
	            meiliSearchParams.sort = Array.isArray(sort) ? sort : [sort];
	          }
	        },
	        addGeoSearchFilter: function () {
	          var insideBoundingBox = searchContext.insideBoundingBox,
	            aroundLatLng = searchContext.aroundLatLng,
	            aroundRadius = searchContext.aroundRadius,
	            minimumAroundRadius = searchContext.minimumAroundRadius;
	          var filter = adaptGeoSearch({
	            insideBoundingBox: insideBoundingBox,
	            aroundLatLng: aroundLatLng,
	            aroundRadius: aroundRadius,
	            minimumAroundRadius: minimumAroundRadius
	          });
	          if (filter !== undefined) {
	            if (Array.isArray(meiliSearchParams.filter)) {
	              meiliSearchParams.filter.unshift(filter);
	            } else {
	              meiliSearchParams.filter = [filter];
	            }
	          }
	        },
	        addShowMatchesPosition: function () {
	          var value = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.showMatchesPosition;
	          if (value !== undefined) {
	            meiliSearchParams.showMatchesPosition = value;
	          }
	        },
	        addMatchingStrategy: function () {
	          var value = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.matchingStrategy;
	          if (value !== undefined) {
	            meiliSearchParams.matchingStrategy = value;
	          }
	        },
	        addShowRankingScore: function () {
	          var value = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.showRankingScore;
	          if (value !== undefined) {
	            meiliSearchParams.showRankingScore = value;
	          }
	        },
	        addAttributesToSearchOn: function () {
	          var value = (overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.attributesToSearchOn) !== undefined ? overrideParams.attributesToSearchOn : restrictSearchableAttributes;
	          if (value !== undefined) {
	            meiliSearchParams.attributesToSearchOn = value;
	          }
	        },
	        addHybridSearch: function () {
	          var value = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.hybrid;
	          if (value !== undefined) {
	            meiliSearchParams.hybrid = value;
	          }
	        }
	      };
	    }
	    /**
	     * Adapt search request from instantsearch.js
	     * to search request compliant with Meilisearch
	     *
	     * @param  {SearchContext} searchContext
	     * @returns {MeiliSearchMultiSearchParams}
	     */
	    function adaptSearchParams(searchContext) {
	      var meilisearchParams = MeiliParamsCreator(searchContext);
	      meilisearchParams.addQuery();
	      meilisearchParams.addFacets();
	      meilisearchParams.addAttributesToCrop();
	      meilisearchParams.addCropLength();
	      meilisearchParams.addCropMarker();
	      meilisearchParams.addFilters();
	      meilisearchParams.addAttributesToRetrieve();
	      meilisearchParams.addAttributesToHighlight();
	      meilisearchParams.addPreTag();
	      meilisearchParams.addPostTag();
	      meilisearchParams.addPagination();
	      meilisearchParams.addSort();
	      meilisearchParams.addGeoSearchFilter();
	      meilisearchParams.addShowMatchesPosition();
	      meilisearchParams.addMatchingStrategy();
	      meilisearchParams.addShowRankingScore();
	      meilisearchParams.addAttributesToSearchOn();
	      meilisearchParams.addHybridSearch();
	      return meilisearchParams.getParams();
	    }
	    function removeDuplicate(key) {
	      var indexes = [];
	      return function (object) {
	        if (indexes.includes(object[key])) {
	          return false;
	        }
	        indexes.push(object[key]);
	        return true;
	      };
	    }

	    /**
	     * @param  {any} str
	     * @returns {boolean}
	     */
	    /**
	     * @param  {any[]} arr
	     * @returns {string}
	     */
	    function stringifyArray(arr) {
	      return arr.reduce(function (acc, curr) {
	        return acc += JSON.stringify(curr);
	      }, '');
	    }

	    /**
	     * Stringify values following instantsearch practices.
	     *
	     * @param  {any} value - value that needs to be stringified
	     */
	    function stringifyValue(value) {
	      if (typeof value === 'string') {
	        // String
	        return value;
	      } else if (value === undefined) {
	        // undefined
	        return JSON.stringify(null);
	      } else {
	        return JSON.stringify(value);
	      }
	    }
	    /**
	     * Recursif function wrap the deepest possible value
	     * the following way: { value: "xx" }.
	     *
	     * For example:
	     *
	     * {
	     * "rootField": { "value": "x" }
	     * "nestedField": { child: { value: "y" } }
	     * }
	     *
	     * recursivity continues until the value is not an array or an object.
	     *
	     * @param  {any} value - value of a field
	     *
	     * @returns Record<string, any>
	     */
	    function wrapValue(value) {
	      if (Array.isArray(value)) {
	        // Array
	        return value.map(function (elem) {
	          return wrapValue(elem);
	        });
	      } else if (isPureObject(value)) {
	        // Object
	        return Object.keys(value).reduce(function (nested, key) {
	          nested[key] = wrapValue(value[key]);
	          return nested;
	        }, {});
	      } else {
	        return {
	          value: stringifyValue(value)
	        };
	      }
	    }
	    /**
	     * Adapt Meilisearch formatted fields to a format compliant to instantsearch.js.
	     *
	     * @param  {Record<string} formattedHit
	     * @param  {SearchContext} searchContext
	     * @returns {Record}
	     */
	    function adaptFormattedFields(hit) {
	      if (!hit) return {};
	      var _formattedResult = wrapValue(hit);
	      var highlightedHit = {
	        // We could not determine what the differences are between those two fields.
	        _highlightResult: _formattedResult,
	        _snippetResult: _formattedResult
	      };
	      return highlightedHit;
	    }

	    /**
	     * @param  {any[]} hits
	     * @returns {Array<Record<string, any>>}
	     */
	    function adaptGeoResponse(hits) {
	      var _a;
	      for (var i = 0; i < hits.length; i++) {
	        var objectID = "".concat(i + Math.random() * 1000000);
	        if (hits[i]._geo) {
	          hits[i]._geoloc = hits[i]._geo;
	          hits[i].objectID = objectID;
	        }
	        if ((_a = hits[i]._formatted) === null || _a === void 0 ? void 0 : _a._geo) {
	          hits[i]._formatted._geoloc = hits[i]._formatted._geo;
	          hits[i]._formatted.objectID = objectID;
	        }
	      }
	      return hits;
	    }

	    /**
	     * @param  {MeilisearchMultiSearchResult} searchResult
	     * @param  {SearchContext} searchContext
	     * @returns {Array<Record<string, any>>}
	     */
	    function adaptHits(searchResponse, config) {
	      var hits = searchResponse.hits;
	      var hitsPerPage = searchResponse.pagination.hitsPerPage;
	      var finitePagination = config.finitePagination,
	        primaryKey = config.primaryKey; // Needs: finite, hitsPerPage
	      // if the length of the hits is bigger than the hitsPerPage
	      // It means that there is still pages to come as we append limit by hitsPerPage + 1
	      // In which case we still need to remove the additional hit returned by Meilisearch
	      if (!finitePagination && hits.length > hitsPerPage) {
	        hits.splice(hits.length - 1, 1);
	      }
	      var adaptedHits = hits.map(function (hit) {
	        // Creates Hit object compliant with InstantSearch
	        if (Object.keys(hit).length > 0) {
	          var formattedHit = hit._formatted;
	          hit._matchesPosition;
	          var documentFields = __rest(hit, ["_formatted", "_matchesPosition"]);
	          var adaptedHit = Object.assign(documentFields, adaptFormattedFields(formattedHit));
	          if (primaryKey) {
	            adaptedHit.objectID = hit[primaryKey];
	          }
	          return adaptedHit;
	        }
	        return hit;
	      });
	      adaptedHits = adaptGeoResponse(adaptedHits);
	      return adaptedHits;
	    }
	    function adaptTotalHits(searchResponse) {
	      var _a = searchResponse.hitsPerPage,
	        hitsPerPage = _a === void 0 ? 0 : _a,
	        _b = searchResponse.totalPages,
	        totalPages = _b === void 0 ? 0 : _b,
	        estimatedTotalHits = searchResponse.estimatedTotalHits,
	        totalHits = searchResponse.totalHits;
	      if (estimatedTotalHits != null) {
	        return estimatedTotalHits;
	      } else if (totalHits != null) {
	        return totalHits;
	      }
	      // Should not happen but safeguarding just in case
	      return hitsPerPage * totalPages;
	    }
	    function adaptNbPages(searchResponse, hitsPerPage) {
	      if (searchResponse.totalPages != null) {
	        return searchResponse.totalPages;
	      }
	      // Avoid dividing by 0
	      if (hitsPerPage === 0) {
	        return 0;
	      }
	      var _a = searchResponse.limit,
	        limit = _a === void 0 ? 20 : _a,
	        _b = searchResponse.offset,
	        offset = _b === void 0 ? 0 : _b,
	        hits = searchResponse.hits;
	      var additionalPage = hits.length >= limit ? 1 : 0;
	      return offset / hitsPerPage + 1 + additionalPage;
	    }
	    function adaptPaginationParameters(searchResponse, paginationState) {
	      var hitsPerPage = paginationState.hitsPerPage,
	        page = paginationState.page;
	      var nbPages = adaptNbPages(searchResponse, hitsPerPage);
	      return {
	        page: page,
	        nbPages: nbPages,
	        hitsPerPage: hitsPerPage
	      };
	    }
	    function getFacetNames(facets) {
	      if (!facets) return [];else if (typeof facets === 'string') return [facets];
	      return facets;
	    }
	    // Fills the missing facetValue in the current facet distribution if `keepZeroFacet` is true
	    // using the initial facet distribution. Ex:
	    //
	    // Initial distribution: { genres: { horror: 10, comedy: 4 } }
	    // Current distribution: { genres: { horror: 3 }}
	    // Returned distribution: { genres: { horror: 3, comedy: 0 }}
	    function fillMissingFacetValues(facets, initialFacetDistribution, facetDistribution) {
	      var facetNames = getFacetNames(facets);
	      var filledDistribution = {};
	      for (var _i = 0, facetNames_1 = facetNames; _i < facetNames_1.length; _i++) {
	        var facet = facetNames_1[_i];
	        for (var facetValue in initialFacetDistribution[facet]) {
	          if (!filledDistribution[facet]) {
	            // initialize sub object
	            filledDistribution[facet] = facetDistribution[facet] || {};
	          }
	          if (!filledDistribution[facet][facetValue]) {
	            filledDistribution[facet][facetValue] = 0;
	          } else {
	            filledDistribution[facet][facetValue] = facetDistribution[facet][facetValue];
	          }
	        }
	      }
	      return filledDistribution;
	    }
	    function adaptFacetDistribution(keepZeroFacets, facets, initialFacetDistribution, facetDistribution) {
	      if (keepZeroFacets) {
	        facetDistribution = facetDistribution || {};
	        return fillMissingFacetValues(facets, initialFacetDistribution, facetDistribution);
	      }
	      return facetDistribution;
	    }
	    function adaptFacetStats(meiliFacetStats) {
	      var facetStats = Object.keys(meiliFacetStats).reduce(function (stats, facet) {
	        stats[facet] = __assign(__assign({}, meiliFacetStats[facet]), {
	          avg: 0,
	          sum: 0
	        }); // Set at 0 as these numbers are not provided by Meilisearch
	        return stats;
	      }, {});
	      return facetStats;
	    }

	    /**
	     * Adapt multiple search results from Meilisearch
	     * to search results compliant with instantsearch.js
	     *
	     * @param  {Array<MeilisearchMultiSearchResult<T>>} searchResponse
	     * @param  {Record<string, FacetDistribution>} initialFacetDistribution
	     * @param  {InstantMeiliSearchConfig} config
	     * @returns {{ results: Array<AlgoliaSearchResponse<T>> }}
	     */
	    function adaptSearchResults(meilisearchResults, initialFacetDistribution, config) {
	      var instantSearchResult = meilisearchResults.map(function (meilisearchResult) {
	        return adaptSearchResult(meilisearchResult, initialFacetDistribution[meilisearchResult.indexUid], config);
	      });
	      return {
	        results: instantSearchResult
	      };
	    }
	    /**
	     * Adapt search result from Meilisearch
	     * to search result compliant with instantsearch.js
	     *
	     * @param  {MeilisearchMultiSearchResult<Record<string>>} searchResponse
	     * @param  {Record<string, FacetDistribution>} initialFacetDistribution
	     * @param  {InstantMeiliSearchConfig} config
	     * @returns {AlgoliaSearchResponse<T>}
	     */
	    function adaptSearchResult(meiliSearchResult, initialFacetDistribution, config) {
	      var processingTimeMs = meiliSearchResult.processingTimeMs,
	        query = meiliSearchResult.query,
	        indexUid = meiliSearchResult.indexUid,
	        _a = meiliSearchResult.facetDistribution,
	        responseFacetDistribution = _a === void 0 ? {} : _a,
	        _b = meiliSearchResult.facetStats,
	        facetStats = _b === void 0 ? {} : _b;
	      var facets = Object.keys(responseFacetDistribution);
	      var _c = adaptPaginationParameters(meiliSearchResult, meiliSearchResult.pagination),
	        hitsPerPage = _c.hitsPerPage,
	        page = _c.page,
	        nbPages = _c.nbPages;
	      var hits = adaptHits(meiliSearchResult, config);
	      var nbHits = adaptTotalHits(meiliSearchResult);
	      var facetDistribution = adaptFacetDistribution(config.keepZeroFacets, facets, initialFacetDistribution, responseFacetDistribution);
	      // Create result object compliant with InstantSearch
	      var adaptedSearchResult = {
	        index: indexUid,
	        hitsPerPage: hitsPerPage,
	        page: page,
	        facets: facetDistribution,
	        nbPages: nbPages,
	        nbHits: nbHits,
	        processingTimeMS: processingTimeMs,
	        query: query,
	        hits: hits,
	        params: '',
	        exhaustiveNbHits: false,
	        facets_stats: adaptFacetStats(facetStats)
	      };
	      return adaptedSearchResult;
	    }

	    /**
	     * Split sort string into an array.
	     *
	     * Example:
	     * '_geoPoint(37.8153, -122.4784):asc,title:asc,description:desc'
	     *
	     * becomes:
	     * [
	     * '_geoPoint(37.8153, -122.4784):asc',
	     * 'title:asc',
	     * 'description:desc',
	     * ]
	     *
	     * @param {string} sortStr
	     * @returns {string[]}
	     */
	    function splitSortString(sortStr) {
	      if (!sortStr) return [];
	      var regex = /[^:]+:(?:asc|desc)/g;
	      var sortRules = [];
	      var match;
	      while ((match = regex.exec(sortStr)) !== null) {
	        sortRules.push(match[0]);
	      }
	      return sortRules.map(function (str) {
	        return str.replace(/^,+|,+$/, '');
	      });
	    }

	    /**
	     * Create the current state of the pagination
	     *
	     * @param  {boolean} [finite]
	     * @param  {number} [hitsPerPage]
	     * @param  {number} [page]
	     * @returns {SearchContext}
	     */
	    function createPaginationState(finite, hitsPerPage, page) {
	      return {
	        hitsPerPage: hitsPerPage === undefined ? 20 : hitsPerPage,
	        page: page || 0,
	        finite: !!finite
	      };
	    }
	    function separateIndexFromSortRules(indexName) {
	      var colonIndex = indexName.indexOf(':');
	      if (colonIndex === -1) {
	        return {
	          indexUid: indexName,
	          sortBy: ''
	        };
	      }
	      return {
	        indexUid: indexName.substring(0, colonIndex),
	        sortBy: indexName.substring(colonIndex + 1)
	      };
	    }
	    /**
	     * @param  {AlgoliaMultipleQueriesQuery} searchRequest
	     * @param  {Context} options
	     * @returns {SearchContext}
	     */
	    function createSearchContext(searchRequest, options) {
	      var query = searchRequest.query,
	        indexName = searchRequest.indexName,
	        instantSearchParams = searchRequest.params;
	      // Split index name and possible sorting rules
	      var _a = separateIndexFromSortRules(indexName),
	        indexUid = _a.indexUid,
	        sortBy = _a.sortBy;
	      var paginationState = createPaginationState(options.finitePagination, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.hitsPerPage, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.page);
	      var searchContext = __assign(__assign(__assign(__assign({}, options), {
	        query: query
	      }), instantSearchParams), {
	        sort: splitSortString(sortBy),
	        indexUid: indexUid,
	        pagination: paginationState,
	        placeholderSearch: options.placeholderSearch !== false,
	        keepZeroFacets: !!options.keepZeroFacets
	      });
	      return searchContext;
	    }
	    /**
	     * @param  {AlgoliaMultipleQueriesQuery} searchRequest
	     * @param  {Context} options
	     * @returns {SearchContext}
	     */
	    function createFacetSearchContext(searchRequest, options) {
	      // Split index name and possible sorting rules
	      var _a = separateIndexFromSortRules(searchRequest.indexName),
	        indexUid = _a.indexUid,
	        sortBy = _a.sortBy;
	      var instantSearchParams = searchRequest.params;
	      var paginationState = createPaginationState(options.finitePagination, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.hitsPerPage, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.page);
	      var searchContext = __assign(__assign(__assign({}, options), instantSearchParams), {
	        sort: splitSortString(sortBy),
	        indexUid: indexUid,
	        pagination: paginationState,
	        placeholderSearch: options.placeholderSearch !== false,
	        keepZeroFacets: !!options.keepZeroFacets
	      });
	      return searchContext;
	    }

	    /**
	     * @param  {Record<string} cache
	     * @returns {SearchCache}
	     */
	    function SearchCache(cache) {
	      if (cache === void 0) {
	        cache = {};
	      }
	      var searchCache = cache;
	      return {
	        getEntry: function (key) {
	          if (searchCache[key]) {
	            try {
	              return JSON.parse(searchCache[key]);
	            } catch (_) {
	              return undefined;
	            }
	          }
	          return undefined;
	        },
	        formatKey: function (components) {
	          return stringifyArray(components);
	        },
	        setEntry: function (key, searchResponse) {
	          searchCache[key] = JSON.stringify(searchResponse);
	        },
	        clearCache: function () {
	          searchCache = {};
	        }
	      };
	    }
	    function getParametersWithoutFilters(searchContext) {
	      var defaultSearchContext = __assign(__assign({}, searchContext), {
	        // placeholdersearch true to ensure a request is made
	        placeholderSearch: true,
	        // query set to empty to ensure retrieving the default facetdistribution
	        query: ''
	      });
	      var meilisearchParams = MeiliParamsCreator(defaultSearchContext);
	      meilisearchParams.addFacets();
	      meilisearchParams.addPagination();
	      return meilisearchParams.getParams();
	    }
	    // Fetch the initial facets distribution of an Index
	    // Used to show the facets when `placeholderSearch` is set to true
	    // Used to fill the missing facet values when `keepZeroFacets` is set to true
	    function initFacetDistribution(searchResolver, queries, initialFacetDistribution) {
	      return __awaiter(this, void 0, void 0, function () {
	        var removeIndexUidDuplicates, searchQueries, results, _i, results_1, searchResult;
	        return __generator(this, function (_a) {
	          switch (_a.label) {
	            case 0:
	              removeIndexUidDuplicates = removeDuplicate('indexUid');
	              searchQueries = queries.filter(removeIndexUidDuplicates) // only make one request per indexUid
	              .filter(function (_a) {
	                var indexUid = _a.indexUid;
	                // avoid requesting on indexes that already have an initial facetDistribution
	                return !Object.keys(initialFacetDistribution).includes(indexUid);
	              });
	              if (searchQueries.length === 0) return [2 /*return*/, initialFacetDistribution];
	              return [4 /*yield*/, searchResolver.multiSearch(searchQueries, [])];
	            case 1:
	              results = _a.sent();
	              for (_i = 0, results_1 = results; _i < results_1.length; _i++) {
	                searchResult = results_1[_i];
	                initialFacetDistribution[searchResult.indexUid] = searchResult.facetDistribution || {};
	              }
	              return [2 /*return*/, initialFacetDistribution];
	          }
	        });
	      });
	    }
	    function fillMissingFacets(initialFacetDistribution, meilisearchResults) {
	      for (var _i = 0, meilisearchResults_1 = meilisearchResults; _i < meilisearchResults_1.length; _i++) {
	        var searchResult = meilisearchResults_1[_i];
	        initialFacetDistribution[searchResult.indexUid] = __assign(__assign({}, searchResult.facetDistribution || {}), initialFacetDistribution[searchResult.indexUid] || {});
	      }
	      return initialFacetDistribution;
	    }
	    var PACKAGE_VERSION = '0.16.0';
	    var constructClientAgents = function (clientAgents) {
	      if (clientAgents === void 0) {
	        clientAgents = [];
	      }
	      var instantMeilisearchAgent = "Meilisearch instant-meilisearch (v".concat(PACKAGE_VERSION, ")");
	      return clientAgents.concat(instantMeilisearchAgent);
	    };

	    /**
	     * Instantiate SearchClient required by instantsearch.js.
	     *
	     * @param  {string} hostUrl
	     * @param  {string | ApiKeyCallback} [apiKey='']
	     * @param  {InstantMeiliSearchOptions} [instantMeiliSearchOptions={}]
	     * @returns {InstantMeiliSearchObject}
	     */
	    function instantMeiliSearch(hostUrl, apiKey, instantMeiliSearchOptions) {
	      if (apiKey === void 0) {
	        apiKey = '';
	      }
	      if (instantMeiliSearchOptions === void 0) {
	        instantMeiliSearchOptions = {};
	      }
	      // Validate parameters
	      validateInstantMeiliSearchParams(hostUrl, apiKey, instantMeiliSearchOptions);
	      // Resolve possible function to get apiKey
	      apiKey = getApiKey(apiKey);
	      var clientAgents = constructClientAgents(instantMeiliSearchOptions.clientAgents);
	      var meilisearchConfig = {
	        host: hostUrl,
	        apiKey: apiKey,
	        clientAgents: clientAgents
	      };
	      if (instantMeiliSearchOptions.httpClient !== undefined) {
	        meilisearchConfig.httpClient = instantMeiliSearchOptions.httpClient;
	      }
	      if (instantMeiliSearchOptions.requestConfig !== undefined) {
	        meilisearchConfig.requestConfig = instantMeiliSearchOptions.requestConfig;
	      }
	      var meilisearchClient = new meilisearch_umd.MeiliSearch(meilisearchConfig);
	      var searchCache = SearchCache();
	      // create search resolver with included cache
	      var searchResolver = SearchResolver(meilisearchClient, searchCache);
	      var initialFacetDistribution = {};
	      var instantMeilisearchConfig = getInstantMeilisearchConfig(instantMeiliSearchOptions);
	      return {
	        setMeiliSearchParams: function (params) {
	          var meiliSearchParams = instantMeiliSearchOptions.meiliSearchParams;
	          instantMeiliSearchOptions.meiliSearchParams = meiliSearchParams === undefined ? params : __assign(__assign({}, meiliSearchParams), params);
	        },
	        searchClient: {
	          clearCache: function () {
	            return searchCache.clearCache();
	          },
	          /**
	           * @param  {readonlyAlgoliaMultipleQueriesQuery[]} instantSearchRequests
	           * @returns {Array}
	           */
	          search: function (instantSearchRequests) {
	            return __awaiter(this, void 0, void 0, function () {
	              var meilisearchRequests, instantSearchPagination, initialFacetDistributionsRequests, _i, instantSearchRequests_1, searchRequest, searchContext, meilisearchSearchQuery, defaultSearchQuery, meilisearchResults, instantSearchResponse, e_1;
	              return __generator(this, function (_a) {
	                switch (_a.label) {
	                  case 0:
	                    _a.trys.push([0, 3,, 4]);
	                    meilisearchRequests = [];
	                    instantSearchPagination = [];
	                    initialFacetDistributionsRequests = [];
	                    for (_i = 0, instantSearchRequests_1 = instantSearchRequests; _i < instantSearchRequests_1.length; _i++) {
	                      searchRequest = instantSearchRequests_1[_i];
	                      searchContext = createSearchContext(searchRequest, instantMeiliSearchOptions);
	                      meilisearchSearchQuery = adaptSearchParams(searchContext);
	                      meilisearchRequests.push(meilisearchSearchQuery);
	                      defaultSearchQuery = getParametersWithoutFilters(searchContext);
	                      initialFacetDistributionsRequests.push(defaultSearchQuery);
	                      // Keep information about the pagination parameters of instantsearch as
	                      // they are needed to adapt the search response of Meilisearch
	                      instantSearchPagination.push(searchContext.pagination);
	                    }
	                    return [4 /*yield*/, initFacetDistribution(searchResolver, initialFacetDistributionsRequests, initialFacetDistribution)
	                    // Search request to Meilisearch happens here
	                    ];

	                  case 1:
	                    initialFacetDistribution = _a.sent();
	                    return [4 /*yield*/, searchResolver.multiSearch(meilisearchRequests, instantSearchPagination // Create issue on pagination
	                    )
	                    // Fill the missing facet values if keepZeroFacets is true
	                    ];

	                  case 2:
	                    meilisearchResults = _a.sent();
	                    // Fill the missing facet values if keepZeroFacets is true
	                    initialFacetDistribution = fillMissingFacets(initialFacetDistribution, meilisearchResults);
	                    instantSearchResponse = adaptSearchResults(meilisearchResults, initialFacetDistribution, instantMeilisearchConfig);
	                    return [2 /*return*/, instantSearchResponse];
	                  case 3:
	                    e_1 = _a.sent();
	                    console.error(e_1);
	                    throw new Error(e_1);
	                  case 4:
	                    return [2 /*return*/];
	                }
	              });
	            });
	          },

	          searchForFacetValues: function (requests) {
	            return __awaiter(this, void 0, void 0, function () {
	              var results, _i, requests_1, request, searchContext, meilisearchSearchQuery, meilisearchRequest, meilisearchResponse, facetHits, result;
	              return __generator(this, function (_a) {
	                switch (_a.label) {
	                  case 0:
	                    results = [];
	                    _i = 0, requests_1 = requests;
	                    _a.label = 1;
	                  case 1:
	                    if (!(_i < requests_1.length)) return [3 /*break*/, 4];
	                    request = requests_1[_i];
	                    searchContext = createFacetSearchContext(request, instantMeiliSearchOptions);
	                    meilisearchSearchQuery = adaptSearchParams(searchContext);
	                    meilisearchRequest = __assign(__assign({}, meilisearchSearchQuery), {
	                      facetQuery: request.params.facetQuery,
	                      facetName: request.params.facetName
	                    });
	                    delete meilisearchRequest.indexUid;
	                    return [4 /*yield*/, meilisearchClient.index(searchContext.indexUid).searchForFacetValues(meilisearchRequest)];
	                  case 2:
	                    meilisearchResponse = _a.sent();
	                    facetHits = meilisearchResponse.facetHits.map(function (facetHit) {
	                      return __assign(__assign({}, facetHit), {
	                        // not currently supported
	                        highlighted: facetHit.value
	                      });
	                    });
	                    result = {
	                      facetHits: facetHits,
	                      exhaustiveFacetsCount: false,
	                      processingTimeMS: meilisearchResponse.processingTimeMs
	                    };
	                    results.push(result);
	                    _a.label = 3;
	                  case 3:
	                    _i++;
	                    return [3 /*break*/, 1];
	                  case 4:
	                    return [2 /*return*/, results];
	                }
	              });
	            });
	          }
	        }
	      };
	    }
	    exports.instantMeiliSearch = instantMeiliSearch;
	    Object.defineProperty(exports, '__esModule', {
	      value: true
	    });
	  });
	});

	var PACKAGE_VERSION = '0.3.0';

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __spreadArray(to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	}

	typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
	    var e = new Error(message);
	    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};

	var concatUserAgents = function (clientAgents) {
	    return clientAgents.concat(clientAgents.filter(function (agent) { return agent; }));
	};
	/**
	 * Create a searchClient instance
	 */
	function createSearchClient(_a) {
	    var userAgent = _a.userAgent;
	    return function (_a) {
	        var url = _a.url, apiKey = _a.apiKey, _b = _a.options, options = _b === void 0 ? { clientAgents: [] } : _b;
	        var clientAgents = options.clientAgents || [];
	        var searchClient = instantMeilisearch_umd.instantMeiliSearch(url, apiKey, __assign(__assign({}, options), { clientAgents: concatUserAgents(__spreadArray([userAgent], clientAgents, true)) })).searchClient;
	        return __assign({}, searchClient);
	    };
	}

	/**
	 * Create searchClient instance for autocomplete
	 */
	var userAgent = "Meilisearch autocomplete-client (v".concat(PACKAGE_VERSION, ")");
	var meilisearchAutocompleteClient = createSearchClient({ userAgent: userAgent });

	var HIGHLIGHT_PRE_TAG = '__aa-highlight__';
	var HIGHLIGHT_POST_TAG = '__/aa-highlight__';
	var HITS_PER_PAGE = 5;

	function fetchMeilisearchResults(_a) {
	    var searchClient = _a.searchClient, queries = _a.queries;
	    return searchClient
	        .search(queries.map(function (searchParameters) {
	        var params = searchParameters.params, headers = __rest(searchParameters, ["params"]);
	        return __assign(__assign({}, headers), { params: __assign({ hitsPerPage: HITS_PER_PAGE, highlightPreTag: HIGHLIGHT_PRE_TAG, highlightPostTag: HIGHLIGHT_POST_TAG }, params) });
	    }))
	        .then(function (response) {
	        return response.results;
	    });
	}

	function createRequester(fetcher, requesterId) {
	    function execute(fetcherParams) {
	        return fetcher({
	            searchClient: fetcherParams.searchClient,
	            queries: fetcherParams.requests.map(function (x) { return x.query; })
	        }).then(function (responses) {
	            return responses.map(function (response, index) {
	                var _a = fetcherParams.requests[index], sourceId = _a.sourceId, transformResponse = _a.transformResponse;
	                return {
	                    items: response,
	                    sourceId: sourceId,
	                    transformResponse: transformResponse
	                };
	            });
	        });
	    }
	    return function createSpecifiedRequester(requesterParams) {
	        return function requester(requestParams) {
	            return __assign(__assign({ requesterId: requesterId, execute: execute }, requesterParams), requestParams);
	        };
	    };
	}

	var createMeilisearchRequester = createRequester(function (params) { return fetchMeilisearchResults(params); }, 'meilisearch');

	/**
	 * Retrieves Meilisearch results from multiple indexes.
	 */
	var getMeilisearchResults = createMeilisearchRequester({
	    transformResponse: function (response) { return response.hits; }
	});

	exports.__moduleExports = instantMeilisearch_umd;
	exports.concatUserAgents = concatUserAgents;
	exports.createMeilisearchRequester = createMeilisearchRequester;
	exports.createRequester = createRequester;
	exports.createSearchClient = createSearchClient;
	exports.fetchMeilisearchResults = fetchMeilisearchResults;
	exports.getMeilisearchResults = getMeilisearchResults;
	exports.meilisearchAutocompleteClient = meilisearchAutocompleteClient;

	Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 58160:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })

}]);