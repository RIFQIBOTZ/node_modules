"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbortSignal = void 0;
class AbortSignal {
    constructor() {
        this.onabort = null;
        this._aborted = false;
        Object.defineProperty(this, "_aborted", {
            value: false,
            writable: true,
        });
    }
    get aborted() {
        return this._aborted;
    }
    abort() {
        this._aborted = true;
        if (this.onabort) {
            this.onabort(this);
            this.onabort = null;
        }
    }
}
exports.AbortSignal = AbortSignal;
