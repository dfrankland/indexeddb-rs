/* tslint:disable */
import * as wasm from './indexeddb_test_bg';

/**
* @returns {void}
*/
export function run() {
    return wasm.run();
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const __widl_f_open_with_u32_IDBFactory_target = typeof IDBFactory === 'undefined' ? null : IDBFactory.prototype.open || function() {
    throw new Error(`wasm-bindgen: IDBFactory.open does not exist`);
};

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

export function __widl_f_open_with_u32_IDBFactory(arg0, arg1, arg2, arg3, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {
        return addHeapObject(__widl_f_open_with_u32_IDBFactory_target.call(getObject(arg0), varg1, arg3));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

function GetOwnOrInheritedPropertyDescriptor(obj, id) {
    while (obj) {
        let desc = Object.getOwnPropertyDescriptor(obj, id);
        if (desc) return desc;
        obj = Object.getPrototypeOf(obj);
    }
return {}
}

const __widl_f_result_IDBRequest_target = GetOwnOrInheritedPropertyDescriptor(typeof IDBRequest === 'undefined' ? null : IDBRequest.prototype, 'result').get || function() {
    throw new Error(`wasm-bindgen: IDBRequest.result does not exist`);
};

export function __widl_f_result_IDBRequest(arg0, exnptr) {
    try {
        return addHeapObject(__widl_f_result_IDBRequest_target.call(getObject(arg0)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

const __widl_f_error_IDBRequest_target = GetOwnOrInheritedPropertyDescriptor(typeof IDBRequest === 'undefined' ? null : IDBRequest.prototype, 'error').get || function() {
    throw new Error(`wasm-bindgen: IDBRequest.error does not exist`);
};

export function __widl_f_error_IDBRequest(arg0, exnptr) {
    try {

        const val = __widl_f_error_IDBRequest_target.call(getObject(arg0));
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

const __widl_f_ready_state_IDBRequest_target = GetOwnOrInheritedPropertyDescriptor(typeof IDBRequest === 'undefined' ? null : IDBRequest.prototype, 'readyState').get || function() {
    throw new Error(`wasm-bindgen: IDBRequest.readyState does not exist`);
};

export function __widl_f_ready_state_IDBRequest(arg0) {
    return addHeapObject(__widl_f_ready_state_IDBRequest_target.call(getObject(arg0)));
}

const __widl_f_set_onsuccess_IDBRequest_target = GetOwnOrInheritedPropertyDescriptor(typeof IDBRequest === 'undefined' ? null : IDBRequest.prototype, 'onsuccess').set || function() {
    throw new Error(`wasm-bindgen: IDBRequest.onsuccess does not exist`);
};

export function __widl_f_set_onsuccess_IDBRequest(arg0, arg1) {
    __widl_f_set_onsuccess_IDBRequest_target.call(getObject(arg0), getObject(arg1));
}

const __widl_f_set_onerror_IDBRequest_target = GetOwnOrInheritedPropertyDescriptor(typeof IDBRequest === 'undefined' ? null : IDBRequest.prototype, 'onerror').set || function() {
    throw new Error(`wasm-bindgen: IDBRequest.onerror does not exist`);
};

export function __widl_f_set_onerror_IDBRequest(arg0, arg1) {
    __widl_f_set_onerror_IDBRequest_target.call(getObject(arg0), getObject(arg1));
}

export function __widl_instanceof_Window(idx) {
    return getObject(idx) instanceof Window ? 1 : 0;
}

export function __widl_f_indexed_db_Window(arg0, exnptr) {
    try {

        const val = getObject(arg0).indexedDB;
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

const __widl_f_log_1__target = console.log;

export function __widl_f_log_1_(arg0) {
    __widl_f_log_1__target(getObject(arg0));
}

export function __wbg_newnoargs_6a80f84471205fc8(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
}

export function __wbg_call_582b20dfcad7fee4(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

export function __wbg_call_8ebb2e9cebdce6f5(arg0, arg1, arg2, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1), getObject(arg2)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

export function __wbg_new_9cc98abd8c2c45e2(arg0, arg1) {
    let cbarg0 = function(arg0, arg1) {
        let a = this.a;
        this.a = 0;
        try {
            return this.f(a, this.b, addHeapObject(arg0), addHeapObject(arg1));

        } finally {
            this.a = a;

        }

    };
    cbarg0.f = wasm.__wbg_function_table.get(70);
    cbarg0.a = arg0;
    cbarg0.b = arg1;
    try {
        return addHeapObject(new Promise(cbarg0.bind(cbarg0)));
    } finally {
        cbarg0.a = cbarg0.b = 0;

    }
}

export function __wbg_resolve_71812a6f3480e88d(arg0) {
    return addHeapObject(Promise.resolve(getObject(arg0)));
}

export function __wbg_then_8cbc8dd8be3dea68(arg0, arg1) {
    return addHeapObject(getObject(arg0).then(getObject(arg1)));
}

export function __wbindgen_object_clone_ref(idx) {
    return addHeapObject(getObject(idx));
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

export function __wbindgen_object_drop_ref(i) { dropObject(i); }

export function __wbindgen_string_new(p, l) {
    return addHeapObject(getStringFromWasm(p, l));
}

export function __wbindgen_number_get(n, invalid) {
    let obj = getObject(n);
    if (typeof(obj) === 'number') return obj;
    getUint8Memory()[invalid] = 1;
    return 0;
}

export function __wbindgen_is_null(idx) {
    return getObject(idx) === null ? 1 : 0;
}

export function __wbindgen_is_undefined(idx) {
    return getObject(idx) === undefined ? 1 : 0;
}

export function __wbindgen_boolean_get(i) {
    let v = getObject(i);
    if (typeof(v) === 'boolean') {
        return v ? 1 : 0;
    } else {
        return 2;
    }
}

export function __wbindgen_is_symbol(i) {
    return typeof(getObject(i)) === 'symbol' ? 1 : 0;
}

const lTextEncoder = typeof TextEncoder === 'undefined' ? require('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

let WASM_VECTOR_LEN = 0;

function passStringToWasm(arg) {

    const buf = cachedTextEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
}

export function __wbindgen_string_get(i, len_ptr) {
    let obj = getObject(i);
    if (typeof(obj) !== 'string') return 0;
    const ptr = passStringToWasm(obj);
    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
    return ptr;
}

export function __wbindgen_cb_drop(i) {
    const obj = getObject(i).original;
    dropObject(i);
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
}

export function __wbindgen_closure_wrapper126(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(10);
    const d = wasm.__wbg_function_table.get(11);
    const cb = function() {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b);

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
}

export function __wbindgen_closure_wrapper1060(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(41);
    const d = wasm.__wbg_function_table.get(42);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
}

export function __wbindgen_defer_start() {
    Promise.resolve().then(() => wasm.__wbindgen_start());
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}
