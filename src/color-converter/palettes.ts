import { Color } from "."

const palettes = { 
	"tech24": ["ffffff", "c0d8e9", "909bd2", "4d47a6", "1d0c34", "371f57", "56dbfb", "2f86e4", "0d6469", "289c55", "51e672", "ffe69b", "f3af5a", "f08142", "e64b46", "a93161", "f6bb7d", "a4a564", "b35d3d", "934351", "ff83a5", "e057b0", "923796", "701a61",],
	"srb2": ["ffffff", "f7f7f7", "efefef", "e7e7e7", "dfdfdf", "d7d7d7", "cfcfcf", "c7c7c7", "bfbfbf", "b7b7b7", "afafaf", "a7a7a7", "9f9f9f", "979797", "8f8f8f", "878787", "7f7f7f", "777777", "6f6f6f", "676767", "5f5f5f", "575757", "4f4f4f", "474747", "3f3f3f", "373737", "2f2f2f", "272727", "1f1f1f", "171717", "0f0f0f", "070707", "000000", "bfa78f", "b7a088", "af9880", "a79078", "9f8971", "968169", "8e7961", "86725a", "7e6a52", "75624a", "6d5a42", "65533b", "5d4b33", "54432b", "4c3c24", "43331b", "bf7b4b", "b37347", "ab6f43", "a36b3f", "9b633b", "8f5f37", "875733", "7f532f", "774f2b", "6b4727", "5f4323", "533f1f", "4b371b", "3f2f17", "332b13", "2b230f", "ffebdf", "ffe3d3", "ffdbc7", "ffd3bb", "ffcfb3", "ffc7a7", "ffbf9b", "ffbb93", "ffb383", "f7ab7b", "efa373", "e79b6b", "df9363", "d78b5b", "cf8353", "cb7f4f", "ffeedc", "ffdcb9", "ffcb97", "ffb975", "ffa855", "ff9736", "ff8619", "ff7500", "f36d00", "e56500", "d85d00", "cb5500", "be4d00", "b14500", "a43d00", "973600", "ffffef", "ffffcf", "ffffaf", "ffff8f", "ffff6f", "ffff4f", "ffff2f", "ffff0f", "ffff00", "cfcf00", "afaf00", "8f8f00", "6f6f00", "4f4f00", "2f2f00", "0f0f00", "ffff73", "ebdb57", "d7bb43", "c39b2f", "af7b1f", "9b5b13", "874307", "732b00", "ffdfdf", "ffbfbf", "ff9f9f", "ff7f7f", "ff5f5f", "ff3f3f", "ff1f1f", "ff0000", "ef0000", "df0000", "cf0000", "bf0000", "af0000", "9f0000", "8f0000", "7f0000", "6f0000", "5f0000", "4f0000", "3f0000", "2f0000", "1f0000", "0f0000", "ffb7b7", "f3a3a3", "e78f8f", "db7b7b", "cb6b6b", "bf5b5b", "b34f4f", "a73f3f", "8e2e00", "862700", "7e2000", "751900", "6d1200", "650b00", "5d0500", "550000", "77ff4f", "70f04b", "69e046", "61d041", "5ac03c", "52b037", "4ba032", "43902d", "3c8028", "357023", "2d601e", "265019", "1e4014", "17300f", "0f200a", "070f04", "deffa8", "c7e494", "adc880", "95ad6b", "7c9258", "647744", "4a5a30", "323f1d", "00ff00", "00df00", "00bf00", "009f00", "007f00", "005f00", "003f00", "001f00", "ff6fff", "ff00ff", "df00df", "bf00bf", "9f009f", "7f007f", "5f005f", "3f003f", "e9e9f3", "c4c4e1", "9d9dce", "7777bb", "5454a7", "414183", "2e2e5c", "1b1b34", "d5f1ff", "bfebff", "aae3ff", "95ddff", "80d6ff", "6acfff", "55c8ff", "3fbfff", "379ddf", "2f8fbf", "27779f", "1f5f7f", "00bfbf", "007f7f", "005f5f", "003f3f", "e7e7ff", "c6c6ff", "adadff", "8c8cff", "7373ff", "5252ff", "3131ff", "1818ff", "0000ff", "0000e7", "0000ce", "0000b5", "00009c", "000084", "00006b", "000052", "00004f", "00003f", "000037", "000027", "00001f", "00000f", "000007", "00ffff", "cf7fcf", "b76fb7", "9f5f9f", "874f87", "6f3f6f", "572f57", "3f1f3f", "270f27"]
}

export function getPalette(name: string): Color[] {
	return palettes[name].map((str: string) => {
		const r = parseInt(str.substring(0, 2), 16);
		const g = parseInt(str.substring(2, 4), 16);
		const b = parseInt(str.substring(4, 6), 16);

		return {r, g, b};
	});
};

export const availablePalettes = Object.keys(palettes);