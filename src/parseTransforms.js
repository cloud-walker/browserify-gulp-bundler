import log    from './log'
import colors from 'colors'

export default function (b, transforms) {
	if (typeof transforms === 'string' || transforms instanceof String) {
		b.transform(transforms)
		return
	}

	if (Array.isArray(transforms)) {
		transforms.forEach(function (transform) {
			b.transform(transform)
		})
		return
	}

	log('Transform option not valid'.yellow)
	return
}
