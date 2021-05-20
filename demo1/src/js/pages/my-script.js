//클릭시 메뉴에 active 추가

$('.menu-nav li.menu-item').click(
    function () {
        $(this).addClsss('menu-item-active');
        $(this).siblings('.menu-item').removeClsss('menu-item-active');
        console.log('메뉴클릭');
    }
)
