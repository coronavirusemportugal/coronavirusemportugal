$( document ).ready(function() {
   console.log(data);

   const result = data.reduce((c, v) => {
    c[v.Type] = c[v.Type] || [];       //Initiate if key does not exist
    c[v.Type].push(v);                //Push the value
    return c;
  }, {});
  
  var template = Handlebars.templates.home;
  $('#athome').html(template(result));
   console.log(result);
});
