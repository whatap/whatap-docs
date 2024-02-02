(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[22514],{

/***/ 98396:
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
// EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ 70864:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(94064)) :
    0;
}(this, (function (exports) { 'use strict';

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

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    var meilisearch_umd = createCommonjsModule(function (module, exports) {
      (function (global, factory) {
        factory(exports) ;
      })(commonjsGlobal, function (exports) {

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
        function _regeneratorRuntime() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

          _regeneratorRuntime = function () {
            return exports;
          };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            $Symbol = "function" == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), obj[key];
          }
          try {
            define({}, "");
          } catch (err) {
            define = function (obj, key, value) {
              return obj[key] = value;
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return generator._invoke = function (innerFn, self, context) {
              var state = "suspendedStart";
              return function (method, arg) {
                if ("executing" === state) throw new Error("Generator is already running");
                if ("completed" === state) {
                  if ("throw" === method) throw arg;
                  return doneResult();
                }
                for (context.method = method, context.arg = arg;;) {
                  var delegate = context.delegate;
                  if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                      if (delegateResult === ContinueSentinel) continue;
                      return delegateResult;
                    }
                  }
                  if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
                    if ("suspendedStart" === state) throw state = "completed", context.arg;
                    context.dispatchException(context.arg);
                  } else "return" === context.method && context.abrupt("return", context.arg);
                  state = "executing";
                  var record = tryCatch(innerFn, self, context);
                  if ("normal" === record.type) {
                    if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                    return {
                      value: record.arg,
                      done: context.done
                    };
                  }
                  "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
                }
              };
            }(innerFn, self, context), generator;
          }
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ("throw" !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function (unwrapped) {
                  result.value = unwrapped, resolve(result);
                }, function (error) {
                  return invoke("throw", error, resolve, reject);
                });
              }
              reject(record.arg);
            }
            var previousPromise;
            this._invoke = function (method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (undefined === method) {
              if (context.delegate = null, "throw" === context.method) {
                if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
                context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }
              return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
            var info = record.arg;
            return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0]
            };
            1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal", delete record.arg, entry.completion = record;
          }
          function Context(tryLocsList) {
            this.tryEntries = [{
              tryLoc: "root"
            }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ("function" == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    return next.value = undefined, next.done = !0, next;
                  };
                return next.next = next;
              }
            }
            return {
              next: doneResult
            };
          }
          function doneResult() {
            return {
              value: undefined,
              done: !0
            };
          }
          return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
          }, exports.mark = function (genFun) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
          }, exports.awrap = function (arg) {
            return {
              __await: arg
            };
          }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
            return this;
          }), define(Gp, "toString", function () {
            return "[object Generator]";
          }), exports.keys = function (object) {
            var keys = [];
            for (var key in object) keys.push(key);
            return keys.reverse(), function next() {
              for (; keys.length;) {
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
              }
              return next.done = !0, next;
            };
          }, exports.values = values, Context.prototype = {
            constructor: Context,
            reset: function (skipTempReset) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
            },
            stop: function () {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ("throw" === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function (exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally) throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
            },
            complete: function (record, afterLoc) {
              if ("throw" === record.type) throw record.arg;
              return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
            },
            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
              }
            },
            catch: function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (iterable, resultName, nextLoc) {
              return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
            }
          }, exports;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, _typeof(obj);
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
            Object.defineProperty(target, descriptor.key, descriptor);
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
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
        function _iterableToArrayLimit(arr, i) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
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
        var MeiliSearchCommunicationError = /*#__PURE__*/function (_Error) {
          _inherits(MeiliSearchCommunicationError, _Error);
          var _super = _createSuper(MeiliSearchCommunicationError);
          function MeiliSearchCommunicationError(message, body, url, stack) {
            var _this;
            _classCallCheck(this, MeiliSearchCommunicationError);
            var _a, _b, _c;
            _this = _super.call(this, message); // Make errors comparison possible. ex: error instanceof MeiliSearchCommunicationError.

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
        }( /*#__PURE__*/_wrapNativeSuper(Error));
        var MeiliSearchApiError = /*#__PURE__*/function (_Error) {
          _inherits(MeiliSearchApiError, _Error);
          var _super = _createSuper(MeiliSearchApiError);
          function MeiliSearchApiError(error, status) {
            var _this;
            _classCallCheck(this, MeiliSearchApiError);
            _this = _super.call(this, error.message); // Make errors comparison possible. ex: error instanceof MeiliSearchApiError.

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
        }( /*#__PURE__*/_wrapNativeSuper(Error));
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
        var MeiliSearchError = /*#__PURE__*/function (_Error) {
          _inherits(MeiliSearchError, _Error);
          var _super = _createSuper(MeiliSearchError);
          function MeiliSearchError(message) {
            var _this;
            _classCallCheck(this, MeiliSearchError);
            _this = _super.call(this, message); // Make errors comparison possible. ex: error instanceof MeiliSearchError.

            Object.setPrototypeOf(_assertThisInitialized(_this), MeiliSearchError.prototype);
            _this.name = 'MeiliSearchError';
            if (Error.captureStackTrace) {
              Error.captureStackTrace(_assertThisInitialized(_this), MeiliSearchError);
            }
            return _this;
          }
          return _createClass(MeiliSearchError);
        }( /*#__PURE__*/_wrapNativeSuper(Error));
        var MeiliSearchTimeOutError = /*#__PURE__*/function (_Error) {
          _inherits(MeiliSearchTimeOutError, _Error);
          var _super = _createSuper(MeiliSearchTimeOutError);
          function MeiliSearchTimeOutError(message) {
            var _this;
            _classCallCheck(this, MeiliSearchTimeOutError);
            _this = _super.call(this, message); // Make errors comparison possible. ex: error instanceof MeiliSearchTimeOutError.

            Object.setPrototypeOf(_assertThisInitialized(_this), MeiliSearchTimeOutError.prototype);
            _this.name = 'MeiliSearchTimeOutError';
            if (Error.captureStackTrace) {
              Error.captureStackTrace(_assertThisInitialized(_this), MeiliSearchTimeOutError);
            }
            return _this;
          }
          return _createClass(MeiliSearchTimeOutError);
        }( /*#__PURE__*/_wrapNativeSuper(Error));
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
        var PACKAGE_VERSION = '0.36.0';
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
          var headers = cloneAndParseHeaders((_b = (_a = config.requestConfig) === null || _a === void 0 ? void 0 : _a.headers) !== null && _b !== void 0 ? _b : {}); // do not override if user provided the header

          if (config.apiKey && !headers[authorization]) {
            headers[authorization] = "Bearer ".concat(config.apiKey);
          }
          if (!headers[contentType]) {
            headers['Content-Type'] = 'application/json';
          } // Creates the custom user agent with information on the package used.

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
                      } // in case a custom content-type is provided
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
                        var promises = [fetchPromise]; // TimeoutPromise will not run if undefined or zero

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
          } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
                      parameters = removeUndefinedFromObject(parameters); // In case `filter` is provided, use `POST /documents/fetch`

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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
             * Update the the dictionary settings. Overwrite the old settings.
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
          }], [{
            key: "create",
            value: function create(uid) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var config = arguments.length > 2 ? arguments[2] : undefined;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
                var url, req, task;
                return _regeneratorRuntime().wrap(function _callee70$(_context70) {
                  while (1) switch (_context70.prev = _context70.next) {
                    case 0:
                      url = "indexes";
                      req = new HttpRequests(config);
                      _context70.next = 4;
                      return req.post(url, Object.assign(Object.assign({}, options), {
                        uid: uid
                      }));
                    case 4:
                      task = _context70.sent;
                      return _context70.abrupt("return", new EnqueuedTask(task));
                    case 6:
                    case "end":
                      return _context70.stop();
                  }
                }, _callee70);
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
            } ///
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
        var requestConfig = instantMeiliSearchOptions.requestConfig, httpClient = instantMeiliSearchOptions.httpClient;
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
                                if (cachedResponse)
                                    return [2 /*return*/, cachedResponse];
                                return [4 /*yield*/, client.multiSearch({
                                        queries: searchQueries
                                    })];
                            case 1:
                                searchResponses = _a.sent();
                                responseWithPagination = searchResponses.results.map(function (response, index) { return (__assign(__assign({}, response), { 
                                    // TODO: should be removed at one point
                                    pagination: instantSearchPagination[index] || {} })); });
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
        var insideBoundingBox = _a.insideBoundingBox, aroundLatLng = _a.aroundLatLng, aroundRadius = _a.aroundRadius, minimumAroundRadius = _a.minimumAroundRadius;
        var middlePoint;
        var radius;
        var filter;
        if (aroundLatLng) {
            var _b = aroundLatLng
                .split(',')
                .map(function (pt) { return Number.parseFloat(pt).toFixed(5); }), lat = _b[0], lng = _b[1];
            middlePoint = [lat, lng];
        }
        if (aroundRadius != null || minimumAroundRadius != null) {
            if (aroundRadius === 'all') {
                console.warn('instant-meilisearch is not compatible with the `all` value on the aroundRadius parameter');
            }
            else if (aroundRadius != null) {
                radius = aroundRadius;
            }
            else {
                radius = minimumAroundRadius;
            }
        }
        if (insideBoundingBox && typeof insideBoundingBox === 'string') {
            var _c = insideBoundingBox
                .split(',')
                .map(function (pt) { return parseFloat(pt); }), lat1 = _c[0], lng1 = _c[1], lat2 = _c[2], lng2 = _c[3];
            filter = "_geoBoundingBox([".concat(lat1, ", ").concat(lng1, "], [").concat(lat2, ", ").concat(lng2, "])");
        }
        else if (middlePoint != null && radius != null) {
            var lat = middlePoint[0], lng = middlePoint[1];
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
    // Matches first occurrence of an operator
    var numericSplitRegExp = /(?<!(?:[<!>]?=|<|>|:).*)([<!>]?=|<|>|:)/;
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
        // TODO: Warn users to not enable facet values escape for negative numbers.
        //       https://github.com/algolia/instantsearch/blob/da701529ed325bb7a1d782e80cb994711e20d94a/packages/instantsearch.js/src/lib/utils/escapeFacetValue.ts#L13-L21
        var _a = filter.split(numericSplitRegExp), attribute = _a[0], operator = _a[1], value = _a[2];
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
        return typeof filters === 'string'
            ? transformCallback(filters)
            : filters.map(function (filter) {
                return typeof filter === 'string'
                    ? transformCallback(filter)
                    : filter.map(function (nestedFilter) { return transformCallback(nestedFilter); });
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
        var transformedNumericFilters = numericFilters !== undefined
            ? transformFilters(transformNumericFilter, numericFilters)
            : numericFilters;
        var transformedFacetFilters = facetFilters !== undefined
            ? transformFilters(transformFacetFilter, facetFilters)
            : facetFilters;
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
        var page = pagination.page, hitsPerPage = pagination.hitsPerPage;
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
        var page = pagination.page, hitsPerPage = pagination.hitsPerPage;
        if (!paginationRequired) {
            return {
                hitsPerPage: 0,
                page: page + 1
            };
        }
        else {
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
        var query = searchContext.query, indexUid = searchContext.indexUid, facets = searchContext.facets, attributesToSnippet = searchContext.attributesToSnippet, snippetEllipsisText = searchContext.snippetEllipsisText, filters = searchContext.filters, numericFilters = searchContext.numericFilters, facetFilters = searchContext.facetFilters, attributesToRetrieve = searchContext.attributesToRetrieve, attributesToHighlight = searchContext.attributesToHighlight, highlightPreTag = searchContext.highlightPreTag, highlightPostTag = searchContext.highlightPostTag, placeholderSearch = searchContext.placeholderSearch, pagination = searchContext.pagination, sort = searchContext.sort, restrictSearchableAttributes = searchContext.restrictSearchableAttributes, overrideParams = searchContext.meiliSearchParams;
        var meiliSearchParams = { indexUid: indexUid };
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
                meiliSearchParams.attributesToHighlight =
                    (_b = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.attributesToHighlight) !== null && _a !== void 0 ? _a : attributesToHighlight) !== null && _b !== void 0 ? _b : ['*'];
            },
            addPreTag: function () {
                var _a, _b;
                meiliSearchParams.highlightPreTag =
                    (_b = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.highlightPreTag) !== null && _a !== void 0 ? _a : highlightPreTag) !== null && _b !== void 0 ? _b : '__ais-highlight__';
            },
            addPostTag: function () {
                var _a, _b;
                meiliSearchParams.highlightPostTag =
                    (_b = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.highlightPostTag) !== null && _a !== void 0 ? _a : highlightPostTag) !== null && _b !== void 0 ? _b : '__/ais-highlight__';
            },
            addPagination: function () {
                var paginationRequired = isPaginationRequired(meilisearchFilters, query, placeholderSearch);
                if (pagination.finite) {
                    var _a = setFinitePagination(pagination, paginationRequired), hitsPerPage = _a.hitsPerPage, page = _a.page;
                    meiliSearchParams.hitsPerPage = hitsPerPage;
                    meiliSearchParams.page = page;
                }
                else {
                    var _b = setScrollPagination(pagination, paginationRequired), limit = _b.limit, offset = _b.offset;
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
                var insideBoundingBox = searchContext.insideBoundingBox, aroundLatLng = searchContext.aroundLatLng, aroundRadius = searchContext.aroundRadius, minimumAroundRadius = searchContext.minimumAroundRadius;
                var filter = adaptGeoSearch({
                    insideBoundingBox: insideBoundingBox,
                    aroundLatLng: aroundLatLng,
                    aroundRadius: aroundRadius,
                    minimumAroundRadius: minimumAroundRadius
                });
                if (filter !== undefined) {
                    if (Array.isArray(meiliSearchParams.filter)) {
                        meiliSearchParams.filter.unshift(filter);
                    }
                    else {
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
                var value = (overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.attributesToSearchOn) !== undefined
                    ? overrideParams.attributesToSearchOn
                    : (restrictSearchableAttributes);
                if (value !== undefined) {
                    meiliSearchParams.attributesToSearchOn = value;
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
            return (acc += JSON.stringify(curr));
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
        }
        else if (value === undefined) {
            // undefined
            return JSON.stringify(null);
        }
        else {
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
            return value.map(function (elem) { return wrapValue(elem); });
        }
        else if (isPureObject(value)) {
            // Object
            return Object.keys(value).reduce(function (nested, key) {
                nested[key] = wrapValue(value[key]);
                return nested;
            }, {});
        }
        else {
            return { value: stringifyValue(value) };
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
        if (!hit)
            return {};
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
        var finitePagination = config.finitePagination, primaryKey = config.primaryKey; // Needs: finite, hitsPerPage
        // if the length of the hits is bigger than the hitsPerPage
        // It means that there is still pages to come as we append limit by hitsPerPage + 1
        // In which case we still need to remove the additional hit returned by Meilisearch
        if (!finitePagination && hits.length > hitsPerPage) {
            hits.splice(hits.length - 1, 1);
        }
        var adaptedHits = hits.map(function (hit) {
            // Creates Hit object compliant with InstantSearch
            if (Object.keys(hit).length > 0) {
                var formattedHit = hit._formatted; hit._matchesPosition; var documentFields = __rest(hit, ["_formatted", "_matchesPosition"]);
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
        var _a = searchResponse.hitsPerPage, hitsPerPage = _a === void 0 ? 0 : _a, _b = searchResponse.totalPages, totalPages = _b === void 0 ? 0 : _b, estimatedTotalHits = searchResponse.estimatedTotalHits, totalHits = searchResponse.totalHits;
        if (estimatedTotalHits != null) {
            return estimatedTotalHits;
        }
        else if (totalHits != null) {
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
        var _a = searchResponse.limit, limit = _a === void 0 ? 20 : _a, _b = searchResponse.offset, offset = _b === void 0 ? 0 : _b, hits = searchResponse.hits;
        var additionalPage = hits.length >= limit ? 1 : 0;
        return offset / hitsPerPage + 1 + additionalPage;
    }
    function adaptPaginationParameters(searchResponse, paginationState) {
        var hitsPerPage = paginationState.hitsPerPage, page = paginationState.page;
        var nbPages = adaptNbPages(searchResponse, hitsPerPage);
        return {
            page: page,
            nbPages: nbPages,
            hitsPerPage: hitsPerPage
        };
    }

    function getFacetNames(facets) {
        if (!facets)
            return [];
        else if (typeof facets === 'string')
            return [facets];
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
                }
                else {
                    filledDistribution[facet][facetValue] =
                        facetDistribution[facet][facetValue];
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
            stats[facet] = __assign(__assign({}, meiliFacetStats[facet]), { avg: 0, sum: 0 }); // Set at 0 as these numbers are not provided by Meilisearch
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
        return { results: instantSearchResult };
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
        var processingTimeMs = meiliSearchResult.processingTimeMs, query = meiliSearchResult.query, indexUid = meiliSearchResult.indexUid, _a = meiliSearchResult.facetDistribution, responseFacetDistribution = _a === void 0 ? {} : _a, _b = meiliSearchResult.facetStats, facetStats = _b === void 0 ? {} : _b;
        var facets = Object.keys(responseFacetDistribution);
        var _c = adaptPaginationParameters(meiliSearchResult, meiliSearchResult.pagination), hitsPerPage = _c.hitsPerPage, page = _c.page, nbPages = _c.nbPages;
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
        if (!sortStr)
            return [];
        var sortRules = sortStr.split(/,(?=\w+:(?:asc|desc))/);
        return sortRules;
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
        var query = searchRequest.query, indexName = searchRequest.indexName, instantSearchParams = searchRequest.params;
        // Split index name and possible sorting rules
        var _a = separateIndexFromSortRules(indexName), indexUid = _a.indexUid, sortBy = _a.sortBy;
        var paginationState = createPaginationState(options.finitePagination, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.hitsPerPage, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.page);
        var searchContext = __assign(__assign(__assign(__assign({}, options), { query: query }), instantSearchParams), { sort: splitSortString(sortBy), indexUid: indexUid, pagination: paginationState, placeholderSearch: options.placeholderSearch !== false, keepZeroFacets: !!options.keepZeroFacets });
        return searchContext;
    }
    /**
     * @param  {AlgoliaMultipleQueriesQuery} searchRequest
     * @param  {Context} options
     * @returns {SearchContext}
     */
    function createFacetSearchContext(searchRequest, options) {
        // Split index name and possible sorting rules
        var _a = separateIndexFromSortRules(searchRequest.indexName), indexUid = _a.indexUid, sortBy = _a.sortBy;
        var instantSearchParams = searchRequest.params;
        var paginationState = createPaginationState(options.finitePagination, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.hitsPerPage, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.page);
        var searchContext = __assign(__assign(__assign({}, options), instantSearchParams), { sort: splitSortString(sortBy), indexUid: indexUid, pagination: paginationState, placeholderSearch: options.placeholderSearch !== false, keepZeroFacets: !!options.keepZeroFacets });
        return searchContext;
    }

    /**
     * @param  {Record<string} cache
     * @returns {SearchCache}
     */
    function SearchCache(cache) {
        if (cache === void 0) { cache = {}; }
        var searchCache = cache;
        return {
            getEntry: function (key) {
                if (searchCache[key]) {
                    try {
                        return JSON.parse(searchCache[key]);
                    }
                    catch (_) {
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
            query: '' });
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
                        searchQueries = queries
                            .filter(removeIndexUidDuplicates) // only make one request per indexUid
                            .filter(function (_a) {
                            var indexUid = _a.indexUid;
                            // avoid requesting on indexes that already have an initial facetDistribution
                            return !Object.keys(initialFacetDistribution).includes(indexUid);
                        });
                        if (searchQueries.length === 0)
                            return [2 /*return*/, initialFacetDistribution];
                        return [4 /*yield*/, searchResolver.multiSearch(searchQueries, [])];
                    case 1:
                        results = _a.sent();
                        for (_i = 0, results_1 = results; _i < results_1.length; _i++) {
                            searchResult = results_1[_i];
                            initialFacetDistribution[searchResult.indexUid] =
                                searchResult.facetDistribution || {};
                        }
                        return [2 /*return*/, initialFacetDistribution];
                }
            });
        });
    }
    function fillMissingFacets(initialFacetDistribution, meilisearchResults) {
        for (var _i = 0, meilisearchResults_1 = meilisearchResults; _i < meilisearchResults_1.length; _i++) {
            var searchResult = meilisearchResults_1[_i];
            initialFacetDistribution[searchResult.indexUid] = __assign(__assign({}, (searchResult.facetDistribution || {})), (initialFacetDistribution[searchResult.indexUid] || {}));
        }
        return initialFacetDistribution;
    }

    var PACKAGE_VERSION = '0.14.0';

    var constructClientAgents = function (clientAgents) {
        if (clientAgents === void 0) { clientAgents = []; }
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
        if (apiKey === void 0) { apiKey = ''; }
        if (instantMeiliSearchOptions === void 0) { instantMeiliSearchOptions = {}; }
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
                instantMeiliSearchOptions.meiliSearchParams =
                    meiliSearchParams === undefined
                        ? params
                        : __assign(__assign({}, meiliSearchParams), params);
            },
            searchClient: {
                clearCache: function () { return searchCache.clearCache(); },
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
                                    _a.trys.push([0, 3, , 4]);
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
                                case 4: return [2 /*return*/];
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
                                    meilisearchRequest = __assign(__assign({}, meilisearchSearchQuery), { facetQuery: request.params.facetQuery, facetName: request.params.facetName });
                                    delete meilisearchRequest.indexUid;
                                    return [4 /*yield*/, meilisearchClient
                                            .index(searchContext.indexUid)
                                            .searchForFacetValues(meilisearchRequest)];
                                case 2:
                                    meilisearchResponse = _a.sent();
                                    facetHits = meilisearchResponse.facetHits.map(function (facetHit) { return (__assign(__assign({}, facetHit), { 
                                        // not currently supported
                                        highlighted: facetHit.value })); });
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
                                case 4: return [2 /*return*/, results];
                            }
                        });
                    });
                }
            }
        };
    }

    exports.instantMeiliSearch = instantMeiliSearch;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 49380:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AlgoliaSearchHelper = __webpack_require__(8640);
var SearchParameters = __webpack_require__(45087);
var SearchResults = __webpack_require__(28328);

/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instanciate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @example
 * //using the UMD build
 * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
 * var helper = algoliasearchHelper(client, 'bestbuy', {
 *   facets: ['shipping'],
 *   disjunctiveFacets: ['category']
 * });
 * helper.on('result', function(event) {
 *   console.log(event.results);
 * });
 * helper
 *   .toggleFacetRefinement('category', 'Movies & TV Shows')
 *   .toggleFacetRefinement('shipping', 'Free shipping')
 *   .search();
 * @example
 * // The helper is an event emitter using the node API
 * helper.on('result', updateTheResults);
 * helper.once('result', updateTheResults);
 * helper.removeListener('result', updateTheResults);
 * helper.removeAllListeners('result');
 * @module algoliasearchHelper
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the name of the index to query
 * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
 * @return {AlgoliaSearchHelper} The helper instance
 */
function algoliasearchHelper(client, index, opts) {
  return new AlgoliaSearchHelper(client, index, opts);
}

/**
 * The version currently used
 * @member module:algoliasearchHelper.version
 * @type {number}
 */
algoliasearchHelper.version = __webpack_require__(8348);

/**
 * Constructor for the Helper.
 * @member module:algoliasearchHelper.AlgoliaSearchHelper
 * @type {AlgoliaSearchHelper}
 */
algoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;

/**
 * Constructor for the object containing all the parameters of the search.
 * @member module:algoliasearchHelper.SearchParameters
 * @type {SearchParameters}
 */
algoliasearchHelper.SearchParameters = SearchParameters;

/**
 * Constructor for the object containing the results of the search.
 * @member module:algoliasearchHelper.SearchResults
 * @type {SearchResults}
 */
algoliasearchHelper.SearchResults = SearchResults;

module.exports = algoliasearchHelper;


/***/ }),

/***/ 41080:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var EventEmitter = __webpack_require__(98396);

var inherits = __webpack_require__(44648);

/**
 * A DerivedHelper is a way to create sub requests to
 * Algolia from a main helper.
 * @class
 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 * @param {AlgoliaSearchHelper} mainHelper the main helper
 * @param {function} fn the function to create the derived state
 */
function DerivedHelper(mainHelper, fn) {
  this.main = mainHelper;
  this.fn = fn;
  this.lastResults = null;
}

inherits(DerivedHelper, EventEmitter);

/**
 * Detach this helper from the main helper
 * @return {undefined}
 * @throws Error if the derived helper is already detached
 */
DerivedHelper.prototype.detach = function () {
  this.removeAllListeners();
  this.main.detachDerivedHelper(this);
};

DerivedHelper.prototype.getModifiedState = function (parameters) {
  return this.fn(parameters);
};

module.exports = DerivedHelper;


/***/ }),

/***/ 60672:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Functions to manipulate refinement lists
 *
 * The RefinementList is not formally defined through a prototype but is based
 * on a specific structure.
 *
 * @module SearchParameters.refinementList
 *
 * @typedef {string[]} SearchParameters.refinementList.Refinements
 * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
 */

var defaultsPure = __webpack_require__(14592);
var objectHasKeys = __webpack_require__(17980);
var omit = __webpack_require__(62760);

var lib = {
  /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */
  addRefinement: function addRefinement(refinementList, attribute, value) {
    if (lib.isRefined(refinementList, attribute, value)) {
      return refinementList;
    }

    var valueAsString = '' + value;

    var facetRefinement = !refinementList[attribute]
      ? [valueAsString]
      : refinementList[attribute].concat(valueAsString);

    var mod = {};

    mod[attribute] = facetRefinement;

    return defaultsPure({}, mod, refinementList);
  },
  /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */
  removeRefinement: function removeRefinement(
    refinementList,
    attribute,
    value
  ) {
    if (value === undefined) {
      // we use the "filter" form of clearRefinement, since it leaves empty values as-is
      // the form with a string will remove the attribute completely
      return lib.clearRefinement(refinementList, function (v, f) {
        return attribute === f;
      });
    }

    var valueAsString = '' + value;

    return lib.clearRefinement(refinementList, function (v, f) {
      return attribute === f && valueAsString === v;
    });
  },
  /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */
  toggleRefinement: function toggleRefinement(
    refinementList,
    attribute,
    value
  ) {
    if (value === undefined)
      throw new Error('toggleRefinement should be used with a value');

    if (lib.isRefined(refinementList, attribute, value)) {
      return lib.removeRefinement(refinementList, attribute, value);
    }

    return lib.addRefinement(refinementList, attribute, value);
  },
  /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */
  clearRefinement: function clearRefinement(
    refinementList,
    attribute,
    refinementType
  ) {
    if (attribute === undefined) {
      // return the same object if the list is already empty
      // this is mainly for tests, as it doesn't have much impact on performance
      if (!objectHasKeys(refinementList)) {
        return refinementList;
      }
      return {};
    } else if (typeof attribute === 'string') {
      return omit(refinementList, [attribute]);
    } else if (typeof attribute === 'function') {
      var hasChanged = false;

      var newRefinementList = Object.keys(refinementList).reduce(function (
        memo,
        key
      ) {
        var values = refinementList[key] || [];
        var facetList = values.filter(function (value) {
          return !attribute(value, key, refinementType);
        });

        if (facetList.length !== values.length) {
          hasChanged = true;
        }

        memo[key] = facetList;

        return memo;
      },
      {});

      if (hasChanged) return newRefinementList;
      return refinementList;
    }

    // We return nothing if the attribute is not undefined, a string or a function,
    // as it is not a valid value for a refinement
    return undefined;
  },
  /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean} true if the attribute is refined, false otherwise
   */
  isRefined: function isRefined(refinementList, attribute, refinementValue) {
    var containsRefinements =
      Boolean(refinementList[attribute]) &&
      refinementList[attribute].length > 0;

    if (refinementValue === undefined || !containsRefinements) {
      return containsRefinements;
    }

    var refinementValueAsString = '' + refinementValue;

    return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
  },
};

module.exports = lib;


/***/ }),

/***/ 45087:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var defaultsPure = __webpack_require__(14592);
var find = __webpack_require__(72552);
var intersection = __webpack_require__(44672);
var merge = __webpack_require__(24440);
var objectHasKeys = __webpack_require__(17980);
var omit = __webpack_require__(62760);
var valToNumber = __webpack_require__(33600);
var isValidUserToken = __webpack_require__(80032);

var RefinementList = __webpack_require__(60672);

/**
 * isEqual, but only for numeric refinement values, possible values:
 * - 5
 * - [5]
 * - [[5]]
 * - [[5,5],[4]]
 * @param {any} a numeric refinement value
 * @param {any} b numeric refinement value
 * @return {boolean} true if the values are equal
 */
function isEqualNumericRefinement(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return (
      a.length === b.length &&
      a.every(function (el, i) {
        return isEqualNumericRefinement(b[i], el);
      })
    );
  }
  return a === b;
}

/**
 * like _.find but using deep equality to be able to use it
 * to find arrays.
 * @private
 * @param {any[]} array array to search into (elements are base or array of base)
 * @param {any} searchedValue the value we're looking for (base or array of base)
 * @return {any} the searched value or undefined
 */
function findArray(array, searchedValue) {
  return find(array, function (currentValue) {
    return isEqualNumericRefinement(currentValue, searchedValue);
  });
}

/**
 * The facet list is the structure used to store the list of values used to
 * filter a single attribute.
 * @typedef {string[]} SearchParameters.FacetList
 */

/**
 * Structure to store numeric filters with the operator as the key. The supported operators
 * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
 * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
 */

/**
 * SearchParameters is the data structure that contains all the information
 * usable for making a search to Algolia API. It doesn't do the search itself,
 * nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It will
 * be provided when needed. This object is documented for reference as you'll
 * get it from events generated by the {@link AlgoliaSearchHelper}.
 * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
 * @constructor
 * @classdesc contains all the parameters of a search
 * @param {object|SearchParameters} newParameters existing parameters or partial object
 * for the properties of a new SearchParameters
 * @see SearchParameters.make
 * @example <caption>SearchParameters of the first query in
 *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
{
   "query": "",
   "disjunctiveFacets": [
      "customerReviewCount",
      "category",
      "salePrice_range",
      "manufacturer"
  ],
   "maxValuesPerFacet": 30,
   "page": 0,
   "hitsPerPage": 10,
   "facets": [
      "type",
      "shipping"
  ]
}
 */
function SearchParameters(newParameters) {
  var params = newParameters
    ? SearchParameters._parseNumbers(newParameters)
    : {};

  if (params.userToken !== undefined && !isValidUserToken(params.userToken)) {
    // eslint-disable-next-line no-console
    console.warn(
      '[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}'
    );
  }
  /**
   * This attribute contains the list of all the conjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */
  this.facets = params.facets || [];
  /**
   * This attribute contains the list of all the disjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */
  this.disjunctiveFacets = params.disjunctiveFacets || [];
  /**
   * This attribute contains the list of all the hierarchical facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * Hierarchical facets are a sub type of disjunctive facets that
   * let you filter faceted attributes hierarchically.
   * @member {string[]|object[]}
   */
  this.hierarchicalFacets = params.hierarchicalFacets || [];

  // Refinements
  /**
   * This attribute contains all the filters that need to be
   * applied on the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.facetsRefinements = params.facetsRefinements || {};
  /**
   * This attribute contains all the filters that need to be
   * excluded from the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters excluded for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.facetsExcludes = params.facetsExcludes || {};
  /**
   * This attribute contains all the filters that need to be
   * applied on the disjunctive facets. Each facet must be properly
   * defined in the `disjunctiveFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
  /**
   * This attribute contains all the filters that need to be
   * applied on the numeric attributes.
   *
   * The key is the name of the attribute, and the value is the
   * filters to apply to this attribute.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `numericFilters` attribute.
   * @member {Object.<string, SearchParameters.OperatorList>}
   */
  this.numericRefinements = params.numericRefinements || {};
  /**
   * This attribute contains all the tags used to refine the query.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `tagFilters` attribute.
   * @member {string[]}
   */
  this.tagRefinements = params.tagRefinements || [];
  /**
   * This attribute contains all the filters that need to be
   * applied on the hierarchical facets. Each facet must be properly
   * defined in the `hierarchicalFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name. The FacetList values
   * are structured as a string that contain the values for each level
   * separated by the configured separator.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.hierarchicalFacetsRefinements =
    params.hierarchicalFacetsRefinements || {};

  // eslint-disable-next-line consistent-this
  var self = this;
  Object.keys(params).forEach(function (paramName) {
    var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
    var isValueDefined = params[paramName] !== undefined;

    if (!isKeyKnown && isValueDefined) {
      self[paramName] = params[paramName];
    }
  });
}

/**
 * List all the properties in SearchParameters and therefore all the known Algolia properties
 * This doesn't contain any beta/hidden features.
 * @private
 */
SearchParameters.PARAMETERS = Object.keys(new SearchParameters());

/**
 * @private
 * @param {object} partialState full or part of a state
 * @return {object} a new object with the number keys as number
 */
SearchParameters._parseNumbers = function (partialState) {
  // Do not parse numbers again in SearchParameters, they ought to be parsed already
  if (partialState instanceof SearchParameters) return partialState;

  var numbers = {};

  var numberKeys = [
    'aroundPrecision',
    'aroundRadius',
    'getRankingInfo',
    'minWordSizefor2Typos',
    'minWordSizefor1Typo',
    'page',
    'maxValuesPerFacet',
    'distinct',
    'minimumAroundRadius',
    'hitsPerPage',
    'minProximity',
  ];

  numberKeys.forEach(function (k) {
    var value = partialState[k];
    if (typeof value === 'string') {
      var parsedValue = parseFloat(value);
      // global isNaN is ok to use here, value is only number or NaN
      numbers[k] = isNaN(parsedValue) ? value : parsedValue;
    }
  });

  // there's two formats of insideBoundingBox, we need to parse
  // the one which is an array of float geo rectangles
  if (Array.isArray(partialState.insideBoundingBox)) {
    numbers.insideBoundingBox = partialState.insideBoundingBox.map(function (
      geoRect
    ) {
      if (Array.isArray(geoRect)) {
        return geoRect.map(function (value) {
          return parseFloat(value);
        });
      }
      return geoRect;
    });
  }

  if (partialState.numericRefinements) {
    var numericRefinements = {};
    Object.keys(partialState.numericRefinements).forEach(function (attribute) {
      var operators = partialState.numericRefinements[attribute] || {};
      numericRefinements[attribute] = {};
      Object.keys(operators).forEach(function (operator) {
        var values = operators[operator];
        var parsedValues = values.map(function (v) {
          if (Array.isArray(v)) {
            return v.map(function (vPrime) {
              if (typeof vPrime === 'string') {
                return parseFloat(vPrime);
              }
              return vPrime;
            });
          } else if (typeof v === 'string') {
            return parseFloat(v);
          }
          return v;
        });
        numericRefinements[attribute][operator] = parsedValues;
      });
    });
    numbers.numericRefinements = numericRefinements;
  }

  return merge({}, partialState, numbers);
};

/**
 * Factory for SearchParameters
 * @param {object|SearchParameters} newParameters existing parameters or partial
 * object for the properties of a new SearchParameters
 * @return {SearchParameters} frozen instance of SearchParameters
 */
SearchParameters.make = function makeSearchParameters(newParameters) {
  var instance = new SearchParameters(newParameters);

  var hierarchicalFacets = newParameters.hierarchicalFacets || [];
  hierarchicalFacets.forEach(function (facet) {
    if (facet.rootPath) {
      var currentRefinement = instance.getHierarchicalRefinement(facet.name);

      if (
        currentRefinement.length > 0 &&
        currentRefinement[0].indexOf(facet.rootPath) !== 0
      ) {
        instance = instance.clearRefinements(facet.name);
      }

      // get it again in case it has been cleared
      currentRefinement = instance.getHierarchicalRefinement(facet.name);
      if (currentRefinement.length === 0) {
        instance = instance.toggleHierarchicalFacetRefinement(
          facet.name,
          facet.rootPath
        );
      }
    }
  });

  return instance;
};

/**
 * Validates the new parameters based on the previous state
 * @param {SearchParameters} currentState the current state
 * @param {object|SearchParameters} parameters the new parameters to set
 * @return {Error|null} Error if the modification is invalid, null otherwise
 */
SearchParameters.validate = function (currentState, parameters) {
  var params = parameters || {};

  if (
    currentState.tagFilters &&
    params.tagRefinements &&
    params.tagRefinements.length > 0
  ) {
    return new Error(
      '[Tags] Cannot switch from the managed tag API to the advanced API. It is probably ' +
        'an error, if it is really what you want, you should first clear the tags with clearTags method.'
    );
  }

  if (currentState.tagRefinements.length > 0 && params.tagFilters) {
    return new Error(
      '[Tags] Cannot switch from the advanced tag API to the managed API. It is probably ' +
        'an error, if it is not, you should first clear the tags with clearTags method.'
    );
  }

  if (
    currentState.numericFilters &&
    params.numericRefinements &&
    objectHasKeys(params.numericRefinements)
  ) {
    return new Error(
      "[Numeric filters] Can't switch from the advanced to the managed API. It" +
        ' is probably an error, if this is really what you want, you have to first' +
        ' clear the numeric filters.'
    );
  }

  if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) {
    return new Error(
      "[Numeric filters] Can't switch from the managed API to the advanced. It" +
        ' is probably an error, if this is really what you want, you have to first' +
        ' clear the numeric filters.'
    );
  }

  return null;
};

