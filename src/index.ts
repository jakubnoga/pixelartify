import ColorConverter, { Color } from "./color-converter";
import { availablePalettes } from "./color-converter/palettes"

window.onload = () => {
	const canvas: HTMLCanvasElement = document.getElementById("app") as HTMLCanvasElement;
	const paletteSelect: HTMLSelectElement = document.getElementById("palette") as HTMLSelectElement;

	availablePalettes.forEach((name, idx) => {
		const option = document.createElement("option") as HTMLOptionElement;
		option.text = name;
		option.value = name;
		option.selected = idx === 0;

		paletteSelect.appendChild(option);
	})

	const img = new Image();

	img.onload = () => {
		drawImage(canvas, img, paletteSelect);
	}

	paletteSelect.addEventListener("input", (event) => {
		drawImage(canvas, img, paletteSelect);
	})

	img.src = "./resource/img.png"
}

function drawImage(canvas: HTMLCanvasElement, img: HTMLImageElement, paletteSelect: HTMLSelectElement) {
	const converter = new ColorConverter();

	const context = canvas.getContext("2d");
	let selectedPalette = paletteSelect.options[paletteSelect.selectedIndex].value;

	context.drawImage(img, 0, 0);
	
	console.log(selectedPalette)

	for (let i = 0; i < canvas.width; i++) {
		for (let j = 0; j < canvas.height; j++) {
			const data = context.getImageData(i, j, 1, 1).data;

			const r = data[0];
			const g = data[1];
			const b = data[2];
			
			
			const color: Color = { r, g, b };
			const palette = converter.getMapping(selectedPalette, color);
			const paletteData = new ImageData(new Uint8ClampedArray([palette.r, palette.g, palette.b, 255]), 1, 1);

			context.putImageData(paletteData, i, j);
		}
	}
}
