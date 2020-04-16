import { getPalette } from "./palettes"

export default class ColorConverter {
	private readonly colorMap: Map<Color, Color> = new Map<Color, Color>();

	constructor() {
		console.log(getPalette)
	}

	getMapping(palette: string, original: Color): Color {
		if (this.colorMap.has(original)) {
			return this.colorMap.get(original);
		}
		const paletteColor = this.findClosest(palette, original);

		this.colorMap.set(original, paletteColor);

		return paletteColor;

		// return this.findClosest(palette, original);
	}
	/// need to implement: https://blog.krum.io/k-d-trees/
	findClosest(palette: string, original: Color): Color {
		let min = {distance: 1000000, palette: null};
		getPalette(palette).forEach((palette) => {
			const distance = this.distance(original, palette);
			if (distance < min.distance) {
				min = { distance, palette }
			}
		});

		return min.palette;
		// .sort((c1, c2) => c1.distance - c2.distance)[0].palette;
	}

	distance(c1: Color, c2: Color) {
		return Math.abs(c1.r - c2.r) + Math.abs(c1.g - c2.g) + Math.abs(c1.b - c2.b);
		// return Math.pow(c1.r - c2.r, 2) + Math.pow(c1.g - c2.g, 2) + Math.pow(c1.b - c2.b, 2);
	}
}


export interface Color {
	r: number,
	g: number,
	b: number
}