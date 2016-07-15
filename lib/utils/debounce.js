'use babel';

export default function(callback, wait) {
    let timeout;

    return function() {
		let self = this;
		let args = arguments;
		let callImmediately = !timeout;

		let later = function() {
			timeout = null;

			callback.apply(self, args);
		};

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callImmediately) {
            callback.apply(self, args);
        }
    };
}
