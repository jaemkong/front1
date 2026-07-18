function showMyBag() {
    var myBag = [
        { name: "노트북", count: 1 },
        { name: "충전기", count: 1 },
        { name: "필통", count: 1 },
        { name: "볼펜", count: 3 },
        { name: "물티슈", count: 1 }
    ];

    var bagList = "";

    for (var i = 0; i < myBag.length; i++) {
        bagList += myBag[i].name + " : " + myBag[i].count + "개\n";
    }

    alert("🎒 내 가방 속 물품\n\n" + bagList);
}