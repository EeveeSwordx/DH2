export const Pokedex: {[speciesid: string]: SpeciesData} = {
	decidueyehermit: {
		num: 724,
		name: "Decidueye-Hermit",
		types: ["Grass", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 78, atk: 107, def: 100, spa: 70, spd: 100, spe: 80},
		abilities: {0: "Overgrow", 1: "Flower Veil", H: "Soul Reap"},
		heightm: 1.6,
		weightkg: 36.6,
	},
	decidueyeautumn: {
		num: 724,
		name: "Decidueye-Autumn",
		types: ["Fire", "Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 110, def: 70, spa: 110, spd: 70, spe: 80},
		abilities: {0: "Moxie", H: "Victory Star"},
		heightm: 1.6,
		weightkg: 36.6,
	},
	typhlosionexplosive: {
		num: 157,
		name: "Typhlosion-Explosive",
		types: ["Fire", "Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 73, atk: 94, def: 82, spa: 80, spd: 85, spe: 120},
		abilities: {0: "Flash Fire", 1: "Flame Body", H: "Regenerator"},
		heightm: 1.7,
		weightkg: 79.5,
	},
	typhlosionwarlock: {
		num: 157,
		name: "Typhlosion-Warlock",
		types: ["Fire", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 83, atk: 69, def: 88, spa: 100, spd: 80, spe: 115},
		abilities: {0: "Blaze", 1: "Flame Body", H: "Immolation"},
		heightm: 1.7,
		weightkg: 79.5,
	},
	samurottfoamy: {
		num: 503,
		name: "Samurott-Foamy",
		types: ["Water", "Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 65, def: 90, spa: 100, spd: 105, spe: 75},
		abilities: {0: "Torrent", H: "Poison Heal"},
		heightm: 1.5,
		weightkg: 94.6,
	},
	samurottrogue: {
		num: 503,
		name: "Samurott-Rogue",
		types: ["Water", "Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 113, def: 80, spa: 95, spd: 77, spe: 80},
		abilities: {0: "Torrent", 1: "Water Veil", H: "Defiant"},
		heightm: 1.5,
		weightkg: 94.6,
	},
	oricorio: {
		num: 741,
		name: "Oricorio",
		types: ["Fire", "Flying"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 75, atk: 110, def: 75, spa: 85, spd: 100, spe: 95},
		abilities: {0: "Dancer", H: "Victory Star"},
		heightm: 0.6,
		weightkg: 3.4,
		otherFormes: null,
		formeOrder: null,
	},
	oricoriocheerleader: {
		num: 741,
		name: "Oricorio-Cheerleader",
		types: ["Electric", "Flying"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 75, atk: 118, def: 105, spa: 70, spd: 80, spe: 93},
		abilities: {0: "Dancer", H: "Staccato"},
		heightm: 0.6,
		weightkg: 3.4,
	},
	oricoriopau: {
		num: 741,
		name: "Oricorio-Pa'u",
		types: ["Grass", "Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 90, atk: 75, def: 90, spa: 110, spd: 90, spe: 75},
		abilities: {0: "Dancer", H: "Grassy Surge"},
		heightm: 0.6,
		weightkg: 3.4,
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	horrorcorio: {
		num: 741,
		name: "Horrorcorio",
		types: ["Ghost", "Flying"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 95, atk: 70, def: 70, spa: 118, spd: 100, spe: 83},
		abilities: {0: "Necro Dancer"},
		heightm: 0.6,
		weightkg: 3.4,
	},
	pikachukanto: {
		num: 25,
		name: "Pikachu-Kanto",
		types: ["Electric"],
		gender: "M",
		baseStats: {hp: 60, atk: 100, def: 60, spa: 90, spd: 90, spe: 100},
		abilities: {0: "Electric Fusion"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachuhoenn: {
		num: 25,
		name: "Pikachu-Hoenn",
		types: ["Dark", "Steel"],
		gender: "M",
		baseStats: {hp: 64, atk: 95, def: 65, spa: 90, spd: 65, spe: 116},
		abilities: {0: "Split System"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachusinnoh: {
		num: 25,
		name: "Pikachu-Sinnoh",
		types: ["Normal", "Fairy"],
		gender: "M",
		baseStats: {hp: 70, atk: 110, def: 60, spa: 80, spd: 60, spe: 140},
		abilities: {0: "Dazzling"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachuunova: {
		num: 25,
		name: "Pikachu-Unova",
		types: ["Water", "Poison"],
		gender: "M",
		baseStats: {hp: 85, atk: 55, def: 95, spa: 50, spd: 80, spe: 95},
		abilities: {0: "Infiltrator", H: "Regenerator"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachutactic: {
		num: 25,
		name: "Pikachu-Tactic",
		types: ["Steel"],
		gender: "M",
		baseStats: {hp: 90, atk: 100, def: 120, spa: 100, spd: 50, spe: 20},
		abilities: {0: "Comatose", H: "Analytic"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachualola: {
		num: 25,
		name: "Pikachu-Alola",
		types: ["Dragon", "Ghost"],
		gender: "M",
		baseStats: {hp: 80, atk: 95, def: 60, spa: 95, spd: 90, spe: 80},
		abilities: {0: "Steelworker", H: "Surge Surfer"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachuworld: {
		num: 25,
		name: "Pikachu-World",
		types: ["Electric"],
		gender: "M",
		baseStats: {hp: 80, atk: 90, def: 70, spa: 90, spd: 70, spe: 100},
		abilities: {0: "Pastel Veil", H: "Libero"},
		heightm: 0.4,
		weightkg: 6,
	},
	ribombee: {
		inherit: true,
		num: 743,
		name: "Ribombee",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 80, atk: 85, def: 75, spa: 85, spd: 75, spe: 115},
		abilities: {0: "Swarm", 1: "Aroma Veil", H: "Filter"},
		heightm: 0.2,
		weightkg: 0.5,
		otherFormes: null,
		formeOrder: null,
	},
	ribombeetotem: {
		inherit: true,
		num: 743,
		name: "Ribombee-Totem",
		types: ["Grass", "Poison"],
		baseStats: {hp: 70, atk: 65, def: 105, spa: 100, spd: 90, spe: 64},
		abilities: {0: "Honey Gather", 1: "Swarm", H: "Poison Point"},
		heightm: 0.4,
		weightkg: 2,
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
	},
	araquanid: {
		inherit: true,
		num: 752,
		name: "Araquanid",
		types: ["Bug", "Water"],
		baseStats: {hp: 75, atk: 70, def: 80, spa: 65, spd: 110, spe: 105},
		abilities: {0: "Water Bubble", H: "Water Absorb"},
		heightm: 1.8,
		weightkg: 82,
		otherFormes: null,
		formeOrder: null,
	},
	araquanidtotem: {
		inherit: true,
		num: 752,
		name: "Araquanid-Totem",
		types: ["Poison", "Flying"],
		baseStats: {hp: 68, atk: 65, def: 122, spa: 95, spd: 87, spe: 57},
		abilities: {0: "Water Bubble", H: "Water Absorb"},
		heightm: 3.1,
		weightkg: 217.5,
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
	},
	vikavolt: {
		inherit: true,
		num: 738,
		name: "Vikavolt",
		types: ["Steel"],
		baseStats: {hp: 77, atk: 115, def: 90, spa: 70, spd: 90, spe: 85},
		abilities: {0: "Levitate", H: "Rough Skin"},
		heightm: 1.5,
		weightkg: 45,
		otherFormes: null,
		formeOrder: null,
	},
	vikavolttotem: {
		inherit: true,
		num: 738,
		name: "Vikavolt-Totem",
		types: ["Bug", "Electric"],
		baseStats: {hp: 70, atk: 125, def: 85, spa: 45, spd: 95, spe: 80},
		abilities: {0: "Magic Guard"},
		heightm: 2.6,
		weightkg: 147.5,
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
	},
	urshifu: {
		num: 892,
		name: "Urshifu",
		types: ["Dark", "Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 85, atk: 105, def: 115, spa: 63, spd: 90, spe: 72},
		abilities: {0: "Sand Force", 1: "Unseen Fist", H: "Rough Skin"},
		heightm: 1.9,
		weightkg: 105,
		otherFormes: null,
		formeOrder: null,
		prevo: null,
	},
	urshifuerosion: {
		num: 892,
		name: "Urshifu-Erosion",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 95, def: 80, spa: 90, spd: 85, spe: 70},
		abilities: {0: "Magic Guard"},
		heightm: 1.9,
		weightkg: 105,
	},
	calyrexmythic: {
		num: 898,
		name: "Calyrex-Mythic",
		types: ["Dragon", "Fairy"],
		gender: "N",
		baseStats: {hp: 100, atk: 90, def: 90, spa: 90, spd: 90, spe: 80},
		abilities: {0: "Dazzling", 1: "Aroma Veil", H: "Rubber Armor"},
		heightm: 1.1,
		weightkg: 7.7,
	},
	calyrexglacier: {
		num: 898,
		name: "Calyrex-Glacier",
		types: ["Ice", "Ground"],
		gender: "N",
		baseStats: {hp: 75, atk: 120, def: 110, spa: 75, spd: 110, spe: 40},
		abilities: {0: "As One (Glastrier)"},
		heightm: 2.4,
		weightkg: 809.1,
	},
	calyrexmidnight: {
		num: 898,
		name: "Calyrex-Midnight",
		types: ["Dark", "Fairy"],
		gender: "N",
		baseStats: {hp: 80, atk: 80, def: 85, spa: 90, spd: 95, spe: 105},
		abilities: {0: "Grim Neigh"},
		heightm: 2.4,
		weightkg: 53.6,
	},
	kommoo: {
		num: 784,
		name: "Kommo-o",
		types: ["Dragon", "Rock"],
		baseStats: {hp: 75, atk: 110, def: 85, spa: 80, spd: 85, spe: 80},
		abilities: {0: "Iron Fist", 1: "Neuroforce", H: "Excavate"},
		heightm: 1.6,
		weightkg: 78.2,
		otherFormes: null,
		formeOrder: null,
	},
	rockmoo: {
		num: 784,
		name: "Rockmo-o",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 95, atk: 100, def: 85, spa: 100, spd: 70, spe: 65},
		abilities: {0: "Dauntless Shield", H: "Punk Rock"},
		heightm: 2.4,
		weightkg: 207.5,
	},
	salazzle: {
		num: 758,
		name: "Salazzle",
		types: ["Fire", "Dragon"],
		gender: "F",
		baseStats: {hp: 100, atk: 110, def: 65, spa: 75, spd: 70, spe: 94},
		abilities: {0: "Multiscale"},
		heightm: 1.2,
		weightkg: 22.2,
		otherFormes: null,
		formeOrder: null,
	},
	salazzleruler: {
		num: 758,
		name: "Salazzle-Ruler",
		types: ["Poison", "Rock"],
		gender: "F",
		baseStats: {hp: 75, atk: 110, def: 60, spa: 104, spd: 61, spe: 110},
		abilities: {0: "Corrosion", 1: "Queenly Majesty", H: "Tough Claws"},
		heightm: 2.1,
		weightkg: 81,
	},
	lurantis: {
		num: 754,
		name: "Lurantis",
		types: ["Fighting"],
		baseStats: {hp: 90, atk: 125, def: 90, spa: 40, spd: 90, spe: 90},
		abilities: {0: "Exoskelett"},
		heightm: 0.9,
		weightkg: 18.5,
		otherFormes: null,
		formeOrder: null,
	},
	lurantio: {
		num: 754,
		name: "Lurantio",
		types: ["Fairy", "Steel"],
		baseStats: {hp: 85, atk: 70, def: 90, spa: 70, spd: 90, spe: 45},
		abilities: {0: "Intrepid Sword", H: "Magic Guard"},
		heightm: 1.5,
		weightkg: 58,
	},
	mrmime: {
		num: 122,
		name: "Mr. Mime",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 65, atk: 65, def: 80, spa: 80, spd: 130, spe: 80},
		abilities: {0: "Filter", 1: "Prankster", H: "Tinted Lens"},
		heightm: 1.3,
		weightkg: 54.5,
	},
	mrmimeprance: {
		num: 122,
		name: "Mr. Mime-Prance",
		types: ["Ice", "Fairy"],
		baseStats: {hp: 75, atk: 95, def: 80, spa: 75, spd: 75, spe: 110},
		abilities: {0: "Technician", 1: "Dancer", H: "Screen Cleaner"},
		heightm: 1.4,
		weightkg: 56.8,
	},
	stunfisk: {
		num: 618,
		name: "Stunfisk",
		types: ["Ground"],
		baseStats: {hp: 109, atk: 76, def: 99, spa: 100, spd: 84, spe: 32},
		abilities: {0: "Static", H: "Transistor"},
		heightm: 0.7,
		weightkg: 11,
	},
	stunfisktrap: {
		num: 618,
		name: "Stunfisk-Trap",
		types: ["Ground", "Steel"],
		baseStats: {hp: 109, atk: 108, def: 97, spa: 66, spd: 85, spe: 44},
		abilities: {0: "Strong Jaw", 1: "Poison Point", H: "Gluttony"},
		heightm: 0.7,
		weightkg: 20.5,
	},
	necrozma: {
		num: 800,
		name: "Necrozma",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 113, atk: 101, def: 73, spa: 101, spd: 73, spe: 89},
		abilities: {0: "Light Armor"},
		heightm: 2.4,
		weightkg: 230,
		otherFormes: null,
		formeOrder: null,
	},
	necrozmalionheart: {
		num: 800,
		name: "Necrozma-Lionheart",
		types: ["Steel", "Fire"],
		gender: "N",
		baseStats: {hp: 97, atk: 109, def: 79, spa: 79, spd: 103, spe: 67},
		abilities: {0: "Prism Armor"},
		heightm: 3.8,
		weightkg: 460,
	},
	necrozmabatwing: {
		num: 800,
		name: "Necrozma-Batwing",
		types: ["Dark", "Ghost"],
		gender: "N",
		baseStats: {hp: 97, atk: 67, def: 83, spa: 113, spd: 73, spe: 101},
		abilities: {0: "Prism Armor"},
		heightm: 4.2,
		weightkg: 350,
	},
	necrozmadragon: {
		num: 800,
		name: "Necrozma-Dragon",
		types: ["Dragon"],
		gender: "N",
		baseStats: {hp: 73, atk: 113, def: 83, spa: 97, spd: 83, spe: 101},
		abilities: {0: "Neuroforce"},
		heightm: 7.5,
		weightkg: 230,
	},
	braviarypatriot: {
		num: 628,
		name: "Braviary-Patriot",
		types: ["Normal", "Flying"],
		gender: "M",
		baseStats: {hp: 105, atk: 108, def: 75, spa: 87, spd: 75, spe: 75},
		abilities: {0: "Defiant", 1: "Sheer Force", H: "Battle-Scarred"},
		heightm: 1.5,
		weightkg: 41,
	},
	braviaryhisui: {
		num: 628,
		name: "Braviary-Hisui",
		types: ["Psychic", "Fire"],
		gender: "M",
		baseStats: {hp: 100, atk: 83, def: 80, spa: 112, spd: 100, spe: 55},
		abilities: {0: "Levitate", H: "Psychic Surge"},
		heightm: 1.7,
		weightkg: 43.4,
		baseSpecies: null,
		forme: null,
	},
	lilligantbard: {
		num: 549,
		name: "Lilligant-Bard",
		types: ["Grass"],
		gender: "F",
		baseStats: {hp: 70, atk: 80, def: 75, spa: 110, spd: 75, spe: 90},
		abilities: {0: "Dancer", 1: "Aroma Veil", H: "Queenly Majesty"},
		heightm: 1.1,
		weightkg: 16.3,
	},
	mistlegant: {
		num: 549,
		name: "Mistlegant",
		types: ["Grass", "Ice"],
		gender: "F",
		baseStats: {hp: 70, atk: 75, def: 75, spa: 95, spd: 75, spe: 130},
		abilities: {0: "Victory Star", H: "Competitive"},
		heightm: 1.2,
		weightkg: 19.2,
	},
	electrodescrewball: {
		num: 101,
		name: "Electrode-Screwball",
		types: ["Electric", "Dark"],
		gender: "N",
		baseStats: {hp: 75, atk: 90, def: 95, spa: 90, spd: 105, spe: 85},
		abilities: {0: "Bulletproof", 1: "Infiltrator", H: "Aftermath"},
		heightm: 1.2,
		weightkg: 66.6,
	},
	electroderingo: {
		num: 101,
		name: "Electrode-Ringo",
		types: ["Electric", "Grass"],
		gender: "N",
		baseStats: {hp: 80, atk: 95, def: 75, spa: 85, spd: 70, spe: 125},
		abilities: {0: "Harvest", 1: "Regenerator", H: "Aftermath"},
		heightm: 1.2,
		weightkg: 71,
	},
	persianbandit: {
		num: 53,
		name: "Persian-Bandit",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 64, atk: 101, def: 64, spa: 96, spd: 64, spe: 111},
		abilities: {0: "Limber", 1: "Technician", H: "No Guard"},
		heightm: 1,
		weightkg: 32,
		prevo: "Meowth",
	},
	persianomen: {
		num: 53,
		name: "Persian-Omen",
		types: ["Dark", "Bug"],
		baseStats: {hp: 95, atk: 90, def: 70, spa: 65, spd: 65, spe: 115},
		abilities: {0: "Fur Coat", 1: "Technician", H: "Rattled"},
		heightm: 1.1,
		weightkg: 33,
		prevo: "Meowth-Alola",
	},
	meowsticuntethered: {
		num: 678,
		name: "Meowstic-Untethered",
		types: ["Psychic", "Ground"],
		gender: "M",
		baseStats: {hp: 84, atk: 78, def: 91, spa: 118, spd: 81, spe: 89},
		abilities: {0: "Grounding"},
		heightm: 0.6,
		weightkg: 8.5,
		prevo: "Espurr",
	},
	meowstictwotales: {
		num: 678,
		name: "Meowstic-TwoTales",
		types: ["Psychic", "Fighting"],
		gender: "F",
		baseStats: {hp: 74, atk: 53, def: 86, spa: 93, spd: 91, spe: 104},
		abilities: {0: "Keen Eye", 1: "Infiltrator", H: "Competitive"},
		heightm: 0.6,
		weightkg: 8.5,
		prevo: "Espurr",
	},
	indeedeedevil: {
		num: 876,
		name: "Indeedee-Devil",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 85, atk: 120, def: 95, spa: 80, spd: 75, spe: 45},
		abilities: {0: "Cursed Body", 1: "Synchronize", H: "Technician"},
		heightm: 0.9,
		weightkg: 28,
	},
	indeedeeangel: {
		num: 876,
		name: "Indeedee-Angel",
		types: ["Normal"],
		baseStats: {hp: 80, atk: 45, def: 120, spa: 95, spd: 75, spe: 85},
		abilities: {0: "Natural Cure", 1: "Synchronize", H: "Unaware"},
		heightm: 0.9,
		weightkg: 28,
	},
	polteageist: {
		num: 855,
		name: "Polteageist",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 60, atk: 85, def: 65, spa: 114, spd: 124, spe: 60},
		abilities: {0: "Levitate", H: "Unburden"},
		heightm: 0.2,
		weightkg: 0.4,
	},
	polteageistantique: {
		num: 855,
		name: "Polteageist-Antique",
		types: ["Rock", "Ice"],
		baseStats: {hp: 71, atk: 89, def: 85, spa: 89, spd: 85, spe: 91},
		abilities: {0: "Solid Rock", 1: "Slush Rush", H: "Snow Cloak"},
		heightm: 0.2,
		weightkg: 0.4,
	},
	toxtricity: {
		num: 849,
		name: "Toxtricity",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 100, atk: 103, def: 80, spa: 88, spd: 80, spe: 75},
		abilities: {0: "Technician", 1: "Plus", H: "Volt Absorb"},
		heightm: 1.6,
		weightkg: 40,
	},
	toxtricitylowkey: {
		num: 849,
		name: "Toxtricity-Low-Key",
		types: ["Electric", "Dragon"],
		baseStats: {hp: 102, atk: 92, def: 70, spa: 102, spd: 70, spe: 106},
		abilities: {0: "Infiltrator", 1: "Lightning Rod", H: "Energy Loop"},
		heightm: 1.6,
		weightkg: 40,
	},
	articunomistral: {
		num: 144,
		name: "Articuno-Mistral",
		types: ["Ice", "Ghost"],
		baseStats: {hp: 90, atk: 70, def: 70, spa: 90, spd: 110, spe: 100},
		abilities: {0: "Pressure", H: "Regenerator"},
		heightm: 1.7,
		weightkg: 55.4,
	},
	articunotsunami: {
		num: 144,
		name: "Articuno-Tsunami",
		types: ["Water", "Flying"],
		baseStats: {hp: 90, atk: 70, def: 100, spa: 90, spd: 70, spe: 110},
		abilities: {0: "Competitive", H: "Natural Cure"},
		heightm: 1.7,
		weightkg: 50.4,
	},
	articunotsunami: {
		num: 144,
		name: "Articuno-Tsunami",
		types: ["Water", "Flying"],
		baseStats: {hp: 90, atk: 70, def: 100, spa: 90, spd: 70, spe: 110},
		abilities: {0: "Competitive", H: "Natural Cure"},
		heightm: 1.7,
		weightkg: 50.4,
	},
	zapdos: {
		num: 145,
		name: "Zapdos",
		types: ["Water", "Fighting"],
		baseStats: {hp: 80, atk: 95, def: 120, spa: 90, spd: 75, spe: 70},
		abilities: {0: "Scrappy", H: "Static"},
		heightm: 1.6,
		weightkg: 52.6,
	},
	charpados: {
		num: 145,
		name: "Charpados",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 75, atk: 120, def: 90, spa: 70, spd: 80, spe: 95},
		abilities: {0: "Motor Drive"},
		heightm: 1.6,
		weightkg: 58.2,
	},
	moltres: {
		num: 146,
		name: "Moltres",
		types: ["Flying"],
		baseStats: {hp: 75, atk: 90, def: 80, spa: 95, spd: 70, spe: 120},
		abilities: {0: "Guts", H: "Flash Fire"},
		heightm: 2,
		weightkg: 60,
	},
	bennutres: {
		num: 146,
		name: "Bennutres",
		types: ["Dark", "Grass"],
		baseStats: {hp: 70, atk: 120, def: 80, spa: 75, spd: 95, spe: 90},
		abilities: {0: "Flash Fire"},
		heightm: 2,
		weightkg: 66,
	},
};
