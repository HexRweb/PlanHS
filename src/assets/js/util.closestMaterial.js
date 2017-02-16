/**
 * Returns the closest material color to the given hex color
 *
 * @param	{number}	color	Base color
 * @returns	{string}			Material color
 */
const closestMaterial = color => {
	const
		hexToRGB = hex => ("000000" + hex.toString(16)).slice(-6).match(/.{1,2}/g).map(str => parseInt(str, 16)),
		colorRGB = hexToRGB(color);
	return "#" + (colorRGB[0] !== colorRGB[1] || colorRGB[1] !== colorRGB[2] ?
		[
			// Red
			0xF44336,	// 500
			0xFFEBEE,	// 50
			0xFFCDD2,	// 100
			0xEF9A9A,	// 200
			0xE57373,	// 300
			0xEF5350,	// 400
			0xF44336,	// 500
			0xE53935,	// 600
			0xD32F2F,	// 700
			0xC62828,	// 800
			0xB71C1C,	// 900
			0xFF8A80,	// A100
			0xFF5252,	// A200
			0xFF1744,	// A400
			0xD50000,	// A700

			// Pink
			0xE91E63,	// 500
			0xFCE4EC,	// 50
			0xF8BBD0,	// 100
			0xF48FB1,	// 200
			0xF06292,	// 300
			0xEC407A,	// 400
			0xE91E63,	// 500
			0xD81B60,	// 600
			0xC2185B,	// 700
			0xAD1457,	// 800
			0x880E4F,	// 900
			0xFF80AB,	// A100
			0xFF4081,	// A200
			0xF50057,	// A400
			0xC51162,	// A700

			// Purple
			0x9C27B0,	// 500
			0xF3E5F5,	// 50
			0xE1BEE7,	// 100
			0xCE93D8,	// 200
			0xBA68C8,	// 300
			0xAB47BC,	// 400
			0x9C27B0,	// 500
			0x8E24AA,	// 600
			0x7B1FA2,	// 700
			0x6A1B9A,	// 800
			0x4A148C,	// 900
			0xEA80FC,	// A100
			0xE040FB,	// A200
			0xD500F9,	// A400
			0xAA00FF,	// A700

			// Deep Purple
			0x673AB7,	// 500
			0xEDE7F6,	// 50
			0xD1C4E9,	// 100
			0xB39DDB,	// 200
			0x9575CD,	// 300
			0x7E57C2,	// 400
			0x673AB7,	// 500
			0x5E35B1,	// 600
			0x512DA8,	// 700
			0x4527A0,	// 800
			0x311B92,	// 900
			0xB388FF,	// A100
			0x7C4DFF,	// A200
			0x651FFF,	// A400
			0x6200EA,	// A700

			// Indigo
			0x3F51B5,	// 500
			0xE8EAF6,	// 50
			0xC5CAE9,	// 100
			0x9FA8DA,	// 200
			0x7986CB,	// 300
			0x5C6BC0,	// 400
			0x3F51B5,	// 500
			0x3949AB,	// 600
			0x303F9F,	// 700
			0x283593,	// 800
			0x1A237E,	// 900
			0x8C9EFF,	// A100
			0x536DFE,	// A200
			0x3D5AFE,	// A400
			0x304FFE,	// A700

			// Blue
			0x2196F3,	// 500
			0xE3F2FD,	// 50
			0xBBDEFB,	// 100
			0x90CAF9,	// 200
			0x64B5F6,	// 300
			0x42A5F5,	// 400
			0x2196F3,	// 500
			0x1E88E5,	// 600
			0x1976D2,	// 700
			0x1565C0,	// 800
			0x0D47A1,	// 900
			0x82B1FF,	// A100
			0x448AFF,	// A200
			0x2979FF,	// A400
			0x2962FF,	// A700

			// Light Blue
			0x03A9F4,	// 500
			0xE1F5FE,	// 50
			0xB3E5FC,	// 100
			0x81D4FA,	// 200
			0x4FC3F7,	// 300
			0x29B6F6,	// 400
			0x03A9F4,	// 500
			0x039BE5,	// 600
			0x0288D1,	// 700
			0x0277BD,	// 800
			0x01579B,	// 900
			0x80D8FF,	// A100
			0x40C4FF,	// A200
			0x00B0FF,	// A400
			0x0091EA,	// A700

			// Cyan
			0x00BCD4,	// 500
			0xE0F7FA,	// 50
			0xB2EBF2,	// 100
			0x80DEEA,	// 200
			0x4DD0E1,	// 300
			0x26C6DA,	// 400
			0x00BCD4,	// 500
			0x00ACC1,	// 600
			0x0097A7,	// 700
			0x00838F,	// 800
			0x006064,	// 900
			0x84FFFF,	// A100
			0x18FFFF,	// A200
			0x00E5FF,	// A400
			0x00B8D4,	// A700

			// Teal
			0x009688,	// 500
			0xE0F2F1,	// 50
			0xB2DFDB,	// 100
			0x80CBC4,	// 200
			0x4DB6AC,	// 300
			0x26A69A,	// 400
			0x009688,	// 500
			0x00897B,	// 600
			0x00796B,	// 700
			0x00695C,	// 800
			0x004D40,	// 900
			0xA7FFEB,	// A100
			0x64FFDA,	// A200
			0x1DE9B6,	// A400
			0x00BFA5,	// A700

			// Green
			0x4CAF50,	// 500
			0xE8F5E9,	// 50
			0xC8E6C9,	// 100
			0xA5D6A7,	// 200
			0x81C784,	// 300
			0x66BB6A,	// 400
			0x4CAF50,	// 500
			0x43A047,	// 600
			0x388E3C,	// 700
			0x2E7D32,	// 800
			0x1B5E20,	// 900
			0xB9F6CA,	// A100
			0x69F0AE,	// A200
			0x00E676,	// A400
			0x00C853,	// A700

			// Light Green
			0x8BC34A,	// 500
			0xF1F8E9,	// 50
			0xDCEDC8,	// 100
			0xC5E1A5,	// 200
			0xAED581,	// 300
			0x9CCC65,	// 400
			0x8BC34A,	// 500
			0x7CB342,	// 600
			0x689F38,	// 700
			0x558B2F,	// 800
			0x33691E,	// 900
			0xCCFF90,	// A100
			0xB2FF59,	// A200
			0x76FF03,	// A400
			0x64DD17,	// A700

			// Lime
			0xCDDC39,	// 500
			0xF9FBE7,	// 50
			0xF0F4C3,	// 100
			0xE6EE9C,	// 200
			0xDCE775,	// 300
			0xD4E157,	// 400
			0xCDDC39,	// 500
			0xC0CA33,	// 600
			0xAFB42B,	// 700
			0x9E9D24,	// 800
			0x827717,	// 900
			0xF4FF81,	// A100
			0xEEFF41,	// A200
			0xC6FF00,	// A400
			0xAEEA00,	// A700

			// Yellow
			0xFFEB3B,	// 500
			0xFFFDE7,	// 50
			0xFFF9C4,	// 100
			0xFFF59D,	// 200
			0xFFF176,	// 300
			0xFFEE58,	// 400
			0xFFEB3B,	// 500
			0xFDD835,	// 600
			0xFBC02D,	// 700
			0xF9A825,	// 800
			0xF57F17,	// 900
			0xFFFF8D,	// A100
			0xFFFF00,	// A200
			0xFFEA00,	// A400
			0xFFD600,	// A700

			// Amber
			0xFFC107,	// 500
			0xFFF8E1,	// 50
			0xFFECB3,	// 100
			0xFFE082,	// 200
			0xFFD54F,	// 300
			0xFFCA28,	// 400
			0xFFC107,	// 500
			0xFFB300,	// 600
			0xFFA000,	// 700
			0xFF8F00,	// 800
			0xFF6F00,	// 900
			0xFFE57F,	// A100
			0xFFD740,	// A200
			0xFFC400,	// A400
			0xFFAB00,	// A700

			// Orange
			0xFF9800,	// 500
			0xFFF3E0,	// 50
			0xFFE0B2,	// 100
			0xFFCC80,	// 200
			0xFFB74D,	// 300
			0xFFA726,	// 400
			0xFF9800,	// 500
			0xFB8C00,	// 600
			0xF57C00,	// 700
			0xEF6C00,	// 800
			0xE65100,	// 900
			0xFFD180,	// A100
			0xFFAB40,	// A200
			0xFF9100,	// A400
			0xFF6D00,	// A700

			// Deep Orange
			0xFF5722,	// 500
			0xFBE9E7,	// 50
			0xFFCCBC,	// 100
			0xFFAB91,	// 200
			0xFF8A65,	// 300
			0xFF7043,	// 400
			0xFF5722,	// 500
			0xF4511E,	// 600
			0xE64A19,	// 700
			0xD84315,	// 800
			0xBF360C,	// 900
			0xFF9E80,	// A100
			0xFF6E40,	// A200
			0xFF3D00,	// A400
			0xDD2C00,	// A700

			// Brown
			0x795548,	// 500
			0xEFEBE9,	// 50
			0xD7CCC8,	// 100
			0xBCAAA4,	// 200
			0xA1887F,	// 300
			0x8D6E63,	// 400
			0x795548,	// 500
			0x6D4C41,	// 600
			0x5D4037,	// 700
			0x4E342E,	// 800
			0x3E2723,	// 900

			// Blue Grey
			0x607D8B,	// 500
			0xECEFF1,	// 50
			0xCFD8DC,	// 100
			0xB0BEC5,	// 200
			0x90A4AE,	// 300
			0x78909C,	// 400
			0x607D8B,	// 500
			0x546E7A,	// 600
			0x455A64,	// 700
			0x37474F,	// 800
			0x263238	// 900
		] : [
			// Grey
			0x9E9E9E,	// 500
			0xFAFAFA,	// 50
			0xF5F5F5,	// 100
			0xEEEEEE,	// 200
			0xE0E0E0,	// 300
			0xBDBDBD,	// 400
			0x9E9E9E,	// 500
			0x757575,	// 600
			0x616161,	// 700
			0x424242,	// 800
			0x212121,	// 900

			// Black & White	
			0x000000,	// Black
			0xFFFFFF	// White
		])
		.map(materialColor => hexToRGB(materialColor))
		.reduce((closestColor, materialColor) => Math.sqrt(
			Math.pow(materialColor[0] - colorRGB[0], 2) +
			Math.pow(materialColor[1] - colorRGB[1], 2) +
			Math.pow(materialColor[2] - colorRGB[2], 2)
		) < Math.sqrt(
			Math.pow(closestColor[0] - colorRGB[0], 2) +
			Math.pow(closestColor[1] - colorRGB[1], 2) +
			Math.pow(closestColor[2] - colorRGB[2], 2)
		) ? materialColor : closestColor)
		.map(dec => (0 + dec.toString(16)).slice(-2)).join("");
};
