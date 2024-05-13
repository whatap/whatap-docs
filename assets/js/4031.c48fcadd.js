(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[4031],{

/***/ 72733:
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

/***/ 82549:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(86547)) :
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

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

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
        var PACKAGE_VERSION = '0.38.0';
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
    var meilisearch_umd$1 = /*@__PURE__*/getDefaultExportFromCjs(meilisearch_umd);

    var meilisearch_umd$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), meilisearch_umd, {
        'default': meilisearch_umd$1
    }));

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
                var _a = attributeMatch.slice(1), attribute_1 = _a[0], dirtyOperator = _a[1], valueEnd = _a[2];
                var operatorMatch = dirtyOperator.match(/^([<!>]?=|<|>|:){1}(.*)/) || [
                    '',
                    '',
                ];
                var _b = operatorMatch.slice(1), operator_1 = _b[0], valueStart = _b[1];
                var cleanedValue = valueStart + valueEnd;
                return [attribute_1, operator_1, cleanedValue];
            }
            return [filter, '', ''];
        };
        var _a = splitNumericFilter(), attribute = _a[0], operator = _a[1], value = _a[2];
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
        var regex = /[^:]+:(?:asc|desc)/g;
        var sortRules = [];
        var match;
        while ((match = regex.exec(sortStr)) !== null) {
            sortRules.push(match[0]);
        }
        return sortRules.map(function (str) { return str.replace(/^,+|,+$/, ''); });
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

    var PACKAGE_VERSION = '0.17.0';

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
            meiliSearchInstance: meilisearchClient,
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
    exports.meilisearch = meilisearch_umd$2;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 74103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AlgoliaSearchHelper = __webpack_require__(36571);
var RecommendParameters = __webpack_require__(19127);
var SearchParameters = __webpack_require__(33371);
var SearchResults = __webpack_require__(67691);

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
 * @param {SearchResultsOptions|object} searchResultsOptions an object defining the options to use when creating the search results.
 * @return {AlgoliaSearchHelper} The helper instance
 */
function algoliasearchHelper(client, index, opts, searchResultsOptions) {
  return new AlgoliaSearchHelper(client, index, opts, searchResultsOptions);
}

/**
 * The version currently used
 * @member module:algoliasearchHelper.version
 * @type {number}
 */
algoliasearchHelper.version = __webpack_require__(16938);

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
 * Constructor for the object containing all the parameters for Recommend.
 * @member module:algoliasearchHelper.RecommendParameters
 * @type {RecommendParameters}
 */
algoliasearchHelper.RecommendParameters = RecommendParameters;

/**
 * Constructor for the object containing the results of the search.
 * @member module:algoliasearchHelper.SearchResults
 * @type {SearchResults}
 */
algoliasearchHelper.SearchResults = SearchResults;

module.exports = algoliasearchHelper;


/***/ }),

/***/ 46732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var EventEmitter = __webpack_require__(72733);

var inherits = __webpack_require__(73014);

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
 * @param {function} fn the function to create the derived state for search
 * @param {function} recommendFn the function to create the derived state for recommendations
 */
function DerivedHelper(mainHelper, fn, recommendFn) {
  this.main = mainHelper;
  this.fn = fn;
  this.recommendFn = recommendFn;
  this.lastResults = null;
  this.lastRecommendResults = null;
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

DerivedHelper.prototype.getModifiedRecommendState = function (parameters) {
  return this.recommendFn(parameters);
};

module.exports = DerivedHelper;


/***/ }),

/***/ 19127:
/***/ ((module) => {

"use strict";


/**
 * RecommendParameters is the data structure that contains all the information
 * usable for getting recommendations from the Algolia API. It doesn't do the
 * search itself, nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It
 * will be provided when needed.
 * @constructor
 * @classdesc contains all the parameters for recommendations
 * @param {RecommendParametersOptions} opts the options to create the object
 */
function RecommendParameters(opts) {
  opts = opts || {};
  this.params = opts.params || [];
}

RecommendParameters.prototype = {
  constructor: RecommendParameters,

  addParams: function (params) {
    var newParams = this.params.slice();
    var existingParamsIndex = this.params.findIndex(function (currentParams) {
      return currentParams.$$id === params.$$id;
    });

    if (existingParamsIndex !== -1) {
      newParams.splice(existingParamsIndex, 1, params);
    } else {
      newParams.push(params);
    }

    return new RecommendParameters({ params: newParams });
  },

  removeParams: function (id) {
    return new RecommendParameters({
      params: this.params.filter(function (param) {
        return param.$$id !== id;
      }),
    });
  },

  addFrequentlyBoughtTogether: function (params) {
    return this.addParams(
      Object.assign({}, params, { model: 'bought-together' })
    );
  },

  addRelatedProducts: function (params) {
    return this.addParams(
      Object.assign({}, params, { model: 'related-products' })
    );
  },

  addTrendingItems: function (params) {
    return this.addParams(
      Object.assign({}, params, { model: 'trending-items' })
    );
  },

  addTrendingFacets: function (params) {
    return this.addParams(
      Object.assign({}, params, { model: 'trending-facets' })
    );
  },

  addLookingSimilar: function (params) {
    return this.addParams(
      Object.assign({}, params, { model: 'looking-similar' })
    );
  },

  _buildQueries: function (indexName) {
    return this.params.map(function (params) {
      var query = Object.assign({}, params, { indexName: indexName });
      delete query.$$id;

      return query;
    });
  },
};

module.exports = RecommendParameters;


/***/ }),

/***/ 44054:
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

var defaultsPure = __webpack_require__(29110);
var objectHasKeys = __webpack_require__(40317);
var omit = __webpack_require__(21383);

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

/***/ 33371:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var defaultsPure = __webpack_require__(29110);
var find = __webpack_require__(20849);
var intersection = __webpack_require__(14843);
var merge = __webpack_require__(44728);
var objectHasKeys = __webpack_require__(40317);
var omit = __webpack_require__(21383);
var valToNumber = __webpack_require__(17507);
var isValidUserToken = __webpack_require__(72208);

var RefinementList = __webpack_require__(44054);

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

  return merge(partialState, numbers);
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

/***/ 76673:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = generateTrees;

var fv = __webpack_require__(2909);
var find = __webpack_require__(20849);
var prepareHierarchicalFacetSortBy = __webpack_require__(7577);
var orderBy = __webpack_require__(38601);
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

/***/ 67691:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var compact = __webpack_require__(1346);
var defaultsPure = __webpack_require__(29110);
var fv = __webpack_require__(2909);
var find = __webpack_require__(20849);
var findIndex = __webpack_require__(43917);
var formatSort = __webpack_require__(7577);
var merge = __webpack_require__(44728);
var orderBy = __webpack_require__(38601);
var escapeFacetValue = fv.escapeFacetValue;
var unescapeFacetValue = fv.unescapeFacetValue;

var generateHierarchicalTree = __webpack_require__(76673);

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

/**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {SearchParameters} state state that led to the response
 * @param {array.<object>} results the results from algolia client
 * @param {object} options options to control results content
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
  var opts = merge(
    {
      persistHierarchicalRootCount: false,
    },
    options
  );
  Object.keys(opts).forEach(function (key) {
    self[key] = opts[key];
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
        // @MAJOR: remove this legacy behaviour in next major version
        var defaultData = {};

        if (
          currentRefinement.length > 0 &&
          !self.persistHierarchicalRootCount
        ) {
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
  item.isRefined =
    item.name === (currentRefinement[depth] && currentRefinement[depth].trim());
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

/***/ 36571:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var EventEmitter = __webpack_require__(72733);

var DerivedHelper = __webpack_require__(46732);
var escapeFacetValue = (__webpack_require__(2909).escapeFacetValue);
var inherits = __webpack_require__(73014);
var merge = __webpack_require__(44728);
var objectHasKeys = __webpack_require__(40317);
var omit = __webpack_require__(21383);
var RecommendParameters = __webpack_require__(19127);
var requestBuilder = __webpack_require__(49228);
var SearchParameters = __webpack_require__(33371);
var SearchResults = __webpack_require__(67691);
var version = __webpack_require__(16938);

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
 * @param {SearchResultsOptions|object} searchResultsOptions an object defining the options to use when creating the search results.
 */
function AlgoliaSearchHelper(client, index, options, searchResultsOptions) {
  if (typeof client.addAlgoliaAgent === 'function') {
    client.addAlgoliaAgent('JS Helper (' + version + ')');
  }

  this.setClient(client);
  var opts = options || {};
  opts.index = index;
  this.state = SearchParameters.make(opts);
  this.recommendState = new RecommendParameters({
    params: opts.recommendState,
  });
  this.lastResults = null;
  this.lastRecommendResults = null;
  this._queryId = 0;
  this._recommendQueryId = 0;
  this._lastQueryIdReceived = -1;
  this._lastRecommendQueryIdReceived = -1;
  this.derivedHelpers = [];
  this._currentNbQueries = 0;
  this._currentNbRecommendQueries = 0;
  this._searchResultsOptions = searchResultsOptions;
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
 * Sends the recommendation queries set in the state. When the method is
 * called, it triggers a `fetch` event. The results will be available through
 * the `result` event. If an error occurs, an `error` will be fired instead.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires fetch
 * @fires result
 * @fires error
 * @chainable
 */
AlgoliaSearchHelper.prototype.recommend = function () {
  this._recommend();
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
 * Adds a "frequently bought together" recommendation query.
 *
 * @param {FrequentlyBoughtTogetherQuery} params the parameters for the recommendation
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFrequentlyBoughtTogether = function (params) {
  this._recommendChange({
    state: this.recommendState.addFrequentlyBoughtTogether(params),
  });

  return this;
};

/**
 * Adds a "related products" recommendation query.
 *
 * @param {RelatedProductsQuery} params the parameters for the recommendation
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addRelatedProducts = function (params) {
  this._recommendChange({
    state: this.recommendState.addRelatedProducts(params),
  });

  return this;
};

/**
 * Adds a "trending items" recommendation query.
 *
 * @param {TrendingItemsQuery} params the parameters for the recommendation
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addTrendingItems = function (params) {
  this._recommendChange({
    state: this.recommendState.addTrendingItems(params),
  });

  return this;
};

/**
 * Adds a "trending facets" recommendation query.
 *
 * @param {TrendingFacetsQuery} params the parameters for the recommendation
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addTrendingFacets = function (params) {
  this._recommendChange({
    state: this.recommendState.addTrendingFacets(params),
  });

  return this;
};

/**
 * Adds a "looking similar" recommendation query.
 *
 * @param {LookingSimilarQuery} params the parameters for the recommendation
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addLookingSimilar = function (params) {
  this._recommendChange({
    state: this.recommendState.addLookingSimilar(params),
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
 * Removes a "frequently bought together" recommendation query.
 *
 * @param {string} id identifier of the recommendation widget
 * @returns {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFrequentlyBoughtTogether = function (id) {
  this._recommendChange({
    state: this.recommendState.removeParams(id),
  });

  return this;
};

/**
 * Removes a "related products" recommendation query.
 *
 * @param {string} id identifier of the recommendation widget
 * @returns {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeRelatedProducts = function (id) {
  this._recommendChange({
    state: this.recommendState.removeParams(id),
  });

  return this;
};

/**
 * Removes a "trending items" recommendation query.
 *
 * @param {string} id identifier of the recommendation widget
 * @returns {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeTrendingItems = function (id) {
  this._recommendChange({
    state: this.recommendState.removeParams(id),
  });

  return this;
};

/**
 * Removes a "trending facets" recommendation query.
 *
 * @param {string} id identifier of the recommendation widget
 * @returns {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeTrendingFacets = function (id) {
  this._recommendChange({
    state: this.recommendState.removeParams(id),
  });

  return this;
};

/**
 * Removes a "looking similar" recommendation query.
 *
 * @param {string} id identifier of the recommendation widget
 * @returns {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeLookingSimilar = function (id) {
  this._recommendChange({
    state: this.recommendState.removeParams(id),
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

AlgoliaSearchHelper.prototype._recommend = function () {
  var searchState = this.state;
  var recommendState = this.recommendState;
  var index = this.getIndex();
  var states = [{ state: recommendState, index: index, helper: this }];

  this.emit('fetch', {
    recommend: {
      state: recommendState,
      results: this.lastRecommendResults,
    },
  });

  var derivedQueries = this.derivedHelpers.map(function (derivedHelper) {
    var derivedIndex = derivedHelper.getModifiedState(searchState).index;
    if (!derivedIndex) {
      return [];
    }

    // Contrary to what is done when deriving the search state, we don't want to
    // provide the current recommend state to the derived helper, as it would
    // inherit unwanted queries. We instead provide an empty recommend state.
    var derivedState = derivedHelper.getModifiedRecommendState(
      new RecommendParameters()
    );
    states.push({
      state: derivedState,
      index: derivedIndex,
      helper: derivedHelper,
    });

    derivedHelper.emit('fetch', {
      recommend: {
        state: derivedState,
        results: derivedHelper.lastRecommendResults,
      },
    });

    return derivedState._buildQueries(derivedIndex);
  });

  var queries = Array.prototype.concat.apply(
    this.recommendState._buildQueries(index),
    derivedQueries
  );

  if (queries.length === 0) {
    return;
  }

  if (
    queries.length > 0 &&
    typeof this.client.getRecommendations === 'undefined'
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      'Please update algoliasearch/lite to the latest version in order to use recommendations widgets.'
    );
    return;
  }

  var queryId = this._recommendQueryId++;
  this._currentNbRecommendQueries++;

  try {
    this.client
      .getRecommendations(queries)
      .then(this._dispatchRecommendResponse.bind(this, queryId, states))
      .catch(this._dispatchRecommendError.bind(this, queryId));
  } catch (error) {
    // If we reach this part, we're in an internal error state
    this.emit('error', {
      error: error,
    });
  }

  return;
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
  // eslint-disable-next-line consistent-this
  var self = this;

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

    helper.lastResults = new SearchResults(
      state,
      specificResults,
      self._searchResultsOptions
    );

    helper.emit('result', {
      results: helper.lastResults,
      state: state,
    });
  });
};

AlgoliaSearchHelper.prototype._dispatchRecommendResponse = function (
  queryId,
  states,
  content
) {
  // @TODO remove the number of outdated queries discarded instead of just one

  if (queryId < this._lastRecommendQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbRecommendQueries -=
    queryId - this._lastRecommendQueryIdReceived;
  this._lastRecommendQueryIdReceived = queryId;

  if (this._currentNbRecommendQueries === 0) this.emit('recommendQueueEmpty');

  var results = content.results.slice();

  states.forEach(function (s) {
    var state = s.state;
    var helper = s.helper;

    if (!s.index) {
      // eslint-disable-next-line no-warning-comments
      // TODO: emit "result" event when events for Recommend are implemented
      helper.emit('recommend:result', {
        results: null,
        state: state,
      });
      return;
    }

    helper.lastRecommendResults = results;

    // eslint-disable-next-line no-warning-comments
    // TODO: emit "result" event when events for Recommend are implemented
    helper.emit('recommend:result', {
      recommend: {
        results: helper.lastRecommendResults,
        state: state,
      },
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

AlgoliaSearchHelper.prototype._dispatchRecommendError = function (
  queryId,
  error
) {
  if (queryId < this._lastRecommendQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbRecommendQueries -=
    queryId - this._lastRecommendQueryIdReceived;
  this._lastRecommendQueryIdReceived = queryId;

  this.emit('error', {
    error: error,
  });

  if (this._currentNbRecommendQueries === 0) this.emit('recommendQueueEmpty');
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

AlgoliaSearchHelper.prototype._recommendChange = function (event) {
  var state = event.state;

  if (state !== this.recommendState) {
    this.recommendState = state;

    // eslint-disable-next-line no-warning-comments
    // TODO: emit "change" event when events for Recommend are implemented
    this.emit('recommend:change', {
      search: {
        results: this.lastResults,
        state: this.state,
      },
      recommend: {
        results: this.lastRecommendResults,
        state: this.recommendState,
      },
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
 * @param {function} recommendFn RecommendParameters -> RecommendParameters
 * @return {DerivedHelper} a new DerivedHelper
 */
AlgoliaSearchHelper.prototype.derive = function (fn, recommendFn) {
  var derivedHelper = new DerivedHelper(this, fn, recommendFn);
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

/***/ 1346:
/***/ ((module) => {

"use strict";


module.exports = function compact(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.filter(Boolean);
};


/***/ }),

/***/ 29110:
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

/***/ 2909:
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

/***/ 20849:
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

/***/ 43917:
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

/***/ 7577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var find = __webpack_require__(20849);

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

/***/ 73014:
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

/***/ 14843:
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

/***/ 44728:
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

/***/ 40317:
/***/ ((module) => {

"use strict";


function objectHasKeys(obj) {
  return obj && Object.keys(obj).length > 0;
}

module.exports = objectHasKeys;


/***/ }),

/***/ 21383:
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

/***/ 38601:
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

/***/ 17507:
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

/***/ 49228:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var merge = __webpack_require__(44728);

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
        facetValues
          .slice()
          .sort()
          .forEach(function (facetValue) {
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

        facetValues
          .slice()
          .sort()
          .forEach(function (facetValue) {
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

/***/ 72208:
/***/ ((module) => {

"use strict";


module.exports = function isValidUserToken(userToken) {
  if (userToken === null) {
    return false;
  }
  return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
};


/***/ }),

/***/ 16938:
/***/ ((module) => {

"use strict";


module.exports = '3.19.0';


/***/ }),

/***/ 29083:
/***/ ((module) => {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ 17087:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var stringify = __webpack_require__(5670);
var parse = __webpack_require__(33192);
var formats = __webpack_require__(29083);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 33192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(92442);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 5670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(92442);
var formats = __webpack_require__(29083);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 92442:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var formats = __webpack_require__(29083);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 1063:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(96540);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 19888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(1063);
} else {}


/***/ }),

/***/ 80045:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ }),

/***/ 64652:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cx: () => (/* binding */ cx)
/* harmony export */ });
function cx() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }
  return classNames.reduce(function (acc, className) {
    if (Array.isArray(className)) {
      return acc.concat(className);
    }
    return acc.concat([className]);
  }, []).filter(Boolean).join(' ');
}

/***/ }),

/***/ 84203:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ checkRendering)
});

;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/getObjectType.js
function getObjectType(object) {
  return Object.prototype.toString.call(object).slice(8, -1);
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/checkRendering.js

function checkRendering(rendering, usage) {
  if (rendering === undefined || typeof rendering !== 'function') {
    throw new Error("The render function is not valid (received type ".concat(getObjectType(rendering), ").\n\n").concat(usage));
  }
}

/***/ }),

/***/ 74243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ createDocumentationMessageGenerator)
/* harmony export */ });
/* unused harmony export createDocumentationLink */
function createDocumentationLink(_ref) {
  var name = _ref.name,
    _ref$connector = _ref.connector,
    connector = _ref$connector === void 0 ? false : _ref$connector;
  return ['https://www.algolia.com/doc/api-reference/widgets/', name, '/js/', connector ? '#connector' : ''].join('');
}
function createDocumentationMessageGenerator() {
  for (var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++) {
    widgets[_key] = arguments[_key];
  }
  var links = widgets.map(function (widget) {
    return createDocumentationLink(widget);
  }).join(', ');
  return function (message) {
    return [message, "See documentation: ".concat(links)].filter(Boolean).join('\n\n');
  };
}

/***/ }),

/***/ 92783:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FU: () => (/* binding */ TAG_PLACEHOLDER),
/* harmony export */   S8: () => (/* binding */ escapeHits),
/* harmony export */   ef: () => (/* binding */ escapeFacets),
/* harmony export */   sn: () => (/* binding */ TAG_REPLACEMENT)
/* harmony export */ });
/* harmony import */ var _escape_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18454);
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31810);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var TAG_PLACEHOLDER = {
  highlightPreTag: '__ais-highlight__',
  highlightPostTag: '__/ais-highlight__'
};
var TAG_REPLACEMENT = {
  highlightPreTag: '<mark>',
  highlightPostTag: '</mark>'
};

// @MAJOR: in the future, this should only escape, not replace
function replaceTagsAndEscape(value) {
  return (0,_escape_html_js__WEBPACK_IMPORTED_MODULE_0__/* .escape */ .i)(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, 'g'), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, 'g'), TAG_REPLACEMENT.highlightPostTag);
}
function recursiveEscape(input) {
  if ((0,_isPlainObject_js__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Q)(input) && typeof input.value !== 'string') {
    return Object.keys(input).reduce(function (acc, key) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, recursiveEscape(input[key])));
    }, {});
  }
  if (Array.isArray(input)) {
    return input.map(recursiveEscape);
  }
  return _objectSpread(_objectSpread({}, input), {}, {
    value: replaceTagsAndEscape(input.value)
  });
}
function escapeHits(hits) {
  if (hits.__escaped === undefined) {
    // We don't override the value on hit because it will mutate the raw results
    // instead we make a shallow copy and we assign the escaped values on it.
    hits = hits.map(function (_ref) {
      var hit = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
      if (hit._highlightResult) {
        hit._highlightResult = recursiveEscape(hit._highlightResult);
      }
      if (hit._snippetResult) {
        hit._snippetResult = recursiveEscape(hit._snippetResult);
      }
      return hit;
    });
    hits.__escaped = true;
  }
  return hits;
}
function escapeFacets(facetHits) {
  return facetHits.map(function (h) {
    return _objectSpread(_objectSpread({}, h), {}, {
      highlighted: replaceTagsAndEscape(h.highlighted)
    });
  });
}

/***/ }),

/***/ 18454:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ escape),
/* harmony export */   x: () => (/* binding */ unescape)
/* harmony export */ });
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/escape.js
 */

// Used to map characters to HTML entities.
var htmlEntities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

// Used to match HTML entities and HTML characters.
var regexUnescapedHtml = /[&<>"']/g;
var regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 */
function escape(value) {
  return value && regexHasUnescapedHtml.test(value) ? value.replace(regexUnescapedHtml, function (character) {
    return htmlEntities[character];
  }) : value;
}

/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/unescape.js
 */

// Used to map HTML entities to characters.
var htmlCharacters = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

// Used to match HTML entities and HTML characters.
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);

/**
 * Converts the HTML entities "&", "<", ">", '"', and "'" in `string` to their
 * characters.
 */
function unescape(value) {
  return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function (character) {
    return htmlCharacters[character];
  }) : value;
}

/***/ }),

/***/ 67438:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ find)
/* harmony export */ });
// We aren't using the native `Array.prototype.find` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `find` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.find` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
function find(items, predicate) {
  var value;
  for (var i = 0; i < items.length; i++) {
    value = items[i];
    // inlined for performance: if (Call(predicate, thisArg, [value, i, list])) {
    if (predicate(value, i, items)) {
      return value;
    }
  }
  return undefined;
}

/***/ }),

/***/ 38796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ getHighlightedParts)
/* harmony export */ });
/* harmony import */ var _escape_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92783);

function getHighlightedParts(highlightedValue) {
  // @MAJOR: this should use TAG_PLACEHOLDER
  var highlightPostTag = _escape_highlight_js__WEBPACK_IMPORTED_MODULE_0__/* .TAG_REPLACEMENT */ .sn.highlightPostTag,
    highlightPreTag = _escape_highlight_js__WEBPACK_IMPORTED_MODULE_0__/* .TAG_REPLACEMENT */ .sn.highlightPreTag;
  var splitByPreTag = highlightedValue.split(highlightPreTag);
  var firstValue = splitByPreTag.shift();
  var elements = !firstValue ? [] : [{
    value: firstValue,
    isHighlighted: false
  }];
  splitByPreTag.forEach(function (split) {
    var splitByPostTag = split.split(highlightPostTag);
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
  return elements;
}

/***/ }),

/***/ 65150:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ getPropertyByPath)
/* harmony export */ });
function getPropertyByPath(object, path) {
  var parts = Array.isArray(path) ? path : path.split('.');
  return parts.reduce(function (current, key) {
    return current && current[key];
  }, object);
}

/***/ }),

/***/ 31810:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ isPlainObject)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/master/isPlainObject.js
 */

function getTag(value) {
  if (value === null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
}
function isObjectLike(value) {
  return _typeof(value) === 'object' && value !== null;
}

/**
 * Checks if `value` is a plain object.
 *
 * A plain object is an object created by the `Object`
 * constructor or with a `[[Prototype]]` of `null`.
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  var proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

/***/ }),

/***/ 47002:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ mergeSearchParameters)
});

;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/findIndex.js
// We aren't using the native `Array.prototype.findIndex` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `findIndex` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.findIndex` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
function findIndex(array, comparator) {
  if (!Array.isArray(array)) {
    return -1;
  }
  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return i;
    }
  }
  return -1;
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/uniq.js
var uniq = __webpack_require__(94176);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var mergeWithRest = function mergeWithRest(left, right) {
  var facets = right.facets,
    disjunctiveFacets = right.disjunctiveFacets,
    facetsRefinements = right.facetsRefinements,
    facetsExcludes = right.facetsExcludes,
    disjunctiveFacetsRefinements = right.disjunctiveFacetsRefinements,
    numericRefinements = right.numericRefinements,
    tagRefinements = right.tagRefinements,
    hierarchicalFacets = right.hierarchicalFacets,
    hierarchicalFacetsRefinements = right.hierarchicalFacetsRefinements,
    ruleContexts = right.ruleContexts,
    rest = _objectWithoutProperties(right, _excluded);
  return left.setQueryParameters(rest);
};

// Merge facets
var mergeFacets = function mergeFacets(left, right) {
  return right.facets.reduce(function (_, name) {
    return _.addFacet(name);
  }, left);
};
var mergeDisjunctiveFacets = function mergeDisjunctiveFacets(left, right) {
  return right.disjunctiveFacets.reduce(function (_, name) {
    return _.addDisjunctiveFacet(name);
  }, left);
};
var mergeHierarchicalFacets = function mergeHierarchicalFacets(left, right) {
  return left.setQueryParameters({
    hierarchicalFacets: right.hierarchicalFacets.reduce(function (facets, facet) {
      var index = findIndex(facets, function (_) {
        return _.name === facet.name;
      });
      if (index === -1) {
        return facets.concat(facet);
      }
      var nextFacets = facets.slice();
      nextFacets.splice(index, 1, facet);
      return nextFacets;
    }, left.hierarchicalFacets)
  });
};

// Merge facet refinements
var mergeTagRefinements = function mergeTagRefinements(left, right) {
  return right.tagRefinements.reduce(function (_, value) {
    return _.addTagRefinement(value);
  }, left);
};
var mergeFacetRefinements = function mergeFacetRefinements(left, right) {
  return left.setQueryParameters({
    facetsRefinements: _objectSpread(_objectSpread({}, left.facetsRefinements), right.facetsRefinements)
  });
};
var mergeFacetsExcludes = function mergeFacetsExcludes(left, right) {
  return left.setQueryParameters({
    facetsExcludes: _objectSpread(_objectSpread({}, left.facetsExcludes), right.facetsExcludes)
  });
};
var mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements(left, right) {
  return left.setQueryParameters({
    disjunctiveFacetsRefinements: _objectSpread(_objectSpread({}, left.disjunctiveFacetsRefinements), right.disjunctiveFacetsRefinements)
  });
};
var mergeNumericRefinements = function mergeNumericRefinements(left, right) {
  return left.setQueryParameters({
    numericRefinements: _objectSpread(_objectSpread({}, left.numericRefinements), right.numericRefinements)
  });
};
var mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements(left, right) {
  return left.setQueryParameters({
    hierarchicalFacetsRefinements: _objectSpread(_objectSpread({}, left.hierarchicalFacetsRefinements), right.hierarchicalFacetsRefinements)
  });
};
var mergeRuleContexts = function mergeRuleContexts(left, right) {
  var ruleContexts = (0,uniq/* uniq */.s)([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));
  if (ruleContexts.length > 0) {
    return left.setQueryParameters({
      ruleContexts: ruleContexts
    });
  }
  return left;
};
var mergeSearchParameters = function mergeSearchParameters() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }
  return parameters.reduce(function (left, right) {
    var hierarchicalFacetsRefinementsMerged = mergeHierarchicalFacetsRefinements(left, right);
    var hierarchicalFacetsMerged = mergeHierarchicalFacets(hierarchicalFacetsRefinementsMerged, right);
    var tagRefinementsMerged = mergeTagRefinements(hierarchicalFacetsMerged, right);
    var numericRefinementsMerged = mergeNumericRefinements(tagRefinementsMerged, right);
    var disjunctiveFacetsRefinementsMerged = mergeDisjunctiveFacetsRefinements(numericRefinementsMerged, right);
    var facetsExcludesMerged = mergeFacetsExcludes(disjunctiveFacetsRefinementsMerged, right);
    var facetRefinementsMerged = mergeFacetRefinements(facetsExcludesMerged, right);
    var disjunctiveFacetsMerged = mergeDisjunctiveFacets(facetRefinementsMerged, right);
    var ruleContextsMerged = mergeRuleContexts(disjunctiveFacetsMerged, right);
    var facetsMerged = mergeFacets(ruleContextsMerged, right);
    return mergeWithRest(facetsMerged, right);
  });
};

/***/ }),

/***/ 82894:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

/***/ }),

/***/ 10793:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ serializePayload)
/* harmony export */ });
/* unused harmony export deserializePayload */
function serializePayload(payload) {
  return btoa(encodeURIComponent(JSON.stringify(payload)));
}
function deserializePayload(serialized) {
  return JSON.parse(decodeURIComponent(atob(serialized)));
}

/***/ }),

/***/ 94176:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ uniq)
/* harmony export */ });
function uniq(array) {
  return array.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

/***/ }),

/***/ 97106:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Configure)
});

// EXTERNAL MODULE: ./node_modules/algoliasearch-helper/index.js
var algoliasearch_helper = __webpack_require__(74103);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(74243);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(82894);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/isPlainObject.js
var isPlainObject = __webpack_require__(31810);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js + 1 modules
var mergeSearchParameters = __webpack_require__(47002);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/configure/connectConfigure.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/**
 * Refine the given search parameters.
 */

var withUsage = (0,documentation/* createDocumentationMessageGenerator */.V)({
  name: 'configure',
  connector: true
});
function getInitialSearchParameters(state, widgetParams) {
  // We leverage the helper internals to remove the `widgetParams` from
  // the state. The function `setQueryParameters` omits the values that
  // are `undefined` on the next state.
  return state.setQueryParameters(Object.keys(widgetParams.searchParameters).reduce(function (acc, key) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, undefined));
  }, {}));
}
var connectConfigure = function connectConfigure() {
  var renderFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop/* noop */.l;
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop/* noop */.l;
  return function (widgetParams) {
    if (!widgetParams || !(0,isPlainObject/* isPlainObject */.Q)(widgetParams.searchParameters)) {
      throw new Error(withUsage('The `searchParameters` option expects an object.'));
    }
    var connectorState = {};
    function refine(helper) {
      return function (searchParameters) {
        // Merge new `searchParameters` with the ones set from other widgets
        var actualState = getInitialSearchParameters(helper.state, widgetParams);
        var nextSearchParameters = (0,mergeSearchParameters/* mergeSearchParameters */.p)(actualState, new algoliasearch_helper.SearchParameters(searchParameters));

        // Update original `widgetParams.searchParameters` to the new refined one
        widgetParams.searchParameters = searchParameters;

        // Trigger a search with the resolved search parameters
        helper.setState(nextSearchParameters).search();
      };
    }
    return {
      $$type: 'ais.configure',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref) {
        var state = _ref.state;
        unmountFn();
        return getInitialSearchParameters(state, widgetParams);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        var _renderState$configur;
        var widgetRenderState = this.getWidgetRenderState(renderOptions);
        return _objectSpread(_objectSpread({}, renderState), {}, {
          configure: _objectSpread(_objectSpread({}, widgetRenderState), {}, {
            widgetParams: _objectSpread(_objectSpread({}, widgetRenderState.widgetParams), {}, {
              searchParameters: (0,mergeSearchParameters/* mergeSearchParameters */.p)(new algoliasearch_helper.SearchParameters((_renderState$configur = renderState.configure) === null || _renderState$configur === void 0 ? void 0 : _renderState$configur.widgetParams.searchParameters), new algoliasearch_helper.SearchParameters(widgetRenderState.widgetParams.searchParameters)).getQueryParams()
            })
          })
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref2) {
        var helper = _ref2.helper;
        if (!connectorState.refine) {
          connectorState.refine = refine(helper);
        }
        return {
          refine: connectorState.refine,
          widgetParams: widgetParams
        };
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(state, _ref3) {
        var uiState = _ref3.uiState;
        return (0,mergeSearchParameters/* mergeSearchParameters */.p)(state, new algoliasearch_helper.SearchParameters(_objectSpread(_objectSpread({}, uiState.configure), widgetParams.searchParameters)));
      },
      getWidgetUiState: function getWidgetUiState(uiState) {
        return _objectSpread(_objectSpread({}, uiState), {}, {
          configure: _objectSpread(_objectSpread({}, uiState.configure), widgetParams.searchParameters)
        });
      }
    };
  };
};
/* harmony default export */ const configure_connectConfigure = (connectConfigure);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/hooks/useConnector.js + 9 modules
var useConnector = __webpack_require__(71291);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/useConfigure.js


function useConfigure(props, additionalWidgetProperties) {
  return (0,useConnector/* useConnector */.Z)(configure_connectConfigure, {
    searchParameters: props
  }, additionalWidgetProperties);
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/components/Configure.js

function Configure(props) {
  useConfigure(props, {
    $$widgetType: 'ais.configure'
  });
  return null;
}

/***/ }),

/***/ 61598:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ InstantSearch_InstantSearch)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/IndexContext.js
var IndexContext = __webpack_require__(91104);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/InstantSearchContext.js
var InstantSearchContext = __webpack_require__(695);
// EXTERNAL MODULE: ./node_modules/@algolia/events/events.js
var events = __webpack_require__(72733);
// EXTERNAL MODULE: ./node_modules/algoliasearch-helper/index.js
var algoliasearch_helper = __webpack_require__(74103);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/helpers/get-insights-anonymous-user-token.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var ANONYMOUS_TOKEN_COOKIE_KEY = '_ALGOLIA';
function getCookie(name) {
  if ((typeof document === "undefined" ? "undefined" : _typeof(document)) !== 'object' || typeof document.cookie !== 'string') {
    return undefined;
  }
  var prefix = "".concat(name, "=");
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(prefix) === 0) {
      return cookie.substring(prefix.length, cookie.length);
    }
  }
  return undefined;
}
function getInsightsAnonymousUserTokenInternal() {
  return getCookie(ANONYMOUS_TOKEN_COOKIE_KEY);
}

/**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 */
function getInsightsAnonymousUserToken() {
   false ? 0 : void 0;
  return getInsightsAnonymousUserTokenInternal();
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/safelyRunOnBrowser.js
// eslint-disable-next-line no-restricted-globals

/**
 * Runs code on browser environments safely.
 */
function safelyRunOnBrowser(callback) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      fallback: function fallback() {
        return undefined;
      }
    },
    fallback = _ref.fallback;
  // eslint-disable-next-line no-restricted-globals
  if (typeof window === 'undefined') {
    return fallback();
  }

  // eslint-disable-next-line no-restricted-globals
  return callback({
    window: window
  });
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(82894);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/getAppIdAndApiKey.js
// typed as any, since it accepts the _real_ js clients, not the interface we otherwise expect
function getAppIdAndApiKey(searchClient) {
  if (searchClient.transporter) {
    // searchClient v4
    var _searchClient$transpo = searchClient.transporter,
      headers = _searchClient$transpo.headers,
      queryParameters = _searchClient$transpo.queryParameters;
    var APP_ID = 'x-algolia-application-id';
    var API_KEY = 'x-algolia-api-key';
    var appId = headers[APP_ID] || queryParameters[APP_ID];
    var apiKey = headers[API_KEY] || queryParameters[API_KEY];
    return [appId, apiKey];
  } else {
    // searchClient v3
    return [searchClient.applicationID, searchClient.apiKey];
  }
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/find.js
var find = __webpack_require__(67438);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/middlewares/createInsightsMiddleware.js
function createInsightsMiddleware_typeof(obj) { "@babel/helpers - typeof"; return createInsightsMiddleware_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createInsightsMiddleware_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return createInsightsMiddleware_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (createInsightsMiddleware_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createInsightsMiddleware_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var ALGOLIA_INSIGHTS_VERSION = '2.13.0';
var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@".concat(ALGOLIA_INSIGHTS_VERSION, "/dist/search-insights.min.js");
function createInsightsMiddleware() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _insightsClient = props.insightsClient,
    insightsInitParams = props.insightsInitParams,
    onEvent = props.onEvent,
    _props$$$internal = props.$$internal,
    $$internal = _props$$$internal === void 0 ? false : _props$$$internal,
    _props$$$automatic = props.$$automatic,
    $$automatic = _props$$$automatic === void 0 ? false : _props$$$automatic;
  var potentialInsightsClient = _insightsClient;
  if (!_insightsClient && _insightsClient !== null) {
    safelyRunOnBrowser(function (_ref) {
      var window = _ref.window;
      var pointer = window.AlgoliaAnalyticsObject || 'aa';
      if (typeof pointer === 'string') {
        potentialInsightsClient = window[pointer];
      }
      if (!potentialInsightsClient) {
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
          window[pointer].version = ALGOLIA_INSIGHTS_VERSION;
          window[pointer].shouldAddScript = true;
        }
        potentialInsightsClient = window[pointer];
      }
    });
  }
  // if still no insightsClient was found, we use a noop
  var insightsClient = potentialInsightsClient || noop/* noop */.l;
  return function (_ref2) {
    var instantSearchInstance = _ref2.instantSearchInstance;
    // remove existing default insights middleware
    // user-provided insights middleware takes precedence
    var existingInsightsMiddlewares = instantSearchInstance.middleware.filter(function (m) {
      return m.instance.$$type === 'ais.insights' && m.instance.$$internal;
    }).map(function (m) {
      return m.creator;
    });
    instantSearchInstance.unuse.apply(instantSearchInstance, _toConsumableArray(existingInsightsMiddlewares));
    var _getAppIdAndApiKey = getAppIdAndApiKey(instantSearchInstance.client),
      _getAppIdAndApiKey2 = _slicedToArray(_getAppIdAndApiKey, 2),
      appId = _getAppIdAndApiKey2[0],
      apiKey = _getAppIdAndApiKey2[1];

    // search-insights.js also throws an error so dev-only clarification is sufficient
     false ? 0 : void 0;
    var queuedUserToken = undefined;
    var queuedAuthenticatedUserToken = undefined;
    var userTokenBeforeInit = undefined;
    var authenticatedUserTokenBeforeInit = undefined;
    var queue = insightsClient.queue;
    if (Array.isArray(queue)) {
      // Context: The umd build of search-insights is asynchronously loaded by the snippet.
      //
      // When user calls `aa('setUserToken', 'my-user-token')` before `search-insights` is loaded,
      // ['setUserToken', 'my-user-token'] gets stored in `aa.queue`.
      // Whenever `search-insights` is finally loaded, it will process the queue.
      //
      // But here's the reason why we handle it here:
      // At this point, even though `search-insights` is not loaded yet,
      // we still want to read the token from the queue.
      // Otherwise, the first search call will be fired without the token.
      var _map = ['setUserToken', 'setAuthenticatedUserToken'].map(function (key) {
        var _ref3 = (0,find/* find */.I)(queue.slice().reverse(), function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 1),
              method = _ref6[0];
            return method === key;
          }) || [],
          _ref4 = _slicedToArray(_ref3, 2),
          value = _ref4[1];
        return value;
      });
      var _map2 = _slicedToArray(_map, 2);
      queuedUserToken = _map2[0];
      queuedAuthenticatedUserToken = _map2[1];
    }

    // If user called `aa('setUserToken')` or `aa('setAuthenticatedUserToken')`
    // before creating the Insights middleware, we temporarily store the token
    // and set it later on.
    //
    // Otherwise, the `init` call might override them with anonymous user token.
    insightsClient('getUserToken', null, function (_error, userToken) {
      userTokenBeforeInit = normalizeUserToken(userToken);
    });
    insightsClient('getAuthenticatedUserToken', null, function (_error, userToken) {
      authenticatedUserTokenBeforeInit = normalizeUserToken(userToken);
    });

    // Only `init` if the `insightsInitParams` option is passed or
    // if the `insightsClient` version doesn't supports optional `init` calling.
    if (insightsInitParams || !isModernInsightsClient(insightsClient)) {
      insightsClient('init', _objectSpread({
        appId: appId,
        apiKey: apiKey,
        partial: true
      }, insightsInitParams));
    }
    var initialParameters;
    var helper;
    return {
      $$type: 'ais.insights',
      $$internal: $$internal,
      $$automatic: $$automatic,
      onStateChange: function onStateChange() {},
      subscribe: function subscribe() {
        if (!insightsClient.shouldAddScript) return;
        var errorMessage = '[insights middleware]: could not load search-insights.js. Please load it manually following https://alg.li/insights-init';
        try {
          var script = document.createElement('script');
          script.async = true;
          script.src = ALGOLIA_INSIGHTS_SRC;
          script.onerror = function () {
            instantSearchInstance.emit('error', new Error(errorMessage));
          };
          document.body.appendChild(script);
          insightsClient.shouldAddScript = false;
        } catch (cause) {
          insightsClient.shouldAddScript = false;
          instantSearchInstance.emit('error', new Error(errorMessage));
        }
      },
      started: function started() {
        insightsClient('addAlgoliaAgent', 'insights-middleware');
        helper = instantSearchInstance.mainHelper;
        initialParameters = {
          userToken: helper.state.userToken,
          clickAnalytics: helper.state.clickAnalytics
        };

        // We don't want to force clickAnalytics when the insights is enabled from the search response.
        // This means we don't enable insights for indices that don't opt in
        if (!$$automatic) {
          helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread(_objectSpread({}, helper.state), {}, {
            clickAnalytics: true
          }));
        }
        if (!$$internal) {
          instantSearchInstance.scheduleSearch();
        }
        var setUserTokenToSearch = function setUserTokenToSearch(userToken) {
          var immediate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var normalizedUserToken = normalizeUserToken(userToken);
          if (!normalizedUserToken) {
            return;
          }
          var existingToken = helper.state.userToken;
          function applyToken() {
            helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread(_objectSpread({}, helper.state), {}, {
              userToken: normalizedUserToken
            }));
            if (existingToken && existingToken !== userToken) {
              instantSearchInstance.scheduleSearch();
            }
          }

          // Delay the token application to the next render cycle
          if (!immediate) {
            setTimeout(applyToken, 0);
          } else {
            applyToken();
          }
        };
        var anonymousUserToken = getInsightsAnonymousUserTokenInternal();
        if (anonymousUserToken) {
          // When `aa('init', { ... })` is called, it creates an anonymous user token in cookie.
          // We can set it as userToken.
          setUserTokenToSearch(anonymousUserToken, true);
        }
        function setUserToken(token, userToken, authenticatedUserToken) {
          setUserTokenToSearch(token, true);
          if (userToken) {
            insightsClient('setUserToken', userToken);
          }
          if (authenticatedUserToken) {
            insightsClient('setAuthenticatedUserToken', authenticatedUserToken);
          }
        }

        // We consider the `userToken` or `authenticatedUserToken` before an
        // `init` call of higher importance than one from the queue.
        var tokenBeforeInit = authenticatedUserTokenBeforeInit || userTokenBeforeInit;
        var queuedToken = queuedAuthenticatedUserToken || queuedUserToken;
        if (tokenBeforeInit) {
          setUserToken(tokenBeforeInit, userTokenBeforeInit, authenticatedUserTokenBeforeInit);
        } else if (queuedToken) {
          setUserToken(queuedToken, queuedUserToken, queuedAuthenticatedUserToken);
        }

        // This updates userToken which is set explicitly by `aa('setUserToken', userToken)`
        insightsClient('onUserTokenChange', setUserTokenToSearch, {
          immediate: true
        });

        // This updates userToken which is set explicitly by `aa('setAuthenticatedtUserToken', authenticatedUserToken)`
        insightsClient('onAuthenticatedUserTokenChange', function (authenticatedUserToken) {
          // If we're unsetting the `authenticatedUserToken`, we revert to the `userToken`
          if (!authenticatedUserToken) {
            insightsClient('getUserToken', null, function (_, userToken) {
              setUserTokenToSearch(userToken);
            });
          }
          setUserTokenToSearch(authenticatedUserToken);
        }, {
          immediate: true
        });
        var insightsClientWithLocalCredentials = insightsClient;
        if (isModernInsightsClient(insightsClient)) {
          insightsClientWithLocalCredentials = function insightsClientWithLocalCredentials(method, payload) {
            var extraParams = {
              headers: {
                'X-Algolia-Application-Id': appId,
                'X-Algolia-API-Key': apiKey
              }
            };

            // @ts-ignore we are calling this only when we know that the client actually is correct
            return insightsClient(method, payload, extraParams);
          };
        }
        instantSearchInstance.sendEventToInsights = function (event) {
          if (onEvent) {
            onEvent(event, insightsClientWithLocalCredentials);
          } else if (event.insightsMethod) {
            // Source is used to differentiate events sent by instantsearch from those sent manually.
            event.payload.algoliaSource = ['instantsearch'];
            if ($$automatic) {
              event.payload.algoliaSource.push('instantsearch-automatic');
            }
            if (event.eventModifier === 'internal') {
              event.payload.algoliaSource.push('instantsearch-internal');
            }
            insightsClientWithLocalCredentials(event.insightsMethod, event.payload);
             false ? 0 : void 0;
          } else {
             false ? 0 : void 0;
          }
        };
      },
      unsubscribe: function unsubscribe() {
        insightsClient('onUserTokenChange', undefined);
        insightsClient('onAuthenticatedUserTokenChange', undefined);
        instantSearchInstance.sendEventToInsights = noop/* noop */.l;
        if (helper && initialParameters) {
          helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread(_objectSpread({}, helper.state), initialParameters));
          instantSearchInstance.scheduleSearch();
        }
      }
    };
  };
}

/**
 * Determines if a given insights `client` supports the optional call to `init`
 * and the ability to set credentials via extra parameters when sending events.
 */
function isModernInsightsClient(client) {
  var _split$map = (client.version || '').split('.').map(Number),
    _split$map2 = _slicedToArray(_split$map, 2),
    major = _split$map2[0],
    minor = _split$map2[1];

  /* eslint-disable @typescript-eslint/naming-convention */
  var v3 = major >= 3;
  var v2_6 = major === 2 && minor >= 6;
  var v1_10 = major === 1 && minor >= 10;
  /* eslint-enable @typescript-eslint/naming-convention */

  return v3 || v2_6 || v1_10;
}

/**
 * While `search-insights` supports both string and number user tokens,
 * the Search API only accepts strings. This function normalizes the user token.
 */
function normalizeUserToken(userToken) {
  if (!userToken) {
    return undefined;
  }
  return typeof userToken === 'number' ? userToken.toString() : userToken;
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/render-args.js
function createInitArgs(instantSearchInstance, parent, uiState) {
  var helper = parent.getHelper();
  return {
    uiState: uiState,
    helper: helper,
    parent: parent,
    instantSearchInstance: instantSearchInstance,
    state: helper.state,
    renderState: instantSearchInstance.renderState,
    templatesConfig: instantSearchInstance.templatesConfig,
    createURL: parent.createURL,
    scopedResults: [],
    searchMetadata: {
      isSearchStalled: instantSearchInstance.status === 'stalled'
    },
    status: instantSearchInstance.status,
    error: instantSearchInstance.error
  };
}
function createRenderArgs(instantSearchInstance, parent) {
  var results = parent.getResults();
  var helper = parent.getHelper();
  return {
    helper: helper,
    parent: parent,
    instantSearchInstance: instantSearchInstance,
    results: results,
    scopedResults: parent.getScopedResults(),
    state: results ? results._state : helper.state,
    renderState: instantSearchInstance.renderState,
    templatesConfig: instantSearchInstance.templatesConfig,
    createURL: parent.createURL,
    searchMetadata: {
      isSearchStalled: instantSearchInstance.status === 'stalled'
    },
    status: instantSearchInstance.status,
    error: instantSearchInstance.error
  };
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/middlewares/createMetadataMiddleware.js

function extractWidgetPayload(widgets, instantSearchInstance, payload) {
  var initOptions = createInitArgs(instantSearchInstance, instantSearchInstance.mainIndex, instantSearchInstance._initialUiState);
  widgets.forEach(function (widget) {
    var widgetParams = {};
    if (widget.getWidgetRenderState) {
      var renderState = widget.getWidgetRenderState(initOptions);
      if (renderState && renderState.widgetParams) {
        // casting, as we just earlier checked widgetParams exists, and thus an object
        widgetParams = renderState.widgetParams;
      }
    }

    // since we destructure in all widgets, the parameters with defaults are set to "undefined"
    var params = Object.keys(widgetParams).filter(function (key) {
      return widgetParams[key] !== undefined;
    });
    payload.widgets.push({
      type: widget.$$type,
      widgetType: widget.$$widgetType,
      params: params
    });
    if (widget.$$type === 'ais.index') {
      extractWidgetPayload(widget.getWidgets(), instantSearchInstance, payload);
    }
  });
}
function isMetadataEnabled() {
  return safelyRunOnBrowser(function (_ref) {
    var _window$navigator, _window$navigator$use;
    var window = _ref.window;
    return ((_window$navigator = window.navigator) === null || _window$navigator === void 0 ? void 0 : (_window$navigator$use = _window$navigator.userAgent) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.indexOf('Algolia Crawler')) > -1;
  }, {
    fallback: function fallback() {
      return false;
    }
  });
}

/**
 * Exposes the metadata of mounted widgets in a custom
 * `<meta name="instantsearch:widgets" />` tag. The metadata per widget is:
 * - applied parameters
 * - widget name
 * - connector name
 */
function createMetadataMiddleware() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$$$internal = _ref2.$$internal,
    $$internal = _ref2$$$internal === void 0 ? false : _ref2$$$internal;
  return function (_ref3) {
    var instantSearchInstance = _ref3.instantSearchInstance;
    var payload = {
      widgets: []
    };
    var payloadContainer = document.createElement('meta');
    var refNode = document.querySelector('head');
    payloadContainer.name = 'instantsearch:widgets';
    return {
      $$type: 'ais.metadata',
      $$internal: $$internal,
      onStateChange: function onStateChange() {},
      subscribe: function subscribe() {
        // using setTimeout here to delay extraction until widgets have been added in a tick (e.g. Vue)
        setTimeout(function () {
          var client = instantSearchInstance.client;
          payload.ua = client.transporter && client.transporter.userAgent ? client.transporter.userAgent.value : client._ua;
          extractWidgetPayload(instantSearchInstance.mainIndex.getWidgets(), instantSearchInstance, payload);
          instantSearchInstance.middleware.forEach(function (middleware) {
            return payload.widgets.push({
              middleware: true,
              type: middleware.instance.$$type,
              internal: middleware.instance.$$internal
            });
          });
          payloadContainer.content = JSON.stringify(payload);
          refNode.appendChild(payloadContainer);
        }, 0);
      },
      started: function started() {},
      unsubscribe: function unsubscribe() {
        payloadContainer.remove();
      }
    };
  };
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/node_modules/qs/lib/index.js
var lib = __webpack_require__(17087);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/routers/history.js
function history_typeof(obj) { "@babel/helpers - typeof"; return history_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, history_typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, history_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function history_defineProperty(obj, key, value) { key = history_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function history_toPropertyKey(arg) { var key = history_toPrimitive(arg, "string"); return history_typeof(key) === "symbol" ? key : String(key); }
function history_toPrimitive(input, hint) { if (history_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (history_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var setWindowTitle = function setWindowTitle(title) {
  if (title) {
    // This function is only executed on browsers so we can disable this check.
    // eslint-disable-next-line no-restricted-globals
    window.document.title = title;
  }
};
var BrowserHistory = /*#__PURE__*/function () {
  /**
   * Initializes a new storage provider that syncs the search state to the URL
   * using web APIs (`window.location.pushState` and `onpopstate` event).
   */
  function BrowserHistory(_ref) {
    var _this = this;
    var windowTitle = _ref.windowTitle,
      _ref$writeDelay = _ref.writeDelay,
      writeDelay = _ref$writeDelay === void 0 ? 400 : _ref$writeDelay,
      createURL = _ref.createURL,
      parseURL = _ref.parseURL,
      getLocation = _ref.getLocation,
      start = _ref.start,
      dispose = _ref.dispose,
      push = _ref.push,
      cleanUrlOnDispose = _ref.cleanUrlOnDispose;
    _classCallCheck(this, BrowserHistory);
    history_defineProperty(this, "$$type", 'ais.browser');
    /**
     * Transforms a UI state into a title for the page.
     */
    history_defineProperty(this, "windowTitle", void 0);
    /**
     * Time in milliseconds before performing a write in the history.
     * It prevents from adding too many entries in the history and
     * makes the back button more usable.
     *
     * @default 400
     */
    history_defineProperty(this, "writeDelay", void 0);
    /**
     * Creates a full URL based on the route state.
     * The storage adaptor maps all syncable keys to the query string of the URL.
     */
    history_defineProperty(this, "_createURL", void 0);
    /**
     * Parses the URL into a route state.
     * It should be symmetrical to `createURL`.
     */
    history_defineProperty(this, "parseURL", void 0);
    /**
     * Returns the location to store in the history.
     * @default () => window.location
     */
    history_defineProperty(this, "getLocation", void 0);
    history_defineProperty(this, "writeTimer", void 0);
    history_defineProperty(this, "_onPopState", void 0);
    /**
     * Indicates if last action was back/forward in the browser.
     */
    history_defineProperty(this, "inPopState", false);
    /**
     * Indicates whether the history router is disposed or not.
     */
    history_defineProperty(this, "isDisposed", false);
    /**
     * Indicates the window.history.length before the last call to
     * window.history.pushState (called in `write`).
     * It allows to determine if a `pushState` has been triggered elsewhere,
     * and thus to prevent the `write` method from calling `pushState`.
     */
    history_defineProperty(this, "latestAcknowledgedHistory", 0);
    history_defineProperty(this, "_start", void 0);
    history_defineProperty(this, "_dispose", void 0);
    history_defineProperty(this, "_push", void 0);
    history_defineProperty(this, "_cleanUrlOnDispose", void 0);
    this.windowTitle = windowTitle;
    this.writeTimer = undefined;
    this.writeDelay = writeDelay;
    this._createURL = createURL;
    this.parseURL = parseURL;
    this.getLocation = getLocation;
    this._start = start;
    this._dispose = dispose;
    this._push = push;
    this._cleanUrlOnDispose = typeof cleanUrlOnDispose === 'undefined' ? true : cleanUrlOnDispose;
    if (false) {}
    safelyRunOnBrowser(function (_ref2) {
      var window = _ref2.window;
      var title = _this.windowTitle && _this.windowTitle(_this.read());
      setWindowTitle(title);
      _this.latestAcknowledgedHistory = window.history.length;
    });
  }

  /**
   * Reads the URL and returns a syncable UI search state.
   */
  _createClass(BrowserHistory, [{
    key: "read",
    value: function read() {
      return this.parseURL({
        qsModule: lib,
        location: this.getLocation()
      });
    }

    /**
     * Pushes a search state into the URL.
     */
  }, {
    key: "write",
    value: function write(routeState) {
      var _this2 = this;
      safelyRunOnBrowser(function (_ref3) {
        var window = _ref3.window;
        var url = _this2.createURL(routeState);
        var title = _this2.windowTitle && _this2.windowTitle(routeState);
        if (_this2.writeTimer) {
          clearTimeout(_this2.writeTimer);
        }
        _this2.writeTimer = setTimeout(function () {
          setWindowTitle(title);
          if (_this2.shouldWrite(url)) {
            if (_this2._push) {
              _this2._push(url);
            } else {
              window.history.pushState(routeState, title || '', url);
            }
            _this2.latestAcknowledgedHistory = window.history.length;
          }
          _this2.inPopState = false;
          _this2.writeTimer = undefined;
        }, _this2.writeDelay);
      });
    }

    /**
     * Sets a callback on the `onpopstate` event of the history API of the current page.
     * It enables the URL sync to keep track of the changes.
     */
  }, {
    key: "onUpdate",
    value: function onUpdate(callback) {
      var _this3 = this;
      if (this._start) {
        this._start(function () {
          callback(_this3.read());
        });
      }
      this._onPopState = function () {
        if (_this3.writeTimer) {
          clearTimeout(_this3.writeTimer);
          _this3.writeTimer = undefined;
        }
        _this3.inPopState = true;

        // We always read the state from the URL because the state of the history
        // can be incorect in some cases (e.g. using React Router).
        callback(_this3.read());
      };
      safelyRunOnBrowser(function (_ref4) {
        var window = _ref4.window;
        window.addEventListener('popstate', _this3._onPopState);
      });
    }

    /**
     * Creates a complete URL from a given syncable UI state.
     *
     * It always generates the full URL, not a relative one.
     * This allows to handle cases like using a <base href>.
     * See: https://github.com/algolia/instantsearch/issues/790
     */
  }, {
    key: "createURL",
    value: function createURL(routeState) {
      var url = this._createURL({
        qsModule: lib,
        routeState: routeState,
        location: this.getLocation()
      });
      if (false) {}
      return url;
    }

    /**
     * Removes the event listener and cleans up the URL.
     */
  }, {
    key: "dispose",
    value: function dispose() {
      var _this4 = this;
      if (this._dispose) {
        this._dispose();
      }
      this.isDisposed = true;
      safelyRunOnBrowser(function (_ref5) {
        var window = _ref5.window;
        if (_this4._onPopState) {
          window.removeEventListener('popstate', _this4._onPopState);
        }
      });
      if (this.writeTimer) {
        clearTimeout(this.writeTimer);
      }
      if (this._cleanUrlOnDispose) {
        this.write({});
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.isDisposed = false;
    }
  }, {
    key: "shouldWrite",
    value: function shouldWrite(url) {
      var _this5 = this;
      return safelyRunOnBrowser(function (_ref6) {
        var window = _ref6.window;
        // We do want to `pushState` if:
        // - the router is not disposed, IS.js needs to update the URL
        // OR
        // - the last write was from InstantSearch.js
        // (unlike a SPA, where it would have last written)
        var lastPushWasByISAfterDispose = !(_this5.isDisposed && _this5.latestAcknowledgedHistory !== window.history.length);
        return (
          // When the last state change was through popstate, the IS.js state changes,
          // but that should not write the URL.
          !_this5.inPopState &&
          // When the previous pushState after dispose was by IS.js, we want to write the URL.
          lastPushWasByISAfterDispose &&
          // When the URL is the same as the current one, we do not want to write it.
          url !== window.location.href
        );
      });
    }
  }]);
  return BrowserHistory;
}();
function historyRouter() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref7$createURL = _ref7.createURL,
    createURL = _ref7$createURL === void 0 ? function (_ref8) {
      var qsModule = _ref8.qsModule,
        routeState = _ref8.routeState,
        location = _ref8.location;
      var protocol = location.protocol,
        hostname = location.hostname,
        _location$port = location.port,
        port = _location$port === void 0 ? '' : _location$port,
        pathname = location.pathname,
        hash = location.hash;
      var queryString = qsModule.stringify(routeState);
      var portWithPrefix = port === '' ? '' : ":".concat(port);

      // IE <= 11 has no proper `location.origin` so we cannot rely on it.
      if (!queryString) {
        return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
      }
      return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
    } : _ref7$createURL,
    _ref7$parseURL = _ref7.parseURL,
    parseURL = _ref7$parseURL === void 0 ? function (_ref9) {
      var qsModule = _ref9.qsModule,
        location = _ref9.location;
      // `qs` by default converts arrays with more than 20 items to an object.
      // We want to avoid this because the data structure manipulated can therefore vary.
      // Setting the limit to `100` seems a good number because the engine's default is 100
      // (it can go up to 1000 but it is very unlikely to select more than 100 items in the UI).
      //
      // Using an `arrayLimit` of `n` allows `n + 1` items.
      //
      // See:
      //   - https://github.com/ljharb/qs#parsing-arrays
      //   - https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/
      return qsModule.parse(location.search.slice(1), {
        arrayLimit: 99
      });
    } : _ref7$parseURL,
    _ref7$writeDelay = _ref7.writeDelay,
    writeDelay = _ref7$writeDelay === void 0 ? 400 : _ref7$writeDelay,
    windowTitle = _ref7.windowTitle,
    _ref7$getLocation = _ref7.getLocation,
    getLocation = _ref7$getLocation === void 0 ? function () {
      return safelyRunOnBrowser(function (_ref10) {
        var window = _ref10.window;
        return window.location;
      }, {
        fallback: function fallback() {
          throw new Error('You need to provide `getLocation` to the `history` router in environments where `window` does not exist.');
        }
      });
    } : _ref7$getLocation,
    start = _ref7.start,
    dispose = _ref7.dispose,
    push = _ref7.push,
    cleanUrlOnDispose = _ref7.cleanUrlOnDispose;
  return new BrowserHistory({
    createURL: createURL,
    parseURL: parseURL,
    writeDelay: writeDelay,
    windowTitle: windowTitle,
    getLocation: getLocation,
    start: start,
    dispose: dispose,
    push: push,
    cleanUrlOnDispose: cleanUrlOnDispose
  });
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/stateMappings/simple.js
function simple_typeof(obj) { "@babel/helpers - typeof"; return simple_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, simple_typeof(obj); }
var _excluded = ["configure"];
function simple_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function simple_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? simple_ownKeys(Object(source), !0).forEach(function (key) { simple_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : simple_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function simple_defineProperty(obj, key, value) { key = simple_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function simple_toPropertyKey(arg) { var key = simple_toPrimitive(arg, "string"); return simple_typeof(key) === "symbol" ? key : String(key); }
function simple_toPrimitive(input, hint) { if (simple_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (simple_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function getIndexStateWithoutConfigure(uiState) {
  var configure = uiState.configure,
    trackedUiState = _objectWithoutProperties(uiState, _excluded);
  return trackedUiState;
}

// technically a URL could contain any key, since users provide it,
// which is why the input to this function is UiState, not something
// which excludes "configure" as this function does.
function simpleStateMapping() {
  return {
    $$type: 'ais.simple',
    stateToRoute: function stateToRoute(uiState) {
      return Object.keys(uiState).reduce(function (state, indexId) {
        return simple_objectSpread(simple_objectSpread({}, state), {}, simple_defineProperty({}, indexId, getIndexStateWithoutConfigure(uiState[indexId])));
      }, {});
    },
    routeToState: function routeToState() {
      var routeState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.keys(routeState).reduce(function (state, indexId) {
        return simple_objectSpread(simple_objectSpread({}, state), {}, simple_defineProperty({}, indexId, getIndexStateWithoutConfigure(routeState[indexId])));
      }, {});
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/isEqual.js
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

  // @TODO avoid for..of because of the large polyfill
  // eslint-disable-next-line no-restricted-syntax
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
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/middlewares/createRouterMiddleware.js
function createRouterMiddleware_typeof(obj) { "@babel/helpers - typeof"; return createRouterMiddleware_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createRouterMiddleware_typeof(obj); }
function createRouterMiddleware_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createRouterMiddleware_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createRouterMiddleware_ownKeys(Object(source), !0).forEach(function (key) { createRouterMiddleware_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createRouterMiddleware_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createRouterMiddleware_defineProperty(obj, key, value) { key = createRouterMiddleware_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createRouterMiddleware_toPropertyKey(arg) { var key = createRouterMiddleware_toPrimitive(arg, "string"); return createRouterMiddleware_typeof(key) === "symbol" ? key : String(key); }
function createRouterMiddleware_toPrimitive(input, hint) { if (createRouterMiddleware_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createRouterMiddleware_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var createRouterMiddleware = function createRouterMiddleware() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$router = props.router,
    router = _props$router === void 0 ? historyRouter() : _props$router,
    _props$stateMapping = props.stateMapping,
    stateMapping = _props$stateMapping === void 0 ? simpleStateMapping() : _props$stateMapping,
    _props$$$internal = props.$$internal,
    $$internal = _props$$$internal === void 0 ? false : _props$$$internal;
  return function (_ref) {
    var instantSearchInstance = _ref.instantSearchInstance;
    function topLevelCreateURL(nextState) {
      var previousUiState =
      // If only the mainIndex is initialized, we don't yet know what other
      // index widgets are used. Therefore we fall back to the initialUiState.
      // We can't indiscriminately use the initialUiState because then we
      // reintroduce state that was changed by the user.
      // When there are no widgets, we are sure the user can't yet have made
      // any changes.
      instantSearchInstance.mainIndex.getWidgets().length === 0 ? instantSearchInstance._initialUiState : instantSearchInstance.mainIndex.getWidgetUiState({});
      var uiState = Object.keys(nextState).reduce(function (acc, indexId) {
        return createRouterMiddleware_objectSpread(createRouterMiddleware_objectSpread({}, acc), {}, createRouterMiddleware_defineProperty({}, indexId, nextState[indexId]));
      }, previousUiState);
      var route = stateMapping.stateToRoute(uiState);
      return router.createURL(route);
    }

    // casting to UiState here to keep createURL unaware of custom UiState
    // (as long as it's an object, it's ok)
    instantSearchInstance._createURL = topLevelCreateURL;
    var lastRouteState = undefined;
    var initialUiState = instantSearchInstance._initialUiState;
    return {
      $$type: "ais.router({router:".concat(router.$$type || '__unknown__', ", stateMapping:").concat(stateMapping.$$type || '__unknown__', "})"),
      $$internal: $$internal,
      onStateChange: function onStateChange(_ref2) {
        var uiState = _ref2.uiState;
        var routeState = stateMapping.stateToRoute(uiState);
        if (lastRouteState === undefined || !isEqual(lastRouteState, routeState)) {
          router.write(routeState);
          lastRouteState = routeState;
        }
      },
      subscribe: function subscribe() {
        instantSearchInstance._initialUiState = createRouterMiddleware_objectSpread(createRouterMiddleware_objectSpread({}, initialUiState), stateMapping.routeToState(router.read()));
        router.onUpdate(function (route) {
          if (instantSearchInstance.mainIndex.getWidgets().length > 0) {
            instantSearchInstance.setUiState(stateMapping.routeToState(route));
          }
        });
      },
      started: function started() {
        var _router$start;
        (_router$start = router.start) === null || _router$start === void 0 ? void 0 : _router$start.call(router);
      },
      unsubscribe: function unsubscribe() {
        router.dispose();
      }
    };
  };
};
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(74243);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/isIndexWidget.js
function isIndexWidget(widget) {
  return widget.$$type === 'ais.index';
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js + 1 modules
var mergeSearchParameters = __webpack_require__(47002);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/resolveSearchParameters.js
function resolveSearchParameters(current) {
  var parent = current.getParent();
  var states = [current.getHelper().state];
  while (parent !== null) {
    states = [parent.getHelper().state].concat(states);
    parent = parent.getParent();
  }
  return states;
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/widgets/index/index.js
function index_typeof(obj) { "@babel/helpers - typeof"; return index_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, index_typeof(obj); }
var index_excluded = ["initialSearchParameters"],
  _excluded2 = ["initialRecommendParameters"];
function index_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function index_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? index_ownKeys(Object(source), !0).forEach(function (key) { index_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : index_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function index_defineProperty(obj, key, value) { key = index_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function index_toPropertyKey(arg) { var key = index_toPrimitive(arg, "string"); return index_typeof(key) === "symbol" ? key : String(key); }
function index_toPrimitive(input, hint) { if (index_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (index_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function index_toConsumableArray(arr) { return index_arrayWithoutHoles(arr) || index_iterableToArray(arr) || index_unsupportedIterableToArray(arr) || index_nonIterableSpread(); }
function index_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function index_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return index_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return index_arrayLikeToArray(o, minLen); }
function index_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function index_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return index_arrayLikeToArray(arr); }
function index_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function index_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = index_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function index_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var withUsage = (0,documentation/* createDocumentationMessageGenerator */.V)({
  name: 'index-widget'
});
/**
 * This is the same content as helper._change / setState, but allowing for extra
 * UiState to be synchronized.
 * see: https://github.com/algolia/algoliasearch-helper-js/blob/6b835ffd07742f2d6b314022cce6848f5cfecd4a/src/algoliasearch.helper.js#L1311-L1324
 */
function privateHelperSetState(helper, _ref) {
  var state = _ref.state,
    recommendState = _ref.recommendState,
    isPageReset = _ref.isPageReset,
    _uiState = _ref._uiState;
  if (state !== helper.state) {
    helper.state = state;
    helper.emit('change', {
      state: helper.state,
      results: helper.lastResults,
      isPageReset: isPageReset,
      _uiState: _uiState
    });
  }
  if (recommendState !== helper.recommendState) {
    helper.recommendState = recommendState;

    // eslint-disable-next-line no-warning-comments
    // TODO: emit "change" event when events for Recommend are implemented
  }
}

function getLocalWidgetsUiState(widgets, widgetStateOptions) {
  var initialUiState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return widgets.reduce(function (uiState, widget) {
    if (isIndexWidget(widget)) {
      return uiState;
    }
    if (!widget.getWidgetUiState && !widget.getWidgetState) {
      return uiState;
    }
    if (widget.getWidgetUiState) {
      return widget.getWidgetUiState(uiState, widgetStateOptions);
    }
    return widget.getWidgetState(uiState, widgetStateOptions);
  }, initialUiState);
}
function getLocalWidgetsSearchParameters(widgets, widgetSearchParametersOptions) {
  var initialSearchParameters = widgetSearchParametersOptions.initialSearchParameters,
    rest = index_objectWithoutProperties(widgetSearchParametersOptions, index_excluded);
  return widgets.reduce(function (state, widget) {
    if (!widget.getWidgetSearchParameters || isIndexWidget(widget)) {
      return state;
    }
    if (widget.dependsOn === 'search' && widget.getWidgetParameters) {
      return widget.getWidgetParameters(state, rest);
    }
    return widget.getWidgetSearchParameters(state, rest);
  }, initialSearchParameters);
}
function getLocalWidgetsRecommendParameters(widgets, widgetRecommendParametersOptions) {
  var initialRecommendParameters = widgetRecommendParametersOptions.initialRecommendParameters,
    rest = index_objectWithoutProperties(widgetRecommendParametersOptions, _excluded2);
  return widgets.reduce(function (state, widget) {
    if (!isIndexWidget(widget) && widget.dependsOn === 'recommend' && widget.getWidgetParameters) {
      return widget.getWidgetParameters(state, rest);
    }
    return state;
  }, initialRecommendParameters);
}
function resetPageFromWidgets(widgets) {
  var indexWidgets = widgets.filter(isIndexWidget);
  if (indexWidgets.length === 0) {
    return;
  }
  indexWidgets.forEach(function (widget) {
    var widgetHelper = widget.getHelper();
    privateHelperSetState(widgetHelper, {
      state: widgetHelper.state.resetPage(),
      recommendState: widgetHelper.recommendState,
      isPageReset: true
    });
    resetPageFromWidgets(widget.getWidgets());
  });
}
function resolveScopedResultsFromWidgets(widgets) {
  var indexWidgets = widgets.filter(isIndexWidget);
  return indexWidgets.reduce(function (scopedResults, current) {
    return scopedResults.concat.apply(scopedResults, [{
      indexId: current.getIndexId(),
      results: current.getResults(),
      helper: current.getHelper()
    }].concat(index_toConsumableArray(resolveScopedResultsFromWidgets(current.getWidgets()))));
  }, []);
}
var index = function index(widgetParams) {
  if (widgetParams === undefined || widgetParams.indexName === undefined) {
    throw new Error(withUsage('The `indexName` option is required.'));
  }
  var indexName = widgetParams.indexName,
    _widgetParams$indexId = widgetParams.indexId,
    indexId = _widgetParams$indexId === void 0 ? indexName : _widgetParams$indexId;
  var localWidgets = [];
  var localUiState = {};
  var localInstantSearchInstance = null;
  var localParent = null;
  var helper = null;
  var derivedHelper = null;
  var lastValidSearchParameters = null;
  return {
    $$type: 'ais.index',
    $$widgetType: 'ais.index',
    getIndexName: function getIndexName() {
      return indexName;
    },
    getIndexId: function getIndexId() {
      return indexId;
    },
    getHelper: function getHelper() {
      return helper;
    },
    getResults: function getResults() {
      var _derivedHelper;
      if (!((_derivedHelper = derivedHelper) !== null && _derivedHelper !== void 0 && _derivedHelper.lastResults)) return null;

      // To make the UI optimistic, we patch the state to display to the current
      // one instead of the one associated with the latest results.
      // This means user-driven UI changes (e.g., checked checkbox) are reflected
      // immediately instead of waiting for Algolia to respond, regardless of
      // the status of the network request.
      derivedHelper.lastResults._state = helper.state;
      return derivedHelper.lastResults;
    },
    getPreviousState: function getPreviousState() {
      return lastValidSearchParameters;
    },
    getScopedResults: function getScopedResults() {
      var widgetParent = this.getParent();
      var widgetSiblings;
      if (widgetParent) {
        widgetSiblings = widgetParent.getWidgets();
      } else if (indexName.length === 0) {
        // The widget is the root but has no index name:
        // we resolve results from its children index widgets
        widgetSiblings = this.getWidgets();
      } else {
        // The widget is the root and has an index name:
        // we consider itself as the only sibling
        widgetSiblings = [this];
      }
      return resolveScopedResultsFromWidgets(widgetSiblings);
    },
    getParent: function getParent() {
      return localParent;
    },
    createURL: function createURL(nextState) {
      if (typeof nextState === 'function') {
        return localInstantSearchInstance._createURL(index_defineProperty({}, indexId, nextState(localUiState)));
      }
      return localInstantSearchInstance._createURL(index_defineProperty({}, indexId, getLocalWidgetsUiState(localWidgets, {
        searchParameters: nextState,
        helper: helper
      })));
    },
    getWidgets: function getWidgets() {
      return localWidgets;
    },
    addWidgets: function addWidgets(widgets) {
      var _this = this;
      if (!Array.isArray(widgets)) {
        throw new Error(withUsage('The `addWidgets` method expects an array of widgets.'));
      }
      if (widgets.some(function (widget) {
        return typeof widget.init !== 'function' && typeof widget.render !== 'function';
      })) {
        throw new Error(withUsage('The widget definition expects a `render` and/or an `init` method.'));
      }
      localWidgets = localWidgets.concat(widgets);
      if (localInstantSearchInstance && Boolean(widgets.length)) {
        privateHelperSetState(helper, {
          state: getLocalWidgetsSearchParameters(localWidgets, {
            uiState: localUiState,
            initialSearchParameters: helper.state
          }),
          recommendState: getLocalWidgetsRecommendParameters(localWidgets, {
            uiState: localUiState,
            initialRecommendParameters: helper.recommendState
          }),
          _uiState: localUiState
        });

        // We compute the render state before calling `init` in a separate loop
        // to construct the whole render state object that is then passed to
        // `init`.
        widgets.forEach(function (widget) {
          if (widget.getRenderState) {
            var renderState = widget.getRenderState(localInstantSearchInstance.renderState[_this.getIndexId()] || {}, createInitArgs(localInstantSearchInstance, _this, localInstantSearchInstance._initialUiState));
            storeRenderState({
              renderState: renderState,
              instantSearchInstance: localInstantSearchInstance,
              parent: _this
            });
          }
        });
        widgets.forEach(function (widget) {
          if (widget.init) {
            widget.init(createInitArgs(localInstantSearchInstance, _this, localInstantSearchInstance._initialUiState));
          }
        });
        localInstantSearchInstance.scheduleSearch();
      }
      return this;
    },
    removeWidgets: function removeWidgets(widgets) {
      var _this2 = this;
      if (!Array.isArray(widgets)) {
        throw new Error(withUsage('The `removeWidgets` method expects an array of widgets.'));
      }
      if (widgets.some(function (widget) {
        return typeof widget.dispose !== 'function';
      })) {
        throw new Error(withUsage('The widget definition expects a `dispose` method.'));
      }
      localWidgets = localWidgets.filter(function (widget) {
        return widgets.indexOf(widget) === -1;
      });
      if (localInstantSearchInstance && Boolean(widgets.length)) {
        var cleanedState = widgets.reduce(function (state, widget) {
          // the `dispose` method exists at this point we already assert it
          var next = widget.dispose({
            helper: helper,
            state: state,
            parent: _this2
          });
          return next || state;
        }, helper.state);
        var newState = localInstantSearchInstance.future.preserveSharedStateOnUnmount ? getLocalWidgetsSearchParameters(localWidgets, {
          uiState: localUiState,
          initialSearchParameters: new algoliasearch_helper.SearchParameters({
            index: this.getIndexName()
          })
        }) : getLocalWidgetsSearchParameters(localWidgets, {
          uiState: getLocalWidgetsUiState(localWidgets, {
            searchParameters: cleanedState,
            helper: helper
          }),
          initialSearchParameters: cleanedState
        });
        localUiState = getLocalWidgetsUiState(localWidgets, {
          searchParameters: newState,
          helper: helper
        });
        helper.setState(newState);
        if (localWidgets.length) {
          localInstantSearchInstance.scheduleSearch();
        }
      }
      return this;
    },
    init: function init(_ref2) {
      var _this3 = this,
        _instantSearchInstanc;
      var instantSearchInstance = _ref2.instantSearchInstance,
        parent = _ref2.parent,
        uiState = _ref2.uiState;
      if (helper !== null) {
        // helper is already initialized, therefore we do not need to set up
        // any listeners
        return;
      }
      localInstantSearchInstance = instantSearchInstance;
      localParent = parent;
      localUiState = uiState[indexId] || {};

      // The `mainHelper` is already defined at this point. The instance is created
      // inside InstantSearch at the `start` method, which occurs before the `init`
      // step.
      var mainHelper = instantSearchInstance.mainHelper;
      var parameters = getLocalWidgetsSearchParameters(localWidgets, {
        uiState: localUiState,
        initialSearchParameters: new algoliasearch_helper.SearchParameters({
          index: indexName
        })
      });
      var recommendParameters = getLocalWidgetsRecommendParameters(localWidgets, {
        uiState: localUiState,
        initialRecommendParameters: new algoliasearch_helper.RecommendParameters()
      });

      // This Helper is only used for state management we do not care about the
      // `searchClient`. Only the "main" Helper created at the `InstantSearch`
      // level is aware of the client.
      helper = algoliasearch_helper({}, parameters.index, parameters);
      helper.recommendState = recommendParameters;

      // We forward the call to `search` to the "main" instance of the Helper
      // which is responsible for managing the queries (it's the only one that is
      // aware of the `searchClient`).
      helper.search = function () {
        if (instantSearchInstance.onStateChange) {
          instantSearchInstance.onStateChange({
            uiState: instantSearchInstance.mainIndex.getWidgetUiState({}),
            setUiState: function setUiState(nextState) {
              return instantSearchInstance.setUiState(nextState, false);
            }
          });

          // We don't trigger a search when controlled because it becomes the
          // responsibility of `setUiState`.
          return mainHelper;
        }
        return mainHelper.search();
      };
      helper.searchWithoutTriggeringOnStateChange = function () {
        return mainHelper.search();
      };

      // We use the same pattern for the `searchForFacetValues`.
      helper.searchForFacetValues = function (facetName, facetValue, maxFacetHits, userState) {
        var state = helper.state.setQueryParameters(userState);
        return mainHelper.searchForFacetValues(facetName, facetValue, maxFacetHits, state);
      };
      derivedHelper = mainHelper.derive(function () {
        return mergeSearchParameters/* mergeSearchParameters */.p.apply(void 0, [mainHelper.state].concat(index_toConsumableArray(resolveSearchParameters(_this3))));
      }, function () {
        return _this3.getHelper().recommendState;
      });
      var indexInitialResults = (_instantSearchInstanc = instantSearchInstance._initialResults) === null || _instantSearchInstanc === void 0 ? void 0 : _instantSearchInstanc[this.getIndexId()];
      if (indexInitialResults) {
        // We restore the shape of the results provided to the instance to respect
        // the helper's structure.
        var results = new algoliasearch_helper.SearchResults(new algoliasearch_helper.SearchParameters(indexInitialResults.state), indexInitialResults.results);
        derivedHelper.lastResults = results;
        helper.lastResults = results;
      }

      // Subscribe to the Helper state changes for the page before widgets
      // are initialized. This behavior mimics the original one of the Helper.
      // It makes sense to replicate it at the `init` step. We have another
      // listener on `change` below, once `init` is done.
      helper.on('change', function (_ref3) {
        var isPageReset = _ref3.isPageReset;
        if (isPageReset) {
          resetPageFromWidgets(localWidgets);
        }
      });
      derivedHelper.on('search', function () {
        // The index does not manage the "staleness" of the search. This is the
        // responsibility of the main instance. It does not make sense to manage
        // it at the index level because it's either: all of them or none of them
        // that are stalled. The queries are performed into a single network request.
        instantSearchInstance.scheduleStalledRender();
        if (false) {}
      });
      derivedHelper.on('result', function (_ref4) {
        var results = _ref4.results;
        // The index does not render the results it schedules a new render
        // to let all the other indices emit their own results. It allows us to
        // run the render process in one pass.
        instantSearchInstance.scheduleRender();

        // the derived helper is the one which actually searches, but the helper
        // which is exposed e.g. via instance.helper, doesn't search, and thus
        // does not have access to lastResults, which it used to in pre-federated
        // search behavior.
        helper.lastResults = results;
        lastValidSearchParameters = results === null || results === void 0 ? void 0 : results._state;
      });

      // eslint-disable-next-line no-warning-comments
      // TODO: listen to "result" event when events for Recommend are implemented
      derivedHelper.on('recommend:result', function (_ref5) {
        var recommend = _ref5.recommend;
        // The index does not render the results it schedules a new render
        // to let all the other indices emit their own results. It allows us to
        // run the render process in one pass.
        instantSearchInstance.scheduleRender();

        // the derived helper is the one which actually searches, but the helper
        // which is exposed e.g. via instance.helper, doesn't search, and thus
        // does not have access to lastRecommendResults.
        helper.lastRecommendResults = recommend.results;
      });

      // We compute the render state before calling `init` in a separate loop
      // to construct the whole render state object that is then passed to
      // `init`.
      localWidgets.forEach(function (widget) {
        if (widget.getRenderState) {
          var renderState = widget.getRenderState(instantSearchInstance.renderState[_this3.getIndexId()] || {}, createInitArgs(instantSearchInstance, _this3, uiState));
          storeRenderState({
            renderState: renderState,
            instantSearchInstance: instantSearchInstance,
            parent: _this3
          });
        }
      });
      localWidgets.forEach(function (widget) {
         false ? 0 : void 0;
        if (widget.init) {
          widget.init(createInitArgs(instantSearchInstance, _this3, uiState));
        }
      });

      // Subscribe to the Helper state changes for the `uiState` once widgets
      // are initialized. Until the first render, state changes are part of the
      // configuration step. This is mainly for backward compatibility with custom
      // widgets. When the subscription happens before the `init` step, the (static)
      // configuration of the widget is pushed in the URL. That's what we want to avoid.
      // https://github.com/algolia/instantsearch/pull/994/commits/4a672ae3fd78809e213de0368549ef12e9dc9454
      helper.on('change', function (event) {
        var state = event.state;
        var _uiState = event._uiState;
        localUiState = getLocalWidgetsUiState(localWidgets, {
          searchParameters: state,
          helper: helper
        }, _uiState || {});

        // We don't trigger an internal change when controlled because it
        // becomes the responsibility of `setUiState`.
        if (!instantSearchInstance.onStateChange) {
          instantSearchInstance.onInternalStateChange();
        }
      });
      if (indexInitialResults) {
        // If there are initial results, we're not notified of the next results
        // because we don't trigger an initial search. We therefore need to directly
        // schedule a render that will render the results injected on the helper.
        instantSearchInstance.scheduleRender();
      }
    },
    render: function render(_ref6) {
      var _this4 = this;
      var instantSearchInstance = _ref6.instantSearchInstance;
      // we can't attach a listener to the error event of search, as the error
      // then would no longer be thrown for global handlers.
      if (instantSearchInstance.status === 'error' && !instantSearchInstance.mainHelper.hasPendingRequests() && lastValidSearchParameters) {
        helper.setState(lastValidSearchParameters);
      }

      // We only render index widgets if there are no results.
      // This makes sure `render` is never called with `results` being `null`.
      var widgetsToRender = this.getResults() ? localWidgets : localWidgets.filter(isIndexWidget);
      widgetsToRender = widgetsToRender.filter(function (widget) {
        if (!widget.shouldRender) {
          return true;
        }
        return widget.shouldRender({
          instantSearchInstance: instantSearchInstance
        });
      });
      widgetsToRender.forEach(function (widget) {
        if (widget.getRenderState) {
          var renderState = widget.getRenderState(instantSearchInstance.renderState[_this4.getIndexId()] || {}, createRenderArgs(instantSearchInstance, _this4));
          storeRenderState({
            renderState: renderState,
            instantSearchInstance: instantSearchInstance,
            parent: _this4
          });
        }
      });
      widgetsToRender.forEach(function (widget) {
        // At this point, all the variables used below are set. Both `helper`
        // and `derivedHelper` have been created at the `init` step. The attribute
        // `lastResults` might be `null` though. It's possible that a stalled render
        // happens before the result e.g with a dynamically added index the request might
        // be delayed. The render is triggered for the complete tree but some parts do
        // not have results yet.

        if (widget.render) {
          widget.render(createRenderArgs(instantSearchInstance, _this4));
        }
      });
    },
    dispose: function dispose() {
      var _this5 = this,
        _helper,
        _derivedHelper2;
      localWidgets.forEach(function (widget) {
        if (widget.dispose && helper) {
          // The dispose function is always called once the instance is started
          // (it's an effect of `removeWidgets`). The index is initialized and
          // the Helper is available. We don't care about the return value of
          // `dispose` because the index is removed. We can't call `removeWidgets`
          // because we want to keep the widgets on the instance, to allow idempotent
          // operations on `add` & `remove`.
          widget.dispose({
            helper: helper,
            state: helper.state,
            parent: _this5
          });
        }
      });
      localInstantSearchInstance = null;
      localParent = null;
      (_helper = helper) === null || _helper === void 0 ? void 0 : _helper.removeAllListeners();
      helper = null;
      (_derivedHelper2 = derivedHelper) === null || _derivedHelper2 === void 0 ? void 0 : _derivedHelper2.detach();
      derivedHelper = null;
    },
    getWidgetUiState: function getWidgetUiState(uiState) {
      return localWidgets.filter(isIndexWidget).reduce(function (previousUiState, innerIndex) {
        return innerIndex.getWidgetUiState(previousUiState);
      }, index_objectSpread(index_objectSpread({}, uiState), {}, index_defineProperty({}, indexId, index_objectSpread(index_objectSpread({}, uiState[indexId]), localUiState))));
    },
    getWidgetState: function getWidgetState(uiState) {
       false ? 0 : void 0;
      return this.getWidgetUiState(uiState);
    },
    getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref7) {
      var uiState = _ref7.uiState;
      return getLocalWidgetsSearchParameters(localWidgets, {
        uiState: uiState,
        initialSearchParameters: searchParameters
      });
    },
    refreshUiState: function refreshUiState() {
      localUiState = getLocalWidgetsUiState(localWidgets, {
        searchParameters: this.getHelper().state,
        helper: this.getHelper()
      }, localUiState);
    },
    setIndexUiState: function setIndexUiState(indexUiState) {
      var nextIndexUiState = typeof indexUiState === 'function' ? indexUiState(localUiState) : indexUiState;
      localInstantSearchInstance.setUiState(function (state) {
        return index_objectSpread(index_objectSpread({}, state), {}, index_defineProperty({}, indexId, nextIndexUiState));
      });
    }
  };
};
/* harmony default export */ const widgets_index = (index);
function storeRenderState(_ref8) {
  var renderState = _ref8.renderState,
    instantSearchInstance = _ref8.instantSearchInstance,
    parent = _ref8.parent;
  var parentIndexName = parent ? parent.getIndexId() : instantSearchInstance.mainIndex.getIndexId();
  instantSearchInstance.renderState = index_objectSpread(index_objectSpread({}, instantSearchInstance.renderState), {}, index_defineProperty({}, parentIndexName, index_objectSpread(index_objectSpread({}, instantSearchInstance.renderState[parentIndexName]), renderState)));
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/suit.js
var NAMESPACE = 'ais';
var component = function component(componentName) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      descendantName = _ref.descendantName,
      modifierName = _ref.modifierName;
    var descendent = descendantName ? "-".concat(descendantName) : '';
    var modifier = modifierName ? "--".concat(modifierName) : '';
    return "".concat(NAMESPACE, "-").concat(componentName).concat(descendent).concat(modifier);
  };
};
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getPropertyByPath.js
var getPropertyByPath = __webpack_require__(65150);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escape-highlight.js
var escape_highlight = __webpack_require__(92783);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/helpers/highlight.js


var suit = component('Highlight');

/**
 * @deprecated use html tagged templates and the Highlight component instead
 */
function highlight_highlight(_ref) {
  var attribute = _ref.attribute,
    _ref$highlightedTagNa = _ref.highlightedTagName,
    highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,
    hit = _ref.hit,
    _ref$cssClasses = _ref.cssClasses,
    cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
   false ? 0 : void 0;
  var highlightAttributeResult = (0,getPropertyByPath/* getPropertyByPath */.E)(hit._highlightResult, attribute);

  // @MAJOR fallback to attribute value if highlight is not found
   false ? 0 : void 0;
  var _ref2 = highlightAttributeResult || {},
    _ref2$value = _ref2.value,
    attributeValue = _ref2$value === void 0 ? '' : _ref2$value;

  // cx is not used, since it would be bundled as a dependency for Vue & Angular
  var className = suit({
    descendantName: 'highlighted'
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
  return attributeValue.replace(new RegExp(escape_highlight/* TAG_REPLACEMENT */.sn.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(escape_highlight/* TAG_REPLACEMENT */.sn.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/concatHighlightedParts.js

function concatHighlightedParts(parts) {
  var highlightPreTag = escape_highlight/* TAG_REPLACEMENT */.sn.highlightPreTag,
    highlightPostTag = escape_highlight/* TAG_REPLACEMENT */.sn.highlightPostTag;
  return parts.map(function (part) {
    return part.isHighlighted ? highlightPreTag + part.value + highlightPostTag : part.value;
  }).join('');
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escape-html.js
var escape_html = __webpack_require__(18454);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/getHighlightFromSiblings.js

var hasAlphanumeric = new RegExp(/\w/i);
function getHighlightFromSiblings(parts, i) {
  var _parts, _parts2;
  var current = parts[i];
  var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
  var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;
  if (!hasAlphanumeric.test((0,escape_html/* unescape */.x)(current.value)) && isPreviousHighlighted === isNextHighlighted) {
    return isPreviousHighlighted;
  }
  return current.isHighlighted;
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/reverseHighlightedParts.js
function reverseHighlightedParts_typeof(obj) { "@babel/helpers - typeof"; return reverseHighlightedParts_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, reverseHighlightedParts_typeof(obj); }
function reverseHighlightedParts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function reverseHighlightedParts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? reverseHighlightedParts_ownKeys(Object(source), !0).forEach(function (key) { reverseHighlightedParts_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : reverseHighlightedParts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function reverseHighlightedParts_defineProperty(obj, key, value) { key = reverseHighlightedParts_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function reverseHighlightedParts_toPropertyKey(arg) { var key = reverseHighlightedParts_toPrimitive(arg, "string"); return reverseHighlightedParts_typeof(key) === "symbol" ? key : String(key); }
function reverseHighlightedParts_toPrimitive(input, hint) { if (reverseHighlightedParts_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (reverseHighlightedParts_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function reverseHighlightedParts(parts) {
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
      isHighlighted: !getHighlightFromSiblings(parts, i)
    });
  });
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getHighlightedParts.js
var getHighlightedParts = __webpack_require__(38796);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/helpers/reverseHighlight.js


var reverseHighlight_suit = component('ReverseHighlight');

/**
 * @deprecated use html tagged templates and the ReverseHighlight component instead
 */
function reverseHighlight_reverseHighlight(_ref) {
  var attribute = _ref.attribute,
    _ref$highlightedTagNa = _ref.highlightedTagName,
    highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,
    hit = _ref.hit,
    _ref$cssClasses = _ref.cssClasses,
    cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
   false ? 0 : void 0;
  var highlightAttributeResult = (0,getPropertyByPath/* getPropertyByPath */.E)(hit._highlightResult, attribute);

  // @MAJOR fallback to attribute value if highlight is not found
   false ? 0 : void 0;
  var _ref2 = highlightAttributeResult || {},
    _ref2$value = _ref2.value,
    attributeValue = _ref2$value === void 0 ? '' : _ref2$value;

  // cx is not used, since it would be bundled as a dependency for Vue & Angular
  var className = reverseHighlight_suit({
    descendantName: 'highlighted'
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
  var reverseHighlightedValue = concatHighlightedParts(reverseHighlightedParts((0,getHighlightedParts/* getHighlightedParts */.I)(attributeValue)));
  return reverseHighlightedValue.replace(new RegExp(escape_highlight/* TAG_REPLACEMENT */.sn.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(escape_highlight/* TAG_REPLACEMENT */.sn.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/helpers/snippet.js


var snippet_suit = component('Snippet');

/**
 * @deprecated use html tagged templates and the Snippet component instead
 */
function snippet_snippet(_ref) {
  var attribute = _ref.attribute,
    _ref$highlightedTagNa = _ref.highlightedTagName,
    highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,
    hit = _ref.hit,
    _ref$cssClasses = _ref.cssClasses,
    cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
   false ? 0 : void 0;
  var snippetAttributeResult = (0,getPropertyByPath/* getPropertyByPath */.E)(hit._snippetResult, attribute);

  // @MAJOR fallback to attribute value if snippet is not found
   false ? 0 : void 0;
  var _ref2 = snippetAttributeResult || {},
    _ref2$value = _ref2.value,
    attributeValue = _ref2$value === void 0 ? '' : _ref2$value;

  // cx is not used, since it would be bundled as a dependency for Vue & Angular
  var className = snippet_suit({
    descendantName: 'highlighted'
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
  return attributeValue.replace(new RegExp(escape_highlight/* TAG_REPLACEMENT */.sn.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(escape_highlight/* TAG_REPLACEMENT */.sn.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/helpers/reverseSnippet.js


var reverseSnippet_suit = component('ReverseSnippet');

/**
 * @deprecated use html tagged templates and the ReverseSnippet component instead
 */
function reverseSnippet_reverseSnippet(_ref) {
  var attribute = _ref.attribute,
    _ref$highlightedTagNa = _ref.highlightedTagName,
    highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,
    hit = _ref.hit,
    _ref$cssClasses = _ref.cssClasses,
    cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
   false ? 0 : void 0;
  var snippetAttributeResult = (0,getPropertyByPath/* getPropertyByPath */.E)(hit._snippetResult, attribute);

  // @MAJOR fallback to attribute value if snippet is not found
   false ? 0 : void 0;
  var _ref2 = snippetAttributeResult || {},
    _ref2$value = _ref2.value,
    attributeValue = _ref2$value === void 0 ? '' : _ref2$value;

  // cx is not used, since it would be bundled as a dependency for Vue & Angular
  var className = reverseSnippet_suit({
    descendantName: 'highlighted'
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
  var reverseHighlightedValue = concatHighlightedParts(reverseHighlightedParts((0,getHighlightedParts/* getHighlightedParts */.I)(attributeValue)));
  return reverseHighlightedValue.replace(new RegExp(escape_highlight/* TAG_REPLACEMENT */.sn.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(escape_highlight/* TAG_REPLACEMENT */.sn.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/serializer.js
var serializer = __webpack_require__(10793);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/helpers/insights.js
function insights_typeof(obj) { "@babel/helpers - typeof"; return insights_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, insights_typeof(obj); }

/** @deprecated use bindEvent instead */
function readDataAttributes(domElement) {
  var method = domElement.getAttribute('data-insights-method');
  var serializedPayload = domElement.getAttribute('data-insights-payload');
  if (typeof serializedPayload !== 'string') {
    throw new Error('The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.');
  }
  try {
    var payload = deserializePayload(serializedPayload);
    return {
      method: method,
      payload: payload
    };
  } catch (error) {
    throw new Error('The insights helper was unable to parse `data-insights-payload`.');
  }
}

/** @deprecated use bindEvent instead */
function writeDataAttributes(_ref) {
  var method = _ref.method,
    payload = _ref.payload;
  if (insights_typeof(payload) !== 'object') {
    throw new Error("The insights helper expects the payload to be an object.");
  }
  var serializedPayload;
  try {
    serializedPayload = (0,serializer/* serializePayload */.h)(payload);
  } catch (error) {
    throw new Error("Could not JSON serialize the payload object.");
  }
  return "data-insights-method=\"".concat(method, "\" data-insights-payload=\"").concat(serializedPayload, "\"");
}

/**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 */
function insights_insights(method, payload) {
   false ? 0 : void 0;
  return writeDataAttributes({
    method: method,
    payload: payload
  });
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/formatNumber.js
function formatNumber_formatNumber(value, numberLocale) {
  return value.toLocaleString(numberLocale);
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/createHelpers.js
function createHelpers_typeof(obj) { "@babel/helpers - typeof"; return createHelpers_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, createHelpers_typeof(obj); }
function createHelpers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function createHelpers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createHelpers_ownKeys(Object(source), !0).forEach(function (key) { createHelpers_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createHelpers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createHelpers_defineProperty(obj, key, value) { key = createHelpers_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createHelpers_toPropertyKey(arg) { var key = createHelpers_toPrimitive(arg, "string"); return createHelpers_typeof(key) === "symbol" ? key : String(key); }
function createHelpers_toPrimitive(input, hint) { if (createHelpers_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (createHelpers_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function hoganHelpers(_ref) {
  var numberLocale = _ref.numberLocale;
  return {
    formatNumber: function formatNumber(value, render) {
      return formatNumber_formatNumber(Number(render(value)), numberLocale);
    },
    highlight: function highlight(options, render) {
      try {
        var highlightOptions = JSON.parse(options);
        return render(highlight_highlight(createHelpers_objectSpread(createHelpers_objectSpread({}, highlightOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error("\nThe highlight helper expects a JSON object of the format:\n{ \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
      }
    },
    reverseHighlight: function reverseHighlight(options, render) {
      try {
        var reverseHighlightOptions = JSON.parse(options);
        return render(reverseHighlight_reverseHighlight(createHelpers_objectSpread(createHelpers_objectSpread({}, reverseHighlightOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error("\n  The reverseHighlight helper expects a JSON object of the format:\n  { \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
      }
    },
    snippet: function snippet(options, render) {
      try {
        var snippetOptions = JSON.parse(options);
        return render(snippet_snippet(createHelpers_objectSpread(createHelpers_objectSpread({}, snippetOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error("\nThe snippet helper expects a JSON object of the format:\n{ \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
      }
    },
    reverseSnippet: function reverseSnippet(options, render) {
      try {
        var reverseSnippetOptions = JSON.parse(options);
        return render(reverseSnippet_reverseSnippet(createHelpers_objectSpread(createHelpers_objectSpread({}, reverseSnippetOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error("\n  The reverseSnippet helper expects a JSON object of the format:\n  { \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
      }
    },
    insights: function insights(options, render) {
      try {
        var _JSON$parse = JSON.parse(options),
          method = _JSON$parse.method,
          payload = _JSON$parse.payload;
        return render(insights_insights(method, createHelpers_objectSpread({
          objectIDs: [this.objectID]
        }, payload)));
      } catch (error) {
        throw new Error("\nThe insights helper expects a JSON object of the format:\n{ \"method\": \"method-name\", \"payload\": { \"eventName\": \"name of the event\" } }");
      }
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/defer.js
var nextMicroTask = Promise.resolve();
function defer(callback) {
  var progress = null;
  var cancelled = false;
  var fn = function fn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (progress !== null) {
      return;
    }
    progress = nextMicroTask.then(function () {
      progress = null;
      if (cancelled) {
        cancelled = false;
        return;
      }
      callback.apply(void 0, args);
    });
  };
  fn.wait = function () {
    if (progress === null) {
      throw new Error('The deferred function should be called before calling `wait()`');
    }
    return progress;
  };
  fn.cancel = function () {
    if (progress === null) {
      return;
    }
    cancelled = true;
  };
  return fn;
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/hydrateSearchClient.js
function hydrateSearchClient_typeof(obj) { "@babel/helpers - typeof"; return hydrateSearchClient_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, hydrateSearchClient_typeof(obj); }
function hydrateSearchClient_slicedToArray(arr, i) { return hydrateSearchClient_arrayWithHoles(arr) || hydrateSearchClient_iterableToArrayLimit(arr, i) || hydrateSearchClient_unsupportedIterableToArray(arr, i) || hydrateSearchClient_nonIterableRest(); }
function hydrateSearchClient_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function hydrateSearchClient_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return hydrateSearchClient_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hydrateSearchClient_arrayLikeToArray(o, minLen); }
function hydrateSearchClient_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function hydrateSearchClient_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function hydrateSearchClient_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function hydrateSearchClient_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function hydrateSearchClient_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? hydrateSearchClient_ownKeys(Object(source), !0).forEach(function (key) { hydrateSearchClient_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : hydrateSearchClient_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function hydrateSearchClient_defineProperty(obj, key, value) { key = hydrateSearchClient_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function hydrateSearchClient_toPropertyKey(arg) { var key = hydrateSearchClient_toPrimitive(arg, "string"); return hydrateSearchClient_typeof(key) === "symbol" ? key : String(key); }
function hydrateSearchClient_toPrimitive(input, hint) { if (hydrateSearchClient_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (hydrateSearchClient_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function hydrateSearchClient(client, results) {
  if (!results) {
    return;
  }

  // Disable cache hydration on:
  // - Algoliasearch API Client < v4 with cache disabled
  // - Third party clients (detected by the `addAlgoliaAgent` function missing)

  if ((!('transporter' in client) || client._cacheHydrated) && (!client._useCache || typeof client.addAlgoliaAgent !== 'function')) {
    return;
  }
  var cachedRequest = Object.keys(results).map(function (key) {
    var _results$key = results[key],
      state = _results$key.state,
      requestParams = _results$key.requestParams,
      serverResults = _results$key.results;
    return serverResults.map(function (result) {
      return hydrateSearchClient_objectSpread({
        indexName: state.index || result.index
      }, requestParams || result.params ? {
        params: serializeQueryParameters(requestParams || deserializeQueryParameters(result.params))
      } : {});
    });
  });
  var cachedResults = Object.keys(results).reduce(function (acc, key) {
    return acc.concat(results[key].results);
  }, []);

  // Algoliasearch API Client >= v4
  // To hydrate the client we need to populate the cache with the data from
  // the server (done in `hydrateSearchClientWithMultiIndexRequest` or
  // `hydrateSearchClientWithSingleIndexRequest`). But since there is no way
  // for us to compute the key the same way as `algoliasearch-client` we need
  // to populate it on a custom key and override the `search` method to
  // search on it first.
  if ('transporter' in client && !client._cacheHydrated) {
    client._cacheHydrated = true;
    var baseMethod = client.search;
    // @ts-ignore wanting type checks for v3 on this would make this too complex
    client.search = function (requests) {
      for (var _len = arguments.length, methodArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        methodArgs[_key - 1] = arguments[_key];
      }
      var requestsWithSerializedParams = requests.map(function (request) {
        return hydrateSearchClient_objectSpread(hydrateSearchClient_objectSpread({}, request), {}, {
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
    client.transporter.responsesCache.set({
      method: 'search',
      args: cachedRequest
    }, {
      results: cachedResults
    });
  }

  // Algoliasearch API Client < v4
  // Prior to client v4 we didn't have a proper API to hydrate the client
  // cache from the outside. The following code populates the cache with
  // a single-index result. You can find more information about the
  // computation of the key inside the client (see link below).
  // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240
  if (!('transporter' in client)) {
    var cacheKey = "/1/indexes/*/queries_body_".concat(JSON.stringify({
      requests: cachedRequest
    }));
    client.cache = hydrateSearchClient_objectSpread(hydrateSearchClient_objectSpread({}, client.cache), {}, hydrateSearchClient_defineProperty({}, cacheKey, JSON.stringify({
      results: Object.keys(results).map(function (key) {
        return results[key].results;
      })
    })));
  }
}
function deserializeQueryParameters(parameters) {
  return parameters.split('&').reduce(function (acc, parameter) {
    var _parameter$split = parameter.split('='),
      _parameter$split2 = hydrateSearchClient_slicedToArray(_parameter$split, 2),
      key = _parameter$split2[0],
      value = _parameter$split2[1];
    acc[key] = value ? decodeURIComponent(value) : '';
    return acc;
  }, {});
}

// This function is copied from the algoliasearch v4 API Client. If modified,
// consider updating it also in `serializeQueryParameters` from `@algolia/transporter`.
function serializeQueryParameters(parameters) {
  var isObjectOrArray = function isObjectOrArray(value) {
    return Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]';
  };
  var encode = function encode(format) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
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
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/setIndexHelperState.js


function setIndexHelperState(finalUiState, indexWidget) {
  var nextIndexUiState = finalUiState[indexWidget.getIndexId()] || {};
  if (false) {}
  indexWidget.getHelper().setState(indexWidget.getWidgetSearchParameters(indexWidget.getHelper().state, {
    uiState: nextIndexUiState
  }));
  indexWidget.getWidgets().filter(isIndexWidget).forEach(function (widget) {
    return setIndexHelperState(finalUiState, widget);
  });
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/version.js
/* harmony default export */ const version = ('4.68.1');
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/InstantSearch.js
function InstantSearch_typeof(obj) { "@babel/helpers - typeof"; return InstantSearch_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, InstantSearch_typeof(obj); }
function InstantSearch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function InstantSearch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? InstantSearch_ownKeys(Object(source), !0).forEach(function (key) { InstantSearch_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : InstantSearch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function InstantSearch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function InstantSearch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, InstantSearch_toPropertyKey(descriptor.key), descriptor); } }
function InstantSearch_createClass(Constructor, protoProps, staticProps) { if (protoProps) InstantSearch_defineProperties(Constructor.prototype, protoProps); if (staticProps) InstantSearch_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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









var InstantSearch_withUsage = (0,documentation/* createDocumentationMessageGenerator */.V)({
  name: 'instantsearch'
});
function defaultCreateURL() {
  return '#';
}

// this purposely breaks typescript's type inference to ensure it's not used
// as it's used for a default parameter for example
// source: https://github.com/Microsoft/TypeScript/issues/14829#issuecomment-504042546
/**
 * Global options for an InstantSearch instance.
 */
var INSTANTSEARCH_FUTURE_DEFAULTS = {
  preserveSharedStateOnUnmount: false,
  persistHierarchicalRootCount: false
};

/**
 * The actual implementation of the InstantSearch. This is
 * created using the `instantsearch` factory function.
 * It emits the 'render' event every time a search is done
 */
var InstantSearch = /*#__PURE__*/function (_EventEmitter) {
  _inherits(InstantSearch, _EventEmitter);
  var _super = _createSuper(InstantSearch);
  function InstantSearch(options) {
    var _options$future2;
    var _this;
    InstantSearch_classCallCheck(this, InstantSearch);
    _this = _super.call(this);

    // prevent `render` event listening from causing a warning
    InstantSearch_defineProperty(_assertThisInitialized(_this), "client", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "indexName", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "insightsClient", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "onStateChange", null);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "future", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "helper", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "mainHelper", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "mainIndex", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "started", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "templatesConfig", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "renderState", {});
    InstantSearch_defineProperty(_assertThisInitialized(_this), "_stalledSearchDelay", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "_searchStalledTimer", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "_initialUiState", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "_initialResults", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "_createURL", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "_searchFunction", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "_mainHelperSearch", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "_insights", void 0);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "middleware", []);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "sendEventToInsights", void 0);
    /**
     * The status of the search. Can be "idle", "loading", "stalled", or "error".
     */
    InstantSearch_defineProperty(_assertThisInitialized(_this), "status", 'idle');
    /**
     * The last returned error from the Search API.
     * The error gets cleared when the next valid search response is rendered.
     */
    InstantSearch_defineProperty(_assertThisInitialized(_this), "error", undefined);
    InstantSearch_defineProperty(_assertThisInitialized(_this), "scheduleSearch", defer(function () {
      if (_this.started) {
        _this.mainHelper.search();
      }
    }));
    InstantSearch_defineProperty(_assertThisInitialized(_this), "scheduleRender", defer(function () {
      var _this$mainHelper;
      var shouldResetStatus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!((_this$mainHelper = _this.mainHelper) !== null && _this$mainHelper !== void 0 && _this$mainHelper.hasPendingRequests())) {
        clearTimeout(_this._searchStalledTimer);
        _this._searchStalledTimer = null;
        if (shouldResetStatus) {
          _this.status = 'idle';
          _this.error = undefined;
        }
      }
      _this.mainIndex.render({
        instantSearchInstance: _assertThisInitialized(_this)
      });
      _this.emit('render');
    }));
    InstantSearch_defineProperty(_assertThisInitialized(_this), "onInternalStateChange", defer(function () {
      var nextUiState = _this.mainIndex.getWidgetUiState({});
      _this.middleware.forEach(function (_ref) {
        var instance = _ref.instance;
        instance.onStateChange({
          uiState: nextUiState
        });
      });
    }));
    _this.setMaxListeners(100);
    var _options$indexName = options.indexName,
      indexName = _options$indexName === void 0 ? '' : _options$indexName,
      numberLocale = options.numberLocale,
      _options$initialUiSta = options.initialUiState,
      initialUiState = _options$initialUiSta === void 0 ? {} : _options$initialUiSta,
      _options$routing = options.routing,
      routing = _options$routing === void 0 ? null : _options$routing,
      _options$insights = options.insights,
      insights = _options$insights === void 0 ? undefined : _options$insights,
      searchFunction = options.searchFunction,
      _options$stalledSearc = options.stalledSearchDelay,
      stalledSearchDelay = _options$stalledSearc === void 0 ? 200 : _options$stalledSearc,
      _options$searchClient = options.searchClient,
      searchClient = _options$searchClient === void 0 ? null : _options$searchClient,
      _options$insightsClie = options.insightsClient,
      insightsClient = _options$insightsClie === void 0 ? null : _options$insightsClie,
      _options$onStateChang = options.onStateChange,
      onStateChange = _options$onStateChang === void 0 ? null : _options$onStateChang,
      _options$future = options.future,
      future = _options$future === void 0 ? InstantSearch_objectSpread(InstantSearch_objectSpread({}, INSTANTSEARCH_FUTURE_DEFAULTS), options.future || {}) : _options$future;
    if (searchClient === null) {
      throw new Error(InstantSearch_withUsage('The `searchClient` option is required.'));
    }
    if (typeof searchClient.search !== 'function') {
      throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
    }
    if (typeof searchClient.addAlgoliaAgent === 'function') {
      searchClient.addAlgoliaAgent("instantsearch.js (".concat(version, ")"));
    }
     false ? 0 : void 0;
    if (insightsClient && typeof insightsClient !== 'function') {
      throw new Error(InstantSearch_withUsage('The `insightsClient` option should be a function.'));
    }
     false ? 0 : void 0;
    if (false) {}
    _this.client = searchClient;
    _this.future = future;
    _this.insightsClient = insightsClient;
    _this.indexName = indexName;
    _this.helper = null;
    _this.mainHelper = null;
    _this.mainIndex = widgets_index({
      indexName: indexName
    });
    _this.onStateChange = onStateChange;
    _this.started = false;
    _this.templatesConfig = {
      helpers: hoganHelpers({
        numberLocale: numberLocale
      }),
      compileOptions: {}
    };
    _this._stalledSearchDelay = stalledSearchDelay;
    _this._searchStalledTimer = null;
    _this._createURL = defaultCreateURL;
    _this._initialUiState = initialUiState;
    _this._initialResults = null;
    _this._insights = insights;
    if (searchFunction) {
       false ? 0 : void 0;
      _this._searchFunction = searchFunction;
    }
    _this.sendEventToInsights = noop/* noop */.l;
    if (routing) {
      var routerOptions = typeof routing === 'boolean' ? {} : routing;
      routerOptions.$$internal = true;
      _this.use(createRouterMiddleware(routerOptions));
    }

    // This is the default Insights middleware,
    // added when `insights` is set to true by the user.
    // Any user-provided middleware will be added later and override this one.
    if (insights) {
      var insightsOptions = typeof insights === 'boolean' ? {} : insights;
      insightsOptions.$$internal = true;
      _this.use(createInsightsMiddleware(insightsOptions));
    }
    if (isMetadataEnabled()) {
      _this.use(createMetadataMiddleware({
        $$internal: true
      }));
    }
    return _this;
  }

  /**
   * Hooks a middleware into the InstantSearch lifecycle.
   */
  InstantSearch_createClass(InstantSearch, [{
    key: "_isSearchStalled",
    get:
    /**
     * @deprecated use `status === 'stalled'` instead
     */
    function get() {
       false ? 0 : void 0;
      return this.status === 'stalled';
    }
  }, {
    key: "use",
    value: function use() {
      var _this2 = this;
      for (var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++) {
        middleware[_key] = arguments[_key];
      }
      var newMiddlewareList = middleware.map(function (fn) {
        var newMiddleware = InstantSearch_objectSpread({
          $$type: '__unknown__',
          $$internal: false,
          subscribe: noop/* noop */.l,
          started: noop/* noop */.l,
          unsubscribe: noop/* noop */.l,
          onStateChange: noop/* noop */.l
        }, fn({
          instantSearchInstance: _this2
        }));
        _this2.middleware.push({
          creator: fn,
          instance: newMiddleware
        });
        return newMiddleware;
      });

      // If the instance has already started, we directly subscribe the
      // middleware so they're notified of changes.
      if (this.started) {
        newMiddlewareList.forEach(function (m) {
          m.subscribe();
          m.started();
        });
      }
      return this;
    }

    /**
     * Removes a middleware from the InstantSearch lifecycle.
     */
  }, {
    key: "unuse",
    value: function unuse() {
      for (var _len2 = arguments.length, middlewareToUnuse = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        middlewareToUnuse[_key2] = arguments[_key2];
      }
      this.middleware.filter(function (m) {
        return middlewareToUnuse.includes(m.creator);
      }).forEach(function (m) {
        return m.instance.unsubscribe();
      });
      this.middleware = this.middleware.filter(function (m) {
        return !middlewareToUnuse.includes(m.creator);
      });
      return this;
    }

    // @major we shipped with EXPERIMENTAL_use, but have changed that to just `use` now
  }, {
    key: "EXPERIMENTAL_use",
    value: function EXPERIMENTAL_use() {
       false ? 0 : void 0;
      return this.use.apply(this, arguments);
    }

    /**
     * Adds a widget to the search instance.
     * A widget can be added either before or after InstantSearch has started.
     * @param widget The widget to add to InstantSearch.
     *
     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`.
     */
  }, {
    key: "addWidget",
    value: function addWidget(widget) {
       false ? 0 : void 0;
      return this.addWidgets([widget]);
    }

    /**
     * Adds multiple widgets to the search instance.
     * Widgets can be added either before or after InstantSearch has started.
     * @param widgets The array of widgets to add to InstantSearch.
     */
  }, {
    key: "addWidgets",
    value: function addWidgets(widgets) {
      if (!Array.isArray(widgets)) {
        throw new Error(InstantSearch_withUsage('The `addWidgets` method expects an array of widgets. Please use `addWidget`.'));
      }
      if (widgets.some(function (widget) {
        return typeof widget.init !== 'function' && typeof widget.render !== 'function';
      })) {
        throw new Error(InstantSearch_withUsage('The widget definition expects a `render` and/or an `init` method.'));
      }
      this.mainIndex.addWidgets(widgets);
      return this;
    }

    /**
     * Removes a widget from the search instance.
     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`
     * @param widget The widget instance to remove from InstantSearch.
     *
     * The widget must implement a `dispose()` method to clear its state.
     */
  }, {
    key: "removeWidget",
    value: function removeWidget(widget) {
       false ? 0 : void 0;
      return this.removeWidgets([widget]);
    }

    /**
     * Removes multiple widgets from the search instance.
     * @param widgets Array of widgets instances to remove from InstantSearch.
     *
     * The widgets must implement a `dispose()` method to clear their states.
     */
  }, {
    key: "removeWidgets",
    value: function removeWidgets(widgets) {
      if (!Array.isArray(widgets)) {
        throw new Error(InstantSearch_withUsage('The `removeWidgets` method expects an array of widgets. Please use `removeWidget`.'));
      }
      if (widgets.some(function (widget) {
        return typeof widget.dispose !== 'function';
      })) {
        throw new Error(InstantSearch_withUsage('The widget definition expects a `dispose` method.'));
      }
      this.mainIndex.removeWidgets(widgets);
      return this;
    }

    /**
     * Ends the initialization of InstantSearch.js and triggers the
     * first search.
     */
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;
      if (this.started) {
        throw new Error(InstantSearch_withUsage('The `start` method has already been called once.'));
      }

      // This Helper is used for the queries, we don't care about its state. The
      // states are managed at the `index` level. We use this Helper to create
      // DerivedHelper scoped into the `index` widgets.
      // In Vue InstantSearch' hydrate, a main helper gets set before start, so
      // we need to respect this helper as a way to keep all listeners correct.
      var mainHelper = this.mainHelper || algoliasearch_helper(this.client, this.indexName, undefined, {
        persistHierarchicalRootCount: this.future.persistHierarchicalRootCount
      });
      mainHelper.search = function () {
        _this3.status = 'loading';
        _this3.scheduleRender(false);
         false ? 0 : void 0;

        // This solution allows us to keep the exact same API for the users but
        // under the hood, we have a different implementation. It should be
        // completely transparent for the rest of the codebase. Only this module
        // is impacted.
        return mainHelper.searchOnlyWithDerivedHelpers() && mainHelper.recommend();
      };
      if (this._searchFunction) {
        // this client isn't used to actually search, but required for the helper
        // to not throw errors
        var fakeClient = {
          search: function search() {
            return new Promise(noop/* noop */.l);
          }
        };
        this._mainHelperSearch = mainHelper.search.bind(mainHelper);
        mainHelper.search = function () {
          var mainIndexHelper = _this3.mainIndex.getHelper();
          var searchFunctionHelper = algoliasearch_helper(fakeClient, mainIndexHelper.state.index, mainIndexHelper.state);
          searchFunctionHelper.once('search', function (_ref2) {
            var state = _ref2.state;
            mainIndexHelper.overrideStateWithoutTriggeringChangeEvent(state);
            _this3._mainHelperSearch();
          });
          // Forward state changes from `searchFunctionHelper` to `mainIndexHelper`
          searchFunctionHelper.on('change', function (_ref3) {
            var state = _ref3.state;
            mainIndexHelper.setState(state);
          });
          _this3._searchFunction(searchFunctionHelper);
          return mainHelper;
        };
      }

      // Only the "main" Helper emits the `error` event vs the one for `search`
      // and `results` that are also emitted on the derived one.
      mainHelper.on('error', function (_ref4) {
        var error = _ref4.error;
        if (!(error instanceof Error)) {
          // typescript lies here, error is in some cases { name: string, message: string }
          var err = error;
          error = Object.keys(err).reduce(function (acc, key) {
            acc[key] = err[key];
            return acc;
          }, new Error(err.message));
        }
        // If an error is emitted, it is re-thrown by events. In previous versions
        // we emitted {error}, which is thrown as:
        // "Uncaught, unspecified \"error\" event. ([object Object])"
        // To avoid breaking changes, we make the error available in both
        // `error` and `error.error`
        // @MAJOR emit only error
        error.error = error;
        _this3.error = error;
        _this3.status = 'error';
        _this3.scheduleRender(false);

        // This needs to execute last because it throws the error.
        _this3.emit('error', error);
      });
      this.mainHelper = mainHelper;
      this.middleware.forEach(function (_ref5) {
        var instance = _ref5.instance;
        instance.subscribe();
      });
      this.mainIndex.init({
        instantSearchInstance: this,
        parent: null,
        uiState: this._initialUiState
      });
      if (this._initialResults) {
        hydrateSearchClient(this.client, this._initialResults);
        var originalScheduleSearch = this.scheduleSearch;
        // We don't schedule a first search when initial results are provided
        // because we already have the results to render. This skips the initial
        // network request on the browser on `start`.
        this.scheduleSearch = defer(noop/* noop */.l);
        // We also skip the initial network request when widgets are dynamically
        // added in the first tick (that's the case in all the framework-based flavors).
        // When we add a widget to `index`, it calls `scheduleSearch`. We can rely
        // on our `defer` util to restore the original `scheduleSearch` value once
        // widgets are added to hook back to the regular lifecycle.
        defer(function () {
          _this3.scheduleSearch = originalScheduleSearch;
        })();
      }
      // We only schedule a search when widgets have been added before `start()`
      // because there are listeners that can use these results.
      // This is especially useful in framework-based flavors that wait for
      // dynamically-added widgets to trigger a network request. It avoids
      // having to batch this initial network request with the one coming from
      // `addWidgets()`.
      // Later, we could also skip `index()` widgets and widgets that don't read
      // the results, but this is an optimization that has a very low impact for now.
      else if (this.mainIndex.getWidgets().length > 0) {
        this.scheduleSearch();
      }

      // Keep the previous reference for legacy purpose, some pattern use
      // the direct Helper access `search.helper` (e.g multi-index).
      this.helper = this.mainIndex.getHelper();

      // track we started the search if we add more widgets,
      // to init them directly after add
      this.started = true;
      this.middleware.forEach(function (_ref6) {
        var instance = _ref6.instance;
        instance.started();
      });

      // This is the automatic Insights middleware,
      // added when `insights` is unset and the initial results possess `queryID`.
      // Any user-provided middleware will be added later and override this one.
      if (typeof this._insights === 'undefined') {
        mainHelper.derivedHelpers[0].once('result', function () {
          var hasAutomaticInsights = _this3.mainIndex.getScopedResults().some(function (_ref7) {
            var results = _ref7.results;
            return results === null || results === void 0 ? void 0 : results._automaticInsights;
          });
          if (hasAutomaticInsights) {
            _this3.use(createInsightsMiddleware({
              $$internal: true,
              $$automatic: true
            }));
          }
        });
      }
    }

    /**
     * Removes all widgets without triggering a search afterwards.
     * @return {undefined} This method does not return anything
     */
  }, {
    key: "dispose",
    value: function dispose() {
      var _this$mainHelper2;
      this.scheduleSearch.cancel();
      this.scheduleRender.cancel();
      clearTimeout(this._searchStalledTimer);
      this.removeWidgets(this.mainIndex.getWidgets());
      this.mainIndex.dispose();

      // You can not start an instance two times, therefore a disposed instance
      // needs to set started as false otherwise this can not be restarted at a
      // later point.
      this.started = false;

      // The helper needs to be reset to perform the next search from a fresh state.
      // If not reset, it would use the state stored before calling `dispose()`.
      this.removeAllListeners();
      (_this$mainHelper2 = this.mainHelper) === null || _this$mainHelper2 === void 0 ? void 0 : _this$mainHelper2.removeAllListeners();
      this.mainHelper = null;
      this.helper = null;
      this.middleware.forEach(function (_ref8) {
        var instance = _ref8.instance;
        instance.unsubscribe();
      });
    }
  }, {
    key: "scheduleStalledRender",
    value: function scheduleStalledRender() {
      var _this4 = this;
      if (!this._searchStalledTimer) {
        this._searchStalledTimer = setTimeout(function () {
          _this4.status = 'stalled';
          _this4.scheduleRender();
        }, this._stalledSearchDelay);
      }
    }

    /**
     * Set the UI state and trigger a search.
     * @param uiState The next UI state or a function computing it from the current state
     * @param callOnStateChange private parameter used to know if the method is called from a state change
     */
  }, {
    key: "setUiState",
    value: function setUiState(uiState) {
      var _this5 = this;
      var callOnStateChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!this.mainHelper) {
        throw new Error(InstantSearch_withUsage('The `start` method needs to be called before `setUiState`.'));
      }

      // We refresh the index UI state to update the local UI state that the
      // main index passes to the function form of `setUiState`.
      this.mainIndex.refreshUiState();
      var nextUiState = typeof uiState === 'function' ? uiState(this.mainIndex.getWidgetUiState({})) : uiState;
      if (this.onStateChange && callOnStateChange) {
        this.onStateChange({
          uiState: nextUiState,
          setUiState: function setUiState(finalUiState) {
            setIndexHelperState(typeof finalUiState === 'function' ? finalUiState(nextUiState) : finalUiState, _this5.mainIndex);
            _this5.scheduleSearch();
            _this5.onInternalStateChange();
          }
        });
      } else {
        setIndexHelperState(nextUiState, this.mainIndex);
        this.scheduleSearch();
        this.onInternalStateChange();
      }
    }
  }, {
    key: "getUiState",
    value: function getUiState() {
      if (this.started) {
        // We refresh the index UI state to make sure changes from `refine` are taken in account
        this.mainIndex.refreshUiState();
      }
      return this.mainIndex.getWidgetUiState({});
    }
  }, {
    key: "createURL",
    value: function createURL() {
      var nextState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.started) {
        throw new Error(InstantSearch_withUsage('The `start` method needs to be called before `createURL`.'));
      }
      return this._createURL(nextState);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (!this.mainHelper) {
        throw new Error(InstantSearch_withUsage('The `start` method needs to be called before `refresh`.'));
      }
      this.mainHelper.clearCache().search();
    }
  }]);
  return InstantSearch;
}(events);
/* harmony default export */ const lib_InstantSearch = (InstantSearch);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(19888);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/version.js
/* harmony default export */ const es_version = ('7.8.0');
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/dequal.js
var dequal = __webpack_require__(11327);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useForceUpdate.js
function useForceUpdate_slicedToArray(arr, i) { return useForceUpdate_arrayWithHoles(arr) || useForceUpdate_iterableToArrayLimit(arr, i) || useForceUpdate_unsupportedIterableToArray(arr, i) || useForceUpdate_nonIterableRest(); }
function useForceUpdate_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useForceUpdate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useForceUpdate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useForceUpdate_arrayLikeToArray(o, minLen); }
function useForceUpdate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useForceUpdate_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useForceUpdate_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/**
 * Forces a React update that triggers a rerender.
 * @link https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
 */
function useForceUpdate() {
  var _useReducer = (0,react.useReducer)(function (x) {
      return x + 1;
    }, 0),
    _useReducer2 = useForceUpdate_slicedToArray(_useReducer, 2),
    forceUpdate = _useReducer2[1];
  return forceUpdate;
}
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchServerContext.js + 1 modules
var useInstantSearchServerContext = __webpack_require__(244);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/InstantSearchSSRContext.js

var InstantSearchSSRContext = /*#__PURE__*/(0,react.createContext)(null);
if (false) {}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchSSRContext.js


function useInstantSearchSSRContext() {
  return (0,react.useContext)(InstantSearchSSRContext);
}
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useRSCContext.js + 1 modules
var useRSCContext = __webpack_require__(72965);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchApi.js
function useInstantSearchApi_typeof(obj) { "@babel/helpers - typeof"; return useInstantSearchApi_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, useInstantSearchApi_typeof(obj); }
function useInstantSearchApi_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function useInstantSearchApi_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useInstantSearchApi_ownKeys(Object(source), !0).forEach(function (key) { useInstantSearchApi_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useInstantSearchApi_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useInstantSearchApi_defineProperty(obj, key, value) { key = useInstantSearchApi_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function useInstantSearchApi_toPropertyKey(arg) { var key = useInstantSearchApi_toPrimitive(arg, "string"); return useInstantSearchApi_typeof(key) === "symbol" ? key : String(key); }
function useInstantSearchApi_toPrimitive(input, hint) { if (useInstantSearchApi_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (useInstantSearchApi_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }










var defaultUserAgents = ["react (".concat(react.version, ")"), "react-instantsearch (".concat(es_version, ")"), "react-instantsearch-core (".concat(es_version, ")")];
var serverUserAgent = "react-instantsearch-server (".concat(es_version, ")");
var nextUserAgent = function nextUserAgent(nextVersion) {
  return nextVersion ? "next.js (".concat(nextVersion, ")") : null;
};
function useInstantSearchApi(props) {
  var forceUpdate = useForceUpdate();
  var serverContext = (0,useInstantSearchServerContext/* useInstantSearchServerContext */.r)();
  var serverState = useInstantSearchSSRContext();
  var waitingForResultsRef = (0,useRSCContext/* useRSCContext */.t)();
  var initialResults = serverState === null || serverState === void 0 ? void 0 : serverState.initialResults;
  var prevPropsRef = (0,react.useRef)(props);
  var shouldRenderAtOnce = serverContext || initialResults || waitingForResultsRef;
  var searchRef = (0,react.useRef)(null);
  // As we need to render on mount with SSR, using the local ref above in `StrictMode` will
  // create and start two instances of InstantSearch. To avoid this, we instead discard it and use
  // an upward ref from `InstantSearchSSRContext` as it has already been mounted a second time at this point.
  if (serverState) {
    searchRef = serverState.ssrSearchRef;
  }
  if (searchRef.current === null) {
    // We don't use the `instantsearch()` function because it comes with other
    // top-level APIs that we don't need.
    // See https://github.com/algolia/instantsearch/blob/5b529f43d8acc680f85837eaaa41f7fd03a3f833/src/index.es.ts#L63-L86
    var search = new lib_InstantSearch(props);
    search._schedule = function _schedule(cb) {
      search._schedule.queue.push(cb);
      clearTimeout(search._schedule.timer);
      search._schedule.timer = setTimeout(function () {
        search._schedule.queue.forEach(function (callback) {
          callback();
        });
        search._schedule.queue = [];
      }, 0);
    };
    search._schedule.queue = [];
    if (shouldRenderAtOnce) {
      // InstantSearch.js has a private Initial Results API that lets us inject
      // results on the search instance.
      // On the server, we default the initial results to an empty object so that
      // InstantSearch.js doesn't schedule a search that isn't used, leading to
      // an additional network request. (This is equivalent to monkey-patching
      // `scheduleSearch` to a noop.)
      search._initialResults = initialResults || {};
    }
    addAlgoliaAgents(props.searchClient, [].concat(defaultUserAgents, [serverContext && serverUserAgent, nextUserAgent(getNextVersion())]));

    // On the server, we start the search early to compute the search parameters.
    // On SSR, we start the search early to directly catch up with the lifecycle
    // and render.
    if (shouldRenderAtOnce) {
      search.start();
    }
    if (serverContext) {
      // We notify `getServerState()` of the InstantSearch internals to retrieve
      // the server state and pass it to the render on SSR.
      serverContext.notifyServer({
        search: search
      });
    }
    warnNextRouter(props.routing);
    warnNextAppDir(Boolean(waitingForResultsRef));
    searchRef.current = search;
  }
  {
    var _search = searchRef.current;
    var prevProps = prevPropsRef.current;
    if (prevProps.indexName !== props.indexName) {
      _search.helper.setIndex(props.indexName || '').search();
      prevPropsRef.current = props;
    }
    if (prevProps.searchClient !== props.searchClient) {
       false ? 0 : void 0;
      addAlgoliaAgents(props.searchClient, [].concat(defaultUserAgents, [serverContext && serverUserAgent]));
      _search.mainHelper.setClient(props.searchClient).search();
      prevPropsRef.current = props;
    }
    if (prevProps.onStateChange !== props.onStateChange) {
      _search.onStateChange = props.onStateChange;
      prevPropsRef.current = props;
    }
    if (prevProps.searchFunction !== props.searchFunction) {
      // Updating the `searchFunction` to `undefined` is not supported by
      // InstantSearch.js, so it will throw an error.
      // This is a fair behavior until we add an update API in InstantSearch.js.
      _search._searchFunction = props.searchFunction;
      prevPropsRef.current = props;
    }
    if (prevProps.stalledSearchDelay !== props.stalledSearchDelay) {
      var _props$stalledSearchD;
      // The default `stalledSearchDelay` in InstantSearch.js is 200ms.
      // We need to reset it when it's undefined to get back to the original value.
      _search._stalledSearchDelay = (_props$stalledSearchD = props.stalledSearchDelay) !== null && _props$stalledSearchD !== void 0 ? _props$stalledSearchD : 200;
      prevPropsRef.current = props;
    }
    if (!(0,dequal/* dequal */.j)(prevProps.future, props.future)) {
      _search.future = useInstantSearchApi_objectSpread(useInstantSearchApi_objectSpread({}, INSTANTSEARCH_FUTURE_DEFAULTS), props.future);
      prevPropsRef.current = props;
    }

    // Updating the `routing` prop is not supported because InstantSearch.js
    // doesn't let us change it. This might not be a problem though, because `routing`
    // shouldn't need to be dynamic.
    // If we find scenarios where `routing` needs to change, we can always expose
    // it privately on the InstantSearch instance. Another way would be to
    // manually inject the routing middleware in this library, and not rely
    // on the provided `routing` prop.
  }

  var cleanupTimerRef = (0,react.useRef)(null);
  var store = (0,shim.useSyncExternalStore)((0,react.useCallback)(function () {
    var search = searchRef.current;

    // Scenario 1: the component mounts.
    if (cleanupTimerRef.current === null) {
      // On SSR, the instance is already started so we don't start it again.
      if (!search.started) {
        search.start();
        forceUpdate();
      }
    }
    // Scenario 2: the component updates.
    else {
      // We cancel the previous cleanup function because we don't want to
      // dispose the search during an update.
      clearTimeout(cleanupTimerRef.current);
      search._preventWidgetCleanup = false;
    }
    return function () {
      function cleanup() {
        search.dispose();
      }
      clearTimeout(search._schedule.timer);
      // We clean up only when the component that uses this subscription unmounts,
      // but not when it updates, because it would dispose the instance, which
      // would remove all the widgets and break routing.
      // Executing the cleanup function in a `setTimeout()` lets us cancel it
      // in the next effect.
      // (There might be better ways to do this.)
      cleanupTimerRef.current = setTimeout(cleanup);

      // We need to prevent the `useWidget` cleanup function so that widgets
      // are not removed before the instance is disposed, triggering
      // an unwanted search request.
      search._preventWidgetCleanup = true;
    };
  }, [forceUpdate]), function () {
    return searchRef.current;
  }, function () {
    return searchRef.current;
  });
  return store;
}
function addAlgoliaAgents(searchClient, userAgents) {
  if (typeof searchClient.addAlgoliaAgent !== 'function') {
    return;
  }
  userAgents.filter(Boolean).forEach(function (userAgent) {
    searchClient.addAlgoliaAgent(userAgent);
  });
}
function warnNextRouter(routing) {
  if (false) { var isUsingNextRouter, _routing$router; }
}
function warnNextAppDir(isRscContextDefined) {
  var _next;
  if (true) {
    return;
  }
   false ? 0 : void 0;
}

/**
 * Gets the version of Next.js if it is available in the `window` object,
 * otherwise it returns the NEXT_RUNTIME environment variable (in SSR),
 * which is either `nodejs` or `edge`.
 */
function getNextVersion() {
  var _next2, _process$env;
  return typeof window !== 'undefined' && ((_next2 = window.next) === null || _next2 === void 0 ? void 0 : _next2.version) || (typeof process !== 'undefined' ? (_process$env = {}) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_RUNTIME : undefined);
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/components/InstantSearch.js
var InstantSearch_excluded = ["children"];
function InstantSearch_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = InstantSearch_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function InstantSearch_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function InstantSearch_InstantSearch(_ref) {
  var children = _ref.children,
    props = InstantSearch_objectWithoutProperties(_ref, InstantSearch_excluded);
  var search = useInstantSearchApi(props);
  if (!search.started) {
    return null;
  }
  return /*#__PURE__*/react.createElement(InstantSearchContext/* InstantSearchContext */.t.Provider, {
    value: search
  }, /*#__PURE__*/react.createElement(IndexContext/* IndexContext */.m.Provider, {
    value: search.mainIndex
  }, children));
}

/***/ }),

/***/ 71291:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ useConnector)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/dequal.js
var dequal = __webpack_require__(11327);
// EXTERNAL MODULE: ./node_modules/algoliasearch-helper/index.js
var algoliasearch_helper = __webpack_require__(74103);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/createSearchResults.js

function createSearchResults(state) {
  var _state$query, _state$page, _state$hitsPerPage;
  return new algoliasearch_helper.SearchResults(state, [{
    query: (_state$query = state.query) !== null && _state$query !== void 0 ? _state$query : '',
    page: (_state$page = state.page) !== null && _state$page !== void 0 ? _state$page : 0,
    hitsPerPage: (_state$hitsPerPage = state.hitsPerPage) !== null && _state$hitsPerPage !== void 0 ? _state$hitsPerPage : 20,
    hits: [],
    nbHits: 0,
    nbPages: 0,
    params: '',
    exhaustiveNbHits: true,
    exhaustiveFacetsCount: true,
    processingTimeMS: 0,
    index: state.index
  }], {
    /** used by connectors to prevent persisting these results */
    __isArtificial: true
  });
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/getIndexSearchResults.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function getIndexSearchResults(indexWidget) {
  var helper = indexWidget.getHelper();
  var results =
  // On SSR, we get the results injected on the Index.
  indexWidget.getResults() ||
  // On the browser, we create fallback results based on the helper state.
  createSearchResults(helper.state);
  var scopedResults = indexWidget.getScopedResults().map(function (scopedResult) {
    var fallbackResults = scopedResult.indexId === indexWidget.getIndexId() ? results : createSearchResults(scopedResult.helper.state);
    return _objectSpread(_objectSpread({}, scopedResult), {}, {
      // We keep `results` from being `null`.
      results: scopedResult.results || fallbackResults
    });
  });
  return {
    results: results,
    scopedResults: scopedResults
  };
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/invariant.js
/**
 * Throws an error if the condition is not met.
 *
 * The error is exhaustive in development, and becomes generic in production.
 *
 * This is used to make development a better experience to provide guidance as
 * to where the error comes from.
 */
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (true) {
    throw new Error('Invariant failed');
  }
  if (false) {}
}
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/IndexContext.js
var IndexContext = __webpack_require__(91104);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useIndexContext.js



function useIndexContext() {
  var context = (0,react.useContext)(IndexContext/* IndexContext */.m);
  invariant(context !== null, 'The <Index> component must be used within <InstantSearch>.');
  return context;
}
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/InstantSearchContext.js
var InstantSearchContext = __webpack_require__(695);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchContext.js



function useInstantSearchContext() {
  var search = (0,react.useContext)(InstantSearchContext/* InstantSearchContext */.t);
  invariant(search !== null, 'Hooks must be used inside the <InstantSearch> component.\n\n' + 'They are not compatible with the `react-instantsearch-core@6.x` and `react-instantsearch-dom` packages, so make sure to use the <InstantSearch> component from `react-instantsearch-core@7.x`.');
  return search;
}
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchServerContext.js + 1 modules
var useInstantSearchServerContext = __webpack_require__(244);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useStableValue.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useStableValue(value) {
  var _useState = (0,react.useState)(function () {
      return value;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    stableValue = _useState2[0],
    setStableValue = _useState2[1];
  if (!(0,dequal/* dequal */.j)(stableValue, value)) {
    setStableValue(value);
  }
  return stableValue;
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/use.js

var useKey = 'use';

// @TODO: Remove this file and import directly from React when available.
var use = react_namespaceObject[useKey];
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useIsomorphicLayoutEffect.js


/**
 * `useLayoutEffect` that doesn't show a warning when server-side rendering.
 *
 * It uses `useEffect` on the server (no-op), and `useLayoutEffect` on the browser.
 */
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useRSCContext.js + 1 modules
var useRSCContext = __webpack_require__(72965);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useWidget.js






function useWidget(_ref) {
  var _waitingForResultsRef;
  var widget = _ref.widget,
    parentIndex = _ref.parentIndex,
    props = _ref.props,
    shouldSsr = _ref.shouldSsr;
  var waitingForResultsRef = (0,useRSCContext/* useRSCContext */.t)();
  var prevPropsRef = (0,react.useRef)(props);
  (0,react.useEffect)(function () {
    prevPropsRef.current = props;
  }, [props]);
  var prevWidgetRef = (0,react.useRef)(widget);
  (0,react.useEffect)(function () {
    prevWidgetRef.current = widget;
  }, [widget]);
  var cleanupTimerRef = (0,react.useRef)(null);
  var shouldAddWidgetEarly = shouldSsr && !parentIndex.getWidgets().includes(widget);
  var search = useInstantSearchContext();

  // This effect is responsible for adding, removing, and updating the widget.
  // We need to support scenarios where the widget is remounted quickly, like in
  // Strict Mode, so that we don't lose its state, and therefore that we don't
  // break routing.
  useIsomorphicLayoutEffect(function () {
    var previousWidget = prevWidgetRef.current;

    // Scenario 1: the widget is added for the first time.
    if (!cleanupTimerRef.current) {
      if (!shouldSsr) {
        parentIndex.addWidgets([widget]);
      }
    }
    // Scenario 2: the widget is rerendered or updated.
    else {
      // We cancel the original effect cleanup because it may not be necessary if
      // props haven't changed. (We manually call it if it is below.)
      clearTimeout(cleanupTimerRef.current);

      // Warning: if an unstable function prop is provided, `dequal` is not able
      // to keep its reference and therefore will consider that props did change.
      // This could unsollicitely remove/add the widget, therefore forget its state,
      // and could be a source of confusion.
      // If users face this issue, we should advise them to provide stable function
      // references.
      var arePropsEqual = (0,dequal/* dequal */.j)(props, prevPropsRef.current);

      // If props did change, then we execute the cleanup function instantly
      // and then add the widget back. This lets us add the widget without
      // waiting for the scheduled cleanup function to finish (that we canceled
      // above).
      if (!arePropsEqual) {
        parentIndex.removeWidgets([previousWidget]);
        parentIndex.addWidgets([widget]);
      }
    }
    return function () {
      // We don't remove the widget right away, but rather schedule it so that
      // we're able to cancel it in the next effect.
      cleanupTimerRef.current = setTimeout(function () {
        search._schedule(function () {
          if (search._preventWidgetCleanup) return;
          parentIndex.removeWidgets([previousWidget]);
        });
      });
    };
  }, [parentIndex, widget, shouldSsr, search, props]);
  if (shouldAddWidgetEarly || (waitingForResultsRef === null || waitingForResultsRef === void 0 ? void 0 : (_waitingForResultsRef = waitingForResultsRef.current) === null || _waitingForResultsRef === void 0 ? void 0 : _waitingForResultsRef.status) === 'pending') {
    parentIndex.addWidgets([widget]);
  }
  if (typeof window === 'undefined' && waitingForResultsRef !== null && waitingForResultsRef !== void 0 && waitingForResultsRef.current &&
  // We need the widgets contained in the index to be added before we trigger the search request.
  widget.$$type !== 'ais.index') {
    var _search$helper;
    use(waitingForResultsRef.current);
    // If we made a second request because of DynamicWidgets, we need to wait for the second result,
    // except for DynamicWidgets itself which needs to render its children after the first result.
    if (widget.$$type !== 'ais.dynamicWidgets' && (_search$helper = search.helper) !== null && _search$helper !== void 0 && _search$helper.lastResults) {
      use(waitingForResultsRef.current);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/hooks/useConnector.js
function useConnector_typeof(obj) { "@babel/helpers - typeof"; return useConnector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, useConnector_typeof(obj); }
var _excluded = ["instantSearchInstance", "widgetParams"],
  _excluded2 = ["widgetParams"];
function useConnector_slicedToArray(arr, i) { return useConnector_arrayWithHoles(arr) || useConnector_iterableToArrayLimit(arr, i) || useConnector_unsupportedIterableToArray(arr, i) || useConnector_nonIterableRest(); }
function useConnector_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useConnector_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useConnector_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useConnector_arrayLikeToArray(o, minLen); }
function useConnector_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useConnector_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useConnector_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useConnector_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function useConnector_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useConnector_ownKeys(Object(source), !0).forEach(function (key) { useConnector_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useConnector_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useConnector_defineProperty(obj, key, value) { key = useConnector_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function useConnector_toPropertyKey(arg) { var key = useConnector_toPrimitive(arg, "string"); return useConnector_typeof(key) === "symbol" ? key : String(key); }
function useConnector_toPrimitive(input, hint) { if (useConnector_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (useConnector_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function useConnector(connector) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var additionalWidgetProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var serverContext = (0,useInstantSearchServerContext/* useInstantSearchServerContext */.r)();
  var search = useInstantSearchContext();
  var parentIndex = useIndexContext();
  var stableProps = useStableValue(props);
  var stableAdditionalWidgetProperties = useStableValue(additionalWidgetProperties);
  var shouldSetStateRef = (0,react.useRef)(true);
  var previousRenderStateRef = (0,react.useRef)(null);
  var previousStatusRef = (0,react.useRef)(search.status);
  var widget = (0,react.useMemo)(function () {
    var createWidget = connector(function (connectorState, isFirstRender) {
      // We skip the `init` widget render because:
      // - We rely on `getWidgetRenderState` to compute the initial state before
      //   the InstantSearch.js lifecycle starts.
      // - It prevents UI flashes when updating the widget props.
      if (isFirstRender) {
        shouldSetStateRef.current = true;
        return;
      }

      // There are situations where InstantSearch.js may render widgets slightly
      // after they're removed by React, and thus try to update the React state
      // on unmounted components. React 16 and 17 consider them as memory leaks
      // and display a warning.
      // This happens in <DynamicWidgets> when `attributesToRender` contains a
      // value without an attribute previously mounted. React will unmount the
      // component controlled by that attribute, but InstantSearch.js will stay
      // unaware of this change until the render pass finishes, and therefore
      // notifies of a state change.
      // This ref lets us track this situation and ignore these state updates.
      if (shouldSetStateRef.current) {
        var instantSearchInstance = connectorState.instantSearchInstance,
          widgetParams = connectorState.widgetParams,
          renderState = _objectWithoutProperties(connectorState, _excluded);

        // We only update the state when a widget render state param changes,
        // except for functions. We ignore function reference changes to avoid
        // infinite loops. It's safe to omit them because they get updated
        // every time another render param changes.
        if (!(0,dequal/* dequal */.j)(renderState, previousRenderStateRef.current, function (a, b) {
          return (a === null || a === void 0 ? void 0 : a.constructor) === Function && (b === null || b === void 0 ? void 0 : b.constructor) === Function;
        }) || instantSearchInstance.status !== previousStatusRef.current) {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          setState(renderState);
          previousRenderStateRef.current = renderState;
          previousStatusRef.current = instantSearchInstance.status;
        }
      }
    }, function () {
      // We'll ignore the next state update until we know for sure that
      // InstantSearch.js re-inits the component.
      shouldSetStateRef.current = false;
    });
    return useConnector_objectSpread(useConnector_objectSpread({}, createWidget(stableProps)), stableAdditionalWidgetProperties);
  }, [connector, stableProps, stableAdditionalWidgetProperties]);
  var _useState = (0,react.useState)(function () {
      if (widget.getWidgetRenderState) {
        var _widget$getWidgetSear;
        // The helper exists because we've started InstantSearch.
        var helper = parentIndex.getHelper();
        var uiState = parentIndex.getWidgetUiState({})[parentIndex.getIndexId()];
        helper.state = ((_widget$getWidgetSear = widget.getWidgetSearchParameters) === null || _widget$getWidgetSear === void 0 ? void 0 : _widget$getWidgetSear.call(widget, helper.state, {
          uiState: uiState
        })) || helper.state;
        var _getIndexSearchResult = getIndexSearchResults(parentIndex),
          results = _getIndexSearchResult.results,
          scopedResults = _getIndexSearchResult.scopedResults;

        // We get the widget render state by providing the same parameters as
        // InstantSearch provides to the widget's `render` method.
        // See https://github.com/algolia/instantsearch/blob/019cd18d0de6dd320284aa4890541b7fe2198c65/src/widgets/index/index.ts#L604-L617
        var _widget$getWidgetRend = widget.getWidgetRenderState({
            helper: helper,
            parent: parentIndex,
            instantSearchInstance: search,
            results: results,
            scopedResults: scopedResults,
            state: helper.state,
            renderState: search.renderState,
            templatesConfig: search.templatesConfig,
            createURL: parentIndex.createURL,
            searchMetadata: {
              isSearchStalled: search.status === 'stalled'
            },
            status: search.status,
            error: search.error
          }),
          widgetParams = _widget$getWidgetRend.widgetParams,
          renderState = _objectWithoutProperties(_widget$getWidgetRend, _excluded2);
        return renderState;
      }
      return {};
    }),
    _useState2 = useConnector_slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  useWidget({
    widget: widget,
    parentIndex: parentIndex,
    props: stableProps,
    shouldSsr: Boolean(serverContext)
  });
  return state;
}

/***/ }),

/***/ 91104:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ IndexContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

var IndexContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
if (false) {}

/***/ }),

/***/ 695:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ InstantSearchContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

var InstantSearchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
if (false) {}

/***/ }),

/***/ 11327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ dequal)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* eslint-disable complexity */

/*
 * Code taken from dequal/lite v2.0.0
 * https://github.com/lukeed/dequal/blob/9aa73181ac7e081cd330cac67d313632ac04bb02/src/lite.js
 *
 * It adds a 3rd argument `compare(a, b)` that lets execute custom logic to
 * compare values.
 * We use it to skip comparing function references.
 */

// eslint-disable-next-line @typescript-eslint/unbound-method
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar, compare) {
  // start of custom implementation
  if (compare !== null && compare !== void 0 && compare(foo, bar)) {
    return true;
  }
  // end of custom implementation

  var ctor;
  var len;
  if (foo === bar) return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime();
    if (ctor === RegExp) return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len], compare));
      }
      return len === -1;
    }
    if (!ctor || _typeof(foo) === 'object') {
      len = 0;
      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor], compare)) return false;
      }
      return Object.keys(bar).length === len;
    }
  }

  // eslint-disable-next-line no-self-compare
  return foo !== foo && bar !== bar;
}

/***/ }),

/***/ 244:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ useInstantSearchServerContext)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/components/InstantSearchServerContext.js

var InstantSearchServerContext = /*#__PURE__*/(0,react.createContext)(null);
if (false) {}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchServerContext.js


function useInstantSearchServerContext() {
  return (0,react.useContext)(InstantSearchServerContext);
}

/***/ }),

/***/ 72965:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ useRSCContext)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/InstantSearchRSCContext.js

var InstantSearchRSCContext = /*#__PURE__*/(0,react.createContext)(null);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/lib/useRSCContext.js


function useRSCContext() {
  return (0,react.useContext)(InstantSearchRSCContext);
}

/***/ }),

/***/ 46424:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ Highlight)
/* harmony export */ });
/* harmony import */ var instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64652);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _InternalHighlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33821);
var _excluded = ["classNames"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Highlight(_ref) {
  var _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InternalHighlight_js__WEBPACK_IMPORTED_MODULE_1__/* .InternalHighlight */ .G, _extends({
    classNames: {
      root: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_2__.cx)('ais-Highlight', classNames.root),
      highlighted: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_2__.cx)('ais-Highlight-highlighted', classNames.highlighted),
      nonHighlighted: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_2__.cx)('ais-Highlight-nonHighlighted', classNames.nonHighlighted),
      separator: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_2__.cx)('ais-Highlight-separator', classNames.separator)
    }
  }, props));
}

/***/ }),

/***/ 33821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ InternalHighlight)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/instantsearch-ui-components/dist/es/lib/cx.js
var cx = __webpack_require__(64652);
;// CONCATENATED MODULE: ./node_modules/instantsearch-ui-components/dist/es/components/Highlight.js


var _excluded = ["parts", "highlightedTagName", "nonHighlightedTagName", "separator", "className", "classNames"];

function createHighlightPartComponent(_ref) {
  var createElement = _ref.createElement;
  return function HighlightPart(_ref2) {
    var classNames = _ref2.classNames,
      children = _ref2.children,
      highlightedTagName = _ref2.highlightedTagName,
      isHighlighted = _ref2.isHighlighted,
      nonHighlightedTagName = _ref2.nonHighlightedTagName;
    var TagName = isHighlighted ? highlightedTagName : nonHighlightedTagName;
    return createElement(TagName, {
      className: isHighlighted ? classNames.highlighted : classNames.nonHighlighted
    }, children);
  };
}
function createHighlightComponent(_ref3) {
  var createElement = _ref3.createElement,
    Fragment = _ref3.Fragment;
  var HighlightPart = createHighlightPartComponent({
    createElement: createElement,
    Fragment: Fragment
  });
  return function Highlight(userProps) {
    var parts = userProps.parts,
      _userProps$highlighte = userProps.highlightedTagName,
      highlightedTagName = _userProps$highlighte === void 0 ? 'mark' : _userProps$highlighte,
      _userProps$nonHighlig = userProps.nonHighlightedTagName,
      nonHighlightedTagName = _userProps$nonHighlig === void 0 ? 'span' : _userProps$nonHighlig,
      _userProps$separator = userProps.separator,
      separator = _userProps$separator === void 0 ? ', ' : _userProps$separator,
      className = userProps.className,
      _userProps$classNames = userProps.classNames,
      classNames = _userProps$classNames === void 0 ? {} : _userProps$classNames,
      props = (0,objectWithoutProperties/* default */.A)(userProps, _excluded);
    return createElement("span", (0,esm_extends/* default */.A)({}, props, {
      className: (0,cx.cx)(classNames.root, className)
    }), parts.map(function (part, partIndex) {
      var isLastPart = partIndex === parts.length - 1;
      return createElement(Fragment, {
        key: partIndex
      }, part.map(function (subPart, subPartIndex) {
        return createElement(HighlightPart, {
          key: subPartIndex,
          classNames: classNames,
          highlightedTagName: highlightedTagName,
          nonHighlightedTagName: nonHighlightedTagName,
          isHighlighted: subPart.isHighlighted
        }, subPart.value);
      }), !isLastPart && createElement("span", {
        className: classNames.separator
      }, separator));
    }));
  };
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/ui/InternalHighlight.js


var InternalHighlight = createHighlightComponent({
  createElement: react.createElement,
  Fragment: react.Fragment
});

/***/ }),

/***/ 76661:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ SearchBox)
/* harmony export */ });
/* harmony import */ var instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64652);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var _excluded = ["formRef", "inputRef", "isSearchStalled", "onChange", "onReset", "onSubmit", "placeholder", "value", "autoFocus", "resetIconComponent", "submitIconComponent", "loadingIconComponent", "classNames", "translations"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
});
function DefaultSubmitIcon(_ref) {
  var classNames = _ref.classNames;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_1__.cx)('ais-SearchBox-submitIcon', classNames.submitIcon),
    width: "10",
    height: "10",
    viewBox: "0 0 40 40",
    "aria-hidden": "true"
  }, _ref2);
}
var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
});
function DefaultResetIcon(_ref3) {
  var classNames = _ref3.classNames;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_1__.cx)('ais-SearchBox-resetIcon', classNames.resetIcon),
    viewBox: "0 0 20 20",
    width: "10",
    height: "10",
    "aria-hidden": "true"
  }, _ref4);
}
var _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
}))));
function DefaultLoadingIcon(_ref5) {
  var classNames = _ref5.classNames;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    "aria-label": "Results are loading",
    width: "16",
    height: "16",
    viewBox: "0 0 38 38",
    stroke: "#444",
    className: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_1__.cx)('ais-SearchBox-loadingIcon', classNames.loadingIcon),
    "aria-hidden": "true"
  }, _ref6);
}
function SearchBox(_ref7) {
  var formRef = _ref7.formRef,
    inputRef = _ref7.inputRef,
    isSearchStalled = _ref7.isSearchStalled,
    onChange = _ref7.onChange,
    onReset = _ref7.onReset,
    onSubmit = _ref7.onSubmit,
    _ref7$placeholder = _ref7.placeholder,
    placeholder = _ref7$placeholder === void 0 ? '' : _ref7$placeholder,
    value = _ref7.value,
    autoFocus = _ref7.autoFocus,
    _ref7$resetIconCompon = _ref7.resetIconComponent,
    ResetIcon = _ref7$resetIconCompon === void 0 ? DefaultResetIcon : _ref7$resetIconCompon,
    _ref7$submitIconCompo = _ref7.submitIconComponent,
    SubmitIcon = _ref7$submitIconCompo === void 0 ? DefaultSubmitIcon : _ref7$submitIconCompo,
    _ref7$loadingIconComp = _ref7.loadingIconComponent,
    LoadingIcon = _ref7$loadingIconComp === void 0 ? DefaultLoadingIcon : _ref7$loadingIconComp,
    _ref7$classNames = _ref7.classNames,
    classNames = _ref7$classNames === void 0 ? {} : _ref7$classNames,
    translations = _ref7.translations,
    props = _objectWithoutProperties(_ref7, _excluded);
  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (onSubmit) {
      onSubmit(event);
    }
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }
  function handleReset(event) {
    event.preventDefault();
    event.stopPropagation();
    onReset(event);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({}, props, {
    className: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_1__.cx)('ais-SearchBox', classNames.root, props.className)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    ref: formRef,
    action: "",
    className: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_1__.cx)('ais-SearchBox-form', classNames.form),
    noValidate: true,
    onSubmit: handleSubmit,
    onReset: handleReset,
    role: "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    ref: inputRef,
    className: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_1__.cx)('ais-SearchBox-input', classNames.input),
    "aria-label": "Search",
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    placeholder: placeholder,
    spellCheck: false,
    maxLength: 512,
    type: "search",
    value: value,
    onChange: onChange,
    onCompositionEnd: onChange,
    autoFocus: autoFocus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_1__.cx)('ais-SearchBox-submit', classNames.submit),
    type: "submit",
    title: translations.submitButtonTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SubmitIcon, {
    classNames: classNames
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_1__.cx)('ais-SearchBox-reset', classNames.reset),
    type: "reset",
    title: translations.resetButtonTitle,
    hidden: value.length === 0 || isSearchStalled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResetIcon, {
    classNames: classNames
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: (0,instantsearch_ui_components__WEBPACK_IMPORTED_MODULE_1__.cx)('ais-SearchBox-loadingIndicator', classNames.loadingIndicator),
    hidden: !isSearchStalled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingIcon, {
    classNames: classNames
  }))));
}

/***/ }),

/***/ 29330:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ ClearRefinements_ClearRefinements)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(74243);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(82894);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/checkRendering.js + 1 modules
var checkRendering = __webpack_require__(84203);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/clearRefinements.js
/**
 * Clears the refinements of a SearchParameters object based on rules provided.
 * The included attributes list is applied before the excluded attributes list. If the list
 * is not provided, this list of all the currently refined attributes is used as included attributes.
 * @returns search parameters with refinements cleared
 */
function clearRefinements(_ref) {
  var helper = _ref.helper,
    _ref$attributesToClea = _ref.attributesToClear,
    attributesToClear = _ref$attributesToClea === void 0 ? [] : _ref$attributesToClea;
  var finalState = helper.state.setPage(0);
  finalState = attributesToClear.reduce(function (state, attribute) {
    if (finalState.isNumericRefined(attribute)) {
      return state.removeNumericRefinement(attribute);
    }
    if (finalState.isHierarchicalFacet(attribute)) {
      return state.removeHierarchicalFacetRefinement(attribute);
    }
    if (finalState.isDisjunctiveFacet(attribute)) {
      return state.removeDisjunctiveFacetRefinement(attribute);
    }
    if (finalState.isConjunctiveFacet(attribute)) {
      return state.removeFacetRefinement(attribute);
    }
    return state;
  }, finalState);
  if (attributesToClear.indexOf('query') !== -1) {
    finalState = finalState.setQuery('');
  }
  return finalState;
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js + 1 modules
var mergeSearchParameters = __webpack_require__(47002);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/uniq.js
var uniq = __webpack_require__(94176);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/escapeFacetValue.js
function unescapeFacetValue(value) {
  if (typeof value === 'string') {
    return value.replace(/^\\-/, '-');
  }
  return value;
}
function escapeFacetValue(value) {
  if (typeof value === 'number' && value < 0 || typeof value === 'string') {
    return String(value).replace(/^-/, '\\-');
  }
  return value;
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/find.js
var find = __webpack_require__(67438);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/getRefinements.js


function getRefinement(state, type, attribute, name) {
  var resultsFacets = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var res = {
    type: type,
    attribute: attribute,
    name: name,
    escapedValue: escapeFacetValue(name)
  };
  var facet = (0,find/* find */.I)(resultsFacets, function (resultsFacet) {
    return resultsFacet.name === attribute;
  });
  var count;
  if (type === 'hierarchical') {
    var facetDeclaration = state.getHierarchicalFacetByName(attribute);
    var nameParts = name.split(facetDeclaration.separator);
    var getFacetRefinement = function getFacetRefinement(facetData) {
      return function (refinementKey) {
        return facetData[refinementKey];
      };
    };
    var _loop = function _loop(i) {
      facet = facet && facet.data && (0,find/* find */.I)(Object.keys(facet.data).map(getFacetRefinement(facet.data)), function (refinement) {
        return refinement.name === nameParts[i];
      });
    };
    for (var i = 0; facet !== undefined && i < nameParts.length; ++i) {
      _loop(i);
    }
    count = facet && facet.count;
  } else {
    count = facet && facet.data && facet.data[res.name];
  }
  if (count !== undefined) {
    res.count = count;
  }
  if (facet && facet.exhaustive !== undefined) {
    res.exhaustive = facet.exhaustive;
  }
  return res;
}
function getRefinements(results, state) {
  var includesQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var refinements = [];
  var _state$facetsRefineme = state.facetsRefinements,
    facetsRefinements = _state$facetsRefineme === void 0 ? {} : _state$facetsRefineme,
    _state$facetsExcludes = state.facetsExcludes,
    facetsExcludes = _state$facetsExcludes === void 0 ? {} : _state$facetsExcludes,
    _state$disjunctiveFac = state.disjunctiveFacetsRefinements,
    disjunctiveFacetsRefinements = _state$disjunctiveFac === void 0 ? {} : _state$disjunctiveFac,
    _state$hierarchicalFa = state.hierarchicalFacetsRefinements,
    hierarchicalFacetsRefinements = _state$hierarchicalFa === void 0 ? {} : _state$hierarchicalFa,
    _state$numericRefinem = state.numericRefinements,
    numericRefinements = _state$numericRefinem === void 0 ? {} : _state$numericRefinem,
    _state$tagRefinements = state.tagRefinements,
    tagRefinements = _state$tagRefinements === void 0 ? [] : _state$tagRefinements;
  Object.keys(facetsRefinements).forEach(function (attribute) {
    var refinementNames = facetsRefinements[attribute];
    refinementNames.forEach(function (refinementName) {
      refinements.push(getRefinement(state, 'facet', attribute, refinementName, results.facets));
    });
  });
  Object.keys(facetsExcludes).forEach(function (attribute) {
    var refinementNames = facetsExcludes[attribute];
    refinementNames.forEach(function (refinementName) {
      refinements.push({
        type: 'exclude',
        attribute: attribute,
        name: refinementName,
        exclude: true
      });
    });
  });
  Object.keys(disjunctiveFacetsRefinements).forEach(function (attribute) {
    var refinementNames = disjunctiveFacetsRefinements[attribute];
    refinementNames.forEach(function (refinementName) {
      refinements.push(getRefinement(state, 'disjunctive', attribute,
      // We unescape any disjunctive refined values with `unescapeFacetValue` because
      // they can be escaped on negative numeric values with `escapeFacetValue`.
      unescapeFacetValue(refinementName), results.disjunctiveFacets));
    });
  });
  Object.keys(hierarchicalFacetsRefinements).forEach(function (attribute) {
    var refinementNames = hierarchicalFacetsRefinements[attribute];
    refinementNames.forEach(function (refinement) {
      refinements.push(getRefinement(state, 'hierarchical', attribute, refinement, results.hierarchicalFacets));
    });
  });
  Object.keys(numericRefinements).forEach(function (attribute) {
    var operators = numericRefinements[attribute];
    Object.keys(operators).forEach(function (operatorOriginal) {
      var operator = operatorOriginal;
      var valueOrValues = operators[operator];
      var refinementNames = Array.isArray(valueOrValues) ? valueOrValues : [valueOrValues];
      refinementNames.forEach(function (refinementName) {
        refinements.push({
          type: 'numeric',
          attribute: attribute,
          name: "".concat(refinementName),
          numericValue: refinementName,
          operator: operator
        });
      });
    });
  });
  tagRefinements.forEach(function (refinementName) {
    refinements.push({
      type: 'tag',
      attribute: '_tags',
      name: refinementName
    });
  });
  if (includesQuery && state.query && state.query.trim()) {
    refinements.push({
      attribute: 'query',
      type: 'query',
      name: state.query,
      query: state.query
    });
  }
  return refinements;
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/clear-refinements/connectClearRefinements.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var withUsage = (0,documentation/* createDocumentationMessageGenerator */.V)({
  name: 'clear-refinements',
  connector: true
});
var connectClearRefinements = function connectClearRefinements(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop/* noop */.l;
  (0,checkRendering/* checkRendering */.t)(renderFn, withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
      _ref$includedAttribut = _ref.includedAttributes,
      includedAttributes = _ref$includedAttribut === void 0 ? [] : _ref$includedAttribut,
      _ref$excludedAttribut = _ref.excludedAttributes,
      excludedAttributes = _ref$excludedAttribut === void 0 ? ['query'] : _ref$excludedAttribut,
      _ref$transformItems = _ref.transformItems,
      transformItems = _ref$transformItems === void 0 ? function (items) {
        return items;
      } : _ref$transformItems;
    if (widgetParams && widgetParams.includedAttributes && widgetParams.excludedAttributes) {
      throw new Error(withUsage('The options `includedAttributes` and `excludedAttributes` cannot be used together.'));
    }
    var connectorState = {
      refine: noop/* noop */.l,
      createURL: function createURL() {
        return '';
      },
      attributesToClear: []
    };
    var cachedRefine = function cachedRefine() {
      return connectorState.refine();
    };
    var cachedCreateURL = function cachedCreateURL() {
      return connectorState.createURL();
    };
    return {
      $$type: 'ais.clearRefinements',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose() {
        unmountFn();
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return _objectSpread(_objectSpread({}, renderState), {}, {
          clearRefinements: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref2) {
        var createURL = _ref2.createURL,
          scopedResults = _ref2.scopedResults,
          results = _ref2.results;
        connectorState.attributesToClear = scopedResults.reduce(function (attributesToClear, scopedResult) {
          return attributesToClear.concat(getAttributesToClear({
            scopedResult: scopedResult,
            includedAttributes: includedAttributes,
            excludedAttributes: excludedAttributes,
            transformItems: transformItems,
            results: results
          }));
        }, []);
        connectorState.refine = function () {
          connectorState.attributesToClear.forEach(function (_ref3) {
            var indexHelper = _ref3.helper,
              items = _ref3.items;
            indexHelper.setState(clearRefinements({
              helper: indexHelper,
              attributesToClear: items
            })).search();
          });
        };
        connectorState.createURL = function () {
          return createURL(mergeSearchParameters/* mergeSearchParameters */.p.apply(void 0, _toConsumableArray(connectorState.attributesToClear.map(function (_ref4) {
            var indexHelper = _ref4.helper,
              items = _ref4.items;
            return clearRefinements({
              helper: indexHelper,
              attributesToClear: items
            });
          }))));
        };
        var canRefine = connectorState.attributesToClear.some(function (attributeToClear) {
          return attributeToClear.items.length > 0;
        });
        return {
          canRefine: canRefine,
          hasRefinements: canRefine,
          refine: cachedRefine,
          createURL: cachedCreateURL,
          widgetParams: widgetParams
        };
      }
    };
  };
};
function getAttributesToClear(_ref5) {
  var scopedResult = _ref5.scopedResult,
    includedAttributes = _ref5.includedAttributes,
    excludedAttributes = _ref5.excludedAttributes,
    transformItems = _ref5.transformItems,
    results = _ref5.results;
  var includesQuery = includedAttributes.indexOf('query') !== -1 || excludedAttributes.indexOf('query') === -1;
  return {
    helper: scopedResult.helper,
    items: transformItems((0,uniq/* uniq */.s)(getRefinements(scopedResult.results, scopedResult.helper.state, includesQuery).map(function (refinement) {
      return refinement.attribute;
    }).filter(function (attribute) {
      return (
        // If the array is empty (default case), we keep all the attributes
        includedAttributes.length === 0 ||
        // Otherwise, only add the specified attributes
        includedAttributes.indexOf(attribute) !== -1
      );
    }).filter(function (attribute) {
      return (
        // If the query is included, we ignore the default `excludedAttributes = ['query']`
        attribute === 'query' && includesQuery ||
        // Otherwise, ignore the excluded attributes
        excludedAttributes.indexOf(attribute) === -1
      );
    })), {
      results: results
    })
  };
}
/* harmony default export */ const clear_refinements_connectClearRefinements = (connectClearRefinements);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/hooks/useConnector.js + 9 modules
var useConnector = __webpack_require__(71291);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/useClearRefinements.js


function useClearRefinements(props, additionalWidgetProperties) {
  return (0,useConnector/* useConnector */.Z)(clear_refinements_connectClearRefinements, props, additionalWidgetProperties);
}
// EXTERNAL MODULE: ./node_modules/instantsearch-ui-components/dist/es/lib/cx.js
var cx = __webpack_require__(64652);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/ui/ClearRefinements.js
var _excluded = ["classNames", "disabled", "onClick", "translations"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function ClearRefinements(_ref) {
  var _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    translations = _ref.translations,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("div", _extends({}, props, {
    className: (0,cx.cx)('ais-ClearRefinements', classNames.root, props.className)
  }), /*#__PURE__*/react.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    className: (0,cx.cx)('ais-ClearRefinements-button', classNames.button, disabled && (0,cx.cx)('ais-ClearRefinements-button--disabled', classNames.disabledButton))
  }, translations.resetButtonText));
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/widgets/ClearRefinements.js
function ClearRefinements_typeof(obj) { "@babel/helpers - typeof"; return ClearRefinements_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ClearRefinements_typeof(obj); }
var ClearRefinements_excluded = ["includedAttributes", "excludedAttributes", "transformItems", "translations"];
function ClearRefinements_extends() { ClearRefinements_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ClearRefinements_extends.apply(this, arguments); }
function ClearRefinements_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ClearRefinements_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ClearRefinements_ownKeys(Object(source), !0).forEach(function (key) { ClearRefinements_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ClearRefinements_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ClearRefinements_defineProperty(obj, key, value) { key = ClearRefinements_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ClearRefinements_toPropertyKey(arg) { var key = ClearRefinements_toPrimitive(arg, "string"); return ClearRefinements_typeof(key) === "symbol" ? key : String(key); }
function ClearRefinements_toPrimitive(input, hint) { if (ClearRefinements_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ClearRefinements_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ClearRefinements_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ClearRefinements_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ClearRefinements_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function ClearRefinements_ClearRefinements(_ref) {
  var includedAttributes = _ref.includedAttributes,
    excludedAttributes = _ref.excludedAttributes,
    transformItems = _ref.transformItems,
    translations = _ref.translations,
    props = ClearRefinements_objectWithoutProperties(_ref, ClearRefinements_excluded);
  var _useClearRefinements = useClearRefinements({
      includedAttributes: includedAttributes,
      excludedAttributes: excludedAttributes,
      transformItems: transformItems
    }, {
      $$widgetType: 'ais.clearRefinements'
    }),
    canRefine = _useClearRefinements.canRefine,
    refine = _useClearRefinements.refine;
  var uiProps = {
    onClick: refine,
    disabled: !canRefine,
    translations: ClearRefinements_objectSpread({
      resetButtonText: 'Clear refinements'
    }, translations)
  };
  return /*#__PURE__*/react.createElement(ClearRefinements, ClearRefinements_extends({}, props, uiProps));
}

/***/ }),

/***/ 81063:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ Highlight)
/* harmony export */ });
/* harmony import */ var instantsearch_js_es_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65150);
/* harmony import */ var instantsearch_js_es_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38796);
/* harmony import */ var instantsearch_js_es_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18454);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _ui_Highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46424);
var _excluded = ["hit", "attribute", "highlightedTagName", "nonHighlightedTagName", "separator"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Highlight(_ref) {
  var hit = _ref.hit,
    attribute = _ref.attribute,
    highlightedTagName = _ref.highlightedTagName,
    nonHighlightedTagName = _ref.nonHighlightedTagName,
    separator = _ref.separator,
    props = _objectWithoutProperties(_ref, _excluded);
  var property = (0,instantsearch_js_es_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .getPropertyByPath */ .E)(hit._highlightResult, attribute) || [];
  var properties = Array.isArray(property) ? property : [property];
  var parts = properties.map(function (singleValue) {
    return (0,instantsearch_js_es_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .getHighlightedParts */ .I)((0,instantsearch_js_es_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .unescape */ .x)(singleValue.value || ''));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Highlight_js__WEBPACK_IMPORTED_MODULE_4__/* .Highlight */ .f, _extends({}, props, {
    parts: parts,
    highlightedTagName: highlightedTagName,
    nonHighlightedTagName: nonHighlightedTagName,
    separator: separator
  }));
}

/***/ }),

/***/ 58855:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ Hits)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/instantsearch-ui-components/dist/es/lib/cx.js
var cx = __webpack_require__(64652);
;// CONCATENATED MODULE: ./node_modules/instantsearch-ui-components/dist/es/components/Hits.js


var _excluded = ["classNames", "hits", "itemComponent", "sendEvent", "emptyComponent", "banner", "bannerComponent"];


// Should be imported from a shared package in the future

function createDefaultBannerComponent(_ref) {
  var createElement = _ref.createElement;
  return function DefaultBanner(_ref2) {
    var _banner$link;
    var classNames = _ref2.classNames,
      banner = _ref2.banner;
    if (!banner.image.urls[0].url) {
      return null;
    }
    return createElement("aside", {
      className: (0,cx.cx)('ais-Hits-banner', classNames.bannerRoot)
    }, (_banner$link = banner.link) !== null && _banner$link !== void 0 && _banner$link.url ? createElement("a", {
      className: (0,cx.cx)('ais-Hits-banner-link', classNames.bannerLink),
      href: banner.link.url,
      target: banner.link.target
    }, createElement("img", {
      className: (0,cx.cx)('ais-Hits-banner-image', classNames.bannerImage),
      src: banner.image.urls[0].url,
      alt: banner.image.title
    })) : createElement("img", {
      className: (0,cx.cx)('ais-Hits-banner-image', classNames.bannerImage),
      src: banner.image.urls[0].url,
      alt: banner.image.title
    }));
  };
}
function createHitsComponent(_ref3) {
  var createElement = _ref3.createElement,
    Fragment = _ref3.Fragment;
  var DefaultBannerComponent = createDefaultBannerComponent({
    createElement: createElement,
    Fragment: Fragment
  });
  return function Hits(userProps) {
    var _userProps$classNames = userProps.classNames,
      classNames = _userProps$classNames === void 0 ? {} : _userProps$classNames,
      hits = userProps.hits,
      ItemComponent = userProps.itemComponent,
      sendEvent = userProps.sendEvent,
      EmptyComponent = userProps.emptyComponent,
      banner = userProps.banner,
      BannerComponent = userProps.bannerComponent,
      props = (0,objectWithoutProperties/* default */.A)(userProps, _excluded);
    return createElement("div", (0,esm_extends/* default */.A)({}, props, {
      className: (0,cx.cx)('ais-Hits', classNames.root, hits.length === 0 && (0,cx.cx)('ais-Hits--empty', classNames.emptyRoot), props.className)
    }), banner && (BannerComponent ? createElement(BannerComponent, {
      className: (0,cx.cx)('ais-Hits-banner', classNames.bannerRoot),
      banner: banner
    }) : createElement(DefaultBannerComponent, {
      classNames: classNames,
      banner: banner
    })), hits.length === 0 && EmptyComponent ? createElement(EmptyComponent, null) : createElement("ol", {
      className: (0,cx.cx)('ais-Hits-list', classNames.list)
    }, hits.map(function (hit, index) {
      return createElement(ItemComponent, {
        key: hit.objectID,
        hit: hit,
        index: index,
        className: (0,cx.cx)('ais-Hits-item', classNames.item),
        onClick: function onClick() {
          sendEvent('click:internal', hit, 'Hit Clicked');
        },
        onAuxClick: function onAuxClick() {
          sendEvent('click:internal', hit, 'Hit Clicked');
        }
      });
    })));
  };
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(74243);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(82894);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/checkRendering.js + 1 modules
var checkRendering = __webpack_require__(84203);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/serializer.js
var serializer = __webpack_require__(10793);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/createSendEventForHits.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function chunk(arr) {
  var chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var chunks = [];
  for (var i = 0; i < Math.ceil(arr.length / chunkSize); i++) {
    chunks.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
  }
  return chunks;
}
function _buildEventPayloadsForHits(_ref) {
  var getIndex = _ref.getIndex,
    widgetType = _ref.widgetType,
    methodName = _ref.methodName,
    args = _ref.args,
    instantSearchInstance = _ref.instantSearchInstance;
  // when there's only one argument, that means it's custom
  if (args.length === 1 && _typeof(args[0]) === 'object') {
    return [args[0]];
  }
  var _args$0$split = args[0].split(':'),
    _args$0$split2 = _slicedToArray(_args$0$split, 2),
    eventType = _args$0$split2[0],
    eventModifier = _args$0$split2[1];
  var hits = args[1];
  var eventName = args[2];
  var additionalData = args[3] || {};
  if (!hits) {
    if (false) {} else {
      return [];
    }
  }
  if ((eventType === 'click' || eventType === 'conversion') && !eventName) {
    if (false) {} else {
      return [];
    }
  }
  var hitsArray = Array.isArray(hits) ? hits : [hits];
  if (hitsArray.length === 0) {
    return [];
  }
  var queryID = hitsArray[0].__queryID;
  var hitsChunks = chunk(hitsArray);
  var objectIDsByChunk = hitsChunks.map(function (batch) {
    return batch.map(function (hit) {
      return hit.objectID;
    });
  });
  var positionsByChunk = hitsChunks.map(function (batch) {
    return batch.map(function (hit) {
      return hit.__position;
    });
  });
  if (eventType === 'view') {
    if (instantSearchInstance.status !== 'idle') {
      return [];
    }
    return hitsChunks.map(function (batch, i) {
      return {
        insightsMethod: 'viewedObjectIDs',
        widgetType: widgetType,
        eventType: eventType,
        payload: _objectSpread({
          eventName: eventName || 'Hits Viewed',
          index: getIndex(),
          objectIDs: objectIDsByChunk[i]
        }, additionalData),
        hits: batch,
        eventModifier: eventModifier
      };
    });
  } else if (eventType === 'click') {
    return hitsChunks.map(function (batch, i) {
      return {
        insightsMethod: 'clickedObjectIDsAfterSearch',
        widgetType: widgetType,
        eventType: eventType,
        payload: _objectSpread({
          eventName: eventName || 'Hit Clicked',
          index: getIndex(),
          queryID: queryID,
          objectIDs: objectIDsByChunk[i],
          positions: positionsByChunk[i]
        }, additionalData),
        hits: batch,
        eventModifier: eventModifier
      };
    });
  } else if (eventType === 'conversion') {
    return hitsChunks.map(function (batch, i) {
      return {
        insightsMethod: 'convertedObjectIDsAfterSearch',
        widgetType: widgetType,
        eventType: eventType,
        payload: _objectSpread({
          eventName: eventName || 'Hit Converted',
          index: getIndex(),
          queryID: queryID,
          objectIDs: objectIDsByChunk[i]
        }, additionalData),
        hits: batch,
        eventModifier: eventModifier
      };
    });
  } else if (false) {} else {
    return [];
  }
}
function createSendEventForHits(_ref2) {
  var instantSearchInstance = _ref2.instantSearchInstance,
    getIndex = _ref2.getIndex,
    widgetType = _ref2.widgetType;
  var sentEvents = {};
  var timer = undefined;
  var sendEventForHits = function sendEventForHits() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var payloads = _buildEventPayloadsForHits({
      widgetType: widgetType,
      getIndex: getIndex,
      methodName: 'sendEvent',
      args: args,
      instantSearchInstance: instantSearchInstance
    });
    payloads.forEach(function (payload) {
      if (payload.eventType === 'click' && payload.eventModifier === 'internal' && sentEvents[payload.eventType]) {
        return;
      }
      sentEvents[payload.eventType] = true;
      instantSearchInstance.sendEventToInsights(payload);
    });
    clearTimeout(timer);
    timer = setTimeout(function () {
      sentEvents = {};
    }, 0);
  };
  return sendEventForHits;
}
function createBindEventForHits(_ref3) {
  var getIndex = _ref3.getIndex,
    widgetType = _ref3.widgetType,
    instantSearchInstance = _ref3.instantSearchInstance;
  var bindEventForHits = function bindEventForHits() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var payloads = _buildEventPayloadsForHits({
      widgetType: widgetType,
      getIndex: getIndex,
      methodName: 'bindEvent',
      args: args,
      instantSearchInstance: instantSearchInstance
    });
    return payloads.length ? "data-insights-event=".concat((0,serializer/* serializePayload */.h)(payloads)) : '';
  };
  return bindEventForHits;
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escape-highlight.js
var escape_highlight = __webpack_require__(92783);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/hits-absolute-position.js
function hits_absolute_position_typeof(obj) { "@babel/helpers - typeof"; return hits_absolute_position_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, hits_absolute_position_typeof(obj); }
function hits_absolute_position_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function hits_absolute_position_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? hits_absolute_position_ownKeys(Object(source), !0).forEach(function (key) { hits_absolute_position_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : hits_absolute_position_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function hits_absolute_position_defineProperty(obj, key, value) { key = hits_absolute_position_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function hits_absolute_position_toPropertyKey(arg) { var key = hits_absolute_position_toPrimitive(arg, "string"); return hits_absolute_position_typeof(key) === "symbol" ? key : String(key); }
function hits_absolute_position_toPrimitive(input, hint) { if (hits_absolute_position_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (hits_absolute_position_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function addAbsolutePosition(hits, page, hitsPerPage) {
  return hits.map(function (hit, idx) {
    return hits_absolute_position_objectSpread(hits_absolute_position_objectSpread({}, hit), {}, {
      __position: hitsPerPage * page + idx + 1
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/hits-query-id.js
function hits_query_id_typeof(obj) { "@babel/helpers - typeof"; return hits_query_id_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, hits_query_id_typeof(obj); }
function hits_query_id_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function hits_query_id_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? hits_query_id_ownKeys(Object(source), !0).forEach(function (key) { hits_query_id_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : hits_query_id_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function hits_query_id_defineProperty(obj, key, value) { key = hits_query_id_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function hits_query_id_toPropertyKey(arg) { var key = hits_query_id_toPrimitive(arg, "string"); return hits_query_id_typeof(key) === "symbol" ? key : String(key); }
function hits_query_id_toPrimitive(input, hint) { if (hits_query_id_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (hits_query_id_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function addQueryID(hits, queryID) {
  if (!queryID) {
    return hits;
  }
  return hits.map(function (hit) {
    return hits_query_id_objectSpread(hits_query_id_objectSpread({}, hit), {}, {
      __queryID: queryID
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/hits/connectHits.js
function connectHits_typeof(obj) { "@babel/helpers - typeof"; return connectHits_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, connectHits_typeof(obj); }
function connectHits_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function connectHits_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? connectHits_ownKeys(Object(source), !0).forEach(function (key) { connectHits_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : connectHits_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function connectHits_defineProperty(obj, key, value) { key = connectHits_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function connectHits_toPropertyKey(arg) { var key = connectHits_toPrimitive(arg, "string"); return connectHits_typeof(key) === "symbol" ? key : String(key); }
function connectHits_toPrimitive(input, hint) { if (connectHits_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (connectHits_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var withUsage = (0,documentation/* createDocumentationMessageGenerator */.V)({
  name: 'hits',
  connector: true
});
var connectHits = function connectHits(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop/* noop */.l;
  (0,checkRendering/* checkRendering */.t)(renderFn, withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
      _ref$escapeHTML = _ref.escapeHTML,
      escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML,
      _ref$transformItems = _ref.transformItems,
      transformItems = _ref$transformItems === void 0 ? function (items) {
        return items;
      } : _ref$transformItems;
    var sendEvent;
    var bindEvent;
    return {
      $$type: 'ais.hits',
      init: function init(initOptions) {
        renderFn(connectHits_objectSpread(connectHits_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: initOptions.instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var renderState = this.getWidgetRenderState(renderOptions);
        renderFn(connectHits_objectSpread(connectHits_objectSpread({}, renderState), {}, {
          instantSearchInstance: renderOptions.instantSearchInstance
        }), false);
        renderState.sendEvent('view:internal', renderState.hits);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectHits_objectSpread(connectHits_objectSpread({}, renderState), {}, {
          hits: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref2) {
        var _results$renderingCon, _results$renderingCon2, _results$renderingCon3;
        var results = _ref2.results,
          helper = _ref2.helper,
          instantSearchInstance = _ref2.instantSearchInstance;
        if (!sendEvent) {
          sendEvent = createSendEventForHits({
            instantSearchInstance: instantSearchInstance,
            getIndex: function getIndex() {
              return helper.getIndex();
            },
            widgetType: this.$$type
          });
        }
        if (!bindEvent) {
          bindEvent = createBindEventForHits({
            getIndex: function getIndex() {
              return helper.getIndex();
            },
            widgetType: this.$$type,
            instantSearchInstance: instantSearchInstance
          });
        }
        if (!results) {
          return {
            hits: [],
            results: undefined,
            banner: undefined,
            sendEvent: sendEvent,
            bindEvent: bindEvent,
            widgetParams: widgetParams
          };
        }
        if (escapeHTML && results.hits.length > 0) {
          results.hits = (0,escape_highlight/* escapeHits */.S8)(results.hits);
        }
        var hitsWithAbsolutePosition = addAbsolutePosition(results.hits, results.page, results.hitsPerPage);
        var hitsWithAbsolutePositionAndQueryID = addQueryID(hitsWithAbsolutePosition, results.queryID);
        var transformedHits = transformItems(hitsWithAbsolutePositionAndQueryID, {
          results: results
        });
        var banner = (_results$renderingCon = results.renderingContent) === null || _results$renderingCon === void 0 ? void 0 : (_results$renderingCon2 = _results$renderingCon.widgets) === null || _results$renderingCon2 === void 0 ? void 0 : (_results$renderingCon3 = _results$renderingCon2.banners) === null || _results$renderingCon3 === void 0 ? void 0 : _results$renderingCon3[0];
        return {
          hits: transformedHits,
          results: results,
          banner: banner,
          sendEvent: sendEvent,
          bindEvent: bindEvent,
          widgetParams: widgetParams
        };
      },
      dispose: function dispose(_ref3) {
        var state = _ref3.state;
        unmountFn();
        if (!escapeHTML) {
          return state;
        }
        return state.setQueryParameters(Object.keys(escape_highlight/* TAG_PLACEHOLDER */.FU).reduce(function (acc, key) {
          return connectHits_objectSpread(connectHits_objectSpread({}, acc), {}, connectHits_defineProperty({}, key, undefined));
        }, {}));
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(state) {
        if (!escapeHTML) {
          return state;
        }

        // @MAJOR: set this globally, not in the Hits widget to allow Hits to be conditionally used
        return state.setQueryParameters(escape_highlight/* TAG_PLACEHOLDER */.FU);
      }
    };
  };
};
/* harmony default export */ const hits_connectHits = (connectHits);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/hooks/useConnector.js + 9 modules
var useConnector = __webpack_require__(71291);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/useHits.js


function useHits(props, additionalWidgetProperties) {
  return (0,useConnector/* useConnector */.Z)(hits_connectHits, props, additionalWidgetProperties);
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/widgets/Hits.js
var Hits_excluded = ["escapeHTML", "transformItems", "hitComponent", "bannerComponent"],
  _excluded2 = ["hit", "index"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



// @MAJOR: Move default hit component back to the UI library
// once flavour specificities are erased
function DefaultHitComponent(_ref) {
  var hit = _ref.hit;
  return /*#__PURE__*/react.createElement("div", {
    style: {
      wordBreak: 'break-all'
    }
  }, JSON.stringify(hit).slice(0, 100), "\u2026");
}
var HitsUiComponent = createHitsComponent({
  createElement: react.createElement,
  Fragment: react.Fragment
});
function Hits(_ref2) {
  var escapeHTML = _ref2.escapeHTML,
    transformItems = _ref2.transformItems,
    _ref2$hitComponent = _ref2.hitComponent,
    HitComponent = _ref2$hitComponent === void 0 ? DefaultHitComponent : _ref2$hitComponent,
    BannerComponent = _ref2.bannerComponent,
    props = _objectWithoutProperties(_ref2, Hits_excluded);
  var _useHits = useHits({
      escapeHTML: escapeHTML,
      transformItems: transformItems
    }, {
      $$widgetType: 'ais.hits'
    }),
    hits = _useHits.hits,
    banner = _useHits.banner,
    sendEvent = _useHits.sendEvent;
  var itemComponent = function itemComponent(_ref3) {
    var hit = _ref3.hit,
      index = _ref3.index,
      itemProps = _objectWithoutProperties(_ref3, _excluded2);
    return /*#__PURE__*/react.createElement("li", _extends({
      key: hit.objectID
    }, itemProps), /*#__PURE__*/react.createElement(HitComponent, {
      hit: hit,
      sendEvent: sendEvent
    }));
  };
  var bannerComponent = BannerComponent === false ? function () {
    return null;
  } : BannerComponent;
  var uiProps = {
    hits: hits,
    sendEvent: sendEvent,
    itemComponent: itemComponent,
    banner: banner,
    bannerComponent: bannerComponent
  };
  return /*#__PURE__*/react.createElement(HitsUiComponent, _extends({}, props, uiProps));
}

/***/ }),

/***/ 17860:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ Pagination_Pagination)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(74243);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(82894);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/checkRendering.js + 1 modules
var checkRendering = __webpack_require__(84203);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/range.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    return start + current * limitStep;
  });
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/pagination/Paginator.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Paginator = /*#__PURE__*/function () {
  function Paginator(params) {
    _classCallCheck(this, Paginator);
    _defineProperty(this, "currentPage", void 0);
    _defineProperty(this, "total", void 0);
    _defineProperty(this, "padding", void 0);
    this.currentPage = params.currentPage;
    this.total = params.total;
    this.padding = params.padding;
  }
  _createClass(Paginator, [{
    key: "pages",
    value: function pages() {
      var total = this.total,
        currentPage = this.currentPage,
        padding = this.padding;
      if (total === 0) return [0];
      var totalDisplayedPages = this.nbPagesDisplayed(padding, total);
      if (totalDisplayedPages === total) {
        return range({
          end: total
        });
      }
      var paddingLeft = this.calculatePaddingLeft(currentPage, padding, total, totalDisplayedPages);
      var paddingRight = totalDisplayedPages - paddingLeft;
      var first = currentPage - paddingLeft;
      var last = currentPage + paddingRight;
      return range({
        start: first,
        end: last
      });
    }
  }, {
    key: "nbPagesDisplayed",
    value: function nbPagesDisplayed(padding, total) {
      return Math.min(2 * padding + 1, total);
    }
  }, {
    key: "calculatePaddingLeft",
    value: function calculatePaddingLeft(current, padding, total, totalDisplayedPages) {
      if (current <= padding) {
        return current;
      }
      if (current >= total - padding) {
        return totalDisplayedPages - (total - current);
      }
      return padding;
    }
  }, {
    key: "isLastPage",
    value: function isLastPage() {
      return this.currentPage === this.total - 1 || this.total === 0;
    }
  }, {
    key: "isFirstPage",
    value: function isFirstPage() {
      return this.currentPage === 0;
    }
  }]);
  return Paginator;
}();
/* harmony default export */ const pagination_Paginator = (Paginator);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/pagination/connectPagination.js
function connectPagination_typeof(obj) { "@babel/helpers - typeof"; return connectPagination_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, connectPagination_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { connectPagination_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function connectPagination_defineProperty(obj, key, value) { key = connectPagination_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function connectPagination_toPropertyKey(arg) { var key = connectPagination_toPrimitive(arg, "string"); return connectPagination_typeof(key) === "symbol" ? key : String(key); }
function connectPagination_toPrimitive(input, hint) { if (connectPagination_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (connectPagination_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var withUsage = (0,documentation/* createDocumentationMessageGenerator */.V)({
  name: 'pagination',
  connector: true
});
/**
 * **Pagination** connector provides the logic to build a widget that will let the user
 * choose the current page of the results.
 *
 * When using the pagination with Algolia, you should be aware that the engine won't provide you pages
 * beyond the 1000th hits by default. You can find more information on the [Algolia documentation](https://www.algolia.com/doc/guides/searching/pagination/#pagination-limitations).
 */
var connectPagination = function connectPagination(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop/* noop */.l;
  (0,checkRendering/* checkRendering */.t)(renderFn, withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
      totalPages = _ref.totalPages,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 3 : _ref$padding;
    var pager = new pagination_Paginator({
      currentPage: 0,
      total: 0,
      padding: padding
    });
    var connectorState = {};
    function getMaxPage(_ref2) {
      var nbPages = _ref2.nbPages;
      return totalPages !== undefined ? Math.min(totalPages, nbPages) : nbPages;
    }
    return {
      $$type: 'ais.pagination',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref3) {
        var state = _ref3.state;
        unmountFn();
        return state.setQueryParameter('page', undefined);
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
        var searchParameters = _ref4.searchParameters;
        var page = searchParameters.page || 0;
        if (!page) {
          return uiState;
        }
        return _objectSpread(_objectSpread({}, uiState), {}, {
          page: page + 1
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
        var uiState = _ref5.uiState;
        var page = uiState.page ? uiState.page - 1 : 0;
        return searchParameters.setQueryParameter('page', page);
      },
      getWidgetRenderState: function getWidgetRenderState(_ref6) {
        var results = _ref6.results,
          helper = _ref6.helper,
          state = _ref6.state,
          createURL = _ref6.createURL;
        if (!connectorState.refine) {
          connectorState.refine = function (page) {
            helper.setPage(page);
            helper.search();
          };
        }
        if (!connectorState.createURL) {
          connectorState.createURL = function (page) {
            return createURL(function (uiState) {
              return _objectSpread(_objectSpread({}, uiState), {}, {
                page: page + 1
              });
            });
          };
        }
        var page = state.page || 0;
        var nbPages = getMaxPage(results || {
          nbPages: 0
        });
        pager.currentPage = page;
        pager.total = nbPages;
        return {
          createURL: connectorState.createURL,
          refine: connectorState.refine,
          canRefine: nbPages > 1,
          currentRefinement: page,
          nbHits: (results === null || results === void 0 ? void 0 : results.nbHits) || 0,
          nbPages: nbPages,
          pages: results ? pager.pages() : [],
          isFirstPage: pager.isFirstPage(),
          isLastPage: pager.isLastPage(),
          widgetParams: widgetParams
        };
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return _objectSpread(_objectSpread({}, renderState), {}, {
          pagination: this.getWidgetRenderState(renderOptions)
        });
      }
    };
  };
};
/* harmony default export */ const pagination_connectPagination = (connectPagination);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/hooks/useConnector.js + 9 modules
var useConnector = __webpack_require__(71291);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/usePagination.js


function usePagination(props, additionalWidgetProperties) {
  return (0,useConnector/* useConnector */.Z)(pagination_connectPagination, props, additionalWidgetProperties);
}
// EXTERNAL MODULE: ./node_modules/instantsearch-ui-components/dist/es/lib/cx.js
var cx = __webpack_require__(64652);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/ui/lib/isModifierClick.js
function isModifierClick(event) {
  var isMiddleClick = event.button === 1;
  return Boolean(isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/ui/Pagination.js
var _excluded = ["pages", "currentPage", "nbPages", "isFirstPage", "isLastPage", "showFirst", "showPrevious", "showNext", "showLast", "createURL", "onNavigate", "translations", "classNames"],
  _excluded2 = ["isDisabled", "className", "classNames", "href", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Pagination(_ref) {
  var pages = _ref.pages,
    currentPage = _ref.currentPage,
    nbPages = _ref.nbPages,
    isFirstPage = _ref.isFirstPage,
    isLastPage = _ref.isLastPage,
    _ref$showFirst = _ref.showFirst,
    showFirst = _ref$showFirst === void 0 ? true : _ref$showFirst,
    _ref$showPrevious = _ref.showPrevious,
    showPrevious = _ref$showPrevious === void 0 ? true : _ref$showPrevious,
    _ref$showNext = _ref.showNext,
    showNext = _ref$showNext === void 0 ? true : _ref$showNext,
    _ref$showLast = _ref.showLast,
    showLast = _ref$showLast === void 0 ? true : _ref$showLast,
    createURL = _ref.createURL,
    onNavigate = _ref.onNavigate,
    translations = _ref.translations,
    _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    props = _objectWithoutProperties(_ref, _excluded);
  var firstPageIndex = 0;
  var previousPageIndex = currentPage - 1;
  var nextPageIndex = currentPage + 1;
  var lastPageIndex = nbPages - 1;
  return /*#__PURE__*/react.createElement("div", _extends({}, props, {
    className: (0,cx.cx)('ais-Pagination', classNames.root, nbPages <= 1 && (0,cx.cx)('ais-Pagination--noRefinement', classNames.noRefinementRoot), props.className)
  }), /*#__PURE__*/react.createElement("ul", {
    className: (0,cx.cx)('ais-Pagination-list', classNames.list)
  }, showFirst && /*#__PURE__*/react.createElement(PaginationItem, {
    isDisabled: isFirstPage,
    className: (0,cx.cx)('ais-Pagination-item--firstPage', classNames.firstPageItem),
    classNames: classNames,
    "aria-label": translations.firstPageItemAriaLabel,
    href: createURL(firstPageIndex),
    onClick: function onClick() {
      return onNavigate(firstPageIndex);
    }
  }, translations.firstPageItemText), showPrevious && /*#__PURE__*/react.createElement(PaginationItem, {
    isDisabled: isFirstPage,
    className: (0,cx.cx)('ais-Pagination-item--previousPage', classNames.previousPageItem),
    classNames: classNames,
    "aria-label": translations.previousPageItemAriaLabel,
    href: createURL(previousPageIndex),
    onClick: function onClick() {
      return onNavigate(previousPageIndex);
    }
  }, translations.previousPageItemText), pages.map(function (page) {
    return /*#__PURE__*/react.createElement(PaginationItem, {
      key: page,
      isDisabled: false,
      className: (0,cx.cx)('ais-Pagination-item--page', classNames.pageItem, page === currentPage && (0,cx.cx)('ais-Pagination-item--selected', classNames.selectedItem)),
      classNames: classNames,
      "aria-label": translations.pageItemAriaLabel({
        currentPage: page + 1,
        nbPages: nbPages
      }),
      href: createURL(page),
      onClick: function onClick() {
        return onNavigate(page);
      }
    }, translations.pageItemText({
      currentPage: page + 1,
      nbPages: nbPages
    }));
  }), showNext && /*#__PURE__*/react.createElement(PaginationItem, {
    isDisabled: isLastPage,
    className: (0,cx.cx)('ais-Pagination-item--nextPage', classNames.nextPageItem),
    classNames: classNames,
    "aria-label": translations.nextPageItemAriaLabel,
    href: createURL(nextPageIndex),
    onClick: function onClick() {
      return onNavigate(nextPageIndex);
    }
  }, translations.nextPageItemText), showLast && /*#__PURE__*/react.createElement(PaginationItem, {
    isDisabled: isLastPage,
    className: (0,cx.cx)('ais-Pagination-item--lastPage', classNames.lastPageItem),
    classNames: classNames,
    "aria-label": translations.lastPageItemAriaLabel,
    href: createURL(lastPageIndex),
    onClick: function onClick() {
      return onNavigate(lastPageIndex);
    }
  }, translations.lastPageItemText)));
}
function PaginationItem(_ref2) {
  var isDisabled = _ref2.isDisabled,
    className = _ref2.className,
    classNames = _ref2.classNames,
    href = _ref2.href,
    _onClick = _ref2.onClick,
    props = _objectWithoutProperties(_ref2, _excluded2);
  if (isDisabled) {
    return /*#__PURE__*/react.createElement("li", {
      className: (0,cx.cx)('ais-Pagination-item', classNames.item, 'ais-Pagination-item--disabled', classNames.disabledItem, className)
    }, /*#__PURE__*/react.createElement("span", _extends({
      className: (0,cx.cx)('ais-Pagination-link', classNames.link)
    }, props)));
  }
  return /*#__PURE__*/react.createElement("li", {
    className: (0,cx.cx)('ais-Pagination-item', classNames.item, className)
  }, /*#__PURE__*/react.createElement("a", _extends({
    className: (0,cx.cx)('ais-Pagination-link', classNames.link),
    href: href,
    onClick: function onClick(event) {
      if (isModifierClick(event)) {
        return;
      }
      event.preventDefault();
      _onClick(event);
    }
  }, props)));
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/widgets/Pagination.js
function Pagination_typeof(obj) { "@babel/helpers - typeof"; return Pagination_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Pagination_typeof(obj); }
var Pagination_excluded = ["showFirst", "showPrevious", "showNext", "showLast", "padding", "totalPages", "translations"];
function Pagination_extends() { Pagination_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Pagination_extends.apply(this, arguments); }
function Pagination_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Pagination_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Pagination_ownKeys(Object(source), !0).forEach(function (key) { Pagination_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Pagination_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Pagination_defineProperty(obj, key, value) { key = Pagination_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Pagination_toPropertyKey(arg) { var key = Pagination_toPrimitive(arg, "string"); return Pagination_typeof(key) === "symbol" ? key : String(key); }
function Pagination_toPrimitive(input, hint) { if (Pagination_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Pagination_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Pagination_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Pagination_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Pagination_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Pagination_Pagination(_ref) {
  var showFirst = _ref.showFirst,
    showPrevious = _ref.showPrevious,
    showNext = _ref.showNext,
    showLast = _ref.showLast,
    padding = _ref.padding,
    totalPages = _ref.totalPages,
    translations = _ref.translations,
    props = Pagination_objectWithoutProperties(_ref, Pagination_excluded);
  var _usePagination = usePagination({
      padding: padding,
      totalPages: totalPages
    }, {
      $$widgetType: 'ais.pagination'
    }),
    pages = _usePagination.pages,
    currentRefinement = _usePagination.currentRefinement,
    isFirstPage = _usePagination.isFirstPage,
    isLastPage = _usePagination.isLastPage,
    nbPages = _usePagination.nbPages,
    createURL = _usePagination.createURL,
    refine = _usePagination.refine;
  var uiProps = {
    pages: pages,
    currentPage: currentRefinement,
    isFirstPage: isFirstPage,
    isLastPage: isLastPage,
    nbPages: nbPages,
    createURL: createURL,
    onNavigate: refine,
    translations: Pagination_objectSpread({
      firstPageItemText: '‹‹',
      previousPageItemText: '‹',
      nextPageItemText: '›',
      lastPageItemText: '››',
      pageItemText: function pageItemText(_ref2) {
        var currentPage = _ref2.currentPage;
        return String(currentPage);
      },
      firstPageItemAriaLabel: 'First Page',
      previousPageItemAriaLabel: 'Previous Page',
      nextPageItemAriaLabel: 'Next Page',
      lastPageItemAriaLabel: "Last Page, Page ".concat(nbPages),
      pageItemAriaLabel: function pageItemAriaLabel(_ref3) {
        var currentPage = _ref3.currentPage;
        return "Page ".concat(currentPage);
      }
    }, translations)
  };
  return /*#__PURE__*/react.createElement(Pagination, Pagination_extends({}, props, uiProps, {
    showFirst: showFirst,
    showPrevious: showPrevious,
    showNext: showNext,
    showLast: showLast
  }));
}

/***/ }),

/***/ 2764:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ RefinementList_RefinementList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(74243);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(82894);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/checkRendering.js + 1 modules
var checkRendering = __webpack_require__(84203);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escape-highlight.js
var escape_highlight = __webpack_require__(92783);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/isFacetRefined.js
function isFacetRefined(helper, facet, value) {
  if (helper.state.isHierarchicalFacet(facet)) {
    return helper.state.isHierarchicalFacetRefined(facet, value);
  } else if (helper.state.isConjunctiveFacet(facet)) {
    return helper.state.isFacetRefined(facet, value);
  } else {
    return helper.state.isDisjunctiveFacetRefined(facet, value);
  }
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/createSendEventForFacet.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createSendEventForFacet(_ref) {
  var instantSearchInstance = _ref.instantSearchInstance,
    helper = _ref.helper,
    attr = _ref.attribute,
    widgetType = _ref.widgetType;
  var sendEventForFacet = function sendEventForFacet() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var facetValue = args[1],
      _args$ = args[2],
      eventName = _args$ === void 0 ? 'Filter Applied' : _args$,
      _args$2 = args[3],
      additionalData = _args$2 === void 0 ? {} : _args$2;
    var _args$0$split = args[0].split(':'),
      _args$0$split2 = _slicedToArray(_args$0$split, 2),
      eventType = _args$0$split2[0],
      eventModifier = _args$0$split2[1];
    var attribute = typeof attr === 'string' ? attr : attr(facetValue);
    if (args.length === 1 && _typeof(args[0]) === 'object') {
      instantSearchInstance.sendEventToInsights(args[0]);
    } else if (eventType === 'click' && args.length >= 2 && args.length <= 4) {
      if (!isFacetRefined(helper, attribute, facetValue)) {
        // send event only when the facet is being checked "ON"
        instantSearchInstance.sendEventToInsights({
          insightsMethod: 'clickedFilters',
          widgetType: widgetType,
          eventType: eventType,
          eventModifier: eventModifier,
          payload: _objectSpread({
            eventName: eventName,
            index: helper.getIndex(),
            filters: ["".concat(attribute, ":").concat(facetValue)]
          }, additionalData),
          attribute: attribute
        });
      }
    } else if (false) {}
  };
  return sendEventForFacet;
}
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/refinement-list/connectRefinementList.js
function connectRefinementList_typeof(obj) { "@babel/helpers - typeof"; return connectRefinementList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, connectRefinementList_typeof(obj); }
var _excluded = ["name", "escapedValue"],
  _excluded2 = ["escapedValue", "value"];
function connectRefinementList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function connectRefinementList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? connectRefinementList_ownKeys(Object(source), !0).forEach(function (key) { connectRefinementList_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : connectRefinementList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function connectRefinementList_defineProperty(obj, key, value) { key = connectRefinementList_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function connectRefinementList_toPropertyKey(arg) { var key = connectRefinementList_toPrimitive(arg, "string"); return connectRefinementList_typeof(key) === "symbol" ? key : String(key); }
function connectRefinementList_toPrimitive(input, hint) { if (connectRefinementList_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (connectRefinementList_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var withUsage = (0,documentation/* createDocumentationMessageGenerator */.V)({
  name: 'refinement-list',
  connector: true
});
var DEFAULT_SORT = ['isRefined', 'count:desc', 'name:asc'];
/**
 * **RefinementList** connector provides the logic to build a custom widget that
 * will let the user filter the results based on the values of a specific facet.
 *
 * **Requirement:** the attribute passed as `attribute` must be present in
 * attributesForFaceting of the searched index.
 *
 * This connector provides:
 * - a `refine()` function to select an item.
 * - a `toggleShowMore()` function to display more or less items
 * - a `searchForItems()` function to search within the items.
 */
var connectRefinementList = function connectRefinementList(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop/* noop */.l;
  (0,checkRendering/* checkRendering */.t)(renderFn, withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
      attribute = _ref.attribute,
      _ref$operator = _ref.operator,
      operator = _ref$operator === void 0 ? 'or' : _ref$operator,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 10 : _ref$limit,
      _ref$showMore = _ref.showMore,
      showMore = _ref$showMore === void 0 ? false : _ref$showMore,
      _ref$showMoreLimit = _ref.showMoreLimit,
      showMoreLimit = _ref$showMoreLimit === void 0 ? 20 : _ref$showMoreLimit,
      _ref$sortBy = _ref.sortBy,
      sortBy = _ref$sortBy === void 0 ? DEFAULT_SORT : _ref$sortBy,
      _ref$escapeFacetValue = _ref.escapeFacetValues,
      escapeFacetValues = _ref$escapeFacetValue === void 0 ? true : _ref$escapeFacetValue,
      _ref$transformItems = _ref.transformItems,
      transformItems = _ref$transformItems === void 0 ? function (items) {
        return items;
      } : _ref$transformItems;
    if (!attribute) {
      throw new Error(withUsage('The `attribute` option is required.'));
    }
    if (!/^(and|or)$/.test(operator)) {
      throw new Error(withUsage("The `operator` must one of: `\"and\"`, `\"or\"` (got \"".concat(operator, "\").")));
    }
    if (showMore === true && showMoreLimit <= limit) {
      throw new Error(withUsage('`showMoreLimit` should be greater than `limit`.'));
    }
    var formatItems = function formatItems(_ref2) {
      var label = _ref2.name,
        value = _ref2.escapedValue,
        item = _objectWithoutProperties(_ref2, _excluded);
      return connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, item), {}, {
        value: value,
        label: label,
        highlighted: label
      });
    };
    var lastResultsFromMainSearch;
    var lastItemsFromMainSearch = [];
    var hasExhaustiveItems = true;
    var triggerRefine;
    var sendEvent;
    var isShowingMore = false;
    // Provide the same function to the `renderFn` so that way the user
    // has to only bind it once when `isFirstRendering` for instance
    var toggleShowMore = function toggleShowMore() {};
    function cachedToggleShowMore() {
      toggleShowMore();
    }
    function createToggleShowMore(renderOptions, widget) {
      return function () {
        isShowingMore = !isShowingMore;
        widget.render(renderOptions);
      };
    }
    function getLimit() {
      return isShowingMore ? showMoreLimit : limit;
    }
    var searchForFacetValues = function searchForFacetValues() {
      return function () {};
    };
    var createSearchForFacetValues = function createSearchForFacetValues(helper, widget) {
      return function (renderOptions) {
        return function (query) {
          var instantSearchInstance = renderOptions.instantSearchInstance,
            searchResults = renderOptions.results;
          if (query === '' && lastItemsFromMainSearch) {
            // render with previous data from the helper.
            renderFn(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, widget.getWidgetRenderState(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, renderOptions), {}, {
              results: lastResultsFromMainSearch
            }))), {}, {
              instantSearchInstance: instantSearchInstance
            }), false);
          } else {
            var tags = {
              highlightPreTag: escapeFacetValues ? escape_highlight/* TAG_PLACEHOLDER */.FU.highlightPreTag : escape_highlight/* TAG_REPLACEMENT */.sn.highlightPreTag,
              highlightPostTag: escapeFacetValues ? escape_highlight/* TAG_PLACEHOLDER */.FU.highlightPostTag : escape_highlight/* TAG_REPLACEMENT */.sn.highlightPostTag
            };
            helper.searchForFacetValues(attribute, query,
            // We cap the `maxFacetHits` value to 100 because the Algolia API
            // doesn't support a greater number.
            // See https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits/
            Math.min(getLimit(), 100), tags).then(function (results) {
              var facetValues = escapeFacetValues ? (0,escape_highlight/* escapeFacets */.ef)(results.facetHits) : results.facetHits;
              var normalizedFacetValues = transformItems(facetValues.map(function (_ref3) {
                var escapedValue = _ref3.escapedValue,
                  value = _ref3.value,
                  item = _objectWithoutProperties(_ref3, _excluded2);
                return connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, item), {}, {
                  value: escapedValue,
                  label: value
                });
              }), {
                results: searchResults
              });
              renderFn(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, widget.getWidgetRenderState(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, renderOptions), {}, {
                results: lastResultsFromMainSearch
              }))), {}, {
                items: normalizedFacetValues,
                canToggleShowMore: false,
                canRefine: true,
                isFromSearch: true,
                instantSearchInstance: instantSearchInstance
              }), false);
            });
          }
        };
      };
    };
    return {
      $$type: 'ais.refinementList',
      init: function init(initOptions) {
        renderFn(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: initOptions.instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        renderFn(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: renderOptions.instantSearchInstance
        }), false);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, renderState), {}, {
          refinementList: connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, renderState.refinementList), {}, connectRefinementList_defineProperty({}, attribute, this.getWidgetRenderState(renderOptions)))
        });
      },
      getWidgetRenderState: function getWidgetRenderState(renderOptions) {
        var _this = this;
        var results = renderOptions.results,
          state = renderOptions.state,
          _createURL = renderOptions.createURL,
          instantSearchInstance = renderOptions.instantSearchInstance,
          helper = renderOptions.helper;
        var items = [];
        var facetValues = [];
        if (!sendEvent || !triggerRefine || !searchForFacetValues) {
          sendEvent = createSendEventForFacet({
            instantSearchInstance: instantSearchInstance,
            helper: helper,
            attribute: attribute,
            widgetType: this.$$type
          });
          triggerRefine = function triggerRefine(facetValue) {
            sendEvent('click:internal', facetValue);
            helper.toggleFacetRefinement(attribute, facetValue).search();
          };
          searchForFacetValues = createSearchForFacetValues(helper, this);
        }
        if (results) {
          var values = results.getFacetValues(attribute, {
            sortBy: sortBy,
            facetOrdering: sortBy === DEFAULT_SORT
          });
          facetValues = values && Array.isArray(values) ? values : [];
          items = transformItems(facetValues.slice(0, getLimit()).map(formatItems), {
            results: results
          });
          var maxValuesPerFacetConfig = state.maxValuesPerFacet;
          var currentLimit = getLimit();
          // If the limit is the max number of facet retrieved it is impossible to know
          // if the facets are exhaustive. The only moment we are sure it is exhaustive
          // is when it is strictly under the number requested unless we know that another
          // widget has requested more values (maxValuesPerFacet > getLimit()).
          // Because this is used for making the search of facets unable or not, it is important
          // to be conservative here.
          hasExhaustiveItems = maxValuesPerFacetConfig > currentLimit ? facetValues.length <= currentLimit : facetValues.length < currentLimit;
          lastResultsFromMainSearch = results;
          lastItemsFromMainSearch = items;
          if (renderOptions.results) {
            toggleShowMore = createToggleShowMore(renderOptions, this);
          }
        }

        // Do not mistake searchForFacetValues and searchFacetValues which is the actual search
        // function
        var searchFacetValues = searchForFacetValues && searchForFacetValues(renderOptions);
        var canShowLess = isShowingMore && lastItemsFromMainSearch.length > limit;
        var canShowMore = showMore && !hasExhaustiveItems;
        var canToggleShowMore = canShowLess || canShowMore;
        return {
          createURL: function createURL(facetValue) {
            return _createURL(function (uiState) {
              return _this.getWidgetUiState(uiState, {
                searchParameters: state.resetPage().toggleFacetRefinement(attribute, facetValue),
                helper: helper
              });
            });
          },
          items: items,
          refine: triggerRefine,
          searchForItems: searchFacetValues,
          isFromSearch: false,
          canRefine: items.length > 0,
          widgetParams: widgetParams,
          isShowingMore: isShowingMore,
          canToggleShowMore: canToggleShowMore,
          toggleShowMore: cachedToggleShowMore,
          sendEvent: sendEvent,
          hasExhaustiveItems: hasExhaustiveItems
        };
      },
      dispose: function dispose(_ref4) {
        var state = _ref4.state;
        unmountFn();
        var withoutMaxValuesPerFacet = state.setQueryParameter('maxValuesPerFacet', undefined);
        if (operator === 'and') {
          return withoutMaxValuesPerFacet.removeFacet(attribute);
        }
        return withoutMaxValuesPerFacet.removeDisjunctiveFacet(attribute);
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref5) {
        var searchParameters = _ref5.searchParameters;
        var values = operator === 'or' ? searchParameters.getDisjunctiveRefinements(attribute) : searchParameters.getConjunctiveRefinements(attribute);
        return removeEmptyRefinementsFromUiState(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, uiState), {}, {
          refinementList: connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, uiState.refinementList), {}, connectRefinementList_defineProperty({}, attribute, values))
        }), attribute);
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
        var uiState = _ref6.uiState;
        var isDisjunctive = operator === 'or';
        if (searchParameters.isHierarchicalFacet(attribute)) {
           false ? 0 : void 0;
          return searchParameters;
        }
        if (isDisjunctive && searchParameters.isConjunctiveFacet(attribute) || !isDisjunctive && searchParameters.isDisjunctiveFacet(attribute)) {
           false ? 0 : void 0;
          return searchParameters;
        }
        var values = uiState.refinementList && uiState.refinementList[attribute];
        var withFacetConfiguration = isDisjunctive ? searchParameters.addDisjunctiveFacet(attribute).removeDisjunctiveFacetRefinement(attribute) : searchParameters.addFacet(attribute).removeFacetRefinement(attribute);
        var currentMaxValuesPerFacet = withFacetConfiguration.maxValuesPerFacet || 0;
        var nextMaxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
        var withMaxValuesPerFacet = withFacetConfiguration.setQueryParameter('maxValuesPerFacet', nextMaxValuesPerFacet);
        if (!values) {
          var key = isDisjunctive ? 'disjunctiveFacetsRefinements' : 'facetsRefinements';
          return withMaxValuesPerFacet.setQueryParameters(connectRefinementList_defineProperty({}, key, connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, withMaxValuesPerFacet[key]), {}, connectRefinementList_defineProperty({}, attribute, []))));
        }
        return values.reduce(function (parameters, value) {
          return isDisjunctive ? parameters.addDisjunctiveFacetRefinement(attribute, value) : parameters.addFacetRefinement(attribute, value);
        }, withMaxValuesPerFacet);
      }
    };
  };
};
function removeEmptyRefinementsFromUiState(indexUiState, attribute) {
  if (!indexUiState.refinementList) {
    return indexUiState;
  }
  if (!indexUiState.refinementList[attribute] || indexUiState.refinementList[attribute].length === 0) {
    delete indexUiState.refinementList[attribute];
  }
  if (Object.keys(indexUiState.refinementList).length === 0) {
    delete indexUiState.refinementList;
  }
  return indexUiState;
}
/* harmony default export */ const refinement_list_connectRefinementList = (connectRefinementList);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/hooks/useConnector.js + 9 modules
var useConnector = __webpack_require__(71291);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/useRefinementList.js


function useRefinementList(props, additionalWidgetProperties) {
  return (0,useConnector/* useConnector */.Z)(refinement_list_connectRefinementList, props, additionalWidgetProperties);
}
// EXTERNAL MODULE: ./node_modules/instantsearch-ui-components/dist/es/lib/cx.js
var cx = __webpack_require__(64652);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getHighlightedParts.js
var getHighlightedParts = __webpack_require__(38796);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escape-html.js
var escape_html = __webpack_require__(18454);
// EXTERNAL MODULE: ./node_modules/react-instantsearch/dist/es/ui/Highlight.js
var Highlight = __webpack_require__(46424);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/ui/ShowMoreButton.js
var ShowMoreButton_excluded = ["isShowingMore", "translations"];
function ShowMoreButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ShowMoreButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ShowMoreButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ShowMoreButton(_ref) {
  var isShowingMore = _ref.isShowingMore,
    translations = _ref.translations,
    props = ShowMoreButton_objectWithoutProperties(_ref, ShowMoreButton_excluded);
  return /*#__PURE__*/react.createElement("button", props, translations.showMoreButtonText({
    isShowingMore: isShowingMore
  }));
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/ui/RefinementList.js
var RefinementList_excluded = ["canRefine", "items", "onRefine", "query", "searchBox", "noResults", "showMore", "canToggleShowMore", "onToggleShowMore", "isShowingMore", "className", "classNames", "translations"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function RefinementList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = RefinementList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function RefinementList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function RefinementList(_ref) {
  var canRefine = _ref.canRefine,
    items = _ref.items,
    onRefine = _ref.onRefine,
    query = _ref.query,
    searchBox = _ref.searchBox,
    noResults = _ref.noResults,
    showMore = _ref.showMore,
    canToggleShowMore = _ref.canToggleShowMore,
    onToggleShowMore = _ref.onToggleShowMore,
    isShowingMore = _ref.isShowingMore,
    className = _ref.className,
    _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    translations = _ref.translations,
    props = RefinementList_objectWithoutProperties(_ref, RefinementList_excluded);
  return /*#__PURE__*/react.createElement("div", _extends({}, props, {
    className: (0,cx.cx)('ais-RefinementList', classNames.root, items.length === 0 && (0,cx.cx)('ais-RefinementList--noRefinement', classNames.noRefinementRoot), className)
  }), searchBox && /*#__PURE__*/react.createElement("div", {
    className: (0,cx.cx)('ais-RefinementList-searchBox', classNames.searchBox)
  }, searchBox), noResults ? /*#__PURE__*/react.createElement("div", {
    className: (0,cx.cx)('ais-RefinementList-noResults', classNames.noResults)
  }, noResults) : /*#__PURE__*/react.createElement("ul", {
    className: (0,cx.cx)('ais-RefinementList-list', classNames.list)
  }, items.map(function (item) {
    return /*#__PURE__*/react.createElement("li", {
      key: item.value,
      className: (0,cx.cx)('ais-RefinementList-item', classNames.item, item.isRefined && (0,cx.cx)('ais-RefinementList-item--selected', classNames.selectedItem))
    }, /*#__PURE__*/react.createElement("label", {
      className: (0,cx.cx)('ais-RefinementList-label', classNames.label)
    }, /*#__PURE__*/react.createElement("input", {
      checked: item.isRefined,
      className: (0,cx.cx)('ais-RefinementList-checkbox', classNames.checkbox),
      type: "checkbox",
      value: item.value,
      onChange: function onChange() {
        onRefine(item);
      }
    }), /*#__PURE__*/react.createElement("span", {
      className: (0,cx.cx)('ais-RefinementList-labelText', classNames.labelText)
    }, query.length > 0 ? /*#__PURE__*/react.createElement(Highlight/* Highlight */.f, {
      parts: [(0,getHighlightedParts/* getHighlightedParts */.I)((0,escape_html/* unescape */.x)(item.highlighted || ''))]
    }) : item.label), /*#__PURE__*/react.createElement("span", {
      className: (0,cx.cx)('ais-RefinementList-count', classNames.count)
    }, item.count)));
  })), showMore && /*#__PURE__*/react.createElement(ShowMoreButton, {
    className: (0,cx.cx)('ais-RefinementList-showMore', classNames.showMore, !canToggleShowMore && (0,cx.cx)('ais-RefinementList-showMore--disabled', classNames.disabledShowMore)),
    disabled: !canToggleShowMore,
    onClick: onToggleShowMore,
    isShowingMore: isShowingMore,
    translations: translations
  }));
}
// EXTERNAL MODULE: ./node_modules/react-instantsearch/dist/es/ui/SearchBox.js
var SearchBox = __webpack_require__(76661);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/widgets/RefinementList.js
function RefinementList_typeof(obj) { "@babel/helpers - typeof"; return RefinementList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, RefinementList_typeof(obj); }
var widgets_RefinementList_excluded = ["searchable", "searchablePlaceholder", "attribute", "operator", "limit", "showMore", "showMoreLimit", "sortBy", "escapeFacetValues", "transformItems", "translations"];
function RefinementList_extends() { RefinementList_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RefinementList_extends.apply(this, arguments); }
function RefinementList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function RefinementList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? RefinementList_ownKeys(Object(source), !0).forEach(function (key) { RefinementList_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : RefinementList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function RefinementList_defineProperty(obj, key, value) { key = RefinementList_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function RefinementList_toPropertyKey(arg) { var key = RefinementList_toPrimitive(arg, "string"); return RefinementList_typeof(key) === "symbol" ? key : String(key); }
function RefinementList_toPrimitive(input, hint) { if (RefinementList_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (RefinementList_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function RefinementList_slicedToArray(arr, i) { return RefinementList_arrayWithHoles(arr) || RefinementList_iterableToArrayLimit(arr, i) || RefinementList_unsupportedIterableToArray(arr, i) || RefinementList_nonIterableRest(); }
function RefinementList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function RefinementList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RefinementList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RefinementList_arrayLikeToArray(o, minLen); }
function RefinementList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function RefinementList_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function RefinementList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function widgets_RefinementList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = widgets_RefinementList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function widgets_RefinementList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function RefinementList_RefinementList(_ref) {
  var searchable = _ref.searchable,
    searchablePlaceholder = _ref.searchablePlaceholder,
    attribute = _ref.attribute,
    operator = _ref.operator,
    limit = _ref.limit,
    showMore = _ref.showMore,
    showMoreLimit = _ref.showMoreLimit,
    sortBy = _ref.sortBy,
    escapeFacetValues = _ref.escapeFacetValues,
    transformItems = _ref.transformItems,
    translations = _ref.translations,
    props = widgets_RefinementList_objectWithoutProperties(_ref, widgets_RefinementList_excluded);
  var _useRefinementList = useRefinementList({
      attribute: attribute,
      operator: operator,
      limit: limit,
      showMore: showMore,
      showMoreLimit: showMoreLimit,
      sortBy: sortBy,
      escapeFacetValues: escapeFacetValues,
      transformItems: transformItems
    }, {
      $$widgetType: 'ais.refinementList'
    }),
    canRefine = _useRefinementList.canRefine,
    canToggleShowMore = _useRefinementList.canToggleShowMore,
    isFromSearch = _useRefinementList.isFromSearch,
    isShowingMore = _useRefinementList.isShowingMore,
    items = _useRefinementList.items,
    refine = _useRefinementList.refine,
    searchForItems = _useRefinementList.searchForItems,
    toggleShowMore = _useRefinementList.toggleShowMore;
  var _useState = (0,react.useState)(''),
    _useState2 = RefinementList_slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var inputRef = (0,react.useRef)(null);
  function setQuery(newQuery) {
    var compositionComplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    setInputValue(newQuery);
    if (compositionComplete) {
      searchForItems(newQuery);
    }
  }
  function onRefine(item) {
    refine(item.value);
    setQuery('');
  }
  function onChange(event) {
    var compositionComplete = event.type === 'compositionend' || !event.nativeEvent.isComposing;
    setQuery(event.currentTarget.value, compositionComplete);
  }
  function onReset() {
    setQuery('');
  }
  function onSubmit() {
    if (items.length > 0) {
      refine(items[0].value);
      setQuery('');
    }
  }
  var mergedTranslations = RefinementList_objectSpread({
    resetButtonTitle: 'Clear the search query',
    submitButtonTitle: 'Submit the search query',
    noResultsText: 'No results.',
    showMoreButtonText: function showMoreButtonText(options) {
      return options.isShowingMore ? 'Show less' : 'Show more';
    }
  }, translations);
  var uiProps = {
    items: items,
    canRefine: canRefine,
    onRefine: onRefine,
    query: inputValue,
    searchBox: searchable && /*#__PURE__*/react.createElement(SearchBox/* SearchBox */.G, {
      inputRef: inputRef,
      placeholder: searchablePlaceholder,
      isSearchStalled: false,
      value: inputValue,
      onChange: onChange,
      onReset: onReset,
      onSubmit: onSubmit,
      translations: {
        submitButtonTitle: mergedTranslations.submitButtonTitle,
        resetButtonTitle: mergedTranslations.resetButtonTitle
      }
    }),
    noResults: searchable && isFromSearch && items.length === 0 && mergedTranslations.noResultsText,
    canToggleShowMore: canToggleShowMore,
    onToggleShowMore: toggleShowMore,
    isShowingMore: isShowingMore,
    translations: {
      showMoreButtonText: mergedTranslations.showMoreButtonText
    }
  };
  return /*#__PURE__*/react.createElement(RefinementList, RefinementList_extends({}, props, uiProps, {
    showMore: showMore
  }));
}

/***/ }),

/***/ 5778:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ SearchBox_SearchBox)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(74243);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(82894);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/checkRendering.js + 1 modules
var checkRendering = __webpack_require__(84203);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/search-box/connectSearchBox.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var withUsage = (0,documentation/* createDocumentationMessageGenerator */.V)({
  name: 'search-box',
  connector: true
});

/**
 * @typedef {Object} CustomSearchBoxWidgetParams
 * @property {function(string, function(string))} [queryHook = undefined] A function that will be called every time
 * a new value for the query is set. The first parameter is the query and the second is a
 * function to actually trigger the search. The function takes the query as the parameter.
 *
 * This queryHook can be used to debounce the number of searches done from the searchBox.
 */

var defaultQueryHook = function defaultQueryHook(query, hook) {
  return hook(query);
};

/**
 * **SearchBox** connector provides the logic to build a widget that will let the user search for a query.
 *
 * The connector provides to the rendering: `refine()` to set the query. The behaviour of this function
 * may be impacted by the `queryHook` widget parameter.
 */
var connectSearchBox = function connectSearchBox(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop/* noop */.l;
  (0,checkRendering/* checkRendering */.t)(renderFn, withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
      _ref$queryHook = _ref.queryHook,
      queryHook = _ref$queryHook === void 0 ? defaultQueryHook : _ref$queryHook;
    var _refine;
    var _clear;
    return {
      $$type: 'ais.searchBox',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref2) {
        var state = _ref2.state;
        unmountFn();
        return state.setQueryParameter('query', undefined);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return _objectSpread(_objectSpread({}, renderState), {}, {
          searchBox: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref3) {
        var helper = _ref3.helper,
          instantSearchInstance = _ref3.instantSearchInstance,
          state = _ref3.state;
        if (!_refine) {
          _refine = function _refine(query) {
            queryHook(query, function (q) {
              return helper.setQuery(q).search();
            });
          };
          _clear = function _clear() {
            helper.setQuery('').search();
          };
        }
        return {
          query: state.query || '',
          refine: _refine,
          clear: _clear,
          widgetParams: widgetParams,
          isSearchStalled: instantSearchInstance.status === 'stalled'
        };
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
        var searchParameters = _ref4.searchParameters;
        var query = searchParameters.query || '';
        if (query === '' || uiState && uiState.query === query) {
          return uiState;
        }
        return _objectSpread(_objectSpread({}, uiState), {}, {
          query: query
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
        var uiState = _ref5.uiState;
        return searchParameters.setQueryParameter('query', uiState.query || '');
      }
    };
  };
};
/* harmony default export */ const search_box_connectSearchBox = (connectSearchBox);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/hooks/useConnector.js + 9 modules
var useConnector = __webpack_require__(71291);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/useSearchBox.js


function useSearchBox(props, additionalWidgetProperties) {
  return (0,useConnector/* useConnector */.Z)(search_box_connectSearchBox, props, additionalWidgetProperties);
}
// EXTERNAL MODULE: ./node_modules/react-instantsearch/dist/es/ui/SearchBox.js
var SearchBox = __webpack_require__(76661);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/widgets/SearchBox.js
function SearchBox_typeof(obj) { "@babel/helpers - typeof"; return SearchBox_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, SearchBox_typeof(obj); }
var _excluded = ["queryHook", "searchAsYouType", "ignoreCompositionEvents", "translations"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SearchBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function SearchBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SearchBox_ownKeys(Object(source), !0).forEach(function (key) { SearchBox_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SearchBox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function SearchBox_defineProperty(obj, key, value) { key = SearchBox_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function SearchBox_toPropertyKey(arg) { var key = SearchBox_toPrimitive(arg, "string"); return SearchBox_typeof(key) === "symbol" ? key : String(key); }
function SearchBox_toPrimitive(input, hint) { if (SearchBox_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (SearchBox_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SearchBox_SearchBox(_ref) {
  var queryHook = _ref.queryHook,
    _ref$searchAsYouType = _ref.searchAsYouType,
    searchAsYouType = _ref$searchAsYouType === void 0 ? true : _ref$searchAsYouType,
    _ref$ignoreCompositio = _ref.ignoreCompositionEvents,
    ignoreCompositionEvents = _ref$ignoreCompositio === void 0 ? false : _ref$ignoreCompositio,
    translations = _ref.translations,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useSearchBox = useSearchBox({
      queryHook: queryHook
    }, {
      $$widgetType: 'ais.searchBox'
    }),
    query = _useSearchBox.query,
    refine = _useSearchBox.refine,
    isSearchStalled = _useSearchBox.isSearchStalled;
  var _useState = (0,react.useState)(query),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var inputRef = (0,react.useRef)(null);
  function setQuery(newQuery) {
    var isComposing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setInputValue(newQuery);
    if (searchAsYouType && !(ignoreCompositionEvents && isComposing)) {
      refine(newQuery);
    }
  }
  function onReset() {
    setQuery('');
    if (!searchAsYouType) {
      refine('');
    }
  }
  function onChange(event) {
    setQuery(event.currentTarget.value, event.nativeEvent.isComposing);
  }
  function onSubmit(event) {
    if (!searchAsYouType) {
      refine(inputValue);
    }
    if (props.onSubmit) {
      props.onSubmit(event);
    }
  }

  // Track when the InstantSearch query changes to synchronize it with
  // the React state.
  // We bypass the state update if the input is focused to avoid concurrent
  // updates when typing.
  if (query !== inputValue && document.activeElement !== inputRef.current) {
    setInputValue(query);
  }
  var uiProps = {
    inputRef: inputRef,
    isSearchStalled: isSearchStalled,
    onChange: onChange,
    onReset: onReset,
    onSubmit: onSubmit,
    value: inputValue,
    translations: SearchBox_objectSpread({
      submitButtonTitle: 'Submit the search query',
      resetButtonTitle: 'Clear the search query'
    }, translations)
  };
  return /*#__PURE__*/react.createElement(SearchBox/* SearchBox */.G, _extends({}, props, uiProps));
}

/***/ }),

/***/ 48643:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ Snippet_Snippet)
});

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getPropertyByPath.js
var getPropertyByPath = __webpack_require__(65150);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getHighlightedParts.js
var getHighlightedParts = __webpack_require__(38796);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escape-html.js
var escape_html = __webpack_require__(18454);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/instantsearch-ui-components/dist/es/lib/cx.js
var cx = __webpack_require__(64652);
// EXTERNAL MODULE: ./node_modules/react-instantsearch/dist/es/ui/InternalHighlight.js + 1 modules
var InternalHighlight = __webpack_require__(33821);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/ui/Snippet.js
var _excluded = ["classNames"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Snippet(_ref) {
  var _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(InternalHighlight/* InternalHighlight */.G, _extends({
    classNames: {
      root: (0,cx.cx)('ais-Snippet', classNames.root),
      highlighted: (0,cx.cx)('ais-Snippet-highlighted', classNames.highlighted),
      nonHighlighted: (0,cx.cx)('ais-Snippet-nonHighlighted', classNames.nonHighlighted),
      separator: (0,cx.cx)('ais-Snippet-separator', classNames.separator)
    }
  }, props));
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/widgets/Snippet.js
var Snippet_excluded = ["hit", "attribute", "highlightedTagName", "nonHighlightedTagName", "separator"];
function Snippet_extends() { Snippet_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Snippet_extends.apply(this, arguments); }
function Snippet_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Snippet_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Snippet_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Snippet_Snippet(_ref) {
  var hit = _ref.hit,
    attribute = _ref.attribute,
    highlightedTagName = _ref.highlightedTagName,
    nonHighlightedTagName = _ref.nonHighlightedTagName,
    separator = _ref.separator,
    props = Snippet_objectWithoutProperties(_ref, Snippet_excluded);
  var property = (0,getPropertyByPath/* getPropertyByPath */.E)(hit._snippetResult, attribute) || [];
  var properties = Array.isArray(property) ? property : [property];
  var parts = properties.map(function (singleValue) {
    return (0,getHighlightedParts/* getHighlightedParts */.I)((0,escape_html/* unescape */.x)(singleValue.value || ''));
  });
  return /*#__PURE__*/react.createElement(Snippet, Snippet_extends({}, props, {
    parts: parts,
    highlightedTagName: highlightedTagName,
    nonHighlightedTagName: nonHighlightedTagName,
    separator: separator
  }));
}

/***/ }),

/***/ 40631:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ Stats_Stats)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(74243);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(82894);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/checkRendering.js + 1 modules
var checkRendering = __webpack_require__(84203);
;// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/stats/connectStats.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var withUsage = (0,documentation/* createDocumentationMessageGenerator */.V)({
  name: 'stats',
  connector: true
});

/**
 * **Stats** connector provides the logic to build a custom widget that will displays
 * search statistics (hits number and processing time).
 */

var connectStats = function connectStats(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop/* noop */.l;
  (0,checkRendering/* checkRendering */.t)(renderFn, withUsage());
  return function (widgetParams) {
    return {
      $$type: 'ais.stats',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose() {
        unmountFn();
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return _objectSpread(_objectSpread({}, renderState), {}, {
          stats: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref) {
        var results = _ref.results,
          state = _ref.state;
        if (!results) {
          return {
            hitsPerPage: state.hitsPerPage,
            nbHits: 0,
            nbSortedHits: undefined,
            areHitsSorted: false,
            nbPages: 0,
            page: state.page || 0,
            processingTimeMS: -1,
            query: state.query || '',
            widgetParams: widgetParams
          };
        }
        return {
          hitsPerPage: results.hitsPerPage,
          nbHits: results.nbHits,
          nbSortedHits: results.nbSortedHits,
          areHitsSorted: typeof results.appliedRelevancyStrictness !== 'undefined' && results.appliedRelevancyStrictness > 0 && results.nbSortedHits !== results.nbHits,
          nbPages: results.nbPages,
          page: results.page,
          processingTimeMS: results.processingTimeMS,
          query: results.query,
          widgetParams: widgetParams
        };
      }
    };
  };
};
/* harmony default export */ const stats_connectStats = (connectStats);
// EXTERNAL MODULE: ./node_modules/react-instantsearch-core/dist/es/hooks/useConnector.js + 9 modules
var useConnector = __webpack_require__(71291);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/useStats.js


function useStats(props, additionalWidgetProperties) {
  return (0,useConnector/* useConnector */.Z)(stats_connectStats, props, additionalWidgetProperties);
}
// EXTERNAL MODULE: ./node_modules/instantsearch-ui-components/dist/es/lib/cx.js
var cx = __webpack_require__(64652);
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/ui/Stats.js
var _excluded = ["classNames", "nbHits", "processingTimeMS", "nbSortedHits", "areHitsSorted", "translations"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function Stats(_ref) {
  var _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    nbHits = _ref.nbHits,
    processingTimeMS = _ref.processingTimeMS,
    nbSortedHits = _ref.nbSortedHits,
    areHitsSorted = _ref.areHitsSorted,
    translations = _ref.translations,
    props = _objectWithoutProperties(_ref, _excluded);
  var translationOptions = {
    nbHits: nbHits,
    processingTimeMS: processingTimeMS,
    nbSortedHits: nbSortedHits,
    areHitsSorted: areHitsSorted
  };
  return /*#__PURE__*/react.createElement("div", _extends({}, props, {
    className: (0,cx.cx)('ais-Stats', classNames.root, props.className)
  }), /*#__PURE__*/react.createElement("span", {
    className: "ais-Stats-text"
  }, translations.rootElementText(translationOptions)));
}
;// CONCATENATED MODULE: ./node_modules/react-instantsearch/dist/es/widgets/Stats.js
function Stats_typeof(obj) { "@babel/helpers - typeof"; return Stats_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Stats_typeof(obj); }
var Stats_excluded = ["translations"];
function Stats_extends() { Stats_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Stats_extends.apply(this, arguments); }
function Stats_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Stats_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Stats_ownKeys(Object(source), !0).forEach(function (key) { Stats_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Stats_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Stats_defineProperty(obj, key, value) { key = Stats_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Stats_toPropertyKey(arg) { var key = Stats_toPrimitive(arg, "string"); return Stats_typeof(key) === "symbol" ? key : String(key); }
function Stats_toPrimitive(input, hint) { if (Stats_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Stats_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Stats_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Stats_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Stats_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Stats_Stats(_ref) {
  var translations = _ref.translations,
    props = Stats_objectWithoutProperties(_ref, Stats_excluded);
  var _useStats = useStats(undefined, {
      $$widgetType: 'ais.stats'
    }),
    nbHits = _useStats.nbHits,
    nbSortedHits = _useStats.nbSortedHits,
    processingTimeMS = _useStats.processingTimeMS,
    areHitsSorted = _useStats.areHitsSorted;
  var uiProps = {
    nbHits: nbHits,
    nbSortedHits: nbSortedHits,
    processingTimeMS: processingTimeMS,
    areHitsSorted: areHitsSorted,
    translations: Stats_objectSpread({
      rootElementText: function rootElementText(options) {
        return "".concat(options.areHitsSorted ? getSortedResultsSentence(options) : getResultsSentence(options), " found in ").concat(options.processingTimeMS.toLocaleString(), "ms");
      }
    }, translations)
  };
  return /*#__PURE__*/react.createElement(Stats, Stats_extends({}, props, uiProps));
}
function getSortedResultsSentence(_ref2) {
  var nbHits = _ref2.nbHits,
    nbSortedHits = _ref2.nbSortedHits;
  var suffix = "sorted out of ".concat(nbHits.toLocaleString());
  if (nbSortedHits === 0) {
    return "No relevant results ".concat(suffix);
  }
  if (nbSortedHits === 1) {
    return "1 relevant result ".concat(suffix);
  }
  if (nbSortedHits > 1) {
    return "".concat((nbSortedHits || 0).toLocaleString(), " relevant results ").concat(suffix);
  }
  return '';
}
function getResultsSentence(_ref3) {
  var nbHits = _ref3.nbHits;
  if (nbHits === 0) {
    return 'No results';
  }
  if (nbHits === 1) {
    return '1 result';
  }
  if (nbHits > 1) {
    return "".concat(nbHits.toLocaleString(), " results");
  }
  return '';
}

/***/ })

}]);