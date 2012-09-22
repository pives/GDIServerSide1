$(document).ready(function() {
  	
  	$('button#send-it').submit(function() {
        var query = $('textarea#chat-text').val();
        console.log(query);
        if(query == "" ) return false;
		query="?chattext="+query;
        $.post('say',query, function(data) {
  			$('#chatlog').html(data.logtext);
		});
		return false;
      });

});