SearchParameters.prototype = {
  constructor: SearchParameters,

  /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters} new instance with filters cleared
   */
  clearRefinements: function clearRefinements(attribute) {
    var patch = {
      numericRefinements: this._clearNumericRefinements(attribute),
      facetsRefinements: RefinementList.clearRefinement(
        this.facetsRefinements,
        attribute,
        'conjunctiveFacet'
      ),
      facetsExcludes: RefinementList.clearRefinement(
        this.facetsExcludes,
        attribute,
        'exclude'
      ),
      disjunctiveFacetsRefinements: RefinementList.clearRefinement(
        this.disjunctiveFacetsRefinements,
        attribute,
        'disjunctiveFacet'
      ),
      hierarchicalFacetsRefinements: RefinementList.clearRefinement(
        this.hierarchicalFacetsRefinements,
        attribute,
        'hierarchicalFacet'
      ),
    };
    if (
      patch.numericRefinements === this.numericRefinements &&
      patch.facetsRefinements === this.facetsRefinements &&
      patch.facetsExcludes === this.facetsExcludes &&
      patch.disjunctiveFacetsRefinements ===
        this.disjunctiveFacetsRefinements &&
      patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements
    ) {
      return this;
    }
    return this.setQueryParameters(patch);
  },
  /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters} new instance with tags cleared
   */
  clearTags: function clearTags() {
    if (this.tagFilters === undefined && this.tagRefinements.length === 0)
      return this;

    return this.setQueryParameters({
      tagFilters: undefined,
      tagRefinements: [],
    });
  },
  /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters} new instance
   */
  setIndex: function setIndex(index) {
    if (index === this.index) return this;

    return this.setQueryParameters({
      index: index,
    });
  },
  /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters} new instance
   */
  setQuery: function setQuery(newQuery) {
    if (newQuery === this.query) return this;

    return this.setQueryParameters({
      query: newQuery,
    });
  },
  /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters} new instance
   */
  setPage: function setPage(newPage) {
    if (newPage === this.page) return this;

    return this.setQueryParameters({
      page: newPage,
    });
  },
  /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters} new instance
   */
  setFacets: function setFacets(facets) {
    return this.setQueryParameters({
      facets: facets,
    });
  },
  /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters} new instance
   */
  setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
    return this.setQueryParameters({
      disjunctiveFacets: facets,
    });
  },
  /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters} new instance
   */
  setHitsPerPage: function setHitsPerPage(n) {
    if (this.hitsPerPage === n) return this;

    return this.setQueryParameters({
      hitsPerPage: n,
    });
  },
  /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters} new instance
   */
  setTypoTolerance: function setTypoTolerance(typoTolerance) {
    if (this.typoTolerance === typoTolerance) return this;

    return this.setQueryParameters({
      typoTolerance: typoTolerance,
    });
  },
  /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters} new instance
   * @example
   * // for price = 50 or 40
   * state.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * state.addNumericRefinement('size', '=', 38);
   * state.addNumericRefinement('size', '=', 40);
   */
  addNumericRefinement: function (attribute, operator, value) {
    var val = valToNumber(value);

    if (this.isNumericRefined(attribute, operator, val)) return this;

    var mod = merge({}, this.numericRefinements);

    mod[attribute] = merge({}, mod[attribute]);

    if (mod[attribute][operator]) {
      // Array copy
      mod[attribute][operator] = mod[attribute][operator].slice();
      // Add the element. Concat can't be used here because value can be an array.
      mod[attribute][operator].push(val);
    } else {
      mod[attribute][operator] = [val];
    }

    return this.setQueryParameters({
      numericRefinements: mod,
    });
  },
  /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getConjunctiveRefinements: function (facetName) {
    if (!this.isConjunctiveFacet(facetName)) {
      return [];
    }
    return this.facetsRefinements[facetName] || [];
  },
  /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getDisjunctiveRefinements: function (facetName) {
    if (!this.isDisjunctiveFacet(facetName)) {
      return [];
    }
    return this.disjunctiveFacetsRefinements[facetName] || [];
  },
  /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getHierarchicalRefinement: function (facetName) {
    // we send an array but we currently do not support multiple
    // hierarchicalRefinements for a hierarchicalFacet
    return this.hierarchicalFacetsRefinements[facetName] || [];
  },
  /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getExcludeRefinements: function (facetName) {
    if (!this.isConjunctiveFacet(facetName)) {
      return [];
    }
    return this.facetsExcludes[facetName] || [];
  },

  /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters} new instance
   */
  removeNumericRefinement: function (attribute, operator, number) {
    var paramValue = number;
    if (paramValue !== undefined) {
      if (!this.isNumericRefined(attribute, operator, paramValue)) {
        return this;
      }
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function (
          value,
          key
        ) {
          return (
            key === attribute &&
            value.op === operator &&
            isEqualNumericRefinement(value.val, valToNumber(paramValue))
          );
        }),
      });
    } else if (operator !== undefined) {
      if (!this.isNumericRefined(attribute, operator)) return this;
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function (
          value,
          key
        ) {
          return key === attribute && value.op === operator;
        }),
      });
    }

    if (!this.isNumericRefined(attribute)) return this;
    return this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function (value, key) {
        return key === attribute;
      }),
    });
  },
  /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList} list of refinements
   */
  getNumericRefinements: function (facetName) {
    return this.numericRefinements[facetName] || {};
  },
  /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */
  getNumericRefinement: function (attribute, operator) {
    return (
      this.numericRefinements[attribute] &&
      this.numericRefinements[attribute][operator]
    );
  },
  /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>} new numeric refinements
   */
  _clearNumericRefinements: function _clearNumericRefinements(attribute) {
    if (attribute === undefined) {
      if (!objectHasKeys(this.numericRefinements)) {
        return this.numericRefinements;
      }
      return {};
    } else if (typeof attribute === 'string') {
      return omit(this.numericRefinements, [attribute]);
    } else if (typeof attribute === 'function') {
      var hasChanged = false;
      var numericRefinements = this.numericRefinements;
      var newNumericRefinements = Object.keys(numericRefinements).reduce(
        function (memo, key) {
          var operators = numericRefinements[key];
          var operatorList = {};

          operators = operators || {};
          Object.keys(operators).forEach(function (operator) {
            var values = operators[operator] || [];
            var outValues = [];
            values.forEach(function (value) {
              var predicateResult = attribute(
                { val: value, op: operator },
                key,
                'numeric'
              );
              if (!predicateResult) outValues.push(value);
            });
            if (outValues.length !== values.length) {
              hasChanged = true;
            }
            operatorList[operator] = outValues;
          });

          memo[key] = operatorList;

          return memo;
        },
        {}
      );

      if (hasChanged) return newNumericRefinements;
      return this.numericRefinements;
    }

    // We return nothing if the attribute is not undefined, a string or a function,
    // as it is not a valid value for a refinement
    return undefined;
  },
  /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters} new instance
   */
  addFacet: function addFacet(facet) {
    if (this.isConjunctiveFacet(facet)) {
      return this;
    }

    return this.setQueryParameters({
      facets: this.facets.concat([facet]),
    });
  },
  /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters} new instance
   */
  addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
    if (this.isDisjunctiveFacet(facet)) {
      return this;
    }

    return this.setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.concat([facet]),
    });
  },
  /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters} new instance
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */
  addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
    if (this.isHierarchicalFacet(hierarchicalFacet.name)) {
      throw new Error(
        'Cannot declare two hierarchical facets with the same name: `' +
          hierarchicalFacet.name +
          '`'
      );
    }

    return this.setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.concat([hierarchicalFacet]),
    });
  },
  /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters} new instance
   */
  addFacetRefinement: function addFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the facets attribute of the helper configuration'
      );
    }
    if (RefinementList.isRefined(this.facetsRefinements, facet, value))
      return this;

    return this.setQueryParameters({
      facetsRefinements: RefinementList.addRefinement(
        this.facetsRefinements,
        facet,
        value
      ),
    });
  },
  /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters} new instance
   */
  addExcludeRefinement: function addExcludeRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the facets attribute of the helper configuration'
      );
    }
    if (RefinementList.isRefined(this.facetsExcludes, facet, value))
      return this;

    return this.setQueryParameters({
      facetsExcludes: RefinementList.addRefinement(
        this.facetsExcludes,
        facet,
        value
      ),
    });
  },
  /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters} new instance
   */
  addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(
    facet,
    value
  ) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the disjunctiveFacets attribute of the helper configuration'
      );
    }

    if (
      RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)
    )
      return this;

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.addRefinement(
        this.disjunctiveFacetsRefinements,
        facet,
        value
      ),
    });
  },
  /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters} new instance
   */
  addTagRefinement: function addTagRefinement(tag) {
    if (this.isTagRefined(tag)) return this;

    var modification = {
      tagRefinements: this.tagRefinements.concat(tag),
    };

    return this.setQueryParameters(modification);
  },
  /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters} new instance
   */
  removeFacet: function removeFacet(facet) {
    if (!this.isConjunctiveFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      facets: this.facets.filter(function (f) {
        return f !== facet;
      }),
    });
  },
  /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters} new instance
   */
  removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
    if (!this.isDisjunctiveFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.filter(function (f) {
        return f !== facet;
      }),
    });
  },
  /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters} new instance
   */
  removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
    if (!this.isHierarchicalFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.filter(function (f) {
        return f.name !== facet;
      }),
    });
  },
  /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters} new instance
   */
  removeFacetRefinement: function removeFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the facets attribute of the helper configuration'
      );
    }
    if (!RefinementList.isRefined(this.facetsRefinements, facet, value))
      return this;

    return this.setQueryParameters({
      facetsRefinements: RefinementList.removeRefinement(
        this.facetsRefinements,
        facet,
        value
      ),
    });
  },
  /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters} new instance
   */
  removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the facets attribute of the helper configuration'
      );
    }
    if (!RefinementList.isRefined(this.facetsExcludes, facet, value))
      return this;

    return this.setQueryParameters({
      facetsExcludes: RefinementList.removeRefinement(
        this.facetsExcludes,
        facet,
        value
      ),
    });
  },
  /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters} new instance
   */
  removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(
    facet,
    value
  ) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the disjunctiveFacets attribute of the helper configuration'
      );
    }
    if (
      !RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)
    )
      return this;

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.removeRefinement(
        this.disjunctiveFacetsRefinements,
        facet,
        value
      ),
    });
  },
  /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters} new instance
   */
  removeTagRefinement: function removeTagRefinement(tag) {
    if (!this.isTagRefined(tag)) return this;

    var modification = {
      tagRefinements: this.tagRefinements.filter(function (t) {
        return t !== tag;
      }),
    };

    return this.setQueryParameters(modification);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters} new instance
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */
  toggleRefinement: function toggleRefinement(facet, value) {
    return this.toggleFacetRefinement(facet, value);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters} new instance
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */
  toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
    if (this.isHierarchicalFacet(facet)) {
      return this.toggleHierarchicalFacetRefinement(facet, value);
    } else if (this.isConjunctiveFacet(facet)) {
      return this.toggleConjunctiveFacetRefinement(facet, value);
    } else if (this.isDisjunctiveFacet(facet)) {
      return this.toggleDisjunctiveFacetRefinement(facet, value);
    }

    throw new Error(
      'Cannot refine the undeclared facet ' +
        facet +
        '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets'
    );
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */
  toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(
    facet,
    value
  ) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the facets attribute of the helper configuration'
      );
    }

    return this.setQueryParameters({
      facetsRefinements: RefinementList.toggleRefinement(
        this.facetsRefinements,
        facet,
        value
      ),
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */
  toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(
    facet,
    value
  ) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the facets attribute of the helper configuration'
      );
    }

    return this.setQueryParameters({
      facetsExcludes: RefinementList.toggleRefinement(
        this.facetsExcludes,
        facet,
        value
      ),
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */
  toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(
    facet,
    value
  ) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the disjunctiveFacets attribute of the helper configuration'
      );
    }

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.toggleRefinement(
        this.disjunctiveFacetsRefinements,
        facet,
        value
      ),
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */
  toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(
    facet,
    value
  ) {
    if (!this.isHierarchicalFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the hierarchicalFacets attribute of the helper configuration'
      );
    }

    var separator = this._getHierarchicalFacetSeparator(
      this.getHierarchicalFacetByName(facet)
    );

    var mod = {};

    var upOneOrMultipleLevel =
      this.hierarchicalFacetsRefinements[facet] !== undefined &&
      this.hierarchicalFacetsRefinements[facet].length > 0 &&
      // remove current refinement:
      // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
      (this.hierarchicalFacetsRefinements[facet][0] === value ||
        // remove a parent refinement of the current refinement:
        //  - refinement was 'beer > IPA > Flying dog'
        //  - call is toggleRefine('beer > IPA')
        //  - refinement should be `beer`
        this.hierarchicalFacetsRefinements[facet][0].indexOf(
          value + separator
        ) === 0);

    if (upOneOrMultipleLevel) {
      if (value.indexOf(separator) === -1) {
        // go back to root level
        mod[facet] = [];
      } else {
        mod[facet] = [value.slice(0, value.lastIndexOf(separator))];
      }
    } else {
      mod[facet] = [value];
    }

    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure(
        {},
        mod,
        this.hierarchicalFacetsRefinements
      ),
    });
  },

  /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */
  addHierarchicalFacetRefinement: function (facet, path) {
    if (this.isHierarchicalFacetRefined(facet)) {
      throw new Error(facet + ' is already refined.');
    }
    if (!this.isHierarchicalFacet(facet)) {
      throw new Error(
        facet +
          ' is not defined in the hierarchicalFacets attribute of the helper configuration.'
      );
    }
    var mod = {};
    mod[facet] = [path];
    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure(
        {},
        mod,
        this.hierarchicalFacetsRefinements
      ),
    });
  },

  /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */
  removeHierarchicalFacetRefinement: function (facet) {
    if (!this.isHierarchicalFacetRefined(facet)) {
      return this;
    }
    var mod = {};
    mod[facet] = [];
    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure(
        {},
        mod,
        this.hierarchicalFacetsRefinements
      ),
    });
  },
  /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters} new instance
   */
  toggleTagRefinement: function toggleTagRefinement(tag) {
    if (this.isTagRefined(tag)) {
      return this.removeTagRefinement(tag);
    }

    return this.addTagRefinement(tag);
  },
  /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean} true if facet is a disjunctive facet
   */
  isDisjunctiveFacet: function (facet) {
    return this.disjunctiveFacets.indexOf(facet) > -1;
  },
  /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean} true if facetName is a hierarchical facet
   */
  isHierarchicalFacet: function (facetName) {
    return this.getHierarchicalFacetByName(facetName) !== undefined;
  },
  /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean} true if facet is a conjunctive facet
   */
  isConjunctiveFacet: function (facet) {
    return this.facets.indexOf(facet) > -1;
  },
  /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isFacetRefined: function isFacetRefined(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      return false;
    }
    return RefinementList.isRefined(this.facetsRefinements, facet, value);
  },
  /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isExcludeRefined: function isExcludeRefined(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      return false;
    }
    return RefinementList.isRefined(this.facetsExcludes, facet, value);
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean} true if the facet is refined
   */
  isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      return false;
    }
    return RefinementList.isRefined(
      this.disjunctiveFacetsRefinements,
      facet,
      value
    );
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean} true if the facet is refined
   */
  isHierarchicalFacetRefined: function isHierarchicalFacetRefined(
    facet,
    value
  ) {
    if (!this.isHierarchicalFacet(facet)) {
      return false;
    }

    var refinements = this.getHierarchicalRefinement(facet);

    if (!value) {
      return refinements.length > 0;
    }

    return refinements.indexOf(value) !== -1;
  },
  /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */
  isNumericRefined: function isNumericRefined(attribute, operator, value) {
    if (value === undefined && operator === undefined) {
      return Boolean(this.numericRefinements[attribute]);
    }

    var isOperatorDefined =
      this.numericRefinements[attribute] &&
      this.numericRefinements[attribute][operator] !== undefined;

    if (value === undefined || !isOperatorDefined) {
      return isOperatorDefined;
    }

    var parsedValue = valToNumber(value);
    var isAttributeValueDefined =
      findArray(this.numericRefinements[attribute][operator], parsedValue) !==
      undefined;

    return isOperatorDefined && isAttributeValueDefined;
  },
  /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean} true if tag is refined
   */
  isTagRefined: function isTagRefined(tag) {
    return this.tagRefinements.indexOf(tag) !== -1;
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]} returns the list of refinements
   */
  getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
    // eslint-disable-next-line consistent-this
    var self = this;

    // attributes used for numeric filter can also be disjunctive
    var disjunctiveNumericRefinedFacets = intersection(
      Object.keys(this.numericRefinements).filter(function (facet) {
        return Object.keys(self.numericRefinements[facet]).length > 0;
      }),
      this.disjunctiveFacets
    );

    return Object.keys(this.disjunctiveFacetsRefinements)
      .filter(function (facet) {
        return self.disjunctiveFacetsRefinements[facet].length > 0;
      })
      .concat(disjunctiveNumericRefinedFacets)
      .concat(this.getRefinedHierarchicalFacets())
      .sort();
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]} returns the list of refinements
   */
  getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
    // eslint-disable-next-line consistent-this
    var self = this;
    return intersection(
      // enforce the order between the two arrays,
      // so that refinement name index === hierarchical facet index
      this.hierarchicalFacets.map(function (facet) {
        return facet.name;
      }),
      Object.keys(this.hierarchicalFacetsRefinements).filter(function (facet) {
        return self.hierarchicalFacetsRefinements[facet].length > 0;
      })
    ).sort();
  },
  /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]} returns the list of facets that are not refined
   */
  getUnrefinedDisjunctiveFacets: function () {
    var refinedFacets = this.getRefinedDisjunctiveFacets();

    return this.disjunctiveFacets.filter(function (f) {
      return refinedFacets.indexOf(f) === -1;
    });
  },

  managedParameters: [
    'index',

    'facets',
    'disjunctiveFacets',
    'facetsRefinements',
    'hierarchicalFacets',
    'facetsExcludes',

    'disjunctiveFacetsRefinements',
    'numericRefinements',
    'tagRefinements',
    'hierarchicalFacetsRefinements',
  ],

  getQueryParams: function getQueryParams() {
    var managedParameters = this.managedParameters;

    var queryParams = {};

    // eslint-disable-next-line consistent-this
    var self = this;
    Object.keys(this).forEach(function (paramName) {
      var paramValue = self[paramName];
      if (
        managedParameters.indexOf(paramName) === -1 &&
        paramValue !== undefined
      ) {
        queryParams[paramName] = paramValue;
      }
    });

    return queryParams;
  },
  /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */
  setQueryParameter: function setParameter(parameter, value) {
    if (this[parameter] === value) return this;

    var modification = {};

    modification[parameter] = value;

    return this.setQueryParameters(modification);
  },
  /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */
  setQueryParameters: function setQueryParameters(params) {
    if (!params) return this;

    var error = SearchParameters.validate(this, params);

    if (error) {
      throw error;
    }

    // eslint-disable-next-line consistent-this
    var self = this;
    var nextWithNumbers = SearchParameters._parseNumbers(params);
    var previousPlainObject = Object.keys(this).reduce(function (acc, key) {
      acc[key] = self[key];
      return acc;
    }, {});

    var nextPlainObject = Object.keys(nextWithNumbers).reduce(function (
      previous,
      key
    ) {
      var isPreviousValueDefined = previous[key] !== undefined;
      var isNextValueDefined = nextWithNumbers[key] !== undefined;

      if (isPreviousValueDefined && !isNextValueDefined) {
        return omit(previous, [key]);
      }

      if (isNextValueDefined) {
        previous[key] = nextWithNumbers[key];
      }

      return previous;
    },
    previousPlainObject);

    return new this.constructor(nextPlainObject);
  },

  /**
   * Returns a new instance with the page reset. Two scenarios possible:
   * the page is omitted -> return the given instance
   * the page is set -> return a new instance with a page of 0
   * @return {SearchParameters} a new updated instance
   */
  resetPage: function () {
    if (this.page === undefined) {
      return this;
    }

    return this.setPage(0);
  },

  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSortBy: function (hierarchicalFacet) {
    return hierarchicalFacet.sortBy || ['isRefined:desc', 'name:asc'];
  },

  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSeparator: function (hierarchicalFacet) {
    return hierarchicalFacet.separator || ' > ';
  },

  /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */
  _getHierarchicalRootPath: function (hierarchicalFacet) {
    return hierarchicalFacet.rootPath || null;
  },

  /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */
  _getHierarchicalShowParentLevel: function (hierarchicalFacet) {
    if (typeof hierarchicalFacet.showParentLevel === 'boolean') {
      return hierarchicalFacet.showParentLevel;
    }
    return true;
  },

  /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName the hierarchicalFacet name
   * @return {object} a hierarchicalFacet
   */
  getHierarchicalFacetByName: function (hierarchicalFacetName) {
    return find(this.hierarchicalFacets, function (f) {
      return f.name === hierarchicalFacetName;
    });
  },

  /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */
  getHierarchicalFacetBreadcrumb: function (facetName) {
    if (!this.isHierarchicalFacet(facetName)) {
      return [];
    }

    var refinement = this.getHierarchicalRefinement(facetName)[0];
    if (!refinement) return [];

    var separator = this._getHierarchicalFacetSeparator(
      this.getHierarchicalFacetByName(facetName)
    );
    var path = refinement.split(separator);
    return path.map(function (part) {
      return part.trim();
    });
  },

  toString: function () {
    return JSON.stringify(this, null, 2);
  },
};

/**
 * Callback used for clearRefinement method
 * @callback SearchParameters.clearCallback
 * @param {OperatorList|FacetList} value the value of the filter
 * @param {string} key the current attribute name
 * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
 * depending on the type of facet
 * @return {boolean} `true` if the element should be removed. `false` otherwise.
 */
module.exports = SearchParameters;


/***/ }),

/***/ 62100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = generateTrees;

var fv = __webpack_require__(66332);
var find = __webpack_require__(72552);
var prepareHierarchicalFacetSortBy = __webpack_require__(34975);
var orderBy = __webpack_require__(77072);
var escapeFacetValue = fv.escapeFacetValue;
var unescapeFacetValue = fv.unescapeFacetValue;

function generateTrees(state) {
  return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
    var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
    var hierarchicalFacetRefinement =
      (state.hierarchicalFacetsRefinements[hierarchicalFacet.name] &&
        state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0]) ||
      '';
    var hierarchicalSeparator =
      state._getHierarchicalFacetSeparator(hierarchicalFacet);
    var hierarchicalRootPath =
      state._getHierarchicalRootPath(hierarchicalFacet);
    var hierarchicalShowParentLevel =
      state._getHierarchicalShowParentLevel(hierarchicalFacet);
    var sortBy = prepareHierarchicalFacetSortBy(
      state._getHierarchicalFacetSortBy(hierarchicalFacet)
    );

    var rootExhaustive = hierarchicalFacetResult.every(function (facetResult) {
      return facetResult.exhaustive;
    });

    var generateTreeFn = generateHierarchicalTree(
      sortBy,
      hierarchicalSeparator,
      hierarchicalRootPath,
      hierarchicalShowParentLevel,
      hierarchicalFacetRefinement
    );

    var results = hierarchicalFacetResult;

    if (hierarchicalRootPath) {
      results = hierarchicalFacetResult.slice(
        hierarchicalRootPath.split(hierarchicalSeparator).length
      );
    }

    return results.reduce(generateTreeFn, {
      name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
      count: null, // root level, no count
      isRefined: true, // root level, always refined
      path: null, // root level, no path
      escapedValue: null,
      exhaustive: rootExhaustive,
      data: null,
    });
  };
}

function generateHierarchicalTree(
  sortBy,
  hierarchicalSeparator,
  hierarchicalRootPath,
  hierarchicalShowParentLevel,
  currentRefinement
) {
  return function generateTree(
    hierarchicalTree,
    hierarchicalFacetResult,
    currentHierarchicalLevel
  ) {
    var parent = hierarchicalTree;

    if (currentHierarchicalLevel > 0) {
      var level = 0;

      parent = hierarchicalTree;

      while (level < currentHierarchicalLevel) {
        /**
         * @type {object[]]} hierarchical data
         */
        var data = parent && Array.isArray(parent.data) ? parent.data : [];
        parent = find(data, function (subtree) {
          return subtree.isRefined;
        });
        level++;
      }
    }

    // we found a refined parent, let's add current level data under it
    if (parent) {
      // filter values in case an object has multiple categories:
      //   {
      //     categories: {
      //       level0: ['beers', 'bières'],
      //       level1: ['beers > IPA', 'bières > Belges']
      //     }
      //   }
      //
      // If parent refinement is `beers`, then we do not want to have `bières > Belges`
      // showing up

      var picked = Object.keys(hierarchicalFacetResult.data)
        .map(function (facetValue) {
          return [facetValue, hierarchicalFacetResult.data[facetValue]];
        })
        .filter(function (tuple) {
          var facetValue = tuple[0];
          return onlyMatchingTree(
            facetValue,
            parent.path || hierarchicalRootPath,
            currentRefinement,
            hierarchicalSeparator,
            hierarchicalRootPath,
            hierarchicalShowParentLevel
          );
        });

      parent.data = orderBy(
        picked.map(function (tuple) {
          var facetValue = tuple[0];
          var facetCount = tuple[1];

          return format(
            facetCount,
            facetValue,
            hierarchicalSeparator,
            unescapeFacetValue(currentRefinement),
            hierarchicalFacetResult.exhaustive
          );
        }),
        sortBy[0],
        sortBy[1]
      );
    }

    return hierarchicalTree;
  };
}

// eslint-disable-next-line max-params
function onlyMatchingTree(
  facetValue,
  parentPath,
  currentRefinement,
  hierarchicalSeparator,
  hierarchicalRootPath,
  hierarchicalShowParentLevel
) {
  // we want the facetValue is a child of hierarchicalRootPath
  if (
    hierarchicalRootPath &&
    (facetValue.indexOf(hierarchicalRootPath) !== 0 ||
      hierarchicalRootPath === facetValue)
  ) {
    return false;
  }

  // we always want root levels (only when there is no prefix path)
  return (
    (!hierarchicalRootPath &&
      facetValue.indexOf(hierarchicalSeparator) === -1) ||
    // if there is a rootPath, being root level mean 1 level under rootPath
    (hierarchicalRootPath &&
      facetValue.split(hierarchicalSeparator).length -
        hierarchicalRootPath.split(hierarchicalSeparator).length ===
        1) ||
    // if current refinement is a root level and current facetValue is a root level,
    // keep the facetValue
    (facetValue.indexOf(hierarchicalSeparator) === -1 &&
      currentRefinement.indexOf(hierarchicalSeparator) === -1) ||
    // currentRefinement is a child of the facet value
    currentRefinement.indexOf(facetValue) === 0 ||
    // facetValue is a child of the current parent, add it
    (facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 &&
      (hierarchicalShowParentLevel ||
        facetValue.indexOf(currentRefinement) === 0))
  );
}

function format(
  facetCount,
  facetValue,
  hierarchicalSeparator,
  currentRefinement,
  exhaustive
) {
  var parts = facetValue.split(hierarchicalSeparator);
  return {
    name: parts[parts.length - 1].trim(),
    path: facetValue,
    escapedValue: escapeFacetValue(facetValue),
    count: facetCount,
    isRefined:
      currentRefinement === facetValue ||
      currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
    exhaustive: exhaustive,
    data: null,
  };
}


/***/ }),

/***/ 28328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var compact = __webpack_require__(91400);
var defaultsPure = __webpack_require__(14592);
var fv = __webpack_require__(66332);
var find = __webpack_require__(72552);
var findIndex = __webpack_require__(29160);
var formatSort = __webpack_require__(34975);
var merge = __webpack_require__(24440);
var orderBy = __webpack_require__(77072);
var escapeFacetValue = fv.escapeFacetValue;
var unescapeFacetValue = fv.unescapeFacetValue;

var generateHierarchicalTree = __webpack_require__(62100);

/**
 * @typedef SearchResults.Facet
 * @type {object}
 * @property {string} name name of the attribute in the record
 * @property {object} data the faceting data: value, number of entries
 * @property {object} stats undefined unless facet_stats is retrieved from algolia
 */

/**
 * @typedef SearchResults.HierarchicalFacet
 * @type {object}
 * @property {string} name name of the current value given the hierarchical level, trimmed.
 * If root node, you get the facet name
 * @property {number} count number of objects matching this hierarchical value
 * @property {string} path the current hierarchical value full path
 * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
 * @property {HierarchicalFacet[]} data sub values for the current level
 */

/**
 * @typedef SearchResults.FacetValue
 * @type {object}
 * @property {string} name the facet value itself
 * @property {number} count times this facet appears in the results
 * @property {boolean} isRefined is the facet currently selected
 * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
 */

/**
 * @typedef Refinement
 * @type {object}
 * @property {string} type the type of filter used:
 * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
 * @property {string} attributeName name of the attribute used for filtering
 * @property {string} name the value of the filter
 * @property {number} numericValue the value as a number. Only for numeric filters.
 * @property {string} operator the operator used. Only for numeric filters.
 * @property {number} count the number of computed hits for this filter. Only on facets.
 * @property {boolean} exhaustive if the count is exhaustive
 */

/**
 * Turn an array of attributes in an object of attributes with their position in the array as value
 * @param {string[]} attributes the list of attributes in the record
 * @return {object} the list of attributes indexed by attribute name
 */
function getIndices(attributes) {
  var indices = {};

  attributes.forEach(function (val, idx) {
    indices[val] = idx;
  });

  return indices;
}

function assignFacetStats(dest, facetStats, key) {
  if (facetStats && facetStats[key]) {
    dest.stats = facetStats[key];
  }
}

/**
 * @typedef {Object} HierarchicalFacet
 * @property {string} name
 * @property {string[]} attributes
 */

/**
 * @param {HierarchicalFacet[]} hierarchicalFacets All hierarchical facets
 * @param {string} hierarchicalAttributeName The name of the hierarchical attribute
 * @return {HierarchicalFacet} The hierarchical facet matching the attribute name
 */
function findMatchingHierarchicalFacetFromAttributeName(
  hierarchicalFacets,
  hierarchicalAttributeName
) {
  return find(
    hierarchicalFacets,
    function facetKeyMatchesAttribute(hierarchicalFacet) {
      var facetNames = hierarchicalFacet.attributes || [];
      return facetNames.indexOf(hierarchicalAttributeName) > -1;
    }
  );
}

// eslint-disable-next-line valid-jsdoc
/**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {SearchParameters} state state that led to the response
 * @param {array.<object>} results the results from algolia client
 * @example <caption>SearchResults of the first query in
 * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
{
   "hitsPerPage": 10,
   "processingTimeMS": 2,
   "facets": [
      {
         "name": "type",
         "data": {
            "HardGood": 6627,
            "BlackTie": 550,
            "Music": 665,
            "Software": 131,
            "Game": 456,
            "Movie": 1571
         },
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "Free shipping": 5507
         },
         "name": "shipping"
      }
  ],
   "hits": [
      {
         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
         "_highlightResult": {
            "shortDescription": {
               "matchLevel": "none",
               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
               "matchedWords": []
            },
            "category": {
               "matchLevel": "none",
               "value": "Computer Security Software",
               "matchedWords": []
            },
            "manufacturer": {
               "matchedWords": [],
               "value": "Webroot",
               "matchLevel": "none"
            },
            "name": {
               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
               "matchedWords": [],
               "matchLevel": "none"
            }
         },
         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
         "shipping": "Free shipping",
         "bestSellingRank": 4,
         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
         "category": "Computer Security Software",
         "salePrice_range": "1 - 50",
         "objectID": "1688832",
         "type": "Software",
         "customerReviewCount": 5980,
         "salePrice": 49.99,
         "manufacturer": "Webroot"
      },
      ....
  ],
   "nbHits": 10000,
   "disjunctiveFacets": [
      {
         "exhaustive": false,
         "data": {
            "5": 183,
            "12": 112,
            "7": 149,
            ...
         },
         "name": "customerReviewCount",
         "stats": {
            "max": 7461,
            "avg": 157.939,
            "min": 1
         }
      },
      {
         "data": {
            "Printer Ink": 142,
            "Wireless Speakers": 60,
            "Point & Shoot Cameras": 48,
            ...
         },
         "name": "category",
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "> 5000": 2,
            "1 - 50": 6524,
            "501 - 2000": 566,
            "201 - 500": 1501,
            "101 - 200": 1360,
            "2001 - 5000": 47
         },
         "name": "salePrice_range"
      },
      {
         "data": {
            "Dynex™": 202,
            "Insignia™": 230,
            "PNY": 72,
            ...
         },
         "name": "manufacturer",
         "exhaustive": false
      }
  ],
   "query": "",
   "nbPages": 100,
   "page": 0,
   "index": "bestbuy"
}
 **/
