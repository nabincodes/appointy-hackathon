var month;

var year;
var totalDays;
var selectedDate;
var day;
var bookingTime;
var bookingDate;
var bookedDay;

var daysInMonth = function(currentMonth,currentYear){
	return new Date(currentYear, currentMonth, 0).getDate();
}


var weekDays = ['']

$(document).ready(function(){
	var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

	// accoridion
	$('.collapse').collapse();

	
	//calendar
	$('#calendar .cal-month').click(function(){
		month =$(this).text();
		$('#calendar .cal-days').fadeIn("slow").css('display','block');
		$('.cal-year .clicked-month').append(month + '&nbsp;|');
		year=parseInt($("#year").val());

		var bookedMonth = month;
		

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
			element.className = "date2";
			if(i>day){
				element.className = "date";
				 element.appendChild(document.createTextNode(i-day));
			}		   
		    document.getElementById('cal-dates').appendChild(element);

		}

		$('#calendar .date').click(function(){
			bookingDate = parseInt($(this).text());
			bookedDay = ((bookingDate+day)%7)-1;	
			$('.appointment-time').fadeIn("slow").css('display','block');
			$('#calendar .clicked-day').append($(this).text() + '&nbsp;');
		});

		$('.appointment-time .time').click(function(){
			bookingTime = $(this).text();
			$('.registration').fadeIn("slow").css('display','block');
			$('.cal-year').html("<span>Registration</span>");
		});

		
		

		$('.registration-button').click(function(){
			if($('.registration input[type=\'text\']').val() !==''){
				$('.company').toggle("slide").css('display','block');	
				$('.cal-year').html("<span>Booking Confirmation</span>");
				
			}
		});

		$('.company .confirm-button').click(function(){
			
				$('.summary').toggle("slide").css('display','block');
			
			
			$('.details .time-summary').html(weekDays[bookedDay] + ', ' + bookedMonth+' ' + bookingDate + ' '+ year + ' @ ' + bookingTime);

			$('.cal-year').html("<span>Booking Successful</span>");
		});


		



	});



	
	
	
});
















// $('.nav-item').click(function() {
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