function calculateGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;

    for (var i = 0; i < subjects.length; i++) {
        while (true) {
            var input = prompt(
                "📊 성적 계산기 📊\n\n" +
                subjects[i] + " 점수를 입력해 주세요.\n" +
                "입력 범위: 0부터 100점"
            );

            // 취소 버튼을 누르면 계산 종료
            if (input === null) {
                alert(
                    "성적 계산을 취소했어요 👋\n\n" +
                    "다음에 다시 계산해 주세요!"
                );
                return;
            }

            var score = Number(input);

            // 숫자가 아니거나 범위를 벗어난 경우
            if (isNaN(score) || score < 0 || score > 100) {
                alert(
                    "앗! 점수를 다시 확인해 주세요 🙌\n\n" +
                    "0부터 100 사이의 숫자만 입력할 수 있어요."
                );
                continue;
            }

            total = total + score;
            break;
        }
    }

    var average = total / subjects.length;
    var grade;
    var result;
    var resultEmoji;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    if (average >= 60) {
        result = "합격";
        resultEmoji = "🎉";
    } else {
        result = "불합격";
        resultEmoji = "🥲";
    }

    alert(
        "✨ 성적 계산 결과 ✨\n\n" +
        "총점: " + total + "점\n" +
        "평균: " + average.toFixed(1) + "점\n" +
        "등급: " + grade + "\n\n" +
        resultEmoji + " 최종 결과: " + result
    );
}