function showMyBag() {
    var myBag = [
        {
            name: "충전기",
            emoji: "🔌",
            count: 1
        },
        {
            name: "필통",
            emoji: "✏️",
            count: 1
        },
        {
            name: "텀블러",
            emoji: "🥤",
            count: 1
        },
        {
            name: "기숙사 카드키",
            emoji: "🔑",
            count: 1
        },
        {
            name: "약 & 영양제",
            emoji: "💊",
            count: 6
        }
    ];

    var bagList = "";
    var totalCount = 0;

    for (var i = 0; i < myBag.length; i++) {
        bagList =
            bagList +
            myBag[i].emoji + " " +
            myBag[i].name + " : " +
            myBag[i].count + "개\n";

        totalCount = totalCount + myBag[i].count;
    }

    alert(
        "🎒 재은이의 가방을 열어봤어요! 🎒\n\n" +
        bagList +
        "\n──────────────\n" +
        "가방 속 물건은 총 " + totalCount + "개예요 ✨\n\n" +
        "오늘도 빠진 물건 없이 준비 완료 💜"
    );
}