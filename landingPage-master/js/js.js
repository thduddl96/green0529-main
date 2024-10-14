$(function(){

  $('#fullpage').fullpage({
    sectionsColor: ['#fff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage','5thpage', '6thpage', 'lastPage'],
    menu: '#menu',
    scrollingSpeed: 1000,

    afterLoad: function(index, nextIndex, direction){
      if (nextIndex == 1){
        $(".menuwrap").hide();
      }else{
        $(".menuwrap").show();
      }
    },

  });



  AOS.init(200);

});





