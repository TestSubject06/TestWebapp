"use strict";

angular.module('webappApp')
.directive("textStretch", ["$window", function($window){
	return {
		restrict:"A",
		link: function(scope, elem){
			var originalHtml = elem.html();
			function resizeTheElement(){
				var contentWidth    	= elem.parent().width(),
			        txt    		       	= angular.copy(originalHtml),
			        oneLine     	 	= $('<span class="no-whitespace">' + txt + '</span>'),
			        numChars       		= elem.text().length,
			        spacing       		= contentWidth/numChars,
			        textWidth;

			    elem.html(oneLine);
			    textWidth = oneLine.width();

			    if (textWidth < contentWidth){
			        var  charWidth     = textWidth/numChars,
			             letterSpacing    = spacing - charWidth + (spacing - charWidth)/numChars ; 
			  
			        oneLine.css({'letter-spacing': letterSpacing});
			    } else {
			        oneLine.contents().unwrap();
			        elem.addClass('justify');
			    }
			}

			resizeTheElement();

		    angular.element($window).on('resize', resizeTheElement);
		}
	};
}]);