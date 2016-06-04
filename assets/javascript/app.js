var questions = [
  {
    question:'Who is the big sister in The Despicable Me Films?',
    choices : ['Margo', 'Agnus', 'Edith', 'Heather'],
    answer: 0
  },

  {
    question:"What was the first thing Gru ever stole?",
    choices : ['The Pyramid', 'The Queens Crown', 'His Lunch', 'The Moon'],
    answer: 1
  },

  {
    question:"What are the names of the Minions in the 2015 film minion?",
    choices : ['Kevin, Bob and Nathan', 'Kevin, Sally and Stuart', 'Kevin, Bob and Stuart', 'Gareth, Bob and Stuart'],
    answer: 2
  },
  {
    question:"Why did the Minions go to Orlando?",
    choices : ['To find Gru', 'To find some bananas', 'Villain Con', 'Vacation'],
    answer: 2,
  },
  {
    question:"How did all the minions arrive in London?",
    choices : ['An airplane', 'Swam', 'A boat', 'The tube'],
    answer: 3,
  }


]
 
console.log(questions);
$(document).ready(function(){
	   var counter = 20;
	   var choicesClicked = false;
	   var correctA = 0;
	   var incorrectA = 0;
	   var Unanswered = 0;

     $('#startButton').on('click', function(){
            console.log("buttion is clicked")
            showQuestion(0);
     });


     //this is the code to run when you want to show a question
     function showQuestion(questionId) {
     				console.log('i am in showquestion');
     				if (questionId == questions.length) {
     					score();
     				} else {
							console.log(questionId);
	     				counter = 20;
	     				var question = questions[questionId];
	     				choicesClicked = false;

	     	      var countDown = setInterval(function(){ 
	                   counter--;
	                   
				     	       $('#timer').html('Time Remaining:'+counter+'Seconds');
				     	       $('#clickHere').html(
						                 "<div class='question'>"+ question.question+"</div>")
				     	       for (var i=0; i < question.choices.length; i++){
				     	       	      // console.log(i);			     	       	   
	                           $('#clickHere').append(
						                 "<div class='choices' data-val='"+i+"'>"+question.choices[i]+"</button>"+"</div>"

				                  	);
				                 	
				                }
				             if (choicesClicked === false) {

							             $('.choices').on('click', function(){
							             	    choicesClicked = true;
							             	    console.log('choice is clicked');
							             	    console.log('clearing', countDown);
							             	    clearInterval(countDown);
							             	    if ($(this).data('val')=== question.answer) {							             	    	   
							             	    	   rightAnswer(questionId, question);
							             	    	   correctA =+ 1;
							             	    	   //console.log(correctA);
							             	    } else{
							             	    	   wrongAnswer(questionId, question);
							             	    	   incorrectA += 1;

							             	    }
							             });
							          } 
							          if (choicesClicked !== false){
							          	 $('.choices').on('click', function(){
							          	 	     console.log('You cannot clicked twice');
							          	 })

							          }
				              

				              if (counter === 0){
								     	  	//alert('time is up');
								     	  	clearInterval(countDown);
								     	  	outofTime(questionId,question)
								     	  	Unanswered += 1;
								     	  	
								     	  	
	     	  						}


	            }, 1000);
     				}
     				
     }

     function rightAnswer(questionId, question){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Correct!"+"</div>"
			                 +"<img class='gif' src='assets/images/giphy01.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!') 					     	        	    
					     	        	     showQuestion(questionId + 1)   
					     	       	},3000);

     }
     function wrongAnswer(questionId, question) {
     									$('#clickHere').html(
			                 "<div class='question'>"+"Nope!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+question.choices[question.answer]+"</div>"

			                 +"<img class='gif' src='assets/images/giphy02.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!')  					     	        	    
					     	        	     showQuestion(questionId + 1);

					     	       	},3000);

     }
     function outofTime(questionId, question) {
     	                 $('#clickHere').html(
			                 "<div class='question'>"+"Out of Time!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+question.choices[question.answer]+"</div>"

			                 +"<img class='gif' src='assets/images/giphy05.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!')  
					     	        	     showQuestion(questionId + 1);

					     	       	},3000);
     }

     function score(){
    	 								//clearInterval(countDown);
    	 								$('#clickHere').html(
			                 "<div class='question'>"+"All done, heres how you did!"+"</div>"
			                 +"<div class='question'>"+"Correct Answers: &nbsp;"+correctA+"</div>"
			                 +"<div class='question'>"+"Incorrect Answers: &nbsp;"+incorrectA+"</div>"
			                 +"<div class='question'>"+"Unanswered: &nbsp;"+Unanswered+"</div>"
			                 +"<div class='restart'>"+"Start Over?"+"</div>")
  

    }
    //  $('.restart').on('click', function(){ 
    //$('#restart').on('click', function(){ 
   $('#clickHere').on('click','.restart', function(){
			      console.log('restart is clicked')
     	      restart();

     });

     function restart() {
     	           var counter = 20;
							   var choicesClicked = false;
							   var correctA = 0;
							   var incorrectA = 0;
							   var Unanswered = 0;
							   showQuestion(0);
		  }
    

})