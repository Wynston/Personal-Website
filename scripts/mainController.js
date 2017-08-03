appModule.controller('mainController', function($scope, $http){
	//initializer function when the window is loaded
	$scope.init = function(){
		//pre-load and sync sub-controllers
		$scope.scrollNav();
	}

	//handles animation scrolling
	$scope.scrollNav = function() {
		$('.nav a').click(function(){  
		    //Toggle Class
		    $(".active").removeClass("active");      
		    $(this).closest('li').addClass("active");
		    var theClass = $(this).attr("class");
		    $('.'+theClass).parent('li').addClass('active');
		    //Animate
		    $('html, body').stop().animate({
		        scrollTop: $( $(this).attr('href') ).offset().top
		    }, 1000);
		    return false;
		});
		  $('.scrollTop a').scrollTop();
	}
});