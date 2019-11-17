Handlebars.registerHelper("commentHelper",function(comments,options) {
    const out = "<ul>";
  
  for(let i=0, l=comments.length; i<l; i++) {
    out = out + "<li>" + options.fn(comments[i]) + "</li>";
  }
  
  return out + "</ul>";
  });