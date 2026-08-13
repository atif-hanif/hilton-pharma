function draw() {
	const canvas = document.getElementById('canvas');
	const svg = document.getElementById('svgLayer');
	const canvasRect = canvas.getBoundingClientRect();
	// clear previously drawn elements (keep defs)
	svg.querySelectorAll('path.dyn, line.dyn').forEach(el => el.remove());
	canvas.querySelectorAll('.plus-btn').forEach(el => el.remove());

	function rel(rect) {
		return {
			left: rect.left - canvasRect.left,
			right: rect.right - canvasRect.left,
			top: rect.top - canvasRect.top,
			bottom: rect.bottom - canvasRect.top,
			cy: rect.top - canvasRect.top + rect.height / 2
		};
	}

	function addPlus(x, y) {
		const btn = document.createElement('div');
		btn.className = 'plus-btn';
		btn.innerHTML = '<i class="bi bi-plus-lg"></i>';
		btn.style.left = (x - 14) + 'px';
		btn.style.top = (y - 14) + 'px';
		canvas.appendChild(btn);
	}

	function addLine(x1, y1, x2, y2) {
		const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		line.setAttribute('x1', x1);
		line.setAttribute('y1', y1);
		line.setAttribute('x2', x2);
		line.setAttribute('y2', y2);
		line.setAttribute('marker-end', 'url(#arrow)');
		line.classList.add('dyn');
		svg.appendChild(line);
	}

	function addPath(d) {
		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('d', d);
		path.setAttribute('marker-end', 'url(#arrow)');
		path.classList.add('dyn');
		svg.appendChild(path);
	}
	// top row columns, connected in sequence with an arrow + plus circle
	const topIds = ['col-director', 'col-gm', 'col-buh', 'col-rsm'];
	const topRects = topIds.map(id => rel(document.getElementById(id).getBoundingClientRect()));
	for(let i = 0; i < topRects.length - 1; i++) {
		const a = topRects[i],
			b = topRects[i + 1];
		const y = a.top + 30; // near header level, matches reference
		const midX = (a.right + b.left) / 2;
		addLine(a.right, y, b.left, y);
		addPlus(midX, y);
	}
	// RSM -> down -> left -> down into ASM
	const rsm = topRects[topRects.length - 1];
	const bottomRects = ['col-asm', 'col-tm'].map(id => rel(document.getElementById(id).getBoundingClientRect()));
	const asm = bottomRects[0];
	const rsmX = rsm.left + (rsm.right - rsm.left) / 2;
	const dropY = rsm.bottom + 55;
	const asmX = asm.left + (asm.right - asm.left) / 2 - (asm.right - asm.left) / 2 + 55; // near left edge like reference
	const asmTargetX = asm.left + 60;
	addPath(`M ${rsmX} ${rsm.bottom} L ${rsmX} ${dropY} L ${asmTargetX} ${dropY} L ${asmTargetX} ${asm.top}`);
	// floating plus under the elbow (unconnected, decorative like reference)
	addPlus(rsmX, dropY + 25);
	// ASM -> TM connector
	const tm = bottomRects[1];
	const y2 = asm.top + 190;
	const midX2 = (asm.right + tm.left) / 2;
	addLine(asm.right, y2, tm.left, y2);
	addPlus(midX2, y2);
	// leading arrow into Director column
	addLine(topRects[0].left - 40, topRects[0].top + 30, topRects[0].left, topRects[0].top + 30);
}
window.addEventListener('load', draw);
window.addEventListener('resize', draw);