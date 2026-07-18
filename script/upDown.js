function startUpDownGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var count = 0;

    while (true) {
        var input = prompt(
            "🎮 Up-Down 게임 🎮\n\n" +
            "1부터 50 사이의 숫자를 입력해 주세요!\n" +
            "과연 몇 번 만에 맞힐 수 있을까요? ✨"
        );

        // 취소 버튼을 누르면 게임 종료
        if (input === null) {
            alert(
                "👋 게임을 종료했어요!\n\n" +
                "다음에 다시 도전해 주세요 💜"
            );
            return;
        }

        var userNum = Number(input);

        // 숫자가 아니거나 범위를 벗어난 경우
        if (isNaN(userNum) || userNum < 1 || userNum > 50) {
            alert(
                "앗! 입력값을 다시 확인해 주세요 🙌\n\n" +
                "1부터 50 사이의 숫자만 입력할 수 있어요."
            );
            continue;
        }

        count++;

        if (userNum > computerNum) {
            alert(
                "▼ DOWN ▼\n\n" +
                userNum + "보다 작은 숫자예요!\n" +
                "조금만 내려가 볼까요? 👇\n\n" +
                "현재 시도 횟수: " + count + "회"
            );
        } else if (userNum < computerNum) {
            alert(
                "▲ UP ▲\n\n" +
                userNum + "보다 큰 숫자예요!\n" +
                "조금만 올라가 볼까요? 👆\n\n" +
                "현재 시도 횟수: " + count + "회"
            );
        } else {
            alert(
                "🎉 정답입니다! 🎉\n\n" +
                "정답은 " + computerNum + "이었어요.\n" +
                count + "번 만에 맞혔습니다! ✨\n\n" +
                "대단해요 💜"
            );
            return;
        }
    }
}