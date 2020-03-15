(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['news'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<div class=\"row\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":14,"column":12}}})) != null ? stack1 : "")
    + "\n	</div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	  <div class=\"col-sm-6 m-b-20\">\n	    <div class=\"card card-max-width\">\n	      <div class=\"card-body\">\n	        <h5 class=\"card-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":32},"end":{"line":7,"column":41}}}) : helper)))
    + "</h5>\n	        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":8,"column":18},"end":{"line":8,"column":26}}}) : helper)))
    + "\" target=\"_blank\" class=\"btn btn-primary\">Ler</a>\n	       	<span class=\"s2-txt2 timer-options\">"
    + alias4((lookupProperty(helpers,"formatRelative")||(depth0 && lookupProperty(depth0,"formatRelative"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"published") : depth0),{"name":"formatRelative","hash":{},"data":data,"loc":{"start":{"line":9,"column":45},"end":{"line":9,"column":73}}}))
    + "</span>\n\n	      </div>\n	    </div>\n	  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":18,"column":10}}})) != null ? stack1 : "")
    + "\n";
},"useData":true});
})();