// initialize client with app credentials
SC.initialize({
  client_id: '01176e5bfd8c188335dcc943e52f1f98',
  redirect_uri: ''
});

// initiate auth popup
SC.connect(function() {
  SC.get('/me', function(me) { 
    alert('Hello, ' + me.username); 
  });
});