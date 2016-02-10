  $(function() {
  $("#getContacts").on('click', function() {
    $("#contactForm").hide();
    $.getJSON('/contacts', function(contacts) {
      var table = $("#contacts").find('tbody').empty();
      contacts.forEach(function(contact) {  
        var tr = $("<tr>").addClass('contact').appendTo(table);
        $("<td>").appendTo(tr).text(contact.firstname);
        $("<td>").appendTo(tr).text(contact.lastname);
        $("<td>").appendTo(tr).text(contact.email);
        $("#results").fadeIn('slow');
      }); 
    });
  }); 

  $("#addContact").on('click', function() {
    $("#results").hide();
    $("#contactForm").show();
  });

  $("#newContact").on('submit', function() {
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();

    if (firstname == "" || lastname == "" || email == "") {
      alert("fill out fields lel.");
      return false;
    }

    $.post('/contacts', {firstname: firstname, lastname: lastname, email: email}, function(data) {
      if (data.result) {
        $("#firstname").add("#lastname").add("#email").add('');
        alert("ID is: " + data.id);
      } else {
        alert("OOPS");
      }
    }, 'json');

    return false;
  });

    $("#showContact").on('click', function() {
    $("#results").hide();
    $("#showForm").show();
  });

  $("#findContactButton").on('click', function() {

    var searchterm = $("#searchterm").val();
    console.log("#findContact", searchterm);

    var table = $("#contacts").find('tbody').empty();

    $.getJSON('/contacts', function(contacts) {
      
      console.log('contacts', contacts);

      var results = [];
      contacts.forEach(function(contact) {
        if(contact.firstname == searchterm || contact.id == searchterm || contact.lastname == searchterm || contact.email == searchterm) {
          results.push(contact);
        }
      });

      console.log(results)

      results.forEach(function(contact) {  
        var tr = $("<tr>").addClass('contact').appendTo(table);
        $("<td>").appendTo(tr).text(contact.firstname);
        $("<td>").appendTo(tr).text(contact.lastname);
        $("<td>").appendTo(tr).text(contact.email);
        $("#results").fadeIn('slow');

      }); 
    });
  });

});




