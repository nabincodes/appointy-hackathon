var month;

var year;
var totalDays;
var selectedDate;
var day;

var daysInMonth = function(currentMonth,currentYear){
	return new Date(currentYear, currentMonth, 0).getDate();
}


var weekDays = ['']

$(document).ready(function(){

	// accoridion
	$('.collapse').collapse();

	
	//calendar
	$('#calendar .cal-month').click(function(){
		month =$(this).text();
		$('#calendar .cal-days').fadeIn("slow").css('display','block');
		$('.cal-year .clicked-month').append(month + '&nbsp;|');
		year=parseInt($("#year").val());



		switch(month){
			case 'Jan':
				 month=1;
				 break;

			case 'Feb':
				month = 2;
				break;
			case 'Mar':
				month = 3;
				break;
			case 'Apr':
				month = 4;
				break;
			

			case 'May':
				month = 5;
				break;
			case 'Jun':
				month = 6;
				break;
			case 'Jul':
				month = 7;
				break;
			case 'Aug':
				month=8;
				break;

			case 'Sep':
				month = 9;
				break;
			case 'Oct':
				month = 10;
				break;
			case 'Nov':
				month = 11;
				break;
			case 'Dec':
				 month=12;
				 break;
		}
		totalDays = daysInMonth(month,year);

		day = new Date(year, month-1,1).getDay();

		for(i=1; i<=(totalDays+day); i++){
			var element = document.createElement("div");
			element.className = "date";
			if(i>day){

				 element.appendChild(document.createTextNode(i-day));
			}		   
		    document.getElementById('cal-dates').appendChild(element);

		}

		$('#calendar .date').click(function(){

			$('.appointment-time').fadeIn("slow").css('display','block');
			$('#calendar .clicked-day').append($(this).text() + '&nbsp;');
		});

		$('.appointment-time .time').click(function(){
			$('.registration').fadeIn("slow").css('display','block');	
		});

		$('.registration-button').click(function(){
			$('.company').toggle("slide").css('display','block');	
		});

		$('.company .confirm-button').click(function(){
			$('.summary').toggle("slide").css('display','block');

		});
		
		
	});



	
	
	
});


















//smooth scrolling
// $(document).ready(function(){
// 	$('.nav-item').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });

// });
// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });

// });