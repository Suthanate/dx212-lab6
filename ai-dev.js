// คำนวณค่าโดยสารรถ NGV ตามระยะทาง
const calcFare = (distanceKm) => {
	if (typeof distanceKm !== 'number' || !Number.isFinite(distanceKm) || distanceKm <= 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);
	return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

module.exports = { calcFare };