function SearchResults(state, results, options) {
  var mainSubResponse = results[0];

  this._rawResults = results;

  // eslint-disable-next-line consistent-this
  var self = this;

  // https://www.algolia.com/doc/api-reference/api-methods/search/#response
  Object.keys(mainSubResponse).forEach(function (key) {
    self[key] = mainSubResponse[key];
  });

  // Make every key of the result options reachable from the instance
  Object.keys(options || {}).forEach(function (key) {
    self[key] = options[key];
  });

  /**
   * query used to generate the results
   * @name query
   * @member {string}
   * @memberof SearchResults
   * @instance
   */
  /**
   * The query as parsed by the engine given all the rules.
   * @name parsedQuery
   * @member {string}
   * @memberof SearchResults
   * @instance
   */
  /**
   * all the records that match the search parameters. Each record is
   * augmented with a new attribute `_highlightResult`
   * which is an object keyed by attribute and with the following properties:
   * - `value` : the value of the facet highlighted (html)
   * - `matchLevel`: `full`, `partial` or `none`, depending on how the query terms match
   * @name hits
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */
  /**
   * index where the results come from
   * @name index
   * @member {string}
   * @memberof SearchResults
   * @instance
   */
  /**
   * number of hits per page requested
   * @name hitsPerPage
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * total number of hits of this query on the index
   * @name nbHits
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * total number of pages with respect to the number of hits per page and the total number of hits
   * @name nbPages
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * current page
   * @name page
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * The position if the position was guessed by IP.
   * @name aroundLatLng
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "48.8637,2.3615",
   */
  /**
   * The radius computed by Algolia.
   * @name automaticRadius
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "126792922",
   */
  /**
   * String identifying the server used to serve this request.
   *
   * getRankingInfo needs to be set to `true` for this to be returned
   *
   * @name serverUsed
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "c7-use-2.algolia.net",
   */
  /**
   * Boolean that indicates if the computation of the counts did time out.
   * @deprecated
   * @name timeoutCounts
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * Boolean that indicates if the computation of the hits did time out.
   * @deprecated
   * @name timeoutHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * True if the counts of the facets is exhaustive
   * @name exhaustiveFacetsCount
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * True if the number of hits is exhaustive
   * @name exhaustiveNbHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
   * @name userData
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */
  /**
   * queryID is the unique identifier of the query used to generate the current search results.
   * This value is only available if the `clickAnalytics` search parameter is set to `true`.
   * @name queryID
   * @member {string}
   * @memberof SearchResults
   * @instance
   */

  /**
   * sum of the processing time of all the queries
   * @name processingTimeMS
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  this.processingTimeMS = results.reduce(function (sum, result) {
    return result.processingTimeMS === undefined
      ? sum
      : sum + result.processingTimeMS;
  }, 0);

  /**
   * disjunctive facets results
   * @member {SearchResults.Facet[]}
   */
  this.disjunctiveFacets = [];
  /**
   * disjunctive facets results
   * @member {SearchResults.HierarchicalFacet[]}
   */
  this.hierarchicalFacets = state.hierarchicalFacets.map(
    function initFutureTree() {
      return [];
    }
  );
  /**
   * other facets results
   * @member {SearchResults.Facet[]}
   */
  this.facets = [];

  var disjunctiveFacets = state.getRefinedDisjunctiveFacets();

  var facetsIndices = getIndices(state.facets);
  var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
  var nextDisjunctiveResult = 1;

  // Since we send request only for disjunctive facets that have been refined,
  // we get the facets information from the first, general, response.

  var mainFacets = mainSubResponse.facets || {};

  Object.keys(mainFacets).forEach(function (facetKey) {
    var facetValueObject = mainFacets[facetKey];

    var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(
      state.hierarchicalFacets,
      facetKey
    );

    if (hierarchicalFacet) {
      // Place the hierarchicalFacet data at the correct index depending on
      // the attributes order that was defined at the helper initialization
      var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
      var idxAttributeName = findIndex(state.hierarchicalFacets, function (f) {
        return f.name === hierarchicalFacet.name;
      });
      self.hierarchicalFacets[idxAttributeName][facetIndex] = {
        attribute: facetKey,
        data: facetValueObject,
        exhaustive: mainSubResponse.exhaustiveFacetsCount,
      };
    } else {
      var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
      var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
      var position;

      if (isFacetDisjunctive) {
        position = disjunctiveFacetsIndices[facetKey];
        self.disjunctiveFacets[position] = {
          name: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount,
        };
        assignFacetStats(
          self.disjunctiveFacets[position],
          mainSubResponse.facets_stats,
          facetKey
        );
      }
      if (isFacetConjunctive) {
        position = facetsIndices[facetKey];
        self.facets[position] = {
          name: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount,
        };
        assignFacetStats(
          self.facets[position],
          mainSubResponse.facets_stats,
          facetKey
        );
      }
    }
  });

  // Make sure we do not keep holes within the hierarchical facets
  this.hierarchicalFacets = compact(this.hierarchicalFacets);

  // aggregate the refined disjunctive facets
  disjunctiveFacets.forEach(function (disjunctiveFacet) {
    var result = results[nextDisjunctiveResult];
    var facets = result && result.facets ? result.facets : {};
    var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);

    // There should be only item in facets.
    Object.keys(facets).forEach(function (dfacet) {
      var facetResults = facets[dfacet];

      var position;

      if (hierarchicalFacet) {
        position = findIndex(state.hierarchicalFacets, function (f) {
          return f.name === hierarchicalFacet.name;
        });
        var attributeIndex = findIndex(
          self.hierarchicalFacets[position],
          function (f) {
            return f.attribute === dfacet;
          }
        );

        // previous refinements and no results so not able to find it
        if (attributeIndex === -1) {
          return;
        }

        self.hierarchicalFacets[position][attributeIndex].data = merge(
          {},
          self.hierarchicalFacets[position][attributeIndex].data,
          facetResults
        );
      } else {
        position = disjunctiveFacetsIndices[dfacet];

        var dataFromMainRequest =
          (mainSubResponse.facets && mainSubResponse.facets[dfacet]) || {};

        self.disjunctiveFacets[position] = {
          name: dfacet,
          data: defaultsPure({}, facetResults, dataFromMainRequest),
          exhaustive: result.exhaustiveFacetsCount,
        };
        assignFacetStats(
          self.disjunctiveFacets[position],
          result.facets_stats,
          dfacet
        );

        if (state.disjunctiveFacetsRefinements[dfacet]) {
          state.disjunctiveFacetsRefinements[dfacet].forEach(function (
            refinementValue
          ) {
            // add the disjunctive refinements if it is no more retrieved
            if (
              !self.disjunctiveFacets[position].data[refinementValue] &&
              state.disjunctiveFacetsRefinements[dfacet].indexOf(
                unescapeFacetValue(refinementValue)
              ) > -1
            ) {
              self.disjunctiveFacets[position].data[refinementValue] = 0;
            }
          });
        }
      }
    });
    nextDisjunctiveResult++;
  });

  // if we have some parent level values for hierarchical facets, merge them
  state.getRefinedHierarchicalFacets().forEach(function (refinedFacet) {
    var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

    var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
    // if we are already at a root refinement (or no refinement at all), there is no
    // root level values request
    if (
      currentRefinement.length === 0 ||
      currentRefinement[0].split(separator).length < 2
    ) {
      return;
    }

    results.slice(nextDisjunctiveResult).forEach(function (result) {
      var facets = result && result.facets ? result.facets : {};

      Object.keys(facets).forEach(function (dfacet) {
        var facetResults = facets[dfacet];
        var position = findIndex(state.hierarchicalFacets, function (f) {
          return f.name === hierarchicalFacet.name;
        });
        var attributeIndex = findIndex(
          self.hierarchicalFacets[position],
          function (f) {
            return f.attribute === dfacet;
          }
        );

        // previous refinements and no results so not able to find it
        if (attributeIndex === -1) {
          return;
        }

        // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
        // then the disjunctive values will be `beers` (count: 100),
        // but we do not want to display
        //   | beers (100)
        //     > IPA (5)
        // We want
        //   | beers (5)
        //     > IPA (5)
        var defaultData = {};

        if (currentRefinement.length > 0) {
          var root = currentRefinement[0].split(separator)[0];
          defaultData[root] =
            self.hierarchicalFacets[position][attributeIndex].data[root];
        }

        self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(
          defaultData,
          facetResults,
          self.hierarchicalFacets[position][attributeIndex].data
        );
      });

      nextDisjunctiveResult++;
    });
  });

  // add the excludes
  Object.keys(state.facetsExcludes).forEach(function (facetName) {
    var excludes = state.facetsExcludes[facetName];
    var position = facetsIndices[facetName];

    self.facets[position] = {
      name: facetName,
      data: mainFacets[facetName],
      exhaustive: mainSubResponse.exhaustiveFacetsCount,
    };
    excludes.forEach(function (facetValue) {
      self.facets[position] = self.facets[position] || { name: facetName };
      self.facets[position].data = self.facets[position].data || {};
      self.facets[position].data[facetValue] = 0;
    });
  });

  /**
   * @type {Array}
   */
  this.hierarchicalFacets = this.hierarchicalFacets.map(
    generateHierarchicalTree(state)
  );

  /**
   * @type {Array}
   */
  this.facets = compact(this.facets);
  /**
   * @type {Array}
   */
  this.disjunctiveFacets = compact(this.disjunctiveFacets);

  this._state = state;
}

/**
 * Get a facet object with its name
 * @deprecated
 * @param {string} name name of the faceted attribute
 * @return {SearchResults.Facet} the facet object
 */
SearchResults.prototype.getFacetByName = function (name) {
  function predicate(facet) {
    return facet.name === name;
  }

  return (
    find(this.facets, predicate) ||
    find(this.disjunctiveFacets, predicate) ||
    find(this.hierarchicalFacets, predicate)
  );
};

/**
 * Get the facet values of a specified attribute from a SearchResults object.
 * @private
 * @param {SearchResults} results the search results to search in
 * @param {string} attribute name of the faceted attribute to search for
 * @return {array|object} facet values. For the hierarchical facets it is an object.
 */
function extractNormalizedFacetValues(results, attribute) {
  function predicate(facet) {
    return facet.name === attribute;
  }

  if (results._state.isConjunctiveFacet(attribute)) {
    var facet = find(results.facets, predicate);
    if (!facet) return [];

    return Object.keys(facet.data).map(function (name) {
      var value = escapeFacetValue(name);
      return {
        name: name,
        escapedValue: value,
        count: facet.data[name],
        isRefined: results._state.isFacetRefined(attribute, value),
        isExcluded: results._state.isExcludeRefined(attribute, name),
      };
    });
  } else if (results._state.isDisjunctiveFacet(attribute)) {
    var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
    if (!disjunctiveFacet) return [];

    return Object.keys(disjunctiveFacet.data).map(function (name) {
      var value = escapeFacetValue(name);
      return {
        name: name,
        escapedValue: value,
        count: disjunctiveFacet.data[name],
        isRefined: results._state.isDisjunctiveFacetRefined(attribute, value),
      };
    });
  } else if (results._state.isHierarchicalFacet(attribute)) {
    var hierarchicalFacetValues = find(results.hierarchicalFacets, predicate);
    if (!hierarchicalFacetValues) return hierarchicalFacetValues;

    var hierarchicalFacet =
      results._state.getHierarchicalFacetByName(attribute);
    var separator =
      results._state._getHierarchicalFacetSeparator(hierarchicalFacet);
    var currentRefinement = unescapeFacetValue(
      results._state.getHierarchicalRefinement(attribute)[0] || ''
    );

    if (currentRefinement.indexOf(hierarchicalFacet.rootPath) === 0) {
      currentRefinement = currentRefinement.replace(
        hierarchicalFacet.rootPath + separator,
        ''
      );
    }

    var currentRefinementSplit = currentRefinement.split(separator);
    currentRefinementSplit.unshift(attribute);

    setIsRefined(hierarchicalFacetValues, currentRefinementSplit, 0);

    return hierarchicalFacetValues;
  }

  return undefined;
}

/**
 * Set the isRefined of a hierarchical facet result based on the current state.
 * @param {SearchResults.HierarchicalFacet} item Hierarchical facet to fix
 * @param {string[]} currentRefinement array of parts of the current hierarchical refinement
 * @param {number} depth recursion depth in the currentRefinement
 * @return {undefined} function mutates the item
 */
function setIsRefined(item, currentRefinement, depth) {
  item.isRefined = item.name === currentRefinement[depth];
  if (item.data) {
    item.data.forEach(function (child) {
      setIsRefined(child, currentRefinement, depth + 1);
    });
  }
}

/**
 * Sort nodes of a hierarchical or disjunctive facet results
 * @private
 * @param {function} sortFn sort function to apply
 * @param {HierarchicalFacet|Array} node node upon which we want to apply the sort
 * @param {string[]} names attribute names
 * @param {number} [level=0] current index in the names array
 * @return {HierarchicalFacet|Array} sorted node
 */
function recSort(sortFn, node, names, level) {
  level = level || 0;

  if (Array.isArray(node)) {
    return sortFn(node, names[level]);
  }

  if (!node.data || node.data.length === 0) {
    return node;
  }

  var children = node.data.map(function (childNode) {
    return recSort(sortFn, childNode, names, level + 1);
  });
  var sortedChildren = sortFn(children, names[level]);
  var newNode = defaultsPure({ data: sortedChildren }, node);
  return newNode;
}

SearchResults.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc'];

function vanillaSortFn(order, data) {
  return data.sort(order);
}

/**
 * @typedef FacetOrdering
 * @type {Object}
 * @property {string[]} [order]
 * @property {'count' | 'alpha' | 'hidden'} [sortRemainingBy]
 */

/**
 * Sorts facet arrays via their facet ordering
 * @param {Array} facetValues the values
 * @param {FacetOrdering} facetOrdering the ordering
 * @returns {Array} the sorted facet values
 */
function sortViaFacetOrdering(facetValues, facetOrdering) {
  var orderedFacets = [];
  var remainingFacets = [];

  var order = facetOrdering.order || [];
  /**
   * an object with the keys being the values in order, the values their index:
   * ['one', 'two'] -> { one: 0, two: 1 }
   */
  var reverseOrder = order.reduce(function (acc, name, i) {
    acc[name] = i;
    return acc;
  }, {});

  facetValues.forEach(function (item) {
    // hierarchical facets get sorted using their raw name
    var name = item.path || item.name;
    if (reverseOrder[name] !== undefined) {
      orderedFacets[reverseOrder[name]] = item;
    } else {
      remainingFacets.push(item);
    }
  });

  orderedFacets = orderedFacets.filter(function (facet) {
    return facet;
  });

  var sortRemainingBy = facetOrdering.sortRemainingBy;
  var ordering;
  if (sortRemainingBy === 'hidden') {
    return orderedFacets;
  } else if (sortRemainingBy === 'alpha') {
    ordering = [
      ['path', 'name'],
      ['asc', 'asc'],
    ];
  } else {
    ordering = [['count'], ['desc']];
  }

  return orderedFacets.concat(
    orderBy(remainingFacets, ordering[0], ordering[1])
  );
}

/**
 * @param {SearchResults} results the search results class
 * @param {string} attribute the attribute to retrieve ordering of
 * @returns {FacetOrdering | undefined} the facet ordering
 */
function getFacetOrdering(results, attribute) {
  return (
    results.renderingContent &&
    results.renderingContent.facetOrdering &&
    results.renderingContent.facetOrdering.values &&
    results.renderingContent.facetOrdering.values[attribute]
  );
}

/**
 * Get a the list of values for a given facet attribute. Those values are sorted
 * refinement first, descending count (bigger value on top), and name ascending
 * (alphabetical order). The sort formula can overridden using either string based
 * predicates or a function.
 *
 * This method will return all the values returned by the Algolia engine plus all
 * the values already refined. This means that it can happen that the
 * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
 * might not be respected if you have facet values that are already refined.
 * @param {string} attribute attribute name
 * @param {object} opts configuration options.
 * @param {boolean} [opts.facetOrdering]
 * Force the use of facetOrdering from the result if a sortBy is present. If
 * sortBy isn't present, facetOrdering will be used automatically.
 * @param {Array.<string> | function} opts.sortBy
 * When using strings, it consists of
 * the name of the [FacetValue](#SearchResults.FacetValue) or the
 * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
 * order (`asc` or `desc`). For example to order the value by count, the
 * argument would be `['count:asc']`.
 *
 * If only the attribute name is specified, the ordering defaults to the one
 * specified in the default value for this attribute.
 *
 * When not specified, the order is
 * ascending.  This parameter can also be a function which takes two facet
 * values and should return a number, 0 if equal, 1 if the first argument is
 * bigger or -1 otherwise.
 *
 * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
 * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of
 * the attribute requested (hierarchical, disjunctive or conjunctive)
 * @example
 * helper.on('result', function(event){
 *   //get values ordered only by name ascending using the string predicate
 *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
 *   //get values  ordered only by count ascending using a function
 *   event.results.getFacetValues('city', {
 *     // this is equivalent to ['count:asc']
 *     sortBy: function(a, b) {
 *       if (a.count === b.count) return 0;
 *       if (a.count > b.count)   return 1;
 *       if (b.count > a.count)   return -1;
 *     }
 *   });
 * });
 */
SearchResults.prototype.getFacetValues = function (attribute, opts) {
  var facetValues = extractNormalizedFacetValues(this, attribute);
  if (!facetValues) {
    return undefined;
  }

  var options = defaultsPure({}, opts, {
    sortBy: SearchResults.DEFAULT_SORT,
    // if no sortBy is given, attempt to sort based on facetOrdering
    // if it is given, we still allow to sort via facet ordering first
    facetOrdering: !(opts && opts.sortBy),
  });

  // eslint-disable-next-line consistent-this
  var results = this;
  var attributes;
  if (Array.isArray(facetValues)) {
    attributes = [attribute];
  } else {
    var config = results._state.getHierarchicalFacetByName(facetValues.name);
    attributes = config.attributes;
  }

  return recSort(
    function (data, facetName) {
      if (options.facetOrdering) {
        var facetOrdering = getFacetOrdering(results, facetName);
        if (facetOrdering) {
          return sortViaFacetOrdering(data, facetOrdering);
        }
      }

      if (Array.isArray(options.sortBy)) {
        var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
        return orderBy(data, order[0], order[1]);
      } else if (typeof options.sortBy === 'function') {
        return vanillaSortFn(options.sortBy, data);
      }
      throw new Error(
        'options.sortBy is optional but if defined it must be ' +
          'either an array of string (predicates) or a sorting function'
      );
    },
    facetValues,
    attributes
  );
};

/**
 * Returns the facet stats if attribute is defined and the facet contains some.
 * Otherwise returns undefined.
 * @param {string} attribute name of the faceted attribute
 * @return {object} The stats of the facet
 */
SearchResults.prototype.getFacetStats = function (attribute) {
  if (this._state.isConjunctiveFacet(attribute)) {
    return getFacetStatsIfAvailable(this.facets, attribute);
  } else if (this._state.isDisjunctiveFacet(attribute)) {
    return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
  }

  return undefined;
};

/**
 * @typedef {Object} FacetListItem
 * @property {string} name
 */

/**
 * @param {FacetListItem[]} facetList (has more items, but enough for here)
 * @param {string} facetName The attribute to look for
 * @return {object|undefined} The stats of the facet
 */
function getFacetStatsIfAvailable(facetList, facetName) {
  var data = find(facetList, function (facet) {
    return facet.name === facetName;
  });
  return data && data.stats;
}

/**
 * Returns all refinements for all filters + tags. It also provides
 * additional information: count and exhaustiveness for each filter.
 *
 * See the [refinement type](#Refinement) for an exhaustive view of the available
 * data.
 *
 * Note that for a numeric refinement, results are grouped per operator, this
 * means that it will return responses for operators which are empty.
 *
 * @return {Array.<Refinement>} all the refinements
 */
SearchResults.prototype.getRefinements = function () {
  var state = this._state;
  // eslint-disable-next-line consistent-this
  var results = this;
  var res = [];

  Object.keys(state.facetsRefinements).forEach(function (attributeName) {
    state.facetsRefinements[attributeName].forEach(function (name) {
      res.push(
        getRefinement(state, 'facet', attributeName, name, results.facets)
      );
    });
  });

  Object.keys(state.facetsExcludes).forEach(function (attributeName) {
    state.facetsExcludes[attributeName].forEach(function (name) {
      res.push(
        getRefinement(state, 'exclude', attributeName, name, results.facets)
      );
    });
  });

  Object.keys(state.disjunctiveFacetsRefinements).forEach(function (
    attributeName
  ) {
    state.disjunctiveFacetsRefinements[attributeName].forEach(function (name) {
      res.push(
        getRefinement(
          state,
          'disjunctive',
          attributeName,
          name,
          results.disjunctiveFacets
        )
      );
    });
  });

  Object.keys(state.hierarchicalFacetsRefinements).forEach(function (
    attributeName
  ) {
    state.hierarchicalFacetsRefinements[attributeName].forEach(function (name) {
      res.push(
        getHierarchicalRefinement(
          state,
          attributeName,
          name,
          results.hierarchicalFacets
        )
      );
    });
  });

  Object.keys(state.numericRefinements).forEach(function (attributeName) {
    var operators = state.numericRefinements[attributeName];
    Object.keys(operators).forEach(function (operator) {
      operators[operator].forEach(function (value) {
        res.push({
          type: 'numeric',
          attributeName: attributeName,
          name: value,
          numericValue: value,
          operator: operator,
        });
      });
    });
  });

  state.tagRefinements.forEach(function (name) {
    res.push({ type: 'tag', attributeName: '_tags', name: name });
  });

  return res;
};

/**
 * @typedef {Object} Facet
 * @property {string} name
 * @property {Object} data
 * @property {boolean} exhaustive
 */

/**
 * @param {SearchParameters} state the current state
 * @param {string} type the type of the refinement
 * @param {string} attributeName The attribute of the facet
 * @param {*} name The name of the facet
 * @param {Facet[]} resultsFacets facets from the results
 * @return {Refinement} the refinement
 */
function getRefinement(state, type, attributeName, name, resultsFacets) {
  var facet = find(resultsFacets, function (f) {
    return f.name === attributeName;
  });
  var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
  var exhaustive = (facet && facet.exhaustive) || false;

  return {
    type: type,
    attributeName: attributeName,
    name: name,
    count: count,
    exhaustive: exhaustive,
  };
}

/**
 * @param {SearchParameters} state the current state
 * @param {string} attributeName the attribute of the hierarchical facet
 * @param {string} name the name of the facet
 * @param {Facet[]} resultsFacets facets from the results
 * @return {HierarchicalFacet} the hierarchical facet
 */
function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
  var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
  var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
  var split = name.split(separator);
  var rootFacet = find(resultsFacets, function (facet) {
    return facet.name === attributeName;
  });

  var facet = split.reduce(function (intermediateFacet, part) {
    var newFacet =
      intermediateFacet &&
      find(intermediateFacet.data, function (f) {
        return f.name === part;
      });
    return newFacet !== undefined ? newFacet : intermediateFacet;
  }, rootFacet);

  var count = (facet && facet.count) || 0;
  var exhaustive = (facet && facet.exhaustive) || false;
  var path = (facet && facet.path) || '';

  return {
    type: 'hierarchical',
    attributeName: attributeName,
    name: path,
    count: count,
    exhaustive: exhaustive,
  };
}

module.exports = SearchResults;


/***/ }),

/***/ 8640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var EventEmitter = __webpack_require__(98396);

var DerivedHelper = __webpack_require__(41080);
var escapeFacetValue = (__webpack_require__(66332).escapeFacetValue);
var inherits = __webpack_require__(44648);
var merge = __webpack_require__(24440);
var objectHasKeys = __webpack_require__(17980);
var omit = __webpack_require__(62760);
var requestBuilder = __webpack_require__(29256);
var SearchParameters = __webpack_require__(45087);
var SearchResults = __webpack_require__(28328);
var version = __webpack_require__(8348);

/**
 * Event triggered when a parameter is set or updated
 * @event AlgoliaSearchHelper#event:change
 * @property {object} event
 * @property {SearchParameters} event.state the current parameters with the latest changes applied
 * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
 * @example
 * helper.on('change', function(event) {
 *   console.log('The parameters have changed');
 * });
 */

/**
 * Event triggered when a main search is sent to Algolia
 * @event AlgoliaSearchHelper#event:search
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search
 * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
 * @example
 * helper.on('search', function(event) {
 *   console.log('Search sent');
 * });
 */

/**
 * Event triggered when a search using `searchForFacetValues` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchForFacetValues
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @property {string} event.facet the facet searched into
 * @property {string} event.query the query used to search in the facets
 * @example
 * helper.on('searchForFacetValues', function(event) {
 *   console.log('searchForFacetValues sent');
 * });
 */

/**
 * Event triggered when a search using `searchOnce` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchOnce
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @example
 * helper.on('searchOnce', function(event) {
 *   console.log('searchOnce sent');
 * });
 */

/**
 * Event triggered when the results are retrieved from Algolia
 * @event AlgoliaSearchHelper#event:result
 * @property {object} event
 * @property {SearchResults} event.results the results received from Algolia
 * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
 * @example
 * helper.on('result', function(event) {
 *   console.log('Search results received');
 * });
 */

/**
 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
 * used, the error can be caught using this event.
 * @event AlgoliaSearchHelper#event:error
 * @property {object} event
 * @property {Error} event.error the error returned by the Algolia.
 * @example
 * helper.on('error', function(event) {
 *   console.log('Houston we got a problem.');
 * });
 */

/**
 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
 * @event AlgoliaSearchHelper#event:searchQueueEmpty
 * @example
 * helper.on('searchQueueEmpty', function() {
 *   console.log('No more search pending');
 *   // This is received before the result event if we're not expecting new results
 * });
 *
 * helper.search();
 */

/**
 * Initialize a new AlgoliaSearchHelper
 * @class
 * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
 * search. It provides an event based interface for search callbacks:
 *  - change: when the internal search state is changed.
 *    This event contains a {@link SearchParameters} object and the
 *    {@link SearchResults} of the last result if any.
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 *  - error: when the response is an error. This event contains the error returned by the server.
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial
 * config of the search. It doesn't have to be a {SearchParameters},
 * just an object containing the properties you need from it.
 */
function AlgoliaSearchHelper(client, index, options) {
  if (typeof client.addAlgoliaAgent === 'function') {
    client.addAlgoliaAgent('JS Helper (' + version + ')');
  }

  this.setClient(client);
  var opts = options || {};
  opts.index = index;
  this.state = SearchParameters.make(opts);
  this.lastResults = null;
  this._queryId = 0;
  this._lastQueryIdReceived = -1;
  this.derivedHelpers = [];
  this._currentNbQueries = 0;
}

inherits(AlgoliaSearchHelper, EventEmitter);

/**
 * Start the search with the parameters set in the state. When the
 * method is called, it triggers a `search` event. The results will
 * be available through the `result` event. If an error occurs, an
 * `error` will be fired instead.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires search
 * @fires result
 * @fires error
 * @chainable
 */
AlgoliaSearchHelper.prototype.search = function () {
  this._search({ onlyWithDerivedHelpers: false });
  return this;
};

AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function () {
  this._search({ onlyWithDerivedHelpers: true });
  return this;
};

/**
 * Gets the search query parameters that would be sent to the Algolia Client
 * for the hits
 * @return {object} Query Parameters
 */
AlgoliaSearchHelper.prototype.getQuery = function () {
  var state = this.state;
  return requestBuilder._getHitsSearchParams(state);
};

/**
 * Start a search using a modified version of the current state. This method does
 * not trigger the helper lifecycle and does not modify the state kept internally
 * by the helper. This second aspect means that the next search call will be the
 * same as a search call before calling searchOnce.
 * @param {object} options can contain all the parameters that can be set to SearchParameters
 * plus the index
 * @param {function} [cb] optional callback executed when the response from the
 * server is back.
 * @return {promise|undefined} if a callback is passed the method returns undefined
 * otherwise it returns a promise containing an object with two keys :
 *  - content with a SearchResults
 *  - state with the state used for the query as a SearchParameters
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the callback API
 * var state = helper.searchOnce({hitsPerPage: 1},
 *   function(error, content, state) {
 *     // if an error occurred it will be passed in error, otherwise its value is null
 *     // content contains the results formatted as a SearchResults
 *     // state is the instance of SearchParameters used for this search
 *   });
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the promise API
 * var state1 = helper.searchOnce({hitsPerPage: 1})
 *                 .then(promiseHandler);
 *
 * function promiseHandler(res) {
 *   // res contains
 *   // {
 *   //   content : SearchResults
 *   //   state   : SearchParameters (the one used for this specific search)
 *   // }
 * }
 */
AlgoliaSearchHelper.prototype.searchOnce = function (options, cb) {
  var tempState = !options
    ? this.state
    : this.state.setQueryParameters(options);
  var queries = requestBuilder._getQueries(tempState.index, tempState);
  // eslint-disable-next-line consistent-this
  var self = this;

  this._currentNbQueries++;

  this.emit('searchOnce', {
    state: tempState,
  });

  if (cb) {
    this.client
      .search(queries)
      .then(function (content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) {
          self.emit('searchQueueEmpty');
        }

        cb(null, new SearchResults(tempState, content.results), tempState);
      })
      .catch(function (err) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) {
          self.emit('searchQueueEmpty');
        }

        cb(err, null, tempState);
      });

    return undefined;
  }

  return this.client.search(queries).then(
    function (content) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      return {
        content: new SearchResults(tempState, content.results),
        state: tempState,
        _originalResponse: content,
      };
    },
    function (e) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      throw e;
    }
  );
};

/**
 * Start the search for answers with the parameters set in the state.
 * This method returns a promise.
 * @param {Object} options - the options for answers API call
 * @param {string[]} options.attributesForPrediction - Attributes to use for predictions. If empty, `searchableAttributes` is used instead.
 * @param {string[]} options.queryLanguages - The languages in the query. Currently only supports ['en'].
 * @param {number} options.nbHits - Maximum number of answers to retrieve from the Answers Engine. Cannot be greater than 1000.
 *
 * @return {promise} the answer results
 * @deprecated answers is deprecated and will be replaced with new initiatives
 */
AlgoliaSearchHelper.prototype.findAnswers = function (options) {
  // eslint-disable-next-line no-console
  console.warn('[algoliasearch-helper] answers is no longer supported');
  var state = this.state;
  var derivedHelper = this.derivedHelpers[0];
  if (!derivedHelper) {
    return Promise.resolve([]);
  }
  var derivedState = derivedHelper.getModifiedState(state);
  var data = merge(
    {
      attributesForPrediction: options.attributesForPrediction,
      nbHits: options.nbHits,
    },
    {
      params: omit(requestBuilder._getHitsSearchParams(derivedState), [
        'attributesToSnippet',
        'hitsPerPage',
        'restrictSearchableAttributes',
        'snippetEllipsisText',
      ]),
    }
  );

  var errorMessage =
    'search for answers was called, but this client does not have a function client.initIndex(index).findAnswers';
  if (typeof this.client.initIndex !== 'function') {
    throw new Error(errorMessage);
  }
  var index = this.client.initIndex(derivedState.index);
  if (typeof index.findAnswers !== 'function') {
    throw new Error(errorMessage);
  }
  return index.findAnswers(derivedState.query, options.queryLanguages, data);
};

/**
 * Structure of each result when using
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * @typedef FacetSearchHit
 * @type {object}
 * @property {string} value the facet value
 * @property {string} highlighted the facet value highlighted with the query string
 * @property {number} count number of occurrence of this facet value
 * @property {boolean} isRefined true if the value is already refined
 */

/**
 * Structure of the data resolved by the
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * promise.
 * @typedef FacetSearchResult
 * @type {object}
 * @property {FacetSearchHit} facetHits the results for this search for facet values
 * @property {number} processingTimeMS time taken by the query inside the engine
 */

/**
 * Search for facet values based on an query and the name of a faceted attribute. This
 * triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */
AlgoliaSearchHelper.prototype.searchForFacetValues = function (
  facet,
  query,
  maxFacetHits,
  userState
) {
  var clientHasSFFV = typeof this.client.searchForFacetValues === 'function';
  var clientHasInitIndex = typeof this.client.initIndex === 'function';
  if (
    !clientHasSFFV &&
    !clientHasInitIndex &&
    typeof this.client.search !== 'function'
  ) {
    throw new Error(
      'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues'
    );
  }

  var state = this.state.setQueryParameters(userState || {});
  var isDisjunctive = state.isDisjunctiveFacet(facet);
  var algoliaQuery = requestBuilder.getSearchForFacetQuery(
    facet,
    query,
    maxFacetHits,
    state
  );

  this._currentNbQueries++;
  // eslint-disable-next-line consistent-this
  var self = this;
  var searchForFacetValuesPromise;
  // newer algoliasearch ^3.27.1 - ~4.0.0
  if (clientHasSFFV) {
    searchForFacetValuesPromise = this.client.searchForFacetValues([
      { indexName: state.index, params: algoliaQuery },
    ]);
    // algoliasearch < 3.27.1
  } else if (clientHasInitIndex) {
    searchForFacetValuesPromise = this.client
      .initIndex(state.index)
      .searchForFacetValues(algoliaQuery);
    // algoliasearch ~5.0.0
  } else {
    // @MAJOR only use client.search
    delete algoliaQuery.facetName;
    searchForFacetValuesPromise = this.client
      .search([
        {
          type: 'facet',
          facet: facet,
          indexName: state.index,
          params: algoliaQuery,
        },
      ])
      .then(function processResponse(response) {
        return response.results[0];
      });
  }

  this.emit('searchForFacetValues', {
    state: state,
    facet: facet,
    query: query,
  });

  return searchForFacetValuesPromise.then(
    function addIsRefined(content) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');

      content = Array.isArray(content) ? content[0] : content;

      content.facetHits.forEach(function (f) {
        f.escapedValue = escapeFacetValue(f.value);
        f.isRefined = isDisjunctive
          ? state.isDisjunctiveFacetRefined(facet, f.escapedValue)
          : state.isFacetRefined(facet, f.escapedValue);
      });

      return content;
    },
    function (e) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      throw e;
    }
  );
};

/**
 * Sets the text query used for the search.
 *
 * This method resets the current page to 0.
 * @param  {string} q the user query
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setQuery = function (q) {
  this._change({
    state: this.state.resetPage().setQuery(q),
    isPageReset: true,
  });

  return this;
};

/**
 * Remove all the types of refinements except tags. A string can be provided to remove
 * only the refinements of a specific attribute. For more advanced use case, you can
 * provide a function instead. This function should follow the
 * [clearCallback definition](#SearchParameters.clearCallback).
 *
 * This method resets the current page to 0.
 * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 * @example
 * // Removing all the refinements
 * helper.clearRefinements().search();
 * @example
 * // Removing all the filters on a the category attribute.
 * helper.clearRefinements('category').search();
 * @example
 * // Removing only the exclude filters on the category facet.
 * helper.clearRefinements(function(value, attribute, type) {
 *   return type === 'exclude' && attribute === 'category';
 * }).search();
 */
AlgoliaSearchHelper.prototype.clearRefinements = function (name) {
  this._change({
    state: this.state.resetPage().clearRefinements(name),
    isPageReset: true,
  });

  return this;
};

/**
 * Remove all the tag filters.
 *
 * This method resets the current page to 0.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.clearTags = function () {
  this._change({
    state: this.state.resetPage().clearTags(),
    isPageReset: true,
  });

  return this;
};

/**
 * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function (
  facet,
  value
) {
  this._change({
    state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
 */
AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function () {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};

/**
 * Adds a refinement on a hierarchical facet. It will throw
 * an exception if the facet is not defined or if the facet
 * is already refined.
 *
 * This method resets the current page to 0.
 * @param {string} facet the facet name
 * @param {string} path the hierarchical facet path
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error if the facet is not defined or if the facet is refined
 * @chainable
 * @fires change
 */
AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function (
  facet,
  path
) {
  this._change({
    state: this.state.resetPage().addHierarchicalFacetRefinement(facet, path),
    isPageReset: true,
  });

  return this;
};

/**
 * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} operator the operator of the filter
 * @param  {number} value the value of the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addNumericRefinement = function (
  attribute,
  operator,
  value
) {
  this._change({
    state: this.state
      .resetPage()
      .addNumericRefinement(attribute, operator, value),
    isPageReset: true,
  });

  return this;
};

/**
 * Adds a filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().addFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
 */
AlgoliaSearchHelper.prototype.addRefine = function () {
  return this.addFacetRefinement.apply(this, arguments);
};

/**
 * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFacetExclusion = function (facet, value) {
  this._change({
    state: this.state.resetPage().addExcludeRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
 */
AlgoliaSearchHelper.prototype.addExclude = function () {
  return this.addFacetExclusion.apply(this, arguments);
};

/**
 * Adds a tag filter with the `tag` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag the tag to add to the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addTag = function (tag) {
  this._change({
    state: this.state.resetPage().addTagRefinement(tag),
    isPageReset: true,
  });

  return this;
};

/**
 * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * Some parameters are optional, triggering different behavior:
 *  - if the value is not provided, then all the numeric value will be removed for the
 *  specified attribute/operator couple.
 *  - if the operator is not provided either, then all the numeric filter on this attribute
 *  will be removed.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} [operator] the operator of the filter
 * @param  {number} [value] the value of the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeNumericRefinement = function (
  attribute,
  operator,
  value
) {
  this._change({
    state: this.state
      .resetPage()
      .removeNumericRefinement(attribute, operator, value),
    isPageReset: true,
  });

  return this;
};

/**
 * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function (
  facet,
  value
) {
  this._change({
    state: this.state
      .resetPage()
      .removeDisjunctiveFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
 */
AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function () {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};

/**
 * Removes the refinement set on a hierarchical facet.
 * @param {string} facet the facet name
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error if the facet is not defined or if the facet is not refined
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function (
  facet
) {
  this._change({
    state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
    isPageReset: true,
  });

  return this;
};

/**
 * Removes a filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().removeFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
 */
AlgoliaSearchHelper.prototype.removeRefine = function () {
  return this.removeFacetRefinement.apply(this, arguments);
};

/**
 * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFacetExclusion = function (facet, value) {
  this._change({
    state: this.state.resetPage().removeExcludeRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
 */
AlgoliaSearchHelper.prototype.removeExclude = function () {
  return this.removeFacetExclusion.apply(this, arguments);
};

/**
 * Removes a tag filter with the `tag` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove from the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeTag = function (tag) {
  this._change({
    state: this.state.resetPage().removeTagRefinement(tag),
    isPageReset: true,
  });

  return this;
};

/**
 * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleFacetExclusion = function (facet, value) {
  this._change({
    state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
 */
AlgoliaSearchHelper.prototype.toggleExclude = function () {
  return this.toggleFacetExclusion.apply(this, arguments);
};

/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */
AlgoliaSearchHelper.prototype.toggleRefinement = function (facet, value) {
  return this.toggleFacetRefinement(facet, value);
};

/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().toggleFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */
AlgoliaSearchHelper.prototype.toggleRefine = function () {
  return this.toggleFacetRefinement.apply(this, arguments);
};

/**
 * Adds or removes a tag filter with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove or add
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleTag = function (tag) {
  this._change({
    state: this.state.resetPage().toggleTagRefinement(tag),
    isPageReset: true,
  });

  return this;
};

/**
 * Increments the page number by one.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 * @example
 * helper.setPage(0).nextPage().getPage();
 * // returns 1
 */
AlgoliaSearchHelper.prototype.nextPage = function () {
  var page = this.state.page || 0;
  return this.setPage(page + 1);
};

/**
 * Decrements the page number by one.
 * @fires change
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @chainable
 * @example
 * helper.setPage(1).previousPage().getPage();
 * // returns 0
 */
AlgoliaSearchHelper.prototype.previousPage = function () {
  var page = this.state.page || 0;
  return this.setPage(page - 1);
};

/**
 * @private
 * @param {number} page The page number
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @chainable
 * @fires change
 */
function setCurrentPage(page) {
  if (page < 0) throw new Error('Page requested below 0.');

  this._change({
    state: this.state.setPage(page),
    isPageReset: false,
  });

  return this;
}

/**
 * Change the current page
 * @deprecated
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;

/**
 * Updates the current page.
 * @function
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setPage = setCurrentPage;

/**
 * Updates the name of the index that will be targeted by the query.
 *
 * This method resets the current page to 0.
 * @param {string} name the index name
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setIndex = function (name) {
  this._change({
    state: this.state.resetPage().setIndex(name),
    isPageReset: true,
  });

  return this;
};

/**
 * Update a parameter of the search. This method reset the page
 *
 * The complete list of parameters is available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
 *
 * This method resets the current page to 0.
 * @param {string} parameter name of the parameter to update
 * @param {any} value new value of the parameter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 * @example
 * helper.setQueryParameter('hitsPerPage', 20).search();
 */
AlgoliaSearchHelper.prototype.setQueryParameter = function (parameter, value) {
  this._change({
    state: this.state.resetPage().setQueryParameter(parameter, value),
    isPageReset: true,
  });

  return this;
};

/**
 * Set the whole state (warning: will erase previous state)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setState = function (newState) {
  this._change({
    state: SearchParameters.make(newState),
    isPageReset: false,
  });

  return this;
};

/**
 * Override the current state without triggering a change event.
 * Do not use this method unless you know what you are doing. (see the example
 * for a legit use case)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @example
 *  helper.on('change', function(state){
 *    // In this function you might want to find a way to store the state in the url/history
 *    updateYourURL(state)
 *  })
 *  window.onpopstate = function(event){
 *    // This is naive though as you should check if the state is really defined etc.
 *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
 *  }
 * @chainable
 */
AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent =
  function (newState) {
    this.state = new SearchParameters(newState);
    return this;
  };

/**
 * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
 * @param {string} attribute the name of the attribute
 * @return {boolean} true if the attribute is filtered by at least one value
 * @example
 * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
 * helper.hasRefinements('price'); // false
 * helper.addNumericRefinement('price', '>', 100);
 * helper.hasRefinements('price'); // true
 *
 * helper.hasRefinements('color'); // false
 * helper.addFacetRefinement('color', 'blue');
 * helper.hasRefinements('color'); // true
 *
 * helper.hasRefinements('material'); // false
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * helper.hasRefinements('material'); // true
 *
 * helper.hasRefinements('categories'); // false
 * helper.toggleFacetRefinement('categories', 'kitchen > knife');
 * helper.hasRefinements('categories'); // true
 *
 */
AlgoliaSearchHelper.prototype.hasRefinements = function (attribute) {
  if (objectHasKeys(this.state.getNumericRefinements(attribute))) {
    return true;
  } else if (this.state.isConjunctiveFacet(attribute)) {
    return this.state.isFacetRefined(attribute);
  } else if (this.state.isDisjunctiveFacet(attribute)) {
    return this.state.isDisjunctiveFacetRefined(attribute);
  } else if (this.state.isHierarchicalFacet(attribute)) {
    return this.state.isHierarchicalFacetRefined(attribute);
  }

  // there's currently no way to know that the user did call `addNumericRefinement` at some point
  // thus we cannot distinguish if there once was a numeric refinement that was cleared
  // so we will return false in every other situations to be consistent
  // while what we should do here is throw because we did not find the attribute in any type
  // of refinement
  return false;
};

/**
 * Check if a value is excluded for a specific faceted attribute. If the value
 * is omitted then the function checks if there is any excluding refinements.
 *
 * @param  {string}  facet name of the attribute for used for faceting
 * @param  {string}  [value] optional value. If passed will test that this value
 * is filtering the given facet.
 * @return {boolean} true if refined
 * @example
 * helper.isExcludeRefined('color'); // false
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // false
 *
 * helper.addFacetExclusion('color', 'red');
 *
 * helper.isExcludeRefined('color'); // true
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // true
 */
AlgoliaSearchHelper.prototype.isExcluded = function (facet, value) {
  return this.state.isExcludeRefined(facet, value);
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */
AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function (facet, value) {
  return this.state.isDisjunctiveFacetRefined(facet, value);
};

/**
 * Check if the string is a currently filtering tag.
 * @param {string} tag tag to check
 * @return {boolean} true if the tag is currently refined
 */
AlgoliaSearchHelper.prototype.hasTag = function (tag) {
  return this.state.isTagRefined(tag);
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
 */
AlgoliaSearchHelper.prototype.isTagRefined = function () {
  return this.hasTagRefinements.apply(this, arguments);
};

/**
 * Get the name of the currently used index.
 * @return {string} name of the index
 * @example
 * helper.setIndex('highestPrice_products').getIndex();
 * // returns 'highestPrice_products'
 */
AlgoliaSearchHelper.prototype.getIndex = function () {
  return this.state.index;
};

function getCurrentPage() {
  return this.state.page;
}

/**
 * Get the currently selected page
 * @deprecated
 * @return {number} the current page
 */
AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
/**
 * Get the currently selected page
 * @function
 * @return {number} the current page
 */
AlgoliaSearchHelper.prototype.getPage = getCurrentPage;

/**
 * Get all the tags currently set to filters the results.
 *
 * @return {string[]} The list of tags currently set.
 */
AlgoliaSearchHelper.prototype.getTags = function () {
  return this.state.tagRefinements;
};

/**
 * Get the list of refinements for a given attribute. This method works with
 * conjunctive, disjunctive, excluding and numerical filters.
 *
 * See also SearchResults#getRefinements
 *
 * @param {string} facetName attribute name used for faceting
 * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
 * a type. Numeric also contains an operator.
 * @example
 * helper.addNumericRefinement('price', '>', 100);
 * helper.getRefinements('price');
 * // [
 * //   {
 * //     "value": [
 * //       100
 * //     ],
 * //     "operator": ">",
 * //     "type": "numeric"
 * //   }
 * // ]
 * @example
 * helper.addFacetRefinement('color', 'blue');
 * helper.addFacetExclusion('color', 'red');
 * helper.getRefinements('color');
 * // [
 * //   {
 * //     "value": "blue",
 * //     "type": "conjunctive"
 * //   },
 * //   {
 * //     "value": "red",
 * //     "type": "exclude"
 * //   }
 * // ]
 * @example
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * // [
 * //   {
 * //     "value": "plastic",
 * //     "type": "disjunctive"
 * //   }
 * // ]
 */
AlgoliaSearchHelper.prototype.getRefinements = function (facetName) {
  var refinements = [];

  if (this.state.isConjunctiveFacet(facetName)) {
    var conjRefinements = this.state.getConjunctiveRefinements(facetName);

    conjRefinements.forEach(function (r) {
      refinements.push({
        value: r,
        type: 'conjunctive',
      });
    });

    var excludeRefinements = this.state.getExcludeRefinements(facetName);

    excludeRefinements.forEach(function (r) {
      refinements.push({
        value: r,
        type: 'exclude',
      });
    });
  } else if (this.state.isDisjunctiveFacet(facetName)) {
    var disjunctiveRefinements =
      this.state.getDisjunctiveRefinements(facetName);

    disjunctiveRefinements.forEach(function (r) {
      refinements.push({
        value: r,
        type: 'disjunctive',
      });
    });
  }

  var numericRefinements = this.state.getNumericRefinements(facetName);

  Object.keys(numericRefinements).forEach(function (operator) {
    var value = numericRefinements[operator];

    refinements.push({
      value: value,
      operator: operator,
      type: 'numeric',
    });
  });

  return refinements;
};

/**
 * Return the current refinement for the (attribute, operator)
 * @param {string} attribute attribute in the record
 * @param {string} operator operator applied on the refined values
 * @return {Array.<number|number[]>} refined values
 */
AlgoliaSearchHelper.prototype.getNumericRefinement = function (
  attribute,
  operator
) {
  return this.state.getNumericRefinement(attribute, operator);
};

/**
 * Get the current breadcrumb for a hierarchical facet, as an array
 * @param  {string} facetName Hierarchical facet name
 * @return {array.<string>} the path as an array of string
 */
AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function (
  facetName
) {
  return this.state.getHierarchicalFacetBreadcrumb(facetName);
};

// /////////// PRIVATE

/**
 * Perform the underlying queries
 * @private
 * @param {object} options options for the query
 * @param {boolean} [options.onlyWithDerivedHelpers=false] if true, only the derived helpers will be queried
 * @return {undefined} does not return anything
 * @fires search
 * @fires result
 * @fires error
 */
AlgoliaSearchHelper.prototype._search = function (options) {
  var state = this.state;
  var states = [];
  var mainQueries = [];

  if (!options.onlyWithDerivedHelpers) {
    mainQueries = requestBuilder._getQueries(state.index, state);

    states.push({
      state: state,
      queriesCount: mainQueries.length,
      helper: this,
    });

    this.emit('search', {
      state: state,
      results: this.lastResults,
    });
  }

  var derivedQueries = this.derivedHelpers.map(function (derivedHelper) {
    var derivedState = derivedHelper.getModifiedState(state);
    var derivedStateQueries = derivedState.index
      ? requestBuilder._getQueries(derivedState.index, derivedState)
      : [];

    states.push({
      state: derivedState,
      queriesCount: derivedStateQueries.length,
      helper: derivedHelper,
    });

    derivedHelper.emit('search', {
      state: derivedState,
      results: derivedHelper.lastResults,
    });

    return derivedStateQueries;
  });

  var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);

  var queryId = this._queryId++;
  this._currentNbQueries++;

  if (!queries.length) {
    return Promise.resolve({ results: [] }).then(
      this._dispatchAlgoliaResponse.bind(this, states, queryId)
    );
  }

  try {
    this.client
      .search(queries)
      .then(this._dispatchAlgoliaResponse.bind(this, states, queryId))
      .catch(this._dispatchAlgoliaError.bind(this, queryId));
  } catch (error) {
    // If we reach this part, we're in an internal error state
    this.emit('error', {
      error: error,
    });
  }

  return undefined;
};

/**
 * Transform the responses as sent by the server and transform them into a user
 * usable object that merge the results of all the batch requests. It will dispatch
 * over the different helper + derived helpers (when there are some).
 * @private
 * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>} states state used to generate the request
 * @param {number} queryId id of the current request
 * @param {object} content content of the response
 * @return {undefined}
 */
AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function (
  states,
  queryId,
  content
) {
  // @TODO remove the number of outdated queries discarded instead of just one

  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= queryId - this._lastQueryIdReceived;
  this._lastQueryIdReceived = queryId;

  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');

  var results = content.results.slice();

  states.forEach(function (s) {
    var state = s.state;
    var queriesCount = s.queriesCount;
    var helper = s.helper;
    var specificResults = results.splice(0, queriesCount);

    if (!state.index) {
      helper.emit('result', {
        results: null,
        state: state,
      });
      return;
    }

    helper.lastResults = new SearchResults(state, specificResults);

    helper.emit('result', {
      results: helper.lastResults,
      state: state,
    });
  });
};

AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function (
  queryId,
  error
) {
  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= queryId - this._lastQueryIdReceived;
  this._lastQueryIdReceived = queryId;

  this.emit('error', {
    error: error,
  });

  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
};

AlgoliaSearchHelper.prototype.containsRefinement = function (
  query,
  facetFilters,
  numericFilters,
  tagFilters
) {
  return (
    query ||
    facetFilters.length !== 0 ||
    numericFilters.length !== 0 ||
    tagFilters.length !== 0
  );
};

/**
 * Test if there are some disjunctive refinements on the facet
 * @private
 * @param {string} facet the attribute to test
 * @return {boolean} true if there are refinements on this attribute
 */
AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function (facet) {
  return (
    this.state.disjunctiveRefinements[facet] &&
    this.state.disjunctiveRefinements[facet].length > 0
  );
};

AlgoliaSearchHelper.prototype._change = function (event) {
  var state = event.state;
  var isPageReset = event.isPageReset;

  if (state !== this.state) {
    this.state = state;

    this.emit('change', {
      state: this.state,
      results: this.lastResults,
      isPageReset: isPageReset,
    });
  }
};

/**
 * Clears the cache of the underlying Algolia client.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 */
AlgoliaSearchHelper.prototype.clearCache = function () {
  if (this.client.clearCache) this.client.clearCache();
  return this;
};

/**
 * Updates the internal client instance. If the reference of the clients
 * are equal then no update is actually done.
 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 */
AlgoliaSearchHelper.prototype.setClient = function (newClient) {
  if (this.client === newClient) return this;

  if (typeof newClient.addAlgoliaAgent === 'function') {
    newClient.addAlgoliaAgent('JS Helper (' + version + ')');
  }
  this.client = newClient;

  return this;
};

/**
 * Gets the instance of the currently used client.
 * @return {AlgoliaSearch} the currently used client
 */
AlgoliaSearchHelper.prototype.getClient = function () {
  return this.client;
};

/**
 * Creates an derived instance of the Helper. A derived helper
 * is a way to request other indices synchronised with the lifecycle
 * of the main Helper. This mechanism uses the multiqueries feature
 * of Algolia to aggregate all the requests in a single network call.
 *
 * This method takes a function that is used to create a new SearchParameter
 * that will be used to create requests to Algolia. Those new requests
 * are created just before the `search` event. The signature of the function
 * is `SearchParameters -> SearchParameters`.
 *
 * This method returns a new DerivedHelper which is an EventEmitter
 * that fires the same `search`, `result` and `error` events. Those
 * events, however, will receive data specific to this DerivedHelper
 * and the SearchParameters that is returned by the call of the
 * parameter function.
 * @param {function} fn SearchParameters -> SearchParameters
 * @return {DerivedHelper} a new DerivedHelper
 */
AlgoliaSearchHelper.prototype.derive = function (fn) {
  var derivedHelper = new DerivedHelper(this, fn);
  this.derivedHelpers.push(derivedHelper);
  return derivedHelper;
};

/**
 * This method detaches a derived Helper from the main one. Prefer using the one from the
 * derived helper itself, to remove the event listeners too.
 * @private
 * @param  {DerivedHelper} derivedHelper the derived helper to detach
 * @return {undefined} nothing is returned
 * @throws Error
 */
AlgoliaSearchHelper.prototype.detachDerivedHelper = function (derivedHelper) {
  var pos = this.derivedHelpers.indexOf(derivedHelper);
  if (pos === -1) throw new Error('Derived helper already detached');
  this.derivedHelpers.splice(pos, 1);
};

/**
 * This method returns true if there is currently at least one on-going search.
 * @return {boolean} true if there is a search pending
 */
AlgoliaSearchHelper.prototype.hasPendingRequests = function () {
  return this._currentNbQueries > 0;
};

/**
 * @typedef AlgoliaSearchHelper.NumericRefinement
 * @type {object}
 * @property {number[]} value the numbers that are used for filtering this attribute with
 * the operator specified.
 * @property {string} operator the faceting data: value, number of entries
 * @property {string} type will be 'numeric'
 */

/**
 * @typedef AlgoliaSearchHelper.FacetRefinement
 * @type {object}
 * @property {string} value the string use to filter the attribute
 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
 */

module.exports = AlgoliaSearchHelper;


/***/ }),

/***/ 91400:
/***/ ((module) => {

"use strict";


module.exports = function compact(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.filter(Boolean);
};


/***/ }),

/***/ 14592:
/***/ ((module) => {

"use strict";


// NOTE: this behaves like lodash/defaults, but doesn't mutate the target
// it also preserve keys order
module.exports = function defaultsPure() {
  var sources = Array.prototype.slice.call(arguments);

  return sources.reduceRight(function (acc, source) {
    Object.keys(Object(source)).forEach(function (key) {
      if (source[key] === undefined) {
        return;
      }
      if (acc[key] !== undefined) {
        // remove if already added, so that we can add it in correct order
        delete acc[key];
      }
      acc[key] = source[key];
    });
    return acc;
  }, {});
};


/***/ }),

/***/ 66332:
/***/ ((module) => {

"use strict";


/**
 * Replaces a leading - with \-
 * @private
 * @param {any} value the facet value to replace
 * @returns {any} the escaped facet value or the value if it was not a string
 */
function escapeFacetValue(value) {
  if (typeof value !== 'string') return value;

  return String(value).replace(/^-/, '\\-');
}

/**
 * Replaces a leading \- with -
 * @private
 * @param {any} value the escaped facet value
 * @returns {any} the unescaped facet value or the value if it was not a string
 */
function unescapeFacetValue(value) {
  if (typeof value !== 'string') return value;

  return value.replace(/^\\-/, '-');
}

module.exports = {
  escapeFacetValue: escapeFacetValue,
  unescapeFacetValue: unescapeFacetValue,
};


/***/ }),

/***/ 72552:
/***/ ((module) => {

"use strict";


// @MAJOR can be replaced by native Array#find when we change support
module.exports = function find(array, comparator) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return array[i];
    }
  }

  return undefined;
};


/***/ }),

/***/ 29160:
/***/ ((module) => {

"use strict";


// @MAJOR can be replaced by native Array#findIndex when we change support
module.exports = function find(array, comparator) {
  if (!Array.isArray(array)) {
    return -1;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return i;
    }
  }
  return -1;
};


/***/ }),

/***/ 34975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var find = __webpack_require__(72552);

/**
 * Transform sort format from user friendly notation to lodash format
 * @param {string[]} sortBy array of predicate of the form "attribute:order"
 * @param {string[]} [defaults] array of predicate of the form "attribute:order"
 * @return {array.<string[]>} array containing 2 elements : attributes, orders
 */
module.exports = function formatSort(sortBy, defaults) {
  var defaultInstructions = (defaults || []).map(function (sort) {
    return sort.split(':');
  });

  return sortBy.reduce(
    function preparePredicate(out, sort) {
      var sortInstruction = sort.split(':');

      var matchingDefault = find(
        defaultInstructions,
        function (defaultInstruction) {
          return defaultInstruction[0] === sortInstruction[0];
        }
      );

      if (sortInstruction.length > 1 || !matchingDefault) {
        out[0].push(sortInstruction[0]);
        out[1].push(sortInstruction[1]);
        return out;
      }

      out[0].push(matchingDefault[0]);
      out[1].push(matchingDefault[1]);
      return out;
    },
    [[], []]
  );
};


/***/ }),

/***/ 44648:
/***/ ((module) => {

"use strict";


function inherits(ctor, superCtor) {
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
}

module.exports = inherits;


/***/ }),

/***/ 44672:
/***/ ((module) => {

"use strict";


function intersection(arr1, arr2) {
  return arr1.filter(function (value, index) {
    return (
      arr2.indexOf(value) > -1 &&
      arr1.indexOf(value) === index /* skips duplicates */
    );
  });
}

module.exports = intersection;


/***/ }),

/***/ 24440:
/***/ ((module) => {

"use strict";


function clone(value) {
  if (typeof value === 'object' && value !== null) {
    return _merge(Array.isArray(value) ? [] : {}, value);
  }
  return value;
}

function isObjectOrArrayOrFunction(value) {
  return (
    typeof value === 'function' ||
    Array.isArray(value) ||
    Object.prototype.toString.call(value) === '[object Object]'
  );
}

function _merge(target, source) {
  if (target === source) {
    return target;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (var key in source) {
    if (
      !Object.prototype.hasOwnProperty.call(source, key) ||
      key === '__proto__' ||
      key === 'constructor'
    ) {
      // eslint-disable-next-line no-continue
      continue;
    }

    var sourceVal = source[key];
    var targetVal = target[key];

    if (typeof targetVal !== 'undefined' && typeof sourceVal === 'undefined') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (
      isObjectOrArrayOrFunction(targetVal) &&
      isObjectOrArrayOrFunction(sourceVal)
    ) {
      target[key] = _merge(targetVal, sourceVal);
    } else {
      target[key] = clone(sourceVal);
    }
  }
  return target;
}

/**
 * This method is like Object.assign, but recursively merges own and inherited
 * enumerable keyed properties of source objects into the destination object.
 *
 * NOTE: this behaves like lodash/merge, but:
 * - does mutate functions if they are a source
 * - treats non-plain objects as plain
 * - does not work for circular objects
 * - treats sparse arrays as sparse
 * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
 *
 * @param {Object} target The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 */
function merge(target) {
  if (!isObjectOrArrayOrFunction(target)) {
    target = {};
  }

  for (var i = 1, l = arguments.length; i < l; i++) {
    var source = arguments[i];

    if (isObjectOrArrayOrFunction(source)) {
      _merge(target, source);
    }
  }
  return target;
}

module.exports = merge;


/***/ }),

/***/ 17980:
/***/ ((module) => {

"use strict";


function objectHasKeys(obj) {
  return obj && Object.keys(obj).length > 0;
}

module.exports = objectHasKeys;


/***/ }),

/***/ 62760:
/***/ ((module) => {

"use strict";


// https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source === null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key;
  var i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    // eslint-disable-next-line no-continue
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

module.exports = _objectWithoutPropertiesLoose;


/***/ }),

/***/ 77072:
/***/ ((module) => {

"use strict";


function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined;
    var valIsNull = value === null;

    var othIsDefined = other !== undefined;
    var othIsNull = other === null;

    if (
      (!othIsNull && value > other) ||
      (valIsNull && othIsDefined) ||
      !valIsDefined
    ) {
      return 1;
    }
    if (
      (!valIsNull && value < other) ||
      (othIsNull && valIsDefined) ||
      !othIsDefined
    ) {
      return -1;
    }
  }
  return 0;
}

/**
 * @param {Array<object>} collection object with keys in attributes
 * @param {Array<string>} iteratees attributes
 * @param {Array<string>} orders asc | desc
 * @return {Array<object>} sorted collection
 */
function orderBy(collection, iteratees, orders) {
  if (!Array.isArray(collection)) {
    return [];
  }

  if (!Array.isArray(orders)) {
    orders = [];
  }

  var result = collection.map(function (value, index) {
    return {
      criteria: iteratees.map(function (iteratee) {
        return value[iteratee];
      }),
      index: index,
      value: value,
    };
  });

  result.sort(function comparer(object, other) {
    var index = -1;

    while (++index < object.criteria.length) {
      var res = compareAscending(object.criteria[index], other.criteria[index]);
      if (res) {
        if (index >= orders.length) {
          return res;
        }
        if (orders[index] === 'desc') {
          return -res;
        }
        return res;
      }
    }

    // This ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
  });

  return result.map(function (res) {
    return res.value;
  });
}

module.exports = orderBy;


/***/ }),

/***/ 33600:
/***/ ((module) => {

"use strict";


function valToNumber(v) {
  if (typeof v === 'number') {
    return v;
  } else if (typeof v === 'string') {
    return parseFloat(v);
  } else if (Array.isArray(v)) {
    return v.map(valToNumber);
  }

  throw new Error(
    'The value should be a number, a parsable string or an array of those.'
  );
}

module.exports = valToNumber;


/***/ }),

/***/ 29256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var merge = __webpack_require__(24440);

function sortObject(obj) {
  return Object.keys(obj)
    .sort()
    .reduce(function (acc, curr) {
      acc[curr] = obj[curr];
      return acc;
    }, {});
}

var requestBuilder = {
  /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @param  {string} index The name of the index
   * @param  {SearchParameters} state The state from which to get the queries
   * @return {object[]} The queries
   */
  _getQueries: function getQueries(index, state) {
    var queries = [];

    // One query for the hits
    queries.push({
      indexName: index,
      params: requestBuilder._getHitsSearchParams(state),
    });

    // One for each disjunctive facets
    state.getRefinedDisjunctiveFacets().forEach(function (refinedFacet) {
      queries.push({
        indexName: index,
        params: requestBuilder._getDisjunctiveFacetSearchParams(
          state,
          refinedFacet
        ),
      });
    });

    // More to get the parent levels of the hierarchical facets when refined
    state.getRefinedHierarchicalFacets().forEach(function (refinedFacet) {
      var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
      var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

      // If we are deeper than level 0 (starting from `beer > IPA`)
      // we want to get all parent values
      if (
        currentRefinement.length > 0 &&
        currentRefinement[0].split(separator).length > 1
      ) {
        // We generate a map of the filters we will use for our facet values queries
        var filtersMap = currentRefinement[0]
          .split(separator)
          .slice(0, -1)
          .reduce(function createFiltersMap(map, segment, level) {
            return map.concat({
              attribute: hierarchicalFacet.attributes[level],
              value:
                level === 0
                  ? segment
                  : [map[map.length - 1].value, segment].join(separator),
            });
          }, []);

        filtersMap.forEach(function (filter, level) {
          var params = requestBuilder._getDisjunctiveFacetSearchParams(
            state,
            filter.attribute,
            level === 0
          );

          // Keep facet filters unrelated to current hierarchical attributes
          function hasHierarchicalFacetFilter(value) {
            return hierarchicalFacet.attributes.some(function (attribute) {
              return attribute === value.split(':')[0];
            });
          }

          var filteredFacetFilters = (params.facetFilters || []).reduce(
            function (acc, facetFilter) {
              if (Array.isArray(facetFilter)) {
                var filtered = facetFilter.filter(function (filterValue) {
                  return !hasHierarchicalFacetFilter(filterValue);
                });

                if (filtered.length > 0) {
                  acc.push(filtered);
                }
              }

              if (
                typeof facetFilter === 'string' &&
                !hasHierarchicalFacetFilter(facetFilter)
              ) {
                acc.push(facetFilter);
              }

              return acc;
            },
            []
          );

          var parent = filtersMap[level - 1];
          if (level > 0) {
            params.facetFilters = filteredFacetFilters.concat(
              parent.attribute + ':' + parent.value
            );
          } else {
            params.facetFilters =
              filteredFacetFilters.length > 0
                ? filteredFacetFilters
                : undefined;
          }

          queries.push({ indexName: index, params: params });
        });
      }
    });

    return queries;
  },

  /**
   * Build search parameters used to fetch hits
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @return {object.<string, any>} The search parameters for hits
   */
  _getHitsSearchParams: function (state) {
    var facets = state.facets
      .concat(state.disjunctiveFacets)
      .concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state))
      .sort();

    var facetFilters = requestBuilder._getFacetFilters(state);
    var numericFilters = requestBuilder._getNumericFilters(state);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {
      facets: facets.indexOf('*') > -1 ? ['*'] : facets,
      tagFilters: tagFilters,
    };

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    return sortObject(merge({}, state.getQueryParams(), additionalParams));
  },

  /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object} The search parameters for a disjunctive facet
   */
  _getDisjunctiveFacetSearchParams: function (
    state,
    facet,
    hierarchicalRootLevel
  ) {
    var facetFilters = requestBuilder._getFacetFilters(
      state,
      facet,
      hierarchicalRootLevel
    );
    var numericFilters = requestBuilder._getNumericFilters(state, facet);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {
      hitsPerPage: 0,
      page: 0,
      analytics: false,
      clickAnalytics: false,
    };

    if (tagFilters.length > 0) {
      additionalParams.tagFilters = tagFilters;
    }

    var hierarchicalFacet = state.getHierarchicalFacetByName(facet);

    if (hierarchicalFacet) {
      additionalParams.facets =
        requestBuilder._getDisjunctiveHierarchicalFacetAttribute(
          state,
          hierarchicalFacet,
          hierarchicalRootLevel
        );
    } else {
      additionalParams.facets = facet;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    return sortObject(merge({}, state.getQueryParams(), additionalParams));
  },

  /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {SearchParameters} state the state from which to get the filters
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */
  _getNumericFilters: function (state, facetName) {
    if (state.numericFilters) {
      return state.numericFilters;
    }

    var numericFilters = [];

    Object.keys(state.numericRefinements).forEach(function (attribute) {
      var operators = state.numericRefinements[attribute] || {};
      Object.keys(operators).forEach(function (operator) {
        var values = operators[operator] || [];
        if (facetName !== attribute) {
          values.forEach(function (value) {
            if (Array.isArray(value)) {
              var vs = value.map(function (v) {
                return attribute + operator + v;
              });
              numericFilters.push(vs);
            } else {
              numericFilters.push(attribute + operator + value);
            }
          });
        }
      });
    });

    return numericFilters;
  },

  /**
   * Return the tags filters depending on which format is used, either tagFilters or tagRefinements
   * @private
   * @param {SearchParameters} state the state from which to get the filters
   * @return {string} Tag filters in a single string
   */
  _getTagFilters: function (state) {
    if (state.tagFilters) {
      return state.tagFilters;
    }

    return state.tagRefinements.join(',');
  },

  /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @param  {string} [facet] if set, the current disjunctive facet
   * @param  {boolean} [hierarchicalRootLevel] ?? FIXME
   * @return {array.<string>} The facet filters in the algolia format
   */
  _getFacetFilters: function (state, facet, hierarchicalRootLevel) {
    var facetFilters = [];

    var facetsRefinements = state.facetsRefinements || {};
    Object.keys(facetsRefinements)
      .sort()
      .forEach(function (facetName) {
        var facetValues = facetsRefinements[facetName] || [];
        facetValues.sort().forEach(function (facetValue) {
          facetFilters.push(facetName + ':' + facetValue);
        });
      });

    var facetsExcludes = state.facetsExcludes || {};
    Object.keys(facetsExcludes)
      .sort()
      .forEach(function (facetName) {
        var facetValues = facetsExcludes[facetName] || [];
        facetValues.sort().forEach(function (facetValue) {
          facetFilters.push(facetName + ':-' + facetValue);
        });
      });

    var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
    Object.keys(disjunctiveFacetsRefinements)
      .sort()
      .forEach(function (facetName) {
        var facetValues = disjunctiveFacetsRefinements[facetName] || [];
        if (facetName === facet || !facetValues || facetValues.length === 0) {
          return;
        }
        var orFilters = [];

        facetValues.sort().forEach(function (facetValue) {
          orFilters.push(facetName + ':' + facetValue);
        });

        facetFilters.push(orFilters);
      });

    var hierarchicalFacetsRefinements =
      state.hierarchicalFacetsRefinements || {};
    Object.keys(hierarchicalFacetsRefinements)
      .sort()
      .forEach(function (facetName) {
        var facetValues = hierarchicalFacetsRefinements[facetName] || [];
        var facetValue = facetValues[0];

        if (facetValue === undefined) {
          return;
        }

        var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
        var attributeToRefine;
        var attributesIndex;

        // we ask for parent facet values only when the `facet` is the current hierarchical facet
        if (facet === facetName) {
          // if we are at the root level already, no need to ask for facet values, we get them from
          // the hits query
          if (
            facetValue.indexOf(separator) === -1 ||
            (!rootPath && hierarchicalRootLevel === true) ||
            (rootPath &&
              rootPath.split(separator).length ===
                facetValue.split(separator).length)
          ) {
            return;
          }

          if (!rootPath) {
            attributesIndex = facetValue.split(separator).length - 2;
            facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
          } else {
            attributesIndex = rootPath.split(separator).length - 1;
            facetValue = rootPath;
          }

          attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
        } else {
          attributesIndex = facetValue.split(separator).length - 1;

          attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
        }

        if (attributeToRefine) {
          facetFilters.push([attributeToRefine + ':' + facetValue]);
        }
      });

    return facetFilters;
  },

  _getHitsHierarchicalFacetsAttributes: function (state) {
    var out = [];

    return state.hierarchicalFacets.reduce(
      // ask for as much levels as there's hierarchical refinements
      function getHitsAttributesForHierarchicalFacet(
        allAttributes,
        hierarchicalFacet
      ) {
        var hierarchicalRefinement = state.getHierarchicalRefinement(
          hierarchicalFacet.name
        )[0];

        // if no refinement, ask for root level
        if (!hierarchicalRefinement) {
          allAttributes.push(hierarchicalFacet.attributes[0]);
          return allAttributes;
        }

        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var level = hierarchicalRefinement.split(separator).length;
        var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);

        return allAttributes.concat(newAttributes);
      },
      out
    );
  },

  _getDisjunctiveHierarchicalFacetAttribute: function (
    state,
    hierarchicalFacet,
    rootLevel
  ) {
    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
    if (rootLevel === true) {
      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
      var attributeIndex = 0;

      if (rootPath) {
        attributeIndex = rootPath.split(separator).length;
      }
      return [hierarchicalFacet.attributes[attributeIndex]];
    }

    var hierarchicalRefinement =
      state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || '';
    // if refinement is 'beers > IPA > Flying dog',
    // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)

    var parentLevel = hierarchicalRefinement.split(separator).length - 1;
    return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
  },

  getSearchForFacetQuery: function (facetName, query, maxFacetHits, state) {
    var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName)
      ? state.clearRefinements(facetName)
      : state;
    var searchForFacetSearchParameters = {
      facetQuery: query,
      facetName: facetName,
    };
    if (typeof maxFacetHits === 'number') {
      searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
    }
    return sortObject(
      merge(
        {},
        requestBuilder._getHitsSearchParams(stateForSearchForFacetValues),
        searchForFacetSearchParameters
      )
    );
  },
};

module.exports = requestBuilder;


/***/ }),

/***/ 80032:
/***/ ((module) => {

"use strict";


module.exports = function isValidUserToken(userToken) {
  if (userToken === null) {
    return false;
  }
  return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
};


/***/ }),

/***/ 8348:
/***/ ((module) => {

"use strict";


module.exports = '3.14.0';


/***/ }),

/***/ 55296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_createConnector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79248);
/* harmony import */ var _core_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73240);


var highlight = function highlight(_ref) {
  var attribute = _ref.attribute,
    hit = _ref.hit,
    highlightProperty = _ref.highlightProperty,
    _ref$preTag = _ref.preTag,
    preTag = _ref$preTag === void 0 ? _core_highlight_js__WEBPACK_IMPORTED_MODULE_0__/* .HIGHLIGHT_TAGS */ ._.highlightPreTag : _ref$preTag,
    _ref$postTag = _ref.postTag,
    postTag = _ref$postTag === void 0 ? _core_highlight_js__WEBPACK_IMPORTED_MODULE_0__/* .HIGHLIGHT_TAGS */ ._.highlightPostTag : _ref$postTag;
  return (0,_core_highlight_js__WEBPACK_IMPORTED_MODULE_0__/* .parseAlgoliaHit */ .W)({
    attribute: attribute,
    highlightProperty: highlightProperty,
    hit: hit,
    preTag: preTag,
    postTag: postTag
  });
};

/**
 * connectHighlight connector provides the logic to create an highlighter
 * component that will retrieve, parse and render an highlighted attribute
 * from an Algolia hit.
 * @name connectHighlight
 * @kind connector
 * @category connector
 * @providedPropType {function} highlight - function to retrieve and parse an attribute from a hit. It takes a configuration object with 3 attributes: `highlightProperty` which is the property that contains the highlight structure from the records, `attribute` which is the name of the attribute (it can be either a string or an array of strings) to look for and `hit` which is the hit from Algolia. It returns an array of objects `{value: string, isHighlighted: boolean}`. If the element that corresponds to the attribute is an array of strings, it will return a nested array of objects.
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox, Hits, connectHighlight } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const CustomHighlight = connectHighlight(
 *   ({ highlight, attribute, hit, highlightProperty }) => {
 *     const highlights = highlight({
 *       highlightProperty: '_highlightResult',
 *       attribute,
 *       hit
 *     });
 *
 *     return highlights.map(part => part.isHighlighted ? (
 *       <mark>{part.value}</mark>
 *     ) : (
 *       <span>{part.value}</span>
 *     ));
 *   }
 * );
 *
 * const Hit = ({ hit }) => (
 *   <p>
 *     <CustomHighlight attribute="name" hit={hit} />
 *   </p>
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SearchBox defaultRefinement="pho" />
 *     <Hits hitComponent={Hit} />
 *   </InstantSearch>
 * );
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_core_createConnector_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c)({
  displayName: 'AlgoliaHighlighter',
  $$type: 'ais.highlighter',
  propTypes: {},
  getProvidedProps: function getProvidedProps() {
    return {
      highlight: highlight
    };
  }
}));

/***/ }),

/***/ 59296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S_: () => (/* binding */ InstantSearchConsumer),
/* harmony export */   eU: () => (/* binding */ InstantSearchProvider),
/* harmony export */   iZ: () => (/* binding */ IndexConsumer)
/* harmony export */ });
/* unused harmony exports instantSearchContext, IndexProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11504);

var instantSearchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  onInternalStateUpdate: function onInternalStateUpdate() {
    return undefined;
  },
  createHrefForState: function createHrefForState() {
    return '#';
  },
  onSearchForFacetValues: function onSearchForFacetValues() {
    return undefined;
  },
  onSearchStateChange: function onSearchStateChange() {
    return undefined;
  },
  onSearchParameters: function onSearchParameters() {
    return undefined;
  },
  store: {},
  widgetsManager: {},
  mainTargetedIndex: ''
});
var InstantSearchConsumer = instantSearchContext.Consumer,
  InstantSearchProvider = instantSearchContext.Provider;

var _createContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined),
  IndexConsumer = _createContext.Consumer,
  IndexProvider = _createContext.Provider;


/***/ }),

/***/ 79248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export createConnectorWithoutContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11504);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20448);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59296);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30932);
var _excluded = ["contextValue"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/**
 * Connectors are the HOC used to transform React components
 * into InstantSearch widgets.
 * In order to simplify the construction of such connectors
 * `createConnector` takes a description and transform it into
 * a connector.
 * @param {ConnectorDescription} connectorDesc the description of the connector
 * @return {Connector} a function that wraps a component into
 * an instantsearch connected one.
 */
function createConnectorWithoutContext(connectorDesc) {
  if (!connectorDesc.displayName) {
    throw new Error('`createConnector` requires you to provide a `displayName` property.');
  }
  var isWidget = typeof connectorDesc.getSearchParameters === 'function' || typeof connectorDesc.getMetadata === 'function' || typeof connectorDesc.transitionState === 'function';
  return function (Composed) {
    var additionalWidgetProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var Connector = /*#__PURE__*/function (_Component) {
      _inherits(Connector, _Component);
      var _super = _createSuper(Connector);
      function Connector(props) {
        var _this;
        _classCallCheck(this, Connector);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "unsubscribe", void 0);
        _defineProperty(_assertThisInitialized(_this), "unregisterWidget", void 0);
        _defineProperty(_assertThisInitialized(_this), "cleanupTimerRef", null);
        _defineProperty(_assertThisInitialized(_this), "isUnmounting", false);
        _defineProperty(_assertThisInitialized(_this), "state", {
          providedProps: _this.getProvidedProps(_this.props)
        });
        _defineProperty(_assertThisInitialized(_this), "refine", function () {
          var _ref;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this.props.contextValue.onInternalStateUpdate(
          // refine will always be defined here because the prop is only given conditionally
          (_ref = connectorDesc.refine).call.apply(_ref, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });
        _defineProperty(_assertThisInitialized(_this), "createURL", function () {
          var _ref2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _this.props.contextValue.createHrefForState(
          // refine will always be defined here because the prop is only given conditionally
          (_ref2 = connectorDesc.refine).call.apply(_ref2, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });
        _defineProperty(_assertThisInitialized(_this), "searchForFacetValues", function () {
          var _ref3;
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          _this.props.contextValue.onSearchForFacetValues(
          // searchForFacetValues will always be defined here because the prop is only given conditionally
          (_ref3 = connectorDesc.searchForFacetValues).call.apply(_ref3, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });
        if (connectorDesc.getSearchParameters) {
          _this.props.contextValue.onSearchParameters(connectorDesc.getSearchParameters.bind(_assertThisInitialized(_this)), {
            ais: _this.props.contextValue,
            multiIndexContext: _this.props.indexContextValue
          }, _this.props, connectorDesc.getMetadata && connectorDesc.getMetadata.bind(_assertThisInitialized(_this)), connectorDesc.displayName);
        }
        return _this;
      }
      _createClass(Connector, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;
          if (this.cleanupTimerRef) {
            clearTimeout(this.cleanupTimerRef);
            this.cleanupTimerRef = null;
          }
          this.unsubscribe = this.props.contextValue.store.subscribe(function () {
            if (!_this2.isUnmounting) {
              _this2.setState({
                providedProps: _this2.getProvidedProps(_this2.props)
              });
            }
          });
          if (isWidget) {
            this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this);
          }
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          if (typeof connectorDesc.shouldComponentUpdate === 'function') {
            return connectorDesc.shouldComponentUpdate.call(this, this.props, nextProps, this.state, nextState);
          }
          var propsEqual = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .shallowEqual */ .G)(this.props, nextProps);
          if (this.state.providedProps === null || nextState.providedProps === null) {
            if (this.state.providedProps === nextState.providedProps) {
              return !propsEqual;
            }
            return true;
          }
          return !propsEqual || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .shallowEqual */ .G)(this.state.providedProps, nextState.providedProps);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (!react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(prevProps, this.props)) {
            this.setState({
              providedProps: this.getProvidedProps(this.props)
            });
            if (isWidget) {
              this.props.contextValue.widgetsManager.update();
              if (typeof connectorDesc.transitionState === 'function') {
                this.props.contextValue.onSearchStateChange(connectorDesc.transitionState.call(this, this.props, this.props.contextValue.store.getState().widgets, this.props.contextValue.store.getState().widgets));
              }
            }
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this3 = this;
          this.cleanupTimerRef = setTimeout(function () {
            _this3.isUnmounting = true;
            if (_this3.unsubscribe) {
              _this3.unsubscribe();
            }
            if (_this3.unregisterWidget) {
              _this3.unregisterWidget();
              if (typeof connectorDesc.cleanUp === 'function') {
                var nextState = connectorDesc.cleanUp.call(_this3, _this3.props, _this3.props.contextValue.store.getState().widgets);
                _this3.props.contextValue.store.setState(_objectSpread(_objectSpread({}, _this3.props.contextValue.store.getState()), {}, {
                  widgets: nextState
                }));
                _this3.props.contextValue.onSearchStateChange((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .removeEmptyKey */ .wd)(nextState));
              }
            }
          });
        }
      }, {
        key: "getProvidedProps",
        value: function getProvidedProps(props) {
          var _this$props$contextVa = this.props.contextValue.store.getState(),
            widgets = _this$props$contextVa.widgets,
            results = _this$props$contextVa.results,
            resultsFacetValues = _this$props$contextVa.resultsFacetValues,
            searching = _this$props$contextVa.searching,
            searchingForFacetValues = _this$props$contextVa.searchingForFacetValues,
            isSearchStalled = _this$props$contextVa.isSearchStalled,
            metadata = _this$props$contextVa.metadata,
            error = _this$props$contextVa.error;
          var searchResults = {
            results: results,
            searching: searching,
            searchingForFacetValues: searchingForFacetValues,
            isSearchStalled: isSearchStalled,
            error: error
          };
          return connectorDesc.getProvidedProps.call(this, props, widgets, searchResults, metadata,
          // @MAJOR: move this attribute on the `searchResults` it doesn't
          // makes sense to have it into a separate argument. The search
          // flags are on the object why not the results?
          resultsFacetValues);
        }
      }, {
        key: "getSearchParameters",
        value: function getSearchParameters(searchParameters) {
          if (typeof connectorDesc.getSearchParameters === 'function') {
            return connectorDesc.getSearchParameters.call(this, searchParameters, this.props, this.props.contextValue.store.getState().widgets);
          }
          return null;
        }
      }, {
        key: "getMetadata",
        value: function getMetadata(nextWidgetsState) {
          if (typeof connectorDesc.getMetadata === 'function') {
            return connectorDesc.getMetadata.call(this, this.props, nextWidgetsState);
          }
          return {};
        }
      }, {
        key: "transitionState",
        value: function transitionState(prevWidgetsState, nextWidgetsState) {
          if (typeof connectorDesc.transitionState === 'function') {
            return connectorDesc.transitionState.call(this, this.props, prevWidgetsState, nextWidgetsState);
          }
          return nextWidgetsState;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            contextValue = _this$props.contextValue,
            props = _objectWithoutProperties(_this$props, _excluded);
          var providedProps = this.state.providedProps;
          if (providedProps === null) {
            return null;
          }
          var refineProps = typeof connectorDesc.refine === 'function' ? {
            refine: this.refine,
            createURL: this.createURL
          } : {};
          var searchForFacetValuesProps = typeof connectorDesc.searchForFacetValues === 'function' ? {
            searchForItems: this.searchForFacetValues
          } : {};
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Composed, _extends({}, props, providedProps, refineProps, searchForFacetValuesProps));
        }
      }]);
      return Connector;
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component);
    _defineProperty(Connector, "displayName", "".concat(connectorDesc.displayName, "(").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .getDisplayName */ .YP)(Composed), ")"));
    _defineProperty(Connector, "$$type", connectorDesc.$$type);
    _defineProperty(Connector, "$$widgetType", additionalWidgetProperties.$$widgetType);
    _defineProperty(Connector, "propTypes", connectorDesc.propTypes);
    _defineProperty(Connector, "defaultProps", connectorDesc.defaultProps);
    _defineProperty(Connector, "_connectorDesc", connectorDesc);
    return Connector;
  };
}
var createConnectorWithContext = function createConnectorWithContext(connectorDesc) {
  return function (Composed, additionalWidgetProperties) {
    var Connector = createConnectorWithoutContext(connectorDesc)(Composed, additionalWidgetProperties);
    var ConnectorWrapper = function ConnectorWrapper(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_js__WEBPACK_IMPORTED_MODULE_3__/* .InstantSearchConsumer */ .S_, null, function (contextValue) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_js__WEBPACK_IMPORTED_MODULE_3__/* .IndexConsumer */ .iZ, null, function (indexContextValue) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Connector, _extends({
            contextValue: contextValue,
            indexContextValue: indexContextValue
          }, props));
        });
      });
    };
    return ConnectorWrapper;
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createConnectorWithContext);

/***/ }),

/***/ 73240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ parseAlgoliaHit),
/* harmony export */   _: () => (/* binding */ HIGHLIGHT_TAGS)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30932);

var HIGHLIGHT_TAGS = {
  highlightPreTag: "<ais-highlight-0000000000>",
  highlightPostTag: "</ais-highlight-0000000000>"
};

/**
 * Parses an highlighted attribute into an array of objects with the string value, and
 * a boolean that indicated if this part is highlighted.
 *
 * @param {string} preTag - string used to identify the start of an highlighted value
 * @param {string} postTag - string used to identify the end of an highlighted value
 * @param {string} highlightedValue - highlighted attribute as returned by Algolia highlight feature
 * @return {object[]} - An array of {value: string, isHighlighted: boolean}.
 */
function parseHighlightedAttribute(_ref) {
  var preTag = _ref.preTag,
    postTag = _ref.postTag,
    _ref$highlightedValue = _ref.highlightedValue,
    highlightedValue = _ref$highlightedValue === void 0 ? '' : _ref$highlightedValue;
  var splitByPreTag = highlightedValue.split(preTag);
  var firstValue = splitByPreTag.shift();
  var elements = firstValue === '' ? [] : [{
    value: firstValue,
    isHighlighted: false
  }];
  if (postTag === preTag) {
    var isHighlighted = true;
    splitByPreTag.forEach(function (split) {
      elements.push({
        value: split,
        isHighlighted: isHighlighted
      });
      isHighlighted = !isHighlighted;
    });
  } else {
    splitByPreTag.forEach(function (split) {
      var splitByPostTag = split.split(postTag);
      elements.push({
        value: splitByPostTag[0],
        isHighlighted: true
      });
      if (splitByPostTag[1] !== '') {
        elements.push({
          value: splitByPostTag[1],
          isHighlighted: false
        });
      }
    });
  }
  return elements;
}

/**
 * Find an highlighted attribute given an `attribute` and an `highlightProperty`, parses it,
 * and provided an array of objects with the string value and a boolean if this
 * value is highlighted.
 *
 * In order to use this feature, highlight must be activated in the configuration of
 * the index. The `preTag` and `postTag` attributes are respectively highlightPreTag and
 * highlightPostTag in Algolia configuration.
 *
 * @param {string} preTag - string used to identify the start of an highlighted value
 * @param {string} postTag - string used to identify the end of an highlighted value
 * @param {string} highlightProperty - the property that contains the highlight structure in the results
 * @param {string} attribute - the highlighted attribute to look for
 * @param {object} hit - the actual hit returned by Algolia.
 * @return {object[]} - An array of {value: string, isHighlighted: boolean}.
 */
function parseAlgoliaHit(_ref2) {
  var _ref2$preTag = _ref2.preTag,
    preTag = _ref2$preTag === void 0 ? '<em>' : _ref2$preTag,
    _ref2$postTag = _ref2.postTag,
    postTag = _ref2$postTag === void 0 ? '</em>' : _ref2$postTag,
    highlightProperty = _ref2.highlightProperty,
    attribute = _ref2.attribute,
    hit = _ref2.hit;
  if (!hit) throw new Error('`hit`, the matching record, must be provided');
  var highlightObject = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyByPath */ .KS)(hit[highlightProperty], attribute) || {};
  if (Array.isArray(highlightObject)) {
    return highlightObject.map(function (item) {
      return parseHighlightedAttribute({
        preTag: preTag,
        postTag: postTag,
        highlightedValue: item.value
      });
    });
  }
  return parseHighlightedAttribute({
    preTag: preTag,
    postTag: postTag,
    highlightedValue: highlightObject.value
  });
}

/***/ }),

/***/ 97520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AP: () => (/* binding */ cleanUpValue),
/* harmony export */   Iv: () => (/* binding */ refineValue),
/* harmony export */   MZ: () => (/* binding */ hasMultipleIndices),
/* harmony export */   Y3: () => (/* binding */ getCurrentRefinementValue),
/* harmony export */   _W: () => (/* binding */ getIndexId),
/* harmony export */   yO: () => (/* binding */ getResults)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30932);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function getIndexId(context) {
  return hasMultipleIndices(context) ? context.multiIndexContext.targetedIndex : context.ais.mainTargetedIndex;
}

// eslint-disable-next-line valid-jsdoc
/**
 * @returns {import('algoliasearch-helper').SearchResults} results
 */
function getResults(searchResults, context) {
  if (searchResults.results) {
    if (searchResults.results.hits) {
      return searchResults.results;
    }
    var indexId = getIndexId(context);
    if (searchResults.results[indexId]) {
      return searchResults.results[indexId];
    }
  }
  return null;
}
function hasMultipleIndices(context) {
  return context && context.multiIndexContext;
}
function refineValue(searchState, nextRefinement, context, resetPage, namespace) {
  if (hasMultipleIndices(context)) {
    var indexId = getIndexId(context);
    return namespace ? refineMultiIndexWithNamespace(searchState, nextRefinement, indexId, resetPage, namespace) : refineMultiIndex(searchState, nextRefinement, indexId, resetPage);
  } else {
    // When we have a multi index page with shared widgets we should also
    // reset their page to 1 if the resetPage is provided. Otherwise the
    // indices will always be reset
    // see: https://github.com/algolia/react-instantsearch/issues/310
    // see: https://github.com/algolia/react-instantsearch/issues/637
    if (searchState.indices && resetPage) {
      Object.keys(searchState.indices).forEach(function (targetedIndex) {
        searchState = refineValue(searchState, {
          page: 1
        }, {
          multiIndexContext: {
            targetedIndex: targetedIndex
          }
        }, true, namespace);
      });
    }
    return namespace ? refineSingleIndexWithNamespace(searchState, nextRefinement, resetPage, namespace) : refineSingleIndex(searchState, nextRefinement, resetPage);
  }
}
function refineMultiIndex(searchState, nextRefinement, indexId, resetPage) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  var state = searchState.indices && searchState.indices[indexId] ? _objectSpread(_objectSpread({}, searchState.indices), {}, _defineProperty({}, indexId, _objectSpread(_objectSpread(_objectSpread({}, searchState.indices[indexId]), nextRefinement), page))) : _objectSpread(_objectSpread({}, searchState.indices), {}, _defineProperty({}, indexId, _objectSpread(_objectSpread({}, nextRefinement), page)));
  return _objectSpread(_objectSpread({}, searchState), {}, {
    indices: state
  });
}
function refineSingleIndex(searchState, nextRefinement, resetPage) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  return _objectSpread(_objectSpread(_objectSpread({}, searchState), nextRefinement), page);
}
function refineMultiIndexWithNamespace(searchState, nextRefinement, indexId, resetPage, namespace) {
  var _objectSpread4;
  var page = resetPage ? {
    page: 1
  } : undefined;
  var state = searchState.indices && searchState.indices[indexId] ? _objectSpread(_objectSpread({}, searchState.indices), {}, _defineProperty({}, indexId, _objectSpread(_objectSpread({}, searchState.indices[indexId]), {}, (_objectSpread4 = {}, _defineProperty(_objectSpread4, namespace, _objectSpread(_objectSpread({}, searchState.indices[indexId][namespace]), nextRefinement)), _defineProperty(_objectSpread4, "page", 1), _objectSpread4)))) : _objectSpread(_objectSpread({}, searchState.indices), {}, _defineProperty({}, indexId, _objectSpread(_defineProperty({}, namespace, nextRefinement), page)));
  return _objectSpread(_objectSpread({}, searchState), {}, {
    indices: state
  });
}
function refineSingleIndexWithNamespace(searchState, nextRefinement, resetPage, namespace) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  return _objectSpread(_objectSpread({}, searchState), {}, _defineProperty({}, namespace, _objectSpread(_objectSpread({}, searchState[namespace]), nextRefinement)), page);
}
function getNamespaceAndAttributeName(id) {
  var parts = id.match(/^([^.]*)\.(.*)/);
  var namespace = parts && parts[1];
  var attributeName = parts && parts[2];
  return {
    namespace: namespace,
    attributeName: attributeName
  };
}
function hasRefinements(_ref) {
  var multiIndex = _ref.multiIndex,
    indexId = _ref.indexId,
    namespace = _ref.namespace,
    attributeName = _ref.attributeName,
    id = _ref.id,
    searchState = _ref.searchState;
  if (multiIndex && namespace) {
    return searchState.indices && searchState.indices[indexId] && searchState.indices[indexId][namespace] && Object.hasOwnProperty.call(searchState.indices[indexId][namespace], attributeName);
  }
  if (multiIndex) {
    return searchState.indices && searchState.indices[indexId] && Object.hasOwnProperty.call(searchState.indices[indexId], id);
  }
  if (namespace) {
    return searchState[namespace] && Object.hasOwnProperty.call(searchState[namespace], attributeName);
  }
  return Object.hasOwnProperty.call(searchState, id);
}
function getRefinements(_ref2) {
  var multiIndex = _ref2.multiIndex,
    indexId = _ref2.indexId,
    namespace = _ref2.namespace,
    attributeName = _ref2.attributeName,
    id = _ref2.id,
    searchState = _ref2.searchState;
  if (multiIndex && namespace) {
    return searchState.indices[indexId][namespace][attributeName];
  }
  if (multiIndex) {
    return searchState.indices[indexId][id];
  }
  if (namespace) {
    return searchState[namespace][attributeName];
  }
  return searchState[id];
}
function getCurrentRefinementValue(props, searchState, context, id, defaultValue) {
  var indexId = getIndexId(context);
  var _getNamespaceAndAttri = getNamespaceAndAttributeName(id),
    namespace = _getNamespaceAndAttri.namespace,
    attributeName = _getNamespaceAndAttri.attributeName;
  var multiIndex = hasMultipleIndices(context);
  var args = {
    multiIndex: multiIndex,
    indexId: indexId,
    namespace: namespace,
    attributeName: attributeName,
    id: id,
    searchState: searchState
  };
  var hasRefinementsValue = hasRefinements(args);
  if (hasRefinementsValue) {
    return getRefinements(args);
  }
  if (props.defaultRefinement) {
    return props.defaultRefinement;
  }
  return defaultValue;
}
function cleanUpValue(searchState, context, id) {
  var indexId = getIndexId(context);
  var _getNamespaceAndAttri2 = getNamespaceAndAttributeName(id),
    namespace = _getNamespaceAndAttri2.namespace,
    attributeName = _getNamespaceAndAttri2.attributeName;
  if (hasMultipleIndices(context) && Boolean(searchState.indices)) {
    return cleanUpValueWithMultiIndex({
      attribute: attributeName,
      searchState: searchState,
      indexId: indexId,
      id: id,
      namespace: namespace
    });
  }
  return cleanUpValueWithSingleIndex({
    attribute: attributeName,
    searchState: searchState,
    id: id,
    namespace: namespace
  });
}
function cleanUpValueWithSingleIndex(_ref3) {
  var searchState = _ref3.searchState,
    id = _ref3.id,
    namespace = _ref3.namespace,
    attribute = _ref3.attribute;
  if (namespace) {
    return _objectSpread(_objectSpread({}, searchState), {}, _defineProperty({}, namespace, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .omit */ .qn)(searchState[namespace], [attribute])));
  }
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .omit */ .qn)(searchState, [id]);
}
function cleanUpValueWithMultiIndex(_ref4) {
  var searchState = _ref4.searchState,
    indexId = _ref4.indexId,
    id = _ref4.id,
    namespace = _ref4.namespace,
    attribute = _ref4.attribute;
  var indexSearchState = searchState.indices[indexId];
  if (namespace && indexSearchState) {
    return _objectSpread(_objectSpread({}, searchState), {}, {
      indices: _objectSpread(_objectSpread({}, searchState.indices), {}, _defineProperty({}, indexId, _objectSpread(_objectSpread({}, indexSearchState), {}, _defineProperty({}, namespace, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .omit */ .qn)(indexSearchState[namespace], [attribute])))))
    });
  }
  if (indexSearchState) {
    return _objectSpread(_objectSpread({}, searchState), {}, {
      indices: _objectSpread(_objectSpread({}, searchState.indices), {}, _defineProperty({}, indexId, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .omit */ .qn)(indexSearchState, [id])))
    });
  }
  return searchState;
}

/***/ }),

/***/ 61232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ translatable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11504);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var withKeysPropType = function withKeysPropType(keys) {
  return function (props, propName, componentName) {
    var prop = props[propName];
    if (prop) {
      // eslint-disable-next-line no-restricted-syntax
      for (var _i = 0, _Object$keys = Object.keys(prop); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        if (keys.indexOf(key) === -1) {
          return new Error("Unknown `".concat(propName, "` key `").concat(key, "`. Check the render method ") + "of `".concat(componentName, "`."));
        }
      }
    }
    return undefined;
  };
};
function translatable(defaultTranslations) {
  return function (Composed) {
    var Translatable = /*#__PURE__*/function (_Component) {
      _inherits(Translatable, _Component);
      var _super = _createSuper(Translatable);
      function Translatable() {
        var _this;
        _classCallCheck(this, Translatable);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "translate", function (key) {
          var translations = _this.props.translations;
          var translation = translations && translations.hasOwnProperty(key) ? translations[key] : defaultTranslations[key];
          if (typeof translation === 'function') {
            for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              params[_key2 - 1] = arguments[_key2];
            }
            return translation.apply(void 0, params);
          }
          return translation;
        });
        return _this;
      }
      _createClass(Translatable, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Composed, _extends({
            translate: this.translate
          }, this.props));
        }
      }]);
      return Translatable;
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component);
    var name = Composed.displayName || Composed.name || 'UnknownComponent';
    Translatable.displayName = "Translatable(".concat(name, ")");
    Translatable.propTypes = {
      translations: withKeysPropType(Object.keys(defaultTranslations))
    };
    return Translatable;
  };
}

/***/ }),

/***/ 30932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ shallowEqual),
/* harmony export */   KS: () => (/* binding */ getPropertyByPath),
/* harmony export */   Qv: () => (/* binding */ defer),
/* harmony export */   YP: () => (/* binding */ getDisplayName),
/* harmony export */   cz: () => (/* binding */ addQueryID),
/* harmony export */   qI: () => (/* binding */ addAbsolutePositions),
/* harmony export */   qn: () => (/* binding */ omit),
/* harmony export */   sv: () => (/* binding */ unescapeFacetValue),
/* harmony export */   wd: () => (/* binding */ removeEmptyKey)
/* harmony export */ });
/* unused harmony exports removeEmptyArraysFromObject, find, objectHasKeys, getObjectType */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// eslint-disable-next-line @typescript-eslint/unbound-method
var hasOwn = Object.prototype.hasOwnProperty;

// From https://github.com/reactjs/react-redux/blob/master/src/utils/shallowEqual.js
var shallowEqual = function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }
  return true;
};
var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'UnknownComponent';
};
var resolved = Promise.resolve();
var defer = function defer(f) {
  resolved.then(f);
};
var isPlainObject = function isPlainObject(value) {
  return _typeof(value) === 'object' && value !== null && !Array.isArray(value);
};
var removeEmptyKey = function removeEmptyKey(obj) {
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    if (!isPlainObject(value)) {
      return;
    }
    if (!objectHasKeys(value)) {
      delete obj[key];
    } else {
      removeEmptyKey(value);
    }
  });
  return obj;
};
var removeEmptyArraysFromObject = function removeEmptyArraysFromObject(obj) {
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    if (Array.isArray(value) && value.length === 0) {
      delete obj[key];
    }
  });
  return obj;
};
function addAbsolutePositions(hits, hitsPerPage, page) {
  return hits.map(function (hit, index) {
    return _objectSpread(_objectSpread({}, hit), {}, {
      __position: hitsPerPage * page + index + 1
    });
  });
}
function addQueryID(hits, queryID) {
  if (!queryID) {
    return hits;
  }
  return hits.map(function (hit) {
    return _objectSpread(_objectSpread({}, hit), {}, {
      __queryID: queryID
    });
  });
}
function find(array, comparator) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return array[i];
    }
  }
  return undefined;
}
function objectHasKeys(object) {
  return object && Object.keys(object).length > 0;
}

// https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
function omit(source, excluded) {
  if (source === null || source === undefined) {
    return {};
  }
  var target = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) {
      // eslint-disable-next-line no-continue
      continue;
    }
    target[key] = source[key];
  }
  return target;
}

/**
 * Retrieve the value at a path of the object:
 *
 * @example
 * getPropertyByPath(
 *   { test: { this: { function: [{ now: { everyone: true } }] } } },
 *   'test.this.function[0].now.everyone'
 * ); // true
 *
 * getPropertyByPath(
 *   { test: { this: { function: [{ now: { everyone: true } }] } } },
 *   ['test', 'this', 'function', 0, 'now', 'everyone']
 * ); // true
 *
 * @param object Source object to query
 * @param path either an array of properties, or a string form of the properties, separated by .
 */
var getPropertyByPath = function getPropertyByPath(object, path) {
  return (Array.isArray(path) ? path : path.replace(/\[(\d+)]/g, '.$1').split('.')).reduce(function (current, key) {
    return current ? current[key] : undefined;
  }, object);
};
function getObjectType(object) {
  return Object.prototype.toString.call(object).slice(8, -1);
}
function unescapeFacetValue(value) {
  return value.replace(/^\\-/, '-');
}

/***/ }),

/***/ 52080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ Configure)
});

// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createConnector.js
var createConnector = __webpack_require__(79248);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/indexUtils.js
var indexUtils = __webpack_require__(97520);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/utils.js
var utils = __webpack_require__(30932);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectConfigure.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "contextValue", "indexContextValue"],
  _excluded2 = ["children", "contextValue", "indexContextValue"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function getId() {
  return 'configure';
}
/* harmony default export */ const connectConfigure = ((0,createConnector/* default */.c)({
  displayName: 'AlgoliaConfigure',
  $$type: 'ais.configure',
  getProvidedProps: function getProvidedProps() {
    return {};
  },
  getSearchParameters: function getSearchParameters(searchParameters, props) {
    var children = props.children,
      contextValue = props.contextValue,
      indexContextValue = props.indexContextValue,
      items = _objectWithoutProperties(props, _excluded);
    return searchParameters.setQueryParameters(items);
  },
  transitionState: function transitionState(props, prevSearchState, nextSearchState) {
    var id = getId();
    var children = props.children,
      contextValue = props.contextValue,
      indexContextValue = props.indexContextValue,
      items = _objectWithoutProperties(props, _excluded2);
    var propKeys = Object.keys(props);
    var nonPresentKeys = this._props ? Object.keys(this._props).filter(function (prop) {
      return propKeys.indexOf(prop) === -1;
    }) : [];
    this._props = props;
    var nextValue = _defineProperty({}, id, _objectSpread(_objectSpread({}, (0,utils/* omit */.qn)(nextSearchState[id], nonPresentKeys)), items));
    return (0,indexUtils/* refineValue */.Iv)(nextSearchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    var id = getId();
    var indexId = (0,indexUtils/* getIndexId */._W)({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var subState = (0,indexUtils/* hasMultipleIndices */.MZ)({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }) && searchState.indices ? searchState.indices[indexId] : searchState;
    var configureKeys = subState && subState[id] ? Object.keys(subState[id]) : [];
    var configureState = configureKeys.reduce(function (acc, item) {
      if (!props[item]) {
        acc[item] = subState[id][item];
      }
      return acc;
    }, {});
    var nextValue = _defineProperty({}, id, configureState);
    return (0,indexUtils/* refineValue */.Iv)(searchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  }
}));
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/widgets/Configure.js


/**
 * Configure is a widget that lets you provide raw search parameters
 * to the Algolia API.
 *
 * Any of the props added to this widget will be forwarded to Algolia. For more information
 * on the different parameters that can be set, have a look at the
 * [reference](https://www.algolia.com/doc/api-client/javascript/search#search-parameters).
 *
 * This widget can be used either with react-dom and react-native. It will not render anything
 * on screen, only configure some parameters.
 *
 * Read more in the [Search parameters](guide/Search_parameters.html) guide.
 * @name Configure
 * @kind widget
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Configure, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Configure hitsPerPage={5} />
 *     <Hits />
 *   </InstantSearch>
 * );
 */

/* harmony default export */ const Configure = (connectConfigure(function Configure() {
  return null;
}, {
  $$widgetType: 'ais.configure'
}));

/***/ }),

/***/ 24096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ widgets_InstantSearch)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3268);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(20448);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/context.js
var context = __webpack_require__(59296);
// EXTERNAL MODULE: ./node_modules/algoliasearch-helper/index.js
var algoliasearch_helper = __webpack_require__(49380);
var algoliasearch_helper_default = /*#__PURE__*/__webpack_require__.n(algoliasearch_helper);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createStore.js
function createStore(initialState) {
  var state = initialState;
  var listeners = [];
  return {
    getState: function getState() {
      return state;
    },
    setState: function setState(nextState) {
      state = nextState;
      listeners.forEach(function (listener) {
        return listener();
      });
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);
      return function unsubscribe() {
        listeners.splice(listeners.indexOf(listener), 1);
      };
    }
  };
}
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/utils.js
var utils = __webpack_require__(30932);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createWidgetsManager.js

function createWidgetsManager(onWidgetsUpdate) {
  var widgets = [];
  // Is an update scheduled?
  var scheduled = false;

  // The state manager's updates need to be batched since more than one
  // component can register or unregister widgets during the same tick.
  function scheduleUpdate() {
    if (scheduled) {
      return;
    }
    scheduled = true;
    (0,utils/* defer */.Qv)(function () {
      scheduled = false;
      onWidgetsUpdate();
    });
  }
  return {
    registerWidget: function registerWidget(widget) {
      widgets.push(widget);
      scheduleUpdate();
      return function unregisterWidget() {
        widgets.splice(widgets.indexOf(widget), 1);
        scheduleUpdate();
      };
    },
    update: scheduleUpdate,
    getWidgets: function getWidgets() {
      return widgets;
    }
  };
}
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/highlight.js
var highlight = __webpack_require__(73240);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/indexUtils.js
var indexUtils = __webpack_require__(97520);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/version.js
/* harmony default export */ const version = ('6.40.4');
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createInstantSearchManager.js
var _excluded = ["resultsFacetValues"],
  _excluded2 = ["resultsFacetValues"],
  _excluded3 = ["resultsFacetValues"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







function addAlgoliaAgents(searchClient) {
  if (typeof searchClient.addAlgoliaAgent === 'function') {
    searchClient.addAlgoliaAgent("react (".concat(react.version, ")"));
    searchClient.addAlgoliaAgent("react-instantsearch (".concat(version, ")"));
  }
}
var isMultiIndexContext = function isMultiIndexContext(widget) {
  return (0,indexUtils/* hasMultipleIndices */.MZ)({
    ais: widget.props.contextValue,
    multiIndexContext: widget.props.indexContextValue
  });
};
var isTargetedIndexEqualIndex = function isTargetedIndexEqualIndex(widget, indexId) {
  return widget.props.indexContextValue.targetedIndex === indexId;
};

// Relying on the `indexId` is a bit brittle to detect the `Index` widget.
// Since it's a class we could rely on `instanceof` or similar. We never
// had an issue though. Works for now.
var isIndexWidget = function isIndexWidget(widget) {
  return Boolean(widget.props.indexId);
};
var isIndexWidgetEqualIndex = function isIndexWidgetEqualIndex(widget, indexId) {
  return widget.props.indexId === indexId;
};
var sortIndexWidgetsFirst = function sortIndexWidgetsFirst(firstWidget, secondWidget) {
  var isFirstWidgetIndex = isIndexWidget(firstWidget);
  var isSecondWidgetIndex = isIndexWidget(secondWidget);
  if (isFirstWidgetIndex && !isSecondWidgetIndex) {
    return -1;
  }
  if (!isFirstWidgetIndex && isSecondWidgetIndex) {
    return 1;
  }
  return 0;
};

// This function is copied from the algoliasearch v4 API Client. If modified,
// consider updating it also in `serializeQueryParameters` from `@algolia/transporter`.
function serializeQueryParameters(parameters) {
  var isObjectOrArray = function isObjectOrArray(value) {
    return Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]';
  };
  var encode = function encode(format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var i = 0;
    return format.replace(/%s/g, function () {
      return encodeURIComponent(args[i++]);
    });
  };
  return Object.keys(parameters).map(function (key) {
    return encode('%s=%s', key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key]);
  }).join('&');
}

/**
 * Creates a new instance of the InstantSearchManager which controls the widgets and
 * trigger the search when the widgets are updated.
 * @param {string} indexName - the main index name
 * @param {object} initialState - initial widget state
 * @param {object} SearchParameters - optional additional parameters to send to the algolia API
 * @param {number} stalledSearchDelay - time (in ms) after the search is stalled
 * @return {InstantSearchManager} a new instance of InstantSearchManager
 */
function createInstantSearchManager(_ref) {
  var indexName = _ref.indexName,
    _ref$initialState = _ref.initialState,
    initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
    searchClient = _ref.searchClient,
    resultsState = _ref.resultsState,
    stalledSearchDelay = _ref.stalledSearchDelay;
  var helper = algoliasearch_helper_default()(searchClient, indexName, _objectSpread({}, highlight/* HIGHLIGHT_TAGS */._));
  addAlgoliaAgents(searchClient);
  helper.on('search', handleNewSearch).on('result', handleSearchSuccess({
    indexId: indexName
  })).on('error', handleSearchError);
  var skip = false;
  var stalledSearchTimer = null;
  var initialSearchParameters = helper.state;
  var searchCounter;
  var widgetsManager = createWidgetsManager(onWidgetsUpdate);
  hydrateSearchClient(searchClient, resultsState);
  var store = createStore({
    widgets: initialState,
    metadata: hydrateMetadata(resultsState),
    results: hydrateResultsState(resultsState),
    error: null,
    searching: false,
    isSearchStalled: true,
    searchingForFacetValues: false
  });
  function skipSearch() {
    skip = true;
  }
  function updateClient(client) {
    addAlgoliaAgents(client);
    helper.setClient(client);
    search();
  }
  function clearCache() {
    helper.clearCache();
    search();
  }
  function getMetadata(state) {
    return widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getMetadata);
    }).map(function (widget) {
      return widget.getMetadata(state);
    });
  }
  function getSearchParameters() {
    var sharedParameters = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      return !isMultiIndexContext(widget) && !isIndexWidget(widget);
    }).reduce(function (res, widget) {
      return widget.getSearchParameters(res);
    }, initialSearchParameters);
    var mainParameters = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      var targetedIndexEqualMainIndex = isMultiIndexContext(widget) && isTargetedIndexEqualIndex(widget, indexName);
      var subIndexEqualMainIndex = isIndexWidget(widget) && isIndexWidgetEqualIndex(widget, indexName);
      return targetedIndexEqualMainIndex || subIndexEqualMainIndex;
    })
    // We have to sort the `Index` widgets first so the `index` parameter
    // is correctly set in the `reduce` function for the following widgets
    .sort(sortIndexWidgetsFirst).reduce(function (res, widget) {
      return widget.getSearchParameters(res);
    }, sharedParameters);
    var derivedIndices = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      var targetedIndexNotEqualMainIndex = isMultiIndexContext(widget) && !isTargetedIndexEqualIndex(widget, indexName);
      var subIndexNotEqualMainIndex = isIndexWidget(widget) && !isIndexWidgetEqualIndex(widget, indexName);
      return targetedIndexNotEqualMainIndex || subIndexNotEqualMainIndex;
    })
    // We have to sort the `Index` widgets first so the `index` parameter
    // is correctly set in the `reduce` function for the following widgets
    .sort(sortIndexWidgetsFirst).reduce(function (indices, widget) {
      var indexId = isMultiIndexContext(widget) ? widget.props.indexContextValue.targetedIndex : widget.props.indexId;
      var widgets = indices[indexId] || [];
      return _objectSpread(_objectSpread({}, indices), {}, _defineProperty({}, indexId, widgets.concat(widget)));
    }, {});
    var derivedParameters = Object.keys(derivedIndices).map(function (indexId) {
      return {
        parameters: derivedIndices[indexId].reduce(function (res, widget) {
          return widget.getSearchParameters(res);
        }, sharedParameters),
        indexId: indexId
      };
    });
    return {
      mainParameters: mainParameters,
      derivedParameters: derivedParameters
    };
  }
  function search() {
    if (!skip) {
      var _getSearchParameters = getSearchParameters(helper.state),
        mainParameters = _getSearchParameters.mainParameters,
        derivedParameters = _getSearchParameters.derivedParameters;
      searchCounter = derivedParameters.length + 1;

      // We have to call `slice` because the method `detach` on the derived
      // helpers mutates the value `derivedHelpers`. The `forEach` loop does
      // not iterate on each value and we're not able to correctly clear the
      // previous derived helpers (memory leak + useless requests).
      helper.derivedHelpers.slice().forEach(function (derivedHelper) {
        // Since we detach the derived helpers on **every** new search they
        // won't receive intermediate results in case of a stalled search.
        // Only the last result is dispatched by the derived helper because
        // they are not detached yet:
        //
        // - a -> main helper receives results
        // - ap -> main helper receives results
        // - app -> main helper + derived helpers receive results
        //
        // The quick fix is to avoid to detach them on search but only once they
        // received the results. But it means that in case of a stalled search
        // all the derived helpers not detached yet register a new search inside
        // the helper. The number grows fast in case of a bad network and it's
        // not deterministic.
        derivedHelper.detach();
      });
      derivedParameters.forEach(function (_ref2) {
        var indexId = _ref2.indexId,
          parameters = _ref2.parameters;
        var derivedHelper = helper.derive(function () {
          return parameters;
        });
        derivedHelper.on('result', handleSearchSuccess({
          indexId: indexId
        })).on('error', handleSearchError);
      });
      helper.setState(mainParameters);
      helper.search();
    }
  }
  function handleSearchSuccess(_ref3) {
    var indexId = _ref3.indexId;
    return function (event) {
      searchCounter--;
      var state = store.getState();
      var isDerivedHelpersEmpty = !helper.derivedHelpers.length;
      var results = state.results ? state.results : {};

      // Switching from mono index to multi index and vice versa must reset the
      // results to an empty object, otherwise we keep reference of stalled and
      // unused results.
      results = !isDerivedHelpersEmpty && results.getFacetByName ? {} : results;
      if (!isDerivedHelpersEmpty) {
        results = _objectSpread(_objectSpread({}, results), {}, _defineProperty({}, indexId, event.results));
      } else {
        results = event.results;
      }
      var currentState = store.getState();
      var nextIsSearchStalled = currentState.isSearchStalled;
      if (!helper.hasPendingRequests()) {
        clearTimeout(stalledSearchTimer);
        stalledSearchTimer = null;
        nextIsSearchStalled = false;
      }
      var resultsFacetValues = currentState.resultsFacetValues,
        partialState = _objectWithoutProperties(currentState, _excluded);
      store.setState(_objectSpread(_objectSpread({}, partialState), {}, {
        results: results,
        isSearchStalled: nextIsSearchStalled,
        searching: searchCounter > 0,
        error: null
      }));
    };
  }
  function handleSearchError(_ref4) {
    var error = _ref4.error;
    var currentState = store.getState();
    var nextIsSearchStalled = currentState.isSearchStalled;
    if (!helper.hasPendingRequests()) {
      clearTimeout(stalledSearchTimer);
      nextIsSearchStalled = false;
    }
    var resultsFacetValues = currentState.resultsFacetValues,
      partialState = _objectWithoutProperties(currentState, _excluded2);
    store.setState(_objectSpread(_objectSpread({}, partialState), {}, {
      isSearchStalled: nextIsSearchStalled,
      error: error,
      searching: false
    }));
  }
  function handleNewSearch() {
    if (!stalledSearchTimer) {
      stalledSearchTimer = setTimeout(function () {
        var _store$getState = store.getState(),
          resultsFacetValues = _store$getState.resultsFacetValues,
          partialState = _objectWithoutProperties(_store$getState, _excluded3);
        store.setState(_objectSpread(_objectSpread({}, partialState), {}, {
          isSearchStalled: true
        }));
      }, stalledSearchDelay);
    }
  }
  function hydrateSearchClient(client, results) {
    if (!results) {
      return;
    }

    // Disable cache hydration on:
    // - Algoliasearch API Client < v4 with cache disabled
    // - Third party clients (detected by the `addAlgoliaAgent` function missing)

    if ((!client.transporter || client._cacheHydrated) && (!client._useCache || typeof client.addAlgoliaAgent !== 'function')) {
      return;
    }

    // Algoliasearch API Client >= v4
    // To hydrate the client we need to populate the cache with the data from
    // the server (done in `hydrateSearchClientWithMultiIndexRequest` or
    // `hydrateSearchClientWithSingleIndexRequest`). But since there is no way
    // for us to compute the key the same way as `algoliasearch-client` we need
    // to populate it on a custom key and override the `search` method to
    // search on it first.
    if (client.transporter && !client._cacheHydrated) {
      client._cacheHydrated = true;
      var baseMethod = client.search;
      client.search = function (requests) {
        for (var _len2 = arguments.length, methodArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          methodArgs[_key2 - 1] = arguments[_key2];
        }
        var requestsWithSerializedParams = requests.map(function (request) {
          return _objectSpread(_objectSpread({}, request), {}, {
            params: serializeQueryParameters(request.params)
          });
        });
        return client.transporter.responsesCache.get({
          method: 'search',
          args: [requestsWithSerializedParams].concat(methodArgs)
        }, function () {
          return baseMethod.apply(void 0, [requests].concat(methodArgs));
        });
      };
    }
    if (Array.isArray(results.results)) {
      hydrateSearchClientWithMultiIndexRequest(client, results.results);
      return;
    }
    hydrateSearchClientWithSingleIndexRequest(client, results);
  }
  function hydrateSearchClientWithMultiIndexRequest(client, results) {
    // Algoliasearch API Client >= v4
    // Populate the cache with the data from the server
    if (client.transporter) {
      client.transporter.responsesCache.set({
        method: 'search',
        args: [results.reduce(function (acc, result) {
          return acc.concat(result.rawResults.map(function (request) {
            return {
              indexName: request.index,
              params: request.params
            };
          }));
        }, [])]
      }, {
        results: results.reduce(function (acc, result) {
          return acc.concat(result.rawResults);
        }, [])
      });
      return;
    }

    // Algoliasearch API Client < v4
    // Prior to client v4 we didn't have a proper API to hydrate the client
    // cache from the outside. The following code populates the cache with
    // a single-index result. You can find more information about the
    // computation of the key inside the client (see link below).
    // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240
    var key = "/1/indexes/*/queries_body_".concat(JSON.stringify({
      requests: results.reduce(function (acc, result) {
        return acc.concat(result.rawResults.map(function (request) {
          return {
            indexName: request.index,
            params: request.params
          };
        }));
      }, [])
    }));
    client.cache = _objectSpread(_objectSpread({}, client.cache), {}, _defineProperty({}, key, JSON.stringify({
      results: results.reduce(function (acc, result) {
        return acc.concat(result.rawResults);
      }, [])
    })));
  }
  function hydrateSearchClientWithSingleIndexRequest(client, results) {
    // Algoliasearch API Client >= v4
    // Populate the cache with the data from the server
    if (client.transporter) {
      client.transporter.responsesCache.set({
        method: 'search',
        args: [results.rawResults.map(function (request) {
          return {
            indexName: request.index,
            params: request.params
          };
        })]
      }, {
        results: results.rawResults
      });
      return;
    }
    // Algoliasearch API Client < v4
    // Prior to client v4 we didn't have a proper API to hydrate the client
    // cache from the outside. The following code populates the cache with
    // a single-index result. You can find more information about the
    // computation of the key inside the client (see link below).
    // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240
    var key = "/1/indexes/*/queries_body_".concat(JSON.stringify({
      requests: results.rawResults.map(function (request) {
        return {
          indexName: request.index,
          params: request.params
        };
      })
    }));
    client.cache = _objectSpread(_objectSpread({}, client.cache), {}, _defineProperty({}, key, JSON.stringify({
      results: results.rawResults
    })));
  }
  function hydrateResultsState(results) {
    if (!results) {
      return null;
    }
    if (Array.isArray(results.results)) {
      return results.results.reduce(function (acc, result) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, result._internalIndexId, new (algoliasearch_helper_default()).SearchResults(new (algoliasearch_helper_default()).SearchParameters(result.state), result.rawResults)));
      }, {});
    }
    return new (algoliasearch_helper_default()).SearchResults(new (algoliasearch_helper_default()).SearchParameters(results.state), results.rawResults);
  }

  // Called whenever a widget has been rendered with new props.
  function onWidgetsUpdate() {
    var metadata = getMetadata(store.getState().widgets);
    store.setState(_objectSpread(_objectSpread({}, store.getState()), {}, {
      metadata: metadata,
      searching: true
    }));

    // Since the `getSearchParameters` method of widgets also depends on props,
    // the result search parameters might have changed.
    search();
  }
  function transitionState(nextSearchState) {
    var searchState = store.getState().widgets;
    return widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.transitionState);
    }).reduce(function (res, widget) {
      return widget.transitionState(searchState, res);
    }, nextSearchState);
  }
  function onExternalStateUpdate(nextSearchState) {
    var metadata = getMetadata(nextSearchState);
    store.setState(_objectSpread(_objectSpread({}, store.getState()), {}, {
      widgets: nextSearchState,
      metadata: metadata,
      searching: true
    }));
    search();
  }
  function onSearchForFacetValues(_ref5) {
    var facetName = _ref5.facetName,
      query = _ref5.query,
      _ref5$maxFacetHits = _ref5.maxFacetHits,
      maxFacetHits = _ref5$maxFacetHits === void 0 ? 10 : _ref5$maxFacetHits;
    // The values 1, 100 are the min / max values that the engine accepts.
    // see: https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits
    var maxFacetHitsWithinRange = Math.max(1, Math.min(maxFacetHits, 100));
    store.setState(_objectSpread(_objectSpread({}, store.getState()), {}, {
      searchingForFacetValues: true
    }));
    helper.searchForFacetValues(facetName, query, maxFacetHitsWithinRange).then(function (content) {
      var _objectSpread7;
      store.setState(_objectSpread(_objectSpread({}, store.getState()), {}, {
        error: null,
        searchingForFacetValues: false,
        resultsFacetValues: _objectSpread(_objectSpread({}, store.getState().resultsFacetValues), {}, (_objectSpread7 = {}, _defineProperty(_objectSpread7, facetName, content.facetHits), _defineProperty(_objectSpread7, "query", query), _objectSpread7))
      }));
    }, function (error) {
      store.setState(_objectSpread(_objectSpread({}, store.getState()), {}, {
        searchingForFacetValues: false,
        error: error
      }));
    }).catch(function (error) {
      // Since setState is synchronous, any error that occurs in the render of a
      // component will be swallowed by this promise.
      // This is a trick to make the error show up correctly in the console.
      // See http://stackoverflow.com/a/30741722/969302
      setTimeout(function () {
        throw error;
      });
    });
  }
  function updateIndex(newIndex) {
    initialSearchParameters = initialSearchParameters.setIndex(newIndex);
    // No need to trigger a new search here as the widgets will also update and trigger it if needed.
  }

  function getWidgetsIds() {
    return store.getState().metadata.reduce(function (res, meta) {
      return typeof meta.id !== 'undefined' ? res.concat(meta.id) : res;
    }, []);
  }
  return {
    store: store,
    widgetsManager: widgetsManager,
    getWidgetsIds: getWidgetsIds,
    getSearchParameters: getSearchParameters,
    onSearchForFacetValues: onSearchForFacetValues,
    onExternalStateUpdate: onExternalStateUpdate,
    transitionState: transitionState,
    updateClient: updateClient,
    updateIndex: updateIndex,
    clearCache: clearCache,
    skipSearch: skipSearch
  };
}
function hydrateMetadata(resultsState) {
  if (!resultsState) {
    return [];
  }

  // add a value noop, which gets replaced once the widgets are mounted
  return resultsState.metadata.map(function (datum) {
    return _objectSpread(_objectSpread({
      value: function value() {
        return {};
      }
    }, datum), {}, {
      items: datum.items && datum.items.map(function (item) {
        return _objectSpread(_objectSpread({
          value: function value() {
            return {};
          }
        }, item), {}, {
          items: item.items && item.items.map(function (nestedItem) {
            return _objectSpread({
              value: function value() {
                return {};
              }
            }, nestedItem);
          })
        });
      })
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/metadata.js
function metadata_typeof(obj) { "@babel/helpers - typeof"; return metadata_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, metadata_typeof(obj); }
function isMetadataEnabled() {
  return (typeof window === "undefined" ? "undefined" : metadata_typeof(window)) === 'object' && metadata_typeof(window.navigator) === 'object' && typeof window.navigator.userAgent === 'string' && window.navigator.userAgent.includes('Algolia Crawler') && metadata_typeof(window.document) === 'object';
}
function getMetadataPayload(widgets, searchClient) {
  var internalProps = ['contextValue', 'indexContextValue'];
  var widgetsPayload = widgets.map(function (_ref) {
    var props = _ref.props,
      constructor = _ref.constructor;
    var _ref2 = constructor._connectorDesc || {},
      _ref2$defaultProps = _ref2.defaultProps,
      defaultProps = _ref2$defaultProps === void 0 ? {} : _ref2$defaultProps,
      _ref2$displayName = _ref2.displayName,
      displayName = _ref2$displayName === void 0 ? constructor.displayName : _ref2$displayName;
    return {
      displayName: displayName,
      $$type: constructor.$$type,
      $$widgetType: constructor.$$widgetType,
      params: Object.keys(props).filter(function (prop) {
        return !internalProps.includes(prop) && defaultProps[prop] !== props[prop] && props[prop] !== undefined;
      })
    };
  });
  var client = searchClient;
  var ua = client.transporter && client.transporter.userAgent ? client.transporter.userAgent.value : client._ua;
  return {
    ua: ua,
    widgets: widgetsPayload
  };
}
function injectMetadata(widgets, searchClient) {
  var payloadContainer = document.createElement('meta');
  var refNode = document.querySelector('head');
  payloadContainer.name = 'algolia:metadata';
  var payload = getMetadataPayload(widgets, searchClient);
  payloadContainer.content = JSON.stringify(payload);
  refNode.appendChild(payloadContainer);
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/widgets/InstantSearch.js
function InstantSearch_typeof(obj) { "@babel/helpers - typeof"; return InstantSearch_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, InstantSearch_typeof(obj); }
function InstantSearch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function InstantSearch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? InstantSearch_ownKeys(Object(source), !0).forEach(function (key) { InstantSearch_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : InstantSearch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, InstantSearch_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (InstantSearch_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function InstantSearch_defineProperty(obj, key, value) { key = InstantSearch_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function InstantSearch_toPropertyKey(arg) { var key = InstantSearch_toPrimitive(arg, "string"); return InstantSearch_typeof(key) === "symbol" ? key : String(key); }
function InstantSearch_toPrimitive(input, hint) { if (InstantSearch_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (InstantSearch_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






function isControlled(props) {
  return Boolean(props.searchState);
}

/**
 * @description
 * `<InstantSearch>` is the root component of all React InstantSearch implementations.
 * It provides all the connected components (aka widgets) a means to interact
 * with the searchState.
 * @kind widget
 * @name <InstantSearch>
 * @requirements You will need to have an Algolia account to be able to use this widget.
 * [Create one now](https://www.algolia.com/users/sign_up).
 * @propType {string} indexName - Main index in which to search.
 * @propType {boolean} [refresh=false] - Flag to activate when the cache needs to be cleared so that the front-end is updated when a change occurs in the index.
 * @propType {object} [searchClient] - Provide a custom search client.
 * @propType {func} [onSearchStateChange] - Function to be called everytime a new search is done. Useful for [URL Routing](guide/Routing.html).
 * @propType {object} [searchState] - Object to inject some search state. Switches the InstantSearch component in controlled mode. Useful for [URL Routing](guide/Routing.html).
 * @propType {func} [createURL] - Function to call when creating links, useful for [URL Routing](guide/Routing.html).
 * @propType {SearchResults|SearchResults[]} [resultsState] - Use this to inject the results that will be used at first rendering. Those results are found by using the `findResultsState` function. Useful for [Server Side Rendering](guide/Server-side_rendering.html).
 * @propType {number} [stalledSearchDelay=200] - The amount of time before considering that the search takes too much time. The time is expressed in milliseconds.
 * @propType {{ Root: string|function, props: object }} [root] - Use this to customize the root element. Default value: `{ Root: 'div' }`
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SearchBox />
 *     <Hits />
 *   </InstantSearch>
 * );
 */
var InstantSearch = /*#__PURE__*/function (_Component) {
  _inherits(InstantSearch, _Component);
  var _super = _createSuper(InstantSearch);
  function InstantSearch(props) {
    var _this;
    _classCallCheck(this, InstantSearch);
    _this = _super.call(this, props);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "cleanupTimerRef", null);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "isUnmounting", false);
    var instantSearchManager = createInstantSearchManager({
      indexName: _this.props.indexName,
      searchClient: _this.props.searchClient,
      initialState: _this.props.searchState || {},
      resultsState: _this.props.resultsState,
      stalledSearchDelay: _this.props.stalledSearchDelay
    });
    var contextValue = {
      store: instantSearchManager.store,
      widgetsManager: instantSearchManager.widgetsManager,
      mainTargetedIndex: _this.props.indexName,
      onInternalStateUpdate: _this.onWidgetsInternalStateUpdate.bind(_assertThisInitialized(_this)),
      createHrefForState: _this.createHrefForState.bind(_assertThisInitialized(_this)),
      onSearchForFacetValues: _this.onSearchForFacetValues.bind(_assertThisInitialized(_this)),
      onSearchStateChange: _this.onSearchStateChange.bind(_assertThisInitialized(_this)),
      onSearchParameters: _this.onSearchParameters.bind(_assertThisInitialized(_this))
    };
    _this.state = {
      isControlled: isControlled(_this.props),
      instantSearchManager: instantSearchManager,
      contextValue: contextValue
    };
    return _this;
  }
  _createClass(InstantSearch, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevIsControlled = isControlled(prevProps);
      if (prevIsControlled && !this.state.isControlled) {
        throw new Error("You can't switch <InstantSearch> from being controlled to uncontrolled");
      }
      if (!prevIsControlled && this.state.isControlled) {
        throw new Error("You can't switch <InstantSearch> from being uncontrolled to controlled");
      }
      if (this.props.refresh !== prevProps.refresh && this.props.refresh) {
        this.state.instantSearchManager.clearCache();
      }
      if (prevProps.indexName !== this.props.indexName) {
        this.state.instantSearchManager.updateIndex(this.props.indexName);
      }
      if (prevProps.searchClient !== this.props.searchClient) {
        this.state.instantSearchManager.updateClient(this.props.searchClient);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.cleanupTimerRef) {
        clearTimeout(this.cleanupTimerRef);
        this.cleanupTimerRef = null;
      }
      if (isMetadataEnabled()) {
        injectMetadata(this.state.instantSearchManager.widgetsManager.getWidgets(), this.props.searchClient);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;
      this.cleanupTimerRef = setTimeout(function () {
        _this2.isUnmounting = true;
        _this2.state.instantSearchManager.skipSearch();
      });
    }
  }, {
    key: "createHrefForState",
    value: function createHrefForState(searchState) {
      searchState = this.state.instantSearchManager.transitionState(searchState);
      return this.state.isControlled && this.props.createURL ? this.props.createURL(searchState, this.getKnownKeys()) : '#';
    }
  }, {
    key: "onWidgetsInternalStateUpdate",
    value: function onWidgetsInternalStateUpdate(searchState) {
      searchState = this.state.instantSearchManager.transitionState(searchState);
      this.onSearchStateChange(searchState);
      if (!this.state.isControlled) {
        this.state.instantSearchManager.onExternalStateUpdate(searchState);
      }
    }
  }, {
    key: "onSearchStateChange",
    value: function onSearchStateChange(searchState) {
      if (this.props.onSearchStateChange && !this.isUnmounting) {
        this.props.onSearchStateChange(searchState);
      }
    }
  }, {
    key: "onSearchParameters",
    value: function onSearchParameters(getSearchParameters, context, props, getMetadata, displayName) {
      if (this.props.onSearchParameters) {
        var _searchState = this.props.searchState ? this.props.searchState : {};
        this.props.onSearchParameters(getSearchParameters, context, props, _searchState);
      }
      if (this.props.widgetsCollector) {
        var _searchState2 = this.props.searchState ? this.props.searchState : {};
        this.props.widgetsCollector({
          getSearchParameters: getSearchParameters,
          getMetadata: getMetadata,
          context: context,
          props: props,
          searchState: _searchState2,
          displayName: displayName
        });
      }
    }
  }, {
    key: "onSearchForFacetValues",
    value: function onSearchForFacetValues(searchState) {
      this.state.instantSearchManager.onSearchForFacetValues(searchState);
    }
  }, {
    key: "getKnownKeys",
    value: function getKnownKeys() {
      return this.state.instantSearchManager.getWidgetsIds();
    }
  }, {
    key: "render",
    value: function render() {
      if (react.Children.count(this.props.children) === 0) {
        return null;
      }
      return /*#__PURE__*/react.createElement(context/* InstantSearchProvider */.eU, {
        value: this.state.contextValue
      }, this.props.children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextIsControlled = isControlled(nextProps);
      var previousSearchState = prevState.instantSearchManager.store.getState().widgets;
      var nextSearchState = nextProps.searchState;
      if (nextIsControlled && !react_fast_compare_default()(previousSearchState, nextSearchState)) {
        prevState.instantSearchManager.onExternalStateUpdate(nextProps.searchState);
      }
      return {
        isControlled: nextIsControlled,
        contextValue: InstantSearch_objectSpread(InstantSearch_objectSpread({}, prevState.contextValue), {}, {
          mainTargetedIndex: nextProps.indexName
        })
      };
    }
  }]);
  return InstantSearch;
}(react.Component);
InstantSearch_defineProperty(InstantSearch, "defaultProps", {
  stalledSearchDelay: 200,
  refresh: false
});
InstantSearch_defineProperty(InstantSearch, "propTypes", {
  // @TODO: These props are currently constant.
  indexName: (prop_types_default()).string.isRequired,
  searchClient: prop_types_default().shape({
    search: (prop_types_default()).func.isRequired,
    searchForFacetValues: (prop_types_default()).func,
    addAlgoliaAgent: (prop_types_default()).func,
    clearCache: (prop_types_default()).func
  }).isRequired,
  createURL: (prop_types_default()).func,
  refresh: (prop_types_default()).bool,
  searchState: (prop_types_default()).object,
  onSearchStateChange: (prop_types_default()).func,
  onSearchParameters: (prop_types_default()).func,
  widgetsCollector: (prop_types_default()).func,
  resultsState: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array]),
  children: (prop_types_default()).node,
  stalledSearchDelay: (prop_types_default()).number
});
/* harmony default export */ const widgets_InstantSearch = (InstantSearch);

/***/ }),

/***/ 4760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Highlight */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82084);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11504);



var Highlight = function Highlight(_ref) {
  var cx = _ref.cx,
    value = _ref.value,
    highlightedTagName = _ref.highlightedTagName,
    isHighlighted = _ref.isHighlighted,
    nonHighlightedTagName = _ref.nonHighlightedTagName;
  var TagName = isHighlighted ? highlightedTagName : nonHighlightedTagName;
  var className = isHighlighted ? 'highlighted' : 'nonHighlighted';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(TagName, {
    className: cx(className)
  }, value);
};
Highlight.propTypes = {
  cx: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  isHighlighted: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  highlightedTagName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  nonHighlightedTagName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired
};
var Highlighter = function Highlighter(_ref2) {
  var cx = _ref2.cx,
    hit = _ref2.hit,
    attribute = _ref2.attribute,
    highlight = _ref2.highlight,
    highlightProperty = _ref2.highlightProperty,
    tagName = _ref2.tagName,
    nonHighlightedTagName = _ref2.nonHighlightedTagName,
    separator = _ref2.separator,
    className = _ref2.className;
  var parsedHighlightedValue = highlight({
    hit: hit,
    attribute: attribute,
    highlightProperty: highlightProperty
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(cx(''), className)
  }, parsedHighlightedValue.map(function (item, i) {
    if (Array.isArray(item)) {
      var isLast = i === parsedHighlightedValue.length - 1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
        key: i
      }, item.map(function (element, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Highlight, {
          cx: cx,
          key: index,
          value: element.value,
          highlightedTagName: tagName,
          nonHighlightedTagName: nonHighlightedTagName,
          isHighlighted: element.isHighlighted
        });
      }), !isLast && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
        className: cx('separator')
      }, separator));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Highlight, {
      cx: cx,
      key: i,
      value: item.value,
      highlightedTagName: tagName,
      nonHighlightedTagName: nonHighlightedTagName,
      isHighlighted: item.isHighlighted
    });
  }));
};
Highlighter.propTypes = {
  cx: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  hit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  attribute: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]).isRequired,
  highlight: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  highlightProperty: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  tagName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  nonHighlightedTagName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  separator: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};
Highlighter.defaultProps = {
  tagName: 'em',
  nonHighlightedTagName: 'span',
  className: '',
  separator: ', '
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Highlighter);

/***/ }),

/***/ 60004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ components_PanelCallbackHandler)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3268);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(82084);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/core/utils.js
var utils = __webpack_require__(50512);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/Panel.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var cx = (0,utils/* createClassNames */.uG)('Panel');
var _createContext = /*#__PURE__*/(0,react.createContext)(function setCanRefine() {}),
  PanelConsumer = _createContext.Consumer,
  PanelProvider = _createContext.Provider;

var Panel = /*#__PURE__*/function (_Component) {
  _inherits(Panel, _Component);
  var _super = _createSuper(Panel);
  function Panel() {
    var _this;
    _classCallCheck(this, Panel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      canRefine: true
    });
    _defineProperty(_assertThisInitialized(_this), "setCanRefine", function (nextCanRefine) {
      _this.setState({
        canRefine: nextCanRefine
      });
    });
    return _this;
  }
  _createClass(Panel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        header = _this$props.header,
        footer = _this$props.footer;
      var canRefine = this.state.canRefine;
      return /*#__PURE__*/react.createElement("div", {
        className: classnames_default()(cx('', !canRefine && '-noRefinement'), className)
      }, header && /*#__PURE__*/react.createElement("div", {
        className: cx('header')
      }, header), /*#__PURE__*/react.createElement("div", {
        className: cx('body')
      }, /*#__PURE__*/react.createElement(PanelProvider, {
        value: this.setCanRefine
      }, children)), footer && /*#__PURE__*/react.createElement("div", {
        className: cx('footer')
      }, footer));
    }
  }]);
  return Panel;
}(react.Component);
_defineProperty(Panel, "propTypes", {
  children: (prop_types_default()).node.isRequired,
  className: (prop_types_default()).string,
  header: (prop_types_default()).node,
  footer: (prop_types_default()).node
});
_defineProperty(Panel, "defaultProps", {
  className: '',
  header: null,
  footer: null
});
/* harmony default export */ const components_Panel = ((/* unused pure expression or super */ null && (Panel)));
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/PanelCallbackHandler.js
function PanelCallbackHandler_typeof(obj) { "@babel/helpers - typeof"; return PanelCallbackHandler_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PanelCallbackHandler_typeof(obj); }
function PanelCallbackHandler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function PanelCallbackHandler_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, PanelCallbackHandler_toPropertyKey(descriptor.key), descriptor); } }
function PanelCallbackHandler_createClass(Constructor, protoProps, staticProps) { if (protoProps) PanelCallbackHandler_defineProperties(Constructor.prototype, protoProps); if (staticProps) PanelCallbackHandler_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function PanelCallbackHandler_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) PanelCallbackHandler_setPrototypeOf(subClass, superClass); }
function PanelCallbackHandler_setPrototypeOf(o, p) { PanelCallbackHandler_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PanelCallbackHandler_setPrototypeOf(o, p); }
function PanelCallbackHandler_createSuper(Derived) { var hasNativeReflectConstruct = PanelCallbackHandler_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PanelCallbackHandler_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PanelCallbackHandler_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PanelCallbackHandler_possibleConstructorReturn(this, result); }; }
function PanelCallbackHandler_possibleConstructorReturn(self, call) { if (call && (PanelCallbackHandler_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PanelCallbackHandler_assertThisInitialized(self); }
function PanelCallbackHandler_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function PanelCallbackHandler_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function PanelCallbackHandler_getPrototypeOf(o) { PanelCallbackHandler_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PanelCallbackHandler_getPrototypeOf(o); }
function PanelCallbackHandler_defineProperty(obj, key, value) { key = PanelCallbackHandler_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function PanelCallbackHandler_toPropertyKey(arg) { var key = PanelCallbackHandler_toPrimitive(arg, "string"); return PanelCallbackHandler_typeof(key) === "symbol" ? key : String(key); }
function PanelCallbackHandler_toPrimitive(input, hint) { if (PanelCallbackHandler_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (PanelCallbackHandler_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var PanelCallbackHandler = /*#__PURE__*/function (_Component) {
  PanelCallbackHandler_inherits(PanelCallbackHandler, _Component);
  var _super = PanelCallbackHandler_createSuper(PanelCallbackHandler);
  function PanelCallbackHandler() {
    PanelCallbackHandler_classCallCheck(this, PanelCallbackHandler);
    return _super.apply(this, arguments);
  }
  PanelCallbackHandler_createClass(PanelCallbackHandler, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setCanRefine(this.props.canRefine);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.canRefine !== this.props.canRefine) {
        this.props.setCanRefine(this.props.canRefine);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return PanelCallbackHandler;
}(react.Component);
PanelCallbackHandler_defineProperty(PanelCallbackHandler, "propTypes", {
  children: (prop_types_default()).node.isRequired,
  canRefine: (prop_types_default()).bool.isRequired,
  setCanRefine: (prop_types_default()).func.isRequired
});
var PanelWrapper = function PanelWrapper(_ref) {
  var canRefine = _ref.canRefine,
    children = _ref.children;
  return /*#__PURE__*/react.createElement(PanelConsumer, null, function (setCanRefine) {
    return /*#__PURE__*/react.createElement(PanelCallbackHandler, {
      setCanRefine: setCanRefine,
      canRefine: canRefine
    }, children);
  });
};
PanelWrapper.propTypes = {
  canRefine: (prop_types_default()).bool.isRequired,
  children: (prop_types_default()).node.isRequired
};
/* harmony default export */ const components_PanelCallbackHandler = (PanelWrapper);

/***/ }),

/***/ 93988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82084);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11504);
/* harmony import */ var react_instantsearch_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61232);
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50512);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var cx = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .createClassNames */ .uG)('SearchBox');
var defaultLoadingIndicator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 38 38",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "#444",
  className: cx('loadingIcon'),
  "aria-hidden": "true"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
})))));
var defaultReset = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
  className: cx('resetIcon'),
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  width: "10",
  height: "10",
  "aria-hidden": "true"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
  d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
}));
var defaultSubmit = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
  className: cx('submitIcon'),
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10",
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
  d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
}));
var SearchBox = /*#__PURE__*/function (_Component) {
  _inherits(SearchBox, _Component);
  var _super = _createSuper(SearchBox);
  function SearchBox(props) {
    var _this;
    _classCallCheck(this, SearchBox);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "getQuery", function () {
      return _this.props.searchAsYouType ? _this.props.currentRefinement : _this.state.query;
    });
    _defineProperty(_assertThisInitialized(_this), "onInputMount", function (input) {
      _this.input = input;
      if (!_this.props.inputRef) return;
      if (typeof _this.props.inputRef === 'function') {
        _this.props.inputRef(input);
      } else {
        _this.props.inputRef.current = input;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      if (!_this.props.focusShortcuts) {
        return;
      }
      var shortcuts = _this.props.focusShortcuts.map(function (key) {
        return typeof key === 'string' ? key.toUpperCase().charCodeAt(0) : key;
      });
      var elt = e.target || e.srcElement;
      var tagName = elt.tagName;
      if (elt.isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA') {
        // already in an input
        return;
      }
      var which = e.which || e.keyCode;
      if (shortcuts.indexOf(which) === -1) {
        // not the right shortcut
        return;
      }
      _this.input.focus();
      e.stopPropagation();
      e.preventDefault();
    });
    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.input.blur();
      var _this$props = _this.props,
        refine = _this$props.refine,
        searchAsYouType = _this$props.searchAsYouType;
      if (!searchAsYouType) {
        refine(_this.getQuery());
      }
      return false;
    });
    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _this$props2 = _this.props,
        searchAsYouType = _this$props2.searchAsYouType,
        refine = _this$props2.refine,
        onChange = _this$props2.onChange;
      var value = event.target.value;
      if (searchAsYouType) {
        refine(value);
      } else {
        _this.setState({
          query: value
        });
      }
      if (onChange) {
        onChange(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onReset", function (event) {
      var _this$props3 = _this.props,
        searchAsYouType = _this$props3.searchAsYouType,
        refine = _this$props3.refine,
        onReset = _this$props3.onReset;
      refine('');
      _this.input.focus();
      if (!searchAsYouType) {
        _this.setState({
          query: ''
        });
      }
      if (onReset) {
        onReset(event);
      }
    });
    _this.state = {
      query: props.searchAsYouType ? null : props.currentRefinement
    };
    return _this;
  }
  _createClass(SearchBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.searchAsYouType && prevProps.currentRefinement !== this.props.currentRefinement) {
        this.setState({
          query: this.props.currentRefinement
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        className = _this$props4.className,
        inputId = _this$props4.inputId,
        translate = _this$props4.translate,
        autoFocus = _this$props4.autoFocus,
        loadingIndicator = _this$props4.loadingIndicator,
        submit = _this$props4.submit,
        reset = _this$props4.reset;
      var query = this.getQuery();
      var searchInputEvents = Object.keys(this.props).reduce(function (props, prop) {
        if (['onsubmit', 'onreset', 'onchange'].indexOf(prop.toLowerCase()) === -1 && prop.indexOf('on') === 0) {
          return _objectSpread(_objectSpread({}, props), {}, _defineProperty({}, prop, _this2.props[prop]));
        }
        return props;
      }, {});
      var isSearchStalled = this.props.showLoadingIndicator && this.props.isSearchStalled;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(cx(''), className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
        ref: this.props.formRef,
        noValidate: true,
        onSubmit: this.props.onSubmit ? this.props.onSubmit : this.onSubmit,
        onReset: this.onReset,
        className: cx('form', isSearchStalled && 'form--stalledSearch'),
        action: "",
        role: "search"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", _extends({
        ref: this.onInputMount,
        id: inputId,
        type: "search",
        placeholder: translate('placeholder'),
        autoFocus: autoFocus,
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: "false",
        required: true,
        maxLength: "512",
        value: query,
        onChange: this.onChange
      }, searchInputEvents, {
        className: cx('input')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
        type: "submit",
        title: translate('submitTitle'),
        className: cx('submit')
      }, submit), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
        type: "reset",
        title: translate('resetTitle'),
        className: cx('reset'),
        hidden: !query || isSearchStalled
      }, reset), this.props.showLoadingIndicator && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
        hidden: !isSearchStalled,
        className: cx('loadingIndicator')
      }, loadingIndicator)));
    }
  }]);
  return SearchBox;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
_defineProperty(SearchBox, "propTypes", {
  currentRefinement: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  refine: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  translate: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  loadingIndicator: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  reset: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  submit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  focusShortcuts: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)])),
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  searchAsYouType: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onReset: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  isSearchStalled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  showLoadingIndicator: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  formRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), prop_types__WEBPACK_IMPORTED_MODULE_3___default().exact({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
  })]),
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), prop_types__WEBPACK_IMPORTED_MODULE_3___default().exact({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
  })]),
  inputId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
});
_defineProperty(SearchBox, "defaultProps", {
  currentRefinement: '',
  className: '',
  focusShortcuts: ['s', '/'],
  autoFocus: false,
  searchAsYouType: true,
  showLoadingIndicator: false,
  isSearchStalled: false,
  loadingIndicator: defaultLoadingIndicator,
  reset: defaultReset,
  submit: defaultSubmit
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_instantsearch_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c)({
  resetTitle: 'Clear the search query.',
  submitTitle: 'Submit your search query.',
  placeholder: 'Search here…'
})(SearchBox));

/***/ }),

/***/ 50512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SU: () => (/* binding */ isSpecialClick),
/* harmony export */   Yj: () => (/* binding */ capitalize),
/* harmony export */   ik: () => (/* binding */ range),
/* harmony export */   uG: () => (/* binding */ createClassNames)
/* harmony export */ });
/* unused harmony export find */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82084);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var createClassNames = function createClassNames(block) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ais';
  return function () {
    for (var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++) {
      elements[_key] = arguments[_key];
    }
    var suitElements = elements.filter(function (element) {
      return element || element === '';
    }).map(function (element) {
      var baseClassName = "".concat(prefix, "-").concat(block);
      return element ? "".concat(baseClassName, "-").concat(element) : baseClassName;
    });
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()(suitElements);
  };
};
var isSpecialClick = function isSpecialClick(event) {
  var isMiddleClick = event.button === 1;
  return Boolean(isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
};
var capitalize = function capitalize(key) {
  return key.length === 0 ? '' : "".concat(key[0].toUpperCase()).concat(key.slice(1));
};
// taken from InstantSearch.js/utils
function range(_ref) {
  var _ref$start = _ref.start,
    start = _ref$start === void 0 ? 0 : _ref$start,
    end = _ref.end,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step;
  // We can't divide by 0 so we re-assign the step to 1 if it happens.
  var limitStep = step === 0 ? 1 : step;

  // In some cases the array to create has a decimal length.
  // We therefore need to round the value.
  // Example:
  //   { start: 1, end: 5000, step: 500 }
  //   => Array length = (5000 - 1) / 500 = 9.998
  var arrayLength = Math.round((end - start) / limitStep);
  return _toConsumableArray(Array(arrayLength)).map(function (_, current) {
    return (start + current) * limitStep;
  });
}
function find(array, comparator) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return array[i];
    }
  }
  return undefined;
}

/***/ }),

/***/ 80244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ widgets_ClearRefinements)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3268);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createConnector.js
var createConnector = __webpack_require__(79248);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectCurrentRefinements.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/**
 * connectCurrentRefinements connector provides the logic to build a widget that will
 * give the user the ability to remove all or some of the filters that were
 * set.
 * @name connectCurrentRefinements
 * @kind connector
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @propType {function} [clearsQuery=false] - Pass true to also clear the search query
 * @providedPropType {function} refine - a function to remove a single filter
 * @providedPropType {array.<{label: string, attribute: string, currentRefinement: string || object, items: array, value: function}>} items - all the filters, the `value` is to pass to the `refine` function for removing all currentrefinements, `label` is for the display. When existing several refinements for the same atribute name, then you get a nested `items` object that contains a `label` and a `value` function to use to remove a single filter. `attribute` and `currentRefinement` are metadata containing row values.
 * @providedPropType {string} query - the search query
 */
/* harmony default export */ const connectCurrentRefinements = ((0,createConnector/* default */.c)({
  displayName: 'AlgoliaCurrentRefinements',
  $$type: 'ais.currentRefinements',
  propTypes: {
    transformItems: (prop_types_default()).func
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults, metadata) {
    var items = metadata.reduce(function (res, meta) {
      if (typeof meta.items !== 'undefined') {
        if (!props.clearsQuery && meta.id === 'query') {
          return res;
        } else {
          if (props.clearsQuery && meta.id === 'query' && meta.items[0].currentRefinement === '') {
            return res;
          }
          return res.concat(meta.items.map(function (item) {
            return _objectSpread(_objectSpread({}, item), {}, {
              id: meta.id,
              index: meta.index
            });
          }));
        }
      }
      return res;
    }, []);
    var transformedItems = props.transformItems ? props.transformItems(items) : items;
    return {
      items: transformedItems,
      canRefine: transformedItems.length > 0
    };
  },
  refine: function refine(props, searchState, items) {
    // `value` corresponds to our internal clear function computed in each connector metadata.
    var refinementsToClear = items instanceof Array ? items.map(function (item) {
      return item.value;
    }) : [items];
    return refinementsToClear.reduce(function (res, clear) {
      return clear(res);
    }, searchState);
  }
}));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(82084);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/translatable.js
var translatable = __webpack_require__(61232);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/core/utils.js
var utils = __webpack_require__(50512);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/ClearRefinements.js
function ClearRefinements_typeof(obj) { "@babel/helpers - typeof"; return ClearRefinements_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ClearRefinements_typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ClearRefinements_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (ClearRefinements_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ClearRefinements_defineProperty(obj, key, value) { key = ClearRefinements_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ClearRefinements_toPropertyKey(arg) { var key = ClearRefinements_toPrimitive(arg, "string"); return ClearRefinements_typeof(key) === "symbol" ? key : String(key); }
function ClearRefinements_toPrimitive(input, hint) { if (ClearRefinements_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ClearRefinements_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var cx = (0,utils/* createClassNames */.uG)('ClearRefinements');
var ClearRefinements = /*#__PURE__*/function (_Component) {
  _inherits(ClearRefinements, _Component);
  var _super = _createSuper(ClearRefinements);
  function ClearRefinements() {
    _classCallCheck(this, ClearRefinements);
    return _super.apply(this, arguments);
  }
  _createClass(ClearRefinements, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        items = _this$props.items,
        canRefine = _this$props.canRefine,
        refine = _this$props.refine,
        translate = _this$props.translate,
        className = _this$props.className;
      return /*#__PURE__*/react.createElement("div", {
        className: classnames_default()(cx(''), className)
      }, /*#__PURE__*/react.createElement("button", {
        className: cx('button', !canRefine && 'button--disabled'),
        onClick: function onClick() {
          return refine(items);
        },
        disabled: !canRefine
      }, translate('reset')));
    }
  }]);
  return ClearRefinements;
}(react.Component);
ClearRefinements_defineProperty(ClearRefinements, "propTypes", {
  items: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  canRefine: (prop_types_default()).bool.isRequired,
  refine: (prop_types_default()).func.isRequired,
  translate: (prop_types_default()).func.isRequired,
  className: (prop_types_default()).string
});
ClearRefinements_defineProperty(ClearRefinements, "defaultProps", {
  className: ''
});
/* harmony default export */ const components_ClearRefinements = ((0,translatable/* default */.c)({
  reset: 'Clear all filters'
})(ClearRefinements));
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/PanelCallbackHandler.js + 1 modules
var PanelCallbackHandler = __webpack_require__(60004);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/widgets/ClearRefinements.js





/**
 * The ClearRefinements widget displays a button that lets the user clean every refinement applied
 * to the search.
 * @name ClearRefinements
 * @kind widget
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @propType {boolean} [clearsQuery=false] - Pass true to also clear the search query
 * @themeKey ais-ClearRefinements - the root div of the widget
 * @themeKey ais-ClearRefinements-button - the clickable button
 * @themeKey ais-ClearRefinements-button--disabled - the disabled clickable button
 * @translationKey reset - the clear all button value
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, ClearRefinements, RefinementList } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <ClearRefinements />
 *     <RefinementList
 *       attribute="brand"
 *       defaultRefinement={['Apple']}
 *     />
 *   </InstantSearch>
 * );
 */

var ClearRefinementsWidget = function ClearRefinementsWidget(props) {
  return /*#__PURE__*/react.createElement(PanelCallbackHandler/* default */.c, props, /*#__PURE__*/react.createElement(components_ClearRefinements, props));
};
/* harmony default export */ const widgets_ClearRefinements = (connectCurrentRefinements(ClearRefinementsWidget, {
  $$widgetType: 'ais.clearRefinements'
}));

/***/ }),

/***/ 12896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ widgets_Highlight)
});

// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectHighlight.js
var connectHighlight = __webpack_require__(55296);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/core/utils.js
var utils = __webpack_require__(50512);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/Highlighter.js
var Highlighter = __webpack_require__(4760);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/Highlight.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var cx = (0,utils/* createClassNames */.uG)('Highlight');
var Highlight = function Highlight(props) {
  return /*#__PURE__*/react.createElement(Highlighter/* default */.c, _extends({}, props, {
    highlightProperty: "_highlightResult",
    cx: cx
  }));
};
/* harmony default export */ const components_Highlight = (Highlight);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/widgets/Highlight.js



/**
 * Renders any attribute from a hit into its highlighted form when relevant.
 *
 * Read more about it in the [Highlighting results](guide/Highlighting_results.html) guide.
 * @name Highlight
 * @kind widget
 * @propType {string} attribute - location of the highlighted attribute in the hit (the corresponding element can be either a string or an array of strings)
 * @propType {object} hit - hit object containing the highlighted attribute
 * @propType {string} [tagName='em'] - tag to be used for highlighted parts of the hit
 * @propType {string} [nonHighlightedTagName='span'] - tag to be used for the parts of the hit that are not highlighted
 * @propType {node} [separator=',<space>'] - symbol used to separate the elements of the array in case the attribute points to an array of strings.
 * @themeKey ais-Highlight - root of the component
 * @themeKey ais-Highlight-highlighted - part of the text which is highlighted
 * @themeKey ais-Highlight-nonHighlighted - part of the text that is not highlighted
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
 *
 * const Hit = ({ hit }) => (
 *   <div>
 *     <Highlight attribute="name" hit={hit} />
 *   </div>
 * );
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SearchBox defaultRefinement="Pho" />
 *     <Hits hitComponent={Hit} />
 *   </InstantSearch>
 * );
 */

/* harmony default export */ const widgets_Highlight = ((0,connectHighlight/* default */.c)(components_Highlight, {
  $$widgetType: 'ais.highlight'
}));

/***/ }),

/***/ 12390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ widgets_Hits)
});

// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createConnector.js
var createConnector = __webpack_require__(79248);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/indexUtils.js
var indexUtils = __webpack_require__(97520);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/utils.js
var utils = __webpack_require__(30932);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectHits.js




/**
 * connectHits connector provides the logic to create connected
 * components that will render the results retrieved from
 * Algolia.
 *
 * To configure the number of hits retrieved, use [HitsPerPage widget](widgets/HitsPerPage.html),
 * [connectHitsPerPage connector](connectors/connectHitsPerPage.html) or pass the hitsPerPage
 * prop to a [Configure](guide/Search_parameters.html) widget.
 *
 * **Warning:** you will need to use the **objectID** property available on every hit as a key
 * when iterating over them. This will ensure you have the best possible UI experience
 * especially on slow networks.
 * @name connectHits
 * @kind connector
 * @providedPropType {array.<object>} hits - the records that matched the search state
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Highlight, connectHits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 * const CustomHits = connectHits(({ hits }) => (
 *   <div>
 *     {hits.map(hit =>
 *       <p key={hit.objectID}>
 *         <Highlight attribute="name" hit={hit} />
 *       </p>
 *     )}
 *   </div>
 * ));
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <CustomHits />
 *   </InstantSearch>
 * );
 */
/* harmony default export */ const connectHits = ((0,createConnector/* default */.c)({
  displayName: 'AlgoliaHits',
  $$type: 'ais.hits',
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    var results = (0,indexUtils/* getResults */.yO)(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    if (!results) {
      return {
        hits: []
      };
    }
    var hitsWithPositions = (0,utils/* addAbsolutePositions */.qI)(results.hits, results.hitsPerPage, results.page);
    var hitsWithPositionsAndQueryID = (0,utils/* addQueryID */.cz)(hitsWithPositions, results.queryID);
    return {
      hits: hitsWithPositionsAndQueryID
    };
  },
  /*
   * Hits needs to be considered as a widget to trigger a search,
   * even if no other widgets are used.
   *
   * To be considered as a widget you need either:
   * - getSearchParameters
   * - getMetadata
   * - transitionState
   *
   * See: createConnector.tsx
   */
  getSearchParameters: function getSearchParameters(searchParameters) {
    return searchParameters;
  }
}));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(82084);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3268);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/core/utils.js
var core_utils = __webpack_require__(50512);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/Hits.js




var cx = (0,core_utils/* createClassNames */.uG)('Hits');
var DefaultHitComponent = function DefaultHitComponent(props) {
  return /*#__PURE__*/react.createElement("div", {
    style: {
      borderBottom: '1px solid #bbb',
      paddingBottom: '5px',
      marginBottom: '5px',
      wordBreak: 'break-all'
    }
  }, JSON.stringify(props).slice(0, 100), "...");
};
var Hits = function Hits(_ref) {
  var hits = _ref.hits,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$hitComponent = _ref.hitComponent,
    HitComponent = _ref$hitComponent === void 0 ? DefaultHitComponent : _ref$hitComponent;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(cx(''), className)
  }, /*#__PURE__*/react.createElement("ul", {
    className: cx('list')
  }, hits.map(function (hit) {
    return /*#__PURE__*/react.createElement("li", {
      className: cx('item'),
      key: hit.objectID
    }, /*#__PURE__*/react.createElement(HitComponent, {
      hit: hit
    }));
  })));
};
var HitPropTypes = prop_types_default().shape({
  objectID: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
});
Hits.propTypes = {
  hits: prop_types_default().arrayOf(HitPropTypes.isRequired).isRequired,
  className: (prop_types_default()).string,
  // this is actually PropTypes.elementType, but our prop-types version is outdated
  hitComponent: (prop_types_default()).any
};
/* harmony default export */ const components_Hits = (Hits);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/widgets/Hits.js



/**
 * Displays a list of hits.
 *
 * To configure the number of hits being shown, use the [HitsPerPage widget](widgets/HitsPerPage.html),
 * [connectHitsPerPage connector](connectors/connectHitsPerPage.html) or the [Configure widget](widgets/Configure.html).
 *
 * @name Hits
 * @kind widget
 * @propType {Component} [hitComponent] - Component used for rendering each hit from
 *   the results. If it is not provided the rendering defaults to displaying the
 *   hit in its JSON form. The component will be called with a `hit` prop.
 * @themeKey ais-Hits - the root div of the widget
 * @themeKey ais-Hits-list - the list of results
 * @themeKey ais-Hits-item - the hit list item
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Hits />
 *   </InstantSearch>
 * );
 */

/* harmony default export */ const widgets_Hits = (connectHits(components_Hits, {
  $$widgetType: 'ais.hits'
}));

/***/ }),

/***/ 65584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ widgets_Pagination)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createConnector.js
var createConnector = __webpack_require__(79248);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/indexUtils.js
var indexUtils = __webpack_require__(97520);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectPagination.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function getId() {
  return 'page';
}
function getCurrentRefinement(props, searchState, context) {
  var id = getId();
  var page = 1;
  var currentRefinement = (0,indexUtils/* getCurrentRefinementValue */.Y3)(props, searchState, context, id, page);
  if (typeof currentRefinement === 'string') {
    return parseInt(currentRefinement, 10);
  }
  return currentRefinement;
}
function _refine(props, searchState, nextPage, context) {
  var id = getId();
  var nextValue = _defineProperty({}, id, nextPage);
  var resetPage = false;
  return (0,indexUtils/* refineValue */.Iv)(searchState, nextValue, context, resetPage);
}

/**
 * connectPagination connector provides the logic to build a widget that will
 * let the user displays hits corresponding to a certain page.
 * @name connectPagination
 * @kind connector
 * @propType {boolean} [showFirst=true] - Display the first page link.
 * @propType {boolean} [showLast=false] - Display the last page link.
 * @propType {boolean} [showPrevious=true] - Display the previous page link.
 * @propType {boolean} [showNext=true] - Display the next page link.
 * @propType {number} [padding=3] - How many page links to display around the current page.
 * @propType {number} [totalPages=Infinity] - Maximum number of pages to display.
 * @providedPropType {function} refine - a function to remove a single filter
 * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
 * @providedPropType {number} nbPages - the total of existing pages
 * @providedPropType {number} currentRefinement - the page refinement currently applied
 */
/* harmony default export */ const connectPagination = ((0,createConnector/* default */.c)({
  displayName: 'AlgoliaPagination',
  $$type: 'ais.pagination',
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    var results = (0,indexUtils/* getResults */.yO)(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    if (!results) {
      return null;
    }
    var nbPages = results.nbPages;
    return {
      nbPages: nbPages,
      currentRefinement: getCurrentRefinement(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      canRefine: nbPages > 1
    };
  },
  refine: function refine(props, searchState, nextPage) {
    return _refine(props, searchState, nextPage, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    return (0,indexUtils/* cleanUpValue */.AP)(searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }, getId());
  },
  getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
    return searchParameters.setPage(getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }) - 1);
  },
  getMetadata: function getMetadata() {
    return {
      id: getId()
    };
  }
}));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(82084);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3268);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/translatable.js
var translatable = __webpack_require__(61232);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/core/utils.js
var utils = __webpack_require__(50512);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/Link.js
function Link_typeof(obj) { "@babel/helpers - typeof"; return Link_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Link_typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Link_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (Link_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function Link_defineProperty(obj, key, value) { key = Link_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Link_toPropertyKey(arg) { var key = Link_toPrimitive(arg, "string"); return Link_typeof(key) === "symbol" ? key : String(key); }
function Link_toPrimitive(input, hint) { if (Link_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Link_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Link = /*#__PURE__*/function (_Component) {
  _inherits(Link, _Component);
  var _super = _createSuper(Link);
  function Link() {
    var _this;
    _classCallCheck(this, Link);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    Link_defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      if ((0,utils/* isSpecialClick */.SU)(e)) {
        return;
      }
      _this.props.onClick();
      e.preventDefault();
    });
    return _this;
  }
  _createClass(Link, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("a", _extends({}, this.props, {
        onClick: this.onClick
      }));
    }
  }]);
  return Link;
}(react.Component);
Link_defineProperty(Link, "propTypes", {
  onClick: (prop_types_default()).func.isRequired
});

;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/LinkList.js
function LinkList_typeof(obj) { "@babel/helpers - typeof"; return LinkList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, LinkList_typeof(obj); }
function LinkList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function LinkList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, LinkList_toPropertyKey(descriptor.key), descriptor); } }
function LinkList_createClass(Constructor, protoProps, staticProps) { if (protoProps) LinkList_defineProperties(Constructor.prototype, protoProps); if (staticProps) LinkList_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function LinkList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) LinkList_setPrototypeOf(subClass, superClass); }
function LinkList_setPrototypeOf(o, p) { LinkList_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LinkList_setPrototypeOf(o, p); }
function LinkList_createSuper(Derived) { var hasNativeReflectConstruct = LinkList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = LinkList_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = LinkList_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return LinkList_possibleConstructorReturn(this, result); }; }
function LinkList_possibleConstructorReturn(self, call) { if (call && (LinkList_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return LinkList_assertThisInitialized(self); }
function LinkList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function LinkList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function LinkList_getPrototypeOf(o) { LinkList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LinkList_getPrototypeOf(o); }
function LinkList_defineProperty(obj, key, value) { key = LinkList_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function LinkList_toPropertyKey(arg) { var key = LinkList_toPrimitive(arg, "string"); return LinkList_typeof(key) === "symbol" ? key : String(key); }
function LinkList_toPrimitive(input, hint) { if (LinkList_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (LinkList_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var LinkList = /*#__PURE__*/function (_Component) {
  LinkList_inherits(LinkList, _Component);
  var _super = LinkList_createSuper(LinkList);
  function LinkList() {
    LinkList_classCallCheck(this, LinkList);
    return _super.apply(this, arguments);
  }
  LinkList_createClass(LinkList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cx = _this$props.cx,
        createURL = _this$props.createURL,
        items = _this$props.items,
        onSelect = _this$props.onSelect,
        canRefine = _this$props.canRefine;
      return /*#__PURE__*/react.createElement("ul", {
        className: cx('list', !canRefine && 'list--noRefinement')
      }, items.map(function (item) {
        return /*#__PURE__*/react.createElement("li", {
          key: item.key === undefined ? item.value : item.key,
          className: cx('item', item.selected && !item.disabled && 'item--selected', item.disabled && 'item--disabled', item.modifier)
        }, item.disabled ? /*#__PURE__*/react.createElement("span", {
          className: cx('link')
        }, item.label === undefined ? item.value : item.label) : /*#__PURE__*/react.createElement(Link, {
          className: cx('link', item.selected && 'link--selected'),
          "aria-label": item.ariaLabel,
          href: createURL(item.value),
          onClick: function onClick() {
            return onSelect(item.value);
          }
        }, item.label === undefined ? item.value : item.label));
      }));
    }
  }]);
  return LinkList;
}(react.Component);
LinkList_defineProperty(LinkList, "propTypes", {
  cx: (prop_types_default()).func.isRequired,
  createURL: (prop_types_default()).func.isRequired,
  items: prop_types_default().arrayOf(prop_types_default().shape({
    value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number, (prop_types_default()).object]).isRequired,
    key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
    label: (prop_types_default()).node,
    modifier: (prop_types_default()).string,
    ariaLabel: (prop_types_default()).string,
    disabled: (prop_types_default()).bool
  })),
  onSelect: (prop_types_default()).func.isRequired,
  canRefine: (prop_types_default()).bool.isRequired
});

;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/Pagination.js
var _excluded = ["listComponent", "nbPages", "totalPages", "currentRefinement", "padding", "showFirst", "showPrevious", "showNext", "showLast", "refine", "createURL", "canRefine", "translate", "className"];
function Pagination_typeof(obj) { "@babel/helpers - typeof"; return Pagination_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Pagination_typeof(obj); }
function Pagination_extends() { Pagination_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Pagination_extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Pagination_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Pagination_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Pagination_toPropertyKey(descriptor.key), descriptor); } }
function Pagination_createClass(Constructor, protoProps, staticProps) { if (protoProps) Pagination_defineProperties(Constructor.prototype, protoProps); if (staticProps) Pagination_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Pagination_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Pagination_setPrototypeOf(subClass, superClass); }
function Pagination_setPrototypeOf(o, p) { Pagination_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Pagination_setPrototypeOf(o, p); }
function Pagination_createSuper(Derived) { var hasNativeReflectConstruct = Pagination_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Pagination_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Pagination_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Pagination_possibleConstructorReturn(this, result); }; }
function Pagination_possibleConstructorReturn(self, call) { if (call && (Pagination_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Pagination_assertThisInitialized(self); }
function Pagination_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Pagination_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function Pagination_getPrototypeOf(o) { Pagination_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Pagination_getPrototypeOf(o); }
function Pagination_defineProperty(obj, key, value) { key = Pagination_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Pagination_toPropertyKey(arg) { var key = Pagination_toPrimitive(arg, "string"); return Pagination_typeof(key) === "symbol" ? key : String(key); }
function Pagination_toPrimitive(input, hint) { if (Pagination_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Pagination_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






var cx = (0,utils/* createClassNames */.uG)('Pagination');

// Determines the size of the widget (the number of pages displayed - that the user can directly click on)
function calculateSize(padding, maxPages) {
  return Math.min(2 * padding + 1, maxPages);
}
function calculatePaddingLeft(currentPage, padding, maxPages, size) {
  if (currentPage <= padding) {
    return currentPage;
  }
  if (currentPage >= maxPages - padding) {
    return size - (maxPages - currentPage);
  }
  return padding + 1;
}

// Retrieve the correct page range to populate the widget
function getPages(currentPage, maxPages, padding) {
  var size = calculateSize(padding, maxPages);
  // If the widget size is equal to the max number of pages, return the entire page range
  if (size === maxPages) return (0,utils/* range */.ik)({
    start: 1,
    end: maxPages + 1
  });
  var paddingLeft = calculatePaddingLeft(currentPage, padding, maxPages, size);
  var paddingRight = size - paddingLeft;
  var first = currentPage - paddingLeft;
  var last = currentPage + paddingRight;
  return (0,utils/* range */.ik)({
    start: first + 1,
    end: last + 1
  });
}
var Pagination = /*#__PURE__*/function (_Component) {
  Pagination_inherits(Pagination, _Component);
  var _super = Pagination_createSuper(Pagination);
  function Pagination() {
    Pagination_classCallCheck(this, Pagination);
    return _super.apply(this, arguments);
  }
  Pagination_createClass(Pagination, [{
    key: "getItem",
    value: function getItem(modifier, translationKey, value) {
      var _this$props = this.props,
        nbPages = _this$props.nbPages,
        totalPages = _this$props.totalPages,
        translate = _this$props.translate;
      return {
        key: "".concat(modifier, ".").concat(value),
        modifier: modifier,
        disabled: value < 1 || value >= Math.min(totalPages, nbPages),
        label: translate(translationKey, value),
        value: value,
        ariaLabel: translate("aria".concat((0,utils/* capitalize */.Yj)(translationKey)), value)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        ListComponent = _this$props2.listComponent,
        nbPages = _this$props2.nbPages,
        totalPages = _this$props2.totalPages,
        currentRefinement = _this$props2.currentRefinement,
        padding = _this$props2.padding,
        showFirst = _this$props2.showFirst,
        showPrevious = _this$props2.showPrevious,
        showNext = _this$props2.showNext,
        showLast = _this$props2.showLast,
        refine = _this$props2.refine,
        createURL = _this$props2.createURL,
        canRefine = _this$props2.canRefine,
        translate = _this$props2.translate,
        className = _this$props2.className,
        otherProps = _objectWithoutProperties(_this$props2, _excluded);
      var maxPages = Math.min(nbPages, totalPages);
      var lastPage = maxPages;
      var items = [];
      if (showFirst) {
        items.push({
          key: 'first',
          modifier: 'item--firstPage',
          disabled: currentRefinement === 1,
          label: translate('first'),
          value: 1,
          ariaLabel: translate('ariaFirst')
        });
      }
      if (showPrevious) {
        items.push({
          key: 'previous',
          modifier: 'item--previousPage',
          disabled: currentRefinement === 1,
          label: translate('previous'),
          value: currentRefinement - 1,
          ariaLabel: translate('ariaPrevious')
        });
      }
      items = items.concat(getPages(currentRefinement, maxPages, padding).map(function (value) {
        return {
          key: value,
          modifier: 'item--page',
          label: translate('page', value),
          value: value,
          selected: value === currentRefinement,
          ariaLabel: translate('ariaPage', value)
        };
      }));
      if (showNext) {
        items.push({
          key: 'next',
          modifier: 'item--nextPage',
          disabled: currentRefinement === lastPage || lastPage <= 1,
          label: translate('next'),
          value: currentRefinement + 1,
          ariaLabel: translate('ariaNext')
        });
      }
      if (showLast) {
        items.push({
          key: 'last',
          modifier: 'item--lastPage',
          disabled: currentRefinement === lastPage || lastPage <= 1,
          label: translate('last'),
          value: lastPage,
          ariaLabel: translate('ariaLast')
        });
      }
      return /*#__PURE__*/react.createElement("div", {
        className: classnames_default()(cx('', !canRefine && '-noRefinement'), className)
      }, /*#__PURE__*/react.createElement(ListComponent, Pagination_extends({}, otherProps, {
        cx: cx,
        items: items,
        onSelect: refine,
        createURL: createURL,
        canRefine: canRefine
      })));
    }
  }]);
  return Pagination;
}(react.Component);
Pagination_defineProperty(Pagination, "propTypes", {
  nbPages: (prop_types_default()).number.isRequired,
  currentRefinement: (prop_types_default()).number.isRequired,
  refine: (prop_types_default()).func.isRequired,
  createURL: (prop_types_default()).func.isRequired,
  canRefine: (prop_types_default()).bool.isRequired,
  translate: (prop_types_default()).func.isRequired,
  listComponent: (prop_types_default()).func,
  showFirst: (prop_types_default()).bool,
  showPrevious: (prop_types_default()).bool,
  showNext: (prop_types_default()).bool,
  showLast: (prop_types_default()).bool,
  padding: (prop_types_default()).number,
  totalPages: (prop_types_default()).number,
  className: (prop_types_default()).string
});
Pagination_defineProperty(Pagination, "defaultProps", {
  listComponent: LinkList,
  showFirst: true,
  showPrevious: true,
  showNext: true,
  showLast: false,
  padding: 3,
  totalPages: Infinity,
  className: ''
});
/* harmony default export */ const components_Pagination = ((0,translatable/* default */.c)({
  previous: '‹',
  next: '›',
  first: '«',
  last: '»',
  page: function page(currentRefinement) {
    return currentRefinement.toString();
  },
  ariaPrevious: 'Previous page',
  ariaNext: 'Next page',
  ariaFirst: 'First page',
  ariaLast: 'Last page',
  ariaPage: function ariaPage(currentRefinement) {
    return "Page ".concat(currentRefinement.toString());
  }
})(Pagination));
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/PanelCallbackHandler.js + 1 modules
var PanelCallbackHandler = __webpack_require__(60004);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/widgets/Pagination.js





/**
 * The Pagination widget displays a simple pagination system allowing the user to
 * change the current page.
 * @name Pagination
 * @kind widget
 * @propType {boolean} [showFirst=true] - Display the first page link.
 * @propType {boolean} [showLast=false] - Display the last page link.
 * @propType {boolean} [showPrevious=true] - Display the previous page link.
 * @propType {boolean} [showNext=true] - Display the next page link.
 * @propType {number} [padding=3] - How many page links to display around the current page.
 * @propType {number} [totalPages=Infinity] - Maximum number of pages to display.
 * @themeKey ais-Pagination - the root div of the widget
 * @themeKey ais-Pagination--noRefinement - the root div of the widget when there is no refinement
 * @themeKey ais-Pagination-list - the list of all pagination items
 * @themeKey ais-Pagination-list--noRefinement - the list of all pagination items when there is no refinement
 * @themeKey ais-Pagination-item - the pagination list item
 * @themeKey ais-Pagination-item--firstPage - the "first" pagination list item
 * @themeKey ais-Pagination-item--lastPage - the "last" pagination list item
 * @themeKey ais-Pagination-item--previousPage - the "previous" pagination list item
 * @themeKey ais-Pagination-item--nextPage - the "next" pagination list item
 * @themeKey ais-Pagination-item--page - the "page" pagination list item
 * @themeKey ais-Pagination-item--selected - the selected pagination list item
 * @themeKey ais-Pagination-item--disabled - the disabled pagination list item
 * @themeKey ais-Pagination-link - the pagination clickable element
 * @translationKey previous - Label value for the previous page link
 * @translationKey next - Label value for the next page link
 * @translationKey first - Label value for the first page link
 * @translationKey last - Label value for the last page link
 * @translationkey page - Label value for a page item. You get function(currentRefinement) and you need to return a string
 * @translationKey ariaPrevious - Accessibility label value for the previous page link
 * @translationKey ariaNext - Accessibility label value for the next page link
 * @translationKey ariaFirst - Accessibility label value for the first page link
 * @translationKey ariaLast - Accessibility label value for the last page link
 * @translationkey ariaPage - Accessibility label value for a page item. You get function(currentRefinement) and you need to return a string
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Pagination } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Pagination />
 *   </InstantSearch>
 * );
 */

var PaginationWidget = function PaginationWidget(props) {
  return /*#__PURE__*/react.createElement(PanelCallbackHandler/* default */.c, props, /*#__PURE__*/react.createElement(components_Pagination, props));
};
/* harmony default export */ const widgets_Pagination = (connectPagination(PaginationWidget, {
  $$widgetType: 'ais.pagination'
}));

/***/ }),

/***/ 55432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ widgets_RefinementList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3268);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createConnector.js
var createConnector = __webpack_require__(79248);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/indexUtils.js
var indexUtils = __webpack_require__(97520);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/utils.js
var utils = __webpack_require__(30932);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectRefinementList.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var namespace = 'refinementList';
function getId(props) {
  return props.attribute;
}
function getCurrentRefinement(props, searchState, context) {
  var currentRefinement = (0,indexUtils/* getCurrentRefinementValue */.Y3)(props, searchState, context, "".concat(namespace, ".").concat(getId(props)), []);
  if (typeof currentRefinement !== 'string') {
    return currentRefinement;
  }
  if (currentRefinement) {
    return [currentRefinement];
  }
  return [];
}
function getValue(value, props, searchState, context) {
  var currentRefinement = getCurrentRefinement(props, searchState, context);
  var isAnewValue = currentRefinement.indexOf(value) === -1;
  var nextRefinement = isAnewValue ? currentRefinement.concat([value]) // cannot use .push(), it mutates
  : currentRefinement.filter(function (selectedValue) {
    return selectedValue !== value;
  }); // cannot use .splice(), it mutates
  return nextRefinement;
}
function getLimit(_ref) {
  var showMore = _ref.showMore,
    limit = _ref.limit,
    showMoreLimit = _ref.showMoreLimit;
  return showMore ? showMoreLimit : limit;
}
function _refine(props, searchState, nextRefinement, context) {
  var id = getId(props);
  // Setting the value to an empty string ensures that it is persisted in
  // the URL as an empty value.
  // This is necessary in the case where `defaultRefinement` contains one
  // item and we try to deselect it. `nextSelected` would be an empty array,
  // which would not be persisted to the URL.
  // {foo: ['bar']} => "foo[0]=bar"
  // {foo: []} => ""
  var nextValue = _defineProperty({}, id, nextRefinement.length > 0 ? nextRefinement : '');
  var resetPage = true;
  return (0,indexUtils/* refineValue */.Iv)(searchState, nextValue, context, resetPage, namespace);
}
function _cleanUp(props, searchState, context) {
  return (0,indexUtils/* cleanUpValue */.AP)(searchState, context, "".concat(namespace, ".").concat(getId(props)));
}
/**
 * connectRefinementList connector provides the logic to build a widget that will
 * give the user the ability to choose multiple values for a specific facet.
 * @name connectRefinementList
 * @kind connector
 * @requirements The attribute passed to the `attribute` prop must be present in "attributes for faceting"
 * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
 * @propType {string} attribute - the name of the attribute in the record
 * @propType {boolean} [searchable=false] - allow search inside values
 * @propType {string} [operator=or] - How to apply the refinements. Possible values: 'or' or 'and'.
 * @propType {boolean} [showMore=false] - true if the component should display a button that will expand the number of items
 * @propType {number} [limit=10] - the minimum number of displayed items
 * @propType {number} [showMoreLimit=20] - the maximun number of displayed items. Only used when showMore is set to `true`
 * @propType {string[]} defaultRefinement - the values of the items selected by default. The searchState of this widget takes the form of a list of `string`s, which correspond to the values of all selected refinements. However, when there are no refinements selected, the value of the searchState is an empty string.
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @providedPropType {function} refine - a function to toggle a refinement
 * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
 * @providedPropType {string[]} currentRefinement - the refinement currently applied
 * @providedPropType {array.<{count: number, isRefined: boolean, label: string, value: string}>} items - the list of items the RefinementList can display.
 * @providedPropType {function} searchForItems - a function to toggle a search inside items values
 * @providedPropType {boolean} isFromSearch - a boolean that says if the `items` props contains facet values from the global search or from the search inside items.
 * @providedPropType {boolean} canRefine - a boolean that says whether you can refine
 */

var sortBy = ['isRefined', 'count:desc', 'name:asc'];
/* harmony default export */ const connectRefinementList = ((0,createConnector/* default */.c)({
  displayName: 'AlgoliaRefinementList',
  $$type: 'ais.refinementList',
  propTypes: {
    id: (prop_types_default()).string,
    attribute: (prop_types_default()).string.isRequired,
    operator: prop_types_default().oneOf(['and', 'or']),
    showMore: (prop_types_default()).bool,
    limit: (prop_types_default()).number,
    showMoreLimit: (prop_types_default()).number,
    defaultRefinement: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])),
    searchable: (prop_types_default()).bool,
    transformItems: (prop_types_default()).func,
    facetOrdering: (prop_types_default()).bool
  },
  defaultProps: {
    operator: 'or',
    showMore: false,
    limit: 10,
    showMoreLimit: 20,
    facetOrdering: true
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults, metadata, searchForFacetValuesResults) {
    var attribute = props.attribute,
      searchable = props.searchable,
      indexContextValue = props.indexContextValue,
      facetOrdering = props.facetOrdering;
    var results = (0,indexUtils/* getResults */.yO)(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var canRefine = Boolean(results) && Boolean(results.getFacetByName(attribute));
    var isFromSearch = Boolean(searchForFacetValuesResults && searchForFacetValuesResults[attribute] && searchForFacetValuesResults.query !== '');

    // Search For Facet Values is not available with derived helper (used for multi index search)
    if (searchable && indexContextValue) {
      throw new Error('react-instantsearch: searching in *List is not available when used inside a' + ' multi index context');
    }
    if (!canRefine) {
      return {
        items: [],
        currentRefinement: getCurrentRefinement(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        canRefine: canRefine,
        isFromSearch: isFromSearch,
        searchable: searchable
      };
    }
    var items = isFromSearch ? searchForFacetValuesResults[attribute].map(function (v) {
      return {
        label: v.value,
        value: getValue(v.escapedValue, props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        _highlightResult: {
          label: {
            value: v.highlighted
          }
        },
        count: v.count,
        isRefined: v.isRefined
      };
    }) : results.getFacetValues(attribute, {
      sortBy: sortBy,
      facetOrdering: facetOrdering
    }).map(function (v) {
      return {
        label: v.name,
        value: getValue(v.escapedValue, props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        count: v.count,
        isRefined: v.isRefined
      };
    });
    var transformedItems = props.transformItems ? props.transformItems(items) : items;
    return {
      items: transformedItems.slice(0, getLimit(props)),
      currentRefinement: getCurrentRefinement(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      isFromSearch: isFromSearch,
      searchable: searchable,
      canRefine: transformedItems.length > 0
    };
  },
  refine: function refine(props, searchState, nextRefinement) {
    return _refine(props, searchState, nextRefinement, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  searchForFacetValues: function searchForFacetValues(props, searchState, nextRefinement) {
    return {
      facetName: props.attribute,
      query: nextRefinement,
      maxFacetHits: getLimit(props)
    };
  },
  cleanUp: function cleanUp(props, searchState) {
    return _cleanUp(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
    var attribute = props.attribute,
      operator = props.operator;
    var addKey = operator === 'and' ? 'addFacet' : 'addDisjunctiveFacet';
    var addRefinementKey = "".concat(addKey, "Refinement");
    searchParameters = searchParameters.setQueryParameters({
      maxValuesPerFacet: Math.max(searchParameters.maxValuesPerFacet || 0, getLimit(props))
    });
    searchParameters = searchParameters[addKey](attribute);
    return getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }).reduce(function (res, val) {
      return res[addRefinementKey](attribute, val);
    }, searchParameters);
  },
  getMetadata: function getMetadata(props, searchState) {
    var id = getId(props);
    var context = {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    };
    return {
      id: id,
      index: (0,indexUtils/* getIndexId */._W)(context),
      items: getCurrentRefinement(props, searchState, context).length > 0 ? [{
        attribute: props.attribute,
        label: "".concat(props.attribute, ": "),
        currentRefinement: getCurrentRefinement(props, searchState, context),
        value: function value(nextState) {
          return _refine(props, nextState, [], context);
        },
        items: getCurrentRefinement(props, searchState, context).map(function (item) {
          return {
            label: (0,utils/* unescapeFacetValue */.sv)("".concat(item)),
            value: function value(nextState) {
              var nextSelectedItems = getCurrentRefinement(props, nextState, context).filter(function (other) {
                return other !== item;
              });
              return _refine(props, searchState, nextSelectedItems, context);
            }
          };
        })
      }] : []
    };
  }
}));
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/PanelCallbackHandler.js + 1 modules
var PanelCallbackHandler = __webpack_require__(60004);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/translatable.js
var translatable = __webpack_require__(61232);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/core/utils.js
var core_utils = __webpack_require__(50512);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/widgets/Highlight.js + 1 modules
var Highlight = __webpack_require__(12896);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(82084);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/SearchBox.js
var SearchBox = __webpack_require__(93988);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/List.js
function List_typeof(obj) { "@babel/helpers - typeof"; return List_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, List_typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, List_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (List_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function List_defineProperty(obj, key, value) { key = List_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function List_toPropertyKey(arg) { var key = List_toPrimitive(arg, "string"); return List_typeof(key) === "symbol" ? key : String(key); }
function List_toPrimitive(input, hint) { if (List_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (List_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var itemsPropType = prop_types_default().arrayOf(prop_types_default().shape({
  value: (prop_types_default()).any,
  label: (prop_types_default()).node.isRequired,
  items: function items() {
    return itemsPropType.apply(void 0, arguments);
  }
}));
var List = /*#__PURE__*/function (_Component) {
  _inherits(List, _Component);
  var _super = _createSuper(List);
  function List() {
    var _this;
    _classCallCheck(this, List);
    _this = _super.call(this);
    List_defineProperty(_assertThisInitialized(_this), "onShowMoreClick", function () {
      _this.setState(function (state) {
        return {
          extended: !state.extended
        };
      });
    });
    List_defineProperty(_assertThisInitialized(_this), "getLimit", function () {
      var _this$props = _this.props,
        limit = _this$props.limit,
        showMoreLimit = _this$props.showMoreLimit;
      var extended = _this.state.extended;
      return extended ? showMoreLimit : limit;
    });
    List_defineProperty(_assertThisInitialized(_this), "resetQuery", function () {
      _this.setState({
        query: ''
      });
    });
    List_defineProperty(_assertThisInitialized(_this), "renderItem", function (item, resetQuery) {
      var itemHasChildren = item.items && Boolean(item.items.length);
      return /*#__PURE__*/react.createElement("li", {
        key: item.key || item.label,
        className: _this.props.cx('item', item.isRefined && 'item--selected', item.noRefinement && 'item--noRefinement', itemHasChildren && 'item--parent')
      }, _this.props.renderItem(item, resetQuery), itemHasChildren && /*#__PURE__*/react.createElement("ul", {
        className: _this.props.cx('list', 'list--child')
      }, item.items.slice(0, _this.getLimit()).map(function (child) {
        return _this.renderItem(child, item);
      })));
    });
    _this.state = {
      extended: false,
      query: ''
    };
    return _this;
  }
  _createClass(List, [{
    key: "renderShowMore",
    value: function renderShowMore() {
      var _this$props2 = this.props,
        showMore = _this$props2.showMore,
        translate = _this$props2.translate,
        cx = _this$props2.cx;
      var extended = this.state.extended;
      var disabled = this.props.limit >= this.props.items.length;
      if (!showMore) {
        return null;
      }
      return /*#__PURE__*/react.createElement("button", {
        disabled: disabled,
        className: cx('showMore', disabled && 'showMore--disabled'),
        onClick: this.onShowMoreClick
      }, translate('showMore', extended));
    }
  }, {
    key: "renderSearchBox",
    value: function renderSearchBox() {
      var _this2 = this;
      var _this$props3 = this.props,
        cx = _this$props3.cx,
        searchForItems = _this$props3.searchForItems,
        isFromSearch = _this$props3.isFromSearch,
        translate = _this$props3.translate,
        items = _this$props3.items,
        selectItem = _this$props3.selectItem;
      var noResults = items.length === 0 && this.state.query !== '' ? /*#__PURE__*/react.createElement("div", {
        className: cx('noResults')
      }, translate('noResults')) : null;
      return /*#__PURE__*/react.createElement("div", {
        className: cx('searchBox')
      }, /*#__PURE__*/react.createElement(SearchBox/* default */.c, {
        currentRefinement: this.state.query,
        refine: function refine(value) {
          _this2.setState({
            query: value
          });
          searchForItems(value);
        },
        focusShortcuts: [],
        translate: translate,
        onSubmit: function onSubmit(e) {
          e.preventDefault();
          e.stopPropagation();
          if (isFromSearch && items.length > 0) {
            selectItem(items[0], _this2.resetQuery);
          }
        }
      }), noResults);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props4 = this.props,
        cx = _this$props4.cx,
        items = _this$props4.items,
        className = _this$props4.className,
        searchable = _this$props4.searchable,
        canRefine = _this$props4.canRefine;
      var searchBox = searchable ? this.renderSearchBox() : null;
      var rootClassName = classnames_default()(cx('', !canRefine && '-noRefinement'), className);
      if (items.length === 0) {
        return /*#__PURE__*/react.createElement("div", {
          className: rootClassName
        }, searchBox);
      }

      // Always limit the number of items we show on screen, since the actual
      // number of retrieved items might vary with the `maxValuesPerFacet` config
      // option.
      return /*#__PURE__*/react.createElement("div", {
        className: rootClassName
      }, searchBox, /*#__PURE__*/react.createElement("ul", {
        className: cx('list', !canRefine && 'list--noRefinement')
      }, items.slice(0, this.getLimit()).map(function (item) {
        return _this3.renderItem(item, _this3.resetQuery);
      })), this.renderShowMore());
    }
  }]);
  return List;
}(react.Component);
List_defineProperty(List, "propTypes", {
  cx: (prop_types_default()).func.isRequired,
  // Only required with showMore.
  translate: (prop_types_default()).func,
  items: itemsPropType,
  renderItem: (prop_types_default()).func.isRequired,
  selectItem: (prop_types_default()).func,
  className: (prop_types_default()).string,
  showMore: (prop_types_default()).bool,
  limit: (prop_types_default()).number,
  showMoreLimit: (prop_types_default()).number,
  show: (prop_types_default()).func,
  searchForItems: (prop_types_default()).func,
  searchable: (prop_types_default()).bool,
  isFromSearch: (prop_types_default()).bool,
  canRefine: (prop_types_default()).bool
});
List_defineProperty(List, "defaultProps", {
  className: '',
  isFromSearch: false
});
/* harmony default export */ const components_List = (List);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/RefinementList.js
function RefinementList_typeof(obj) { "@babel/helpers - typeof"; return RefinementList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, RefinementList_typeof(obj); }
function RefinementList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function RefinementList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, RefinementList_toPropertyKey(descriptor.key), descriptor); } }
function RefinementList_createClass(Constructor, protoProps, staticProps) { if (protoProps) RefinementList_defineProperties(Constructor.prototype, protoProps); if (staticProps) RefinementList_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function RefinementList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) RefinementList_setPrototypeOf(subClass, superClass); }
function RefinementList_setPrototypeOf(o, p) { RefinementList_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RefinementList_setPrototypeOf(o, p); }
function RefinementList_createSuper(Derived) { var hasNativeReflectConstruct = RefinementList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = RefinementList_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = RefinementList_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return RefinementList_possibleConstructorReturn(this, result); }; }
function RefinementList_possibleConstructorReturn(self, call) { if (call && (RefinementList_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return RefinementList_assertThisInitialized(self); }
function RefinementList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function RefinementList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function RefinementList_getPrototypeOf(o) { RefinementList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RefinementList_getPrototypeOf(o); }
function RefinementList_defineProperty(obj, key, value) { key = RefinementList_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function RefinementList_toPropertyKey(arg) { var key = RefinementList_toPrimitive(arg, "string"); return RefinementList_typeof(key) === "symbol" ? key : String(key); }
function RefinementList_toPrimitive(input, hint) { if (RefinementList_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (RefinementList_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






var cx = (0,core_utils/* createClassNames */.uG)('RefinementList');
var RefinementList = /*#__PURE__*/function (_Component) {
  RefinementList_inherits(RefinementList, _Component);
  var _super = RefinementList_createSuper(RefinementList);
  function RefinementList() {
    var _this;
    RefinementList_classCallCheck(this, RefinementList);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    RefinementList_defineProperty(RefinementList_assertThisInitialized(_this), "state", {
      query: ''
    });
    RefinementList_defineProperty(RefinementList_assertThisInitialized(_this), "selectItem", function (item, resetQuery) {
      resetQuery();
      _this.props.refine(item.value);
    });
    RefinementList_defineProperty(RefinementList_assertThisInitialized(_this), "renderItem", function (item, resetQuery) {
      var label = _this.props.isFromSearch ? /*#__PURE__*/react.createElement(Highlight/* default */.c, {
        attribute: "label",
        hit: item
      }) : item.label;
      return /*#__PURE__*/react.createElement("label", {
        className: cx('label')
      }, /*#__PURE__*/react.createElement("input", {
        className: cx('checkbox'),
        type: "checkbox",
        checked: item.isRefined,
        onChange: function onChange() {
          return _this.selectItem(item, resetQuery);
        }
      }), /*#__PURE__*/react.createElement("span", {
        className: cx('labelText')
      }, label), ' ', /*#__PURE__*/react.createElement("span", {
        className: cx('count')
      }, item.count.toLocaleString()));
    });
    return _this;
  }
  RefinementList_createClass(RefinementList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        translate = _this$props.translate,
        items = _this$props.items,
        showMore = _this$props.showMore,
        limit = _this$props.limit,
        showMoreLimit = _this$props.showMoreLimit,
        isFromSearch = _this$props.isFromSearch,
        searchForItems = _this$props.searchForItems,
        searchable = _this$props.searchable,
        canRefine = _this$props.canRefine,
        className = _this$props.className;
      return /*#__PURE__*/react.createElement(components_List, {
        renderItem: this.renderItem,
        selectItem: this.selectItem,
        cx: cx,
        translate: translate,
        items: items,
        showMore: showMore,
        limit: limit,
        showMoreLimit: showMoreLimit,
        isFromSearch: isFromSearch,
        searchForItems: searchForItems,
        searchable: searchable,
        canRefine: canRefine,
        className: className,
        query: this.state.query
      });
    }
  }]);
  return RefinementList;
}(react.Component);
RefinementList_defineProperty(RefinementList, "propTypes", {
  translate: (prop_types_default()).func.isRequired,
  refine: (prop_types_default()).func.isRequired,
  searchForItems: (prop_types_default()).func.isRequired,
  searchable: (prop_types_default()).bool,
  createURL: (prop_types_default()).func.isRequired,
  items: prop_types_default().arrayOf(prop_types_default().shape({
    label: (prop_types_default()).string.isRequired,
    value: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
    count: (prop_types_default()).number.isRequired,
    isRefined: (prop_types_default()).bool.isRequired
  })),
  isFromSearch: (prop_types_default()).bool.isRequired,
  canRefine: (prop_types_default()).bool.isRequired,
  showMore: (prop_types_default()).bool,
  limit: (prop_types_default()).number,
  showMoreLimit: (prop_types_default()).number,
  transformItems: (prop_types_default()).func,
  className: (prop_types_default()).string
});
RefinementList_defineProperty(RefinementList, "defaultProps", {
  className: ''
});
/* harmony default export */ const components_RefinementList = ((0,translatable/* default */.c)({
  showMore: function showMore(extended) {
    return extended ? 'Show less' : 'Show more';
  },
  noResults: 'No results',
  submit: null,
  reset: null,
  resetTitle: 'Clear the search query.',
  submitTitle: 'Submit your search query.',
  placeholder: 'Search here…'
})(RefinementList));
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/widgets/RefinementList.js





/**
 * The RefinementList component displays a list that let the end user choose multiple values for a specific facet.
 * @name RefinementList
 * @kind widget
 * @propType {string} attribute - the name of the attribute in the record
 * @propType {boolean} [searchable=false] - true if the component should display an input to search for facet values. <br> In order to make this feature work, you need to make the attribute searchable [using the API](https://www.algolia.com/doc/guides/searching/faceting/?language=js#declaring-a-searchable-attribute-for-faceting) or [the dashboard](https://www.algolia.com/explorer/display/).
 * @propType {string} [operator=or] - How to apply the refinements. Possible values: 'or' or 'and'.
 * @propType {boolean} [showMore=false] - true if the component should display a button that will expand the number of items
 * @propType {number} [limit=10] - the minimum number of displayed items
 * @propType {number} [showMoreLimit=20] - the maximum number of displayed items. Only used when showMore is set to `true`
 * @propType {string[]} [defaultRefinement] - the values of the items selected by default
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @themeKey ais-RefinementList - the root div of the widget
 * @themeKey ais-RefinementList--noRefinement - the root div of the widget when there is no refinement
 * @themeKey ais-RefinementList-searchBox - the search box of the widget. See [the SearchBox documentation](widgets/SearchBox.html#classnames) for the classnames and translation keys of the SearchBox.
 * @themeKey ais-RefinementList-list - the list of refinement items
 * @themeKey ais-RefinementList-item - the refinement list item
 * @themeKey ais-RefinementList-item--selected - the refinement selected list item
 * @themeKey ais-RefinementList-label - the label of each refinement item
 * @themeKey ais-RefinementList-checkbox - the checkbox input of each refinement item
 * @themeKey ais-RefinementList-labelText - the label text of each refinement item
 * @themeKey ais-RefinementList-count - the count of values for each item
 * @themeKey ais-RefinementList-noResults - the div displayed when there are no results
 * @themeKey ais-RefinementList-showMore - the button used to display more categories
 * @themeKey ais-RefinementList-showMore--disabled - the disabled button used to display more categories
 * @translationkey showMore - The label of the show more button. Accepts one parameters, a boolean that is true if the values are expanded
 * @translationkey noResults - The label of the no results text when no search for facet values results are found.
 * @requirements The attribute passed to the `attribute` prop must be present in "attributes for faceting"
 * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
 *
 * If you are using the `searchable` prop, you'll also need to make the attribute searchable using
 * the [dashboard](https://www.algolia.com/explorer/display/) or using the [API](https://www.algolia.com/doc/guides/searching/faceting/#search-for-facet-values).
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, RefinementList } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <RefinementList attribute="brand" />
 *   </InstantSearch>
 * );
 */

var RefinementListWidget = function RefinementListWidget(props) {
  return /*#__PURE__*/react.createElement(PanelCallbackHandler/* default */.c, props, /*#__PURE__*/react.createElement(components_RefinementList, props));
};
/* harmony default export */ const widgets_RefinementList = (connectRefinementList(RefinementListWidget, {
  $$widgetType: 'ais.refinementList'
}));

/***/ }),

/***/ 88544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ widgets_SearchBox)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3268);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createConnector.js
var createConnector = __webpack_require__(79248);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/indexUtils.js
var indexUtils = __webpack_require__(97520);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectSearchBox.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function getId() {
  return 'query';
}
function getCurrentRefinement(props, searchState, context) {
  var id = getId(props);
  var currentRefinement = (0,indexUtils/* getCurrentRefinementValue */.Y3)(props, searchState, context, id, '');
  if (currentRefinement) {
    return currentRefinement;
  }
  return '';
}
function _refine(props, searchState, nextRefinement, context) {
  var id = getId();
  var nextValue = _defineProperty({}, id, nextRefinement);
  var resetPage = true;
  return (0,indexUtils/* refineValue */.Iv)(searchState, nextValue, context, resetPage);
}
function _cleanUp(props, searchState, context) {
  return (0,indexUtils/* cleanUpValue */.AP)(searchState, context, getId());
}

/**
 * connectSearchBox connector provides the logic to build a widget that will
 * let the user search for a query
 * @name connectSearchBox
 * @kind connector
 * @propType {string} [defaultRefinement] - Provide a default value for the query
 * @providedPropType {function} refine - a function to change the current query
 * @providedPropType {string} currentRefinement - the current query used
 * @providedPropType {boolean} isSearchStalled - a flag that indicates if InstantSearch has detected that searches are stalled
 */
/* harmony default export */ const connectSearchBox = ((0,createConnector/* default */.c)({
  displayName: 'AlgoliaSearchBox',
  $$type: 'ais.searchBox',
  propTypes: {
    defaultRefinement: (prop_types_default()).string
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    return {
      currentRefinement: getCurrentRefinement(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      isSearchStalled: searchResults.isSearchStalled
    };
  },
  refine: function refine(props, searchState, nextRefinement) {
    return _refine(props, searchState, nextRefinement, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    return _cleanUp(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
    return searchParameters.setQuery(getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }));
  },
  getMetadata: function getMetadata(props, searchState) {
    var id = getId(props);
    var currentRefinement = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    return {
      id: id,
      index: (0,indexUtils/* getIndexId */._W)({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      items: currentRefinement === null ? [] : [{
        label: "".concat(id, ": ").concat(currentRefinement),
        value: function value(nextState) {
          return _refine(props, nextState, '', {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          });
        },
        currentRefinement: currentRefinement
      }]
    };
  }
}));
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/SearchBox.js
var SearchBox = __webpack_require__(93988);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/widgets/SearchBox.js



/**
 * The SearchBox component displays a search box that lets the user search for a specific query.
 * @name SearchBox
 * @kind widget
 * @propType {string[]} [focusShortcuts=['s','/']] - List of keyboard shortcuts that focus the search box. Accepts key names and key codes.
 * @propType {boolean} [autoFocus=false] - Should the search box be focused on render?
 * @propType {boolean} [searchAsYouType=true] - Should we search on every change to the query? If you disable this option, new searches will only be triggered by clicking the search button or by pressing the enter key while the search box is focused.
 * @propType {function} [onSubmit] - Intercept submit event sent from the SearchBox form container.
 * @propType {function} [onReset] - Listen to `reset` event sent from the SearchBox form container.
 * @propType {function} [on*] - Listen to any events sent from the search input itself.
 * @propType {node} [submit] - Change the apparence of the default submit button (magnifying glass).
 * @propType {node} [reset] - Change the apparence of the default reset button (cross).
 * @propType {node} [loadingIndicator] - Change the apparence of the default loading indicator (spinning circle).
 * @propType {string} [defaultRefinement] - Provide default refinement value when component is mounted.
 * @propType {string} [inputId] - The id of the search input
 * @propType {boolean} [showLoadingIndicator=false] - Display that the search is loading. This only happens after a certain amount of time to avoid a blinking effect. This timer can be configured with `stalledSearchDelay` props on <InstantSearch>. By default, the value is 200ms.
 * @themeKey ais-SearchBox - the root div of the widget
 * @themeKey ais-SearchBox-form - the wrapping form
 * @themeKey ais-SearchBox-input - the search input
 * @themeKey ais-SearchBox-submit - the submit button
 * @themeKey ais-SearchBox-submitIcon - the default magnifier icon used with the search input
 * @themeKey ais-SearchBox-reset - the reset button used to clear the content of the input
 * @themeKey ais-SearchBox-resetIcon - the default reset icon used inside the reset button
 * @themeKey ais-SearchBox-loadingIndicator - the loading indicator container
 * @themeKey ais-SearchBox-loadingIcon - the default loading icon
 * @translationkey submitTitle - The submit button title
 * @translationkey resetTitle - The reset button title
 * @translationkey placeholder - The label of the input placeholder
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SearchBox />
 *   </InstantSearch>
 * );
 */

/* harmony default export */ const widgets_SearchBox = (connectSearchBox(SearchBox/* default */.c, {
  $$widgetType: 'ais.searchBox'
}));

/***/ }),

/***/ 75988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ widgets_Snippet)
});

// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectHighlight.js
var connectHighlight = __webpack_require__(55296);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/core/utils.js
var utils = __webpack_require__(50512);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/Highlighter.js
var Highlighter = __webpack_require__(4760);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/Snippet.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var cx = (0,utils/* createClassNames */.uG)('Snippet');
var Snippet = function Snippet(props) {
  return /*#__PURE__*/react.createElement(Highlighter/* default */.c, _extends({}, props, {
    highlightProperty: "_snippetResult",
    cx: cx
  }));
};
/* harmony default export */ const components_Snippet = (Snippet);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/widgets/Snippet.js



/**
 * Renders any attribute from an hit into its highlighted snippet form when relevant.
 *
 * Read more about it in the [Highlighting results](guide/Highlighting_results.html) guide.
 * @name Snippet
 * @kind widget
 * @requirements To use this widget, the attribute name passed to the `attribute` prop must be
 * present in "Attributes to snippet" on the Algolia dashboard or configured as `attributesToSnippet`
 * via a set settings call to the Algolia API.
 * @propType {string} attribute - location of the highlighted snippet attribute in the hit (the corresponding element can be either a string or an array of strings)
 * @propType {object} hit - hit object containing the highlighted snippet attribute
 * @propType {string} [tagName='em'] - tag to be used for highlighted parts of the attribute
 * @propType {string} [nonHighlightedTagName='span'] - tag to be used for the parts of the hit that are not highlighted
 * @propType {node} [separator=',<space>'] - symbol used to separate the elements of the array in case the attribute points to an array of strings.
 * @themeKey ais-Snippet - the root span of the widget
 * @themeKey ais-Snippet-highlighted - the highlighted text
 * @themeKey ais-Snippet-nonHighlighted - the normal text
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox, Hits, Snippet } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const Hit = ({ hit }) => (
 *   <div>
 *     <Snippet attribute="description" hit={hit} />
 *   </div>
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SearchBox defaultRefinement="adjustable" />
 *     <Hits hitComponent={Hit} />
 *   </InstantSearch>
 * );
 */

/* harmony default export */ const widgets_Snippet = ((0,connectHighlight/* default */.c)(components_Snippet, {
  $$widgetType: 'ais.snippet'
}));

/***/ }),

/***/ 50024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ widgets_Stats)
});

// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createConnector.js
var createConnector = __webpack_require__(79248);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/indexUtils.js
var indexUtils = __webpack_require__(97520);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectStats.js

// @ts-ignore


/**
 * connectStats connector provides the logic to build a widget that will
 *  displays algolia search statistics (hits number and processing time).
 * @name connectStats
 * @kind connector
 * @providedPropType {number} nbHits - number of hits returned by Algolia.
 * @providedPropType {number} nbSortedHits - number of sorted hits returned by Algolia.
 * @providedPropType {number} processingTimeMS - the time in ms took by Algolia to search for results.
 */
/* harmony default export */ const connectStats = ((0,createConnector/* default */.c)({
  displayName: 'AlgoliaStats',
  $$type: 'ais.stats',
  getProvidedProps: function getProvidedProps(props, _searchState, searchResults) {
    var results = (0,indexUtils/* getResults */.yO)(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    if (!results) {
      return null;
    }
    return {
      areHitsSorted: results.appliedRelevancyStrictness !== undefined && results.appliedRelevancyStrictness > 0 && results.nbHits !== results.nbSortedHits,
      nbHits: results.nbHits,
      nbSortedHits: results.nbSortedHits,
      processingTimeMS: results.processingTimeMS
    };
  }
}));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(82084);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3268);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/core/translatable.js
var translatable = __webpack_require__(61232);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-dom/dist/es/core/utils.js
var utils = __webpack_require__(50512);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/components/Stats.js





var cx = (0,utils/* createClassNames */.uG)('Stats');
var Stats = function Stats(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    areHitsSorted = _ref.areHitsSorted,
    nbHits = _ref.nbHits,
    nbSortedHits = _ref.nbSortedHits,
    processingTimeMS = _ref.processingTimeMS,
    translate = _ref.translate;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(cx(''), className)
  }, /*#__PURE__*/react.createElement("span", {
    className: cx('text')
  }, translate('stats', nbHits, processingTimeMS, nbSortedHits, areHitsSorted)));
};
Stats.propTypes = {
  className: (prop_types_default()).string,
  areHitsSorted: (prop_types_default()).bool.isRequired,
  nbHits: (prop_types_default()).number.isRequired,
  nbSortedHits: (prop_types_default()).number,
  processingTimeMS: (prop_types_default()).number.isRequired,
  translate: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_Stats = ((0,translatable/* default */.c)({
  stats: function stats(n, ms, nSorted, areHitsSorted) {
    return areHitsSorted && n !== nSorted ? "".concat(nSorted.toLocaleString(), " relevant results sorted out of ").concat(n.toLocaleString(), " found in ").concat(ms.toLocaleString(), "ms") : "".concat(n.toLocaleString(), " results found in ").concat(ms.toLocaleString(), "ms");
  }
})(Stats));
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-dom/dist/es/widgets/Stats.js



/**
 * The Stats component displays the total number of matching hits and the time it took to get them (time spent in the Algolia server) if `relevancyStrictness` is `undefined`. Displays the total number of matching sorted hits out of the matching hits and the time it took to get them (time spent in the Algolia server) otherwise.
 * @name Stats
 * @kind widget
 * @themeKey ais-Stats - the root div of the widget
 * @themeKey ais-Stats-text - the text of the widget - the count of items for each item
 * @translationkey stats - The string displayed by the stats widget. You get function(n, ms, nSorted, areHitsSorted) and you need to return a string. `n` is a number of hits retrieved, `ms` is a processed time, `nSorted` is a number of sorted hits retrieved, `areHitsSorted` is a boolean translating a `relevancyStrictness` set between 0 and 100.
 * @example
 * import React from 'react';
 * import { InstantSearch, Stats, Hits } from 'react-instantsearch-dom';
 * import algoliasearch from 'algoliasearch/lite';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Stats />
 *     <Hits />
 *   </InstantSearch>
 * );
 */

/* harmony default export */ const widgets_Stats = (connectStats(components_Stats, {
  $$widgetType: 'ais.stats'
}));

/***/ }),

/***/ 82084:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

}]);