upgrade = 1;
upgradePrice = 1;
upgrade2Price = 1;
autoclick = 0;

function UpgradeEnhanceClick() {
	if (clicks >= upgradePrice) {
		clicks -= upgradePrice;
		upgrade *= 2;
		upgradePrice *= 2;
	}

	console.log("Upgrade: " + upgrade + " Upgrade Price: " + upgradePrice + " Clicks: " + clicks);

	document.getElementById("Count").innerHTML = clicks;
}

function UpgradeAutoClick() {
	if (clicks >= upgrade2Price) {
		clicks -= upgrade2Price;
		upgrade2Price *= 2;

		if (autoclick === 0) autoclick++;
		else autoclick *= 2;
	}

	document.getElementById("Count").innerHTML = clicks;
}



