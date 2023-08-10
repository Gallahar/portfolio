export function throttle(fn: () => void, delay: number) {
	let isThrottled = false,
		//@ts-ignore
		savedThis,
		savedArgs: [] | null
	const wrapper = (...args: []) => {
		if (isThrottled) {
			//@ts-ignore
			savedThis = this
			savedArgs = args
			return
		}

		isThrottled = true
		//@ts-ignore
		fn.apply(this, args)

		setTimeout(() => {
			isThrottled = false
			//@ts-ignore
			if (savedThis && savedArgs) {
				wrapper.apply(savedThis, savedArgs)
				savedThis = savedArgs = null
			}
		}, delay)
	}
	return wrapper
}
