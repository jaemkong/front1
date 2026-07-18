/*
========================================
여행 사진 크게 보기
========================================
사진 카드를 클릭하면 dialog 창을 열고,
선택한 사진을 크게 보여줍니다.
*/

// 여행 사진 카드 전체를 가져옵니다.
const photoCards = document.querySelectorAll(".travel-photo-card");

// 사진이 표시될 dialog 창을 가져옵니다.
const photoViewer = document.querySelector("#photoViewer");

// dialog 안의 큰 이미지를 가져옵니다.
const photoViewerImage = document.querySelector("#photoViewerImage");

// 닫기 버튼을 가져옵니다.
const photoViewerClose = document.querySelector("#photoViewerClose");


/*
사진 카드를 하나씩 확인하면서
클릭 이벤트를 연결합니다.
*/
photoCards.forEach(function (photoCard) {

    photoCard.addEventListener("click", function () {

        // 클릭한 카드에 저장된 사진 경로를 가져옵니다.
        const imagePath = photoCard.dataset.image;

        // 클릭한 카드에 저장된 사진 설명을 가져옵니다.
        const imageAlt = photoCard.dataset.alt;

        // dialog 안의 큰 이미지에 값을 넣습니다.
        photoViewerImage.src = imagePath;
        photoViewerImage.alt = imageAlt;

        // 사진 창을 엽니다.
        photoViewer.showModal();

    });

});


/*
X 버튼을 누르면 사진 창을 닫습니다.
*/
photoViewerClose.addEventListener("click", function () {
    photoViewer.close();
});


/*
사진 바깥의 어두운 영역을 누르면
사진 창을 닫습니다.
*/
photoViewer.addEventListener("click", function (event) {

    if (event.target === photoViewer) {
        photoViewer.close();
    }

});