export function intersect(node: HTMLElement, delay = 0) {
	if (delay) node.style.transitionDelay = `${delay}ms`;
	node.classList.add('observe-enter');

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('in-view');
				observer.unobserve(node);
			}
		},
		{ threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);
	return { destroy() { observer.disconnect(); } };
}
