(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post\" data-type=\"BC\" title="
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":48}}}) : helper)))
    + ">\n    <img id=\"post_image\" src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":2,"column":30},"end":{"line":2,"column":37}}}) : helper)))
    + "\" alt=\"wenwu\">\n    <a href=\"/posts/"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":3,"column":20},"end":{"line":3,"column":29}}}) : helper)))
    + "\">\n      <div class=\"post-info-container\">\n          <h3 class=\"post-time-input\">"
    + alias4(((helper = (helper = helpers.introductions || (depth0 != null ? depth0.introductions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"introductions","hash":{},"data":data,"loc":{"start":{"line":5,"column":38},"end":{"line":5,"column":55}}}) : helper)))
    + "</h3>\n          <p1 class=\"post-text-input\">Location: "
    + alias4(((helper = (helper = helpers.cities || (depth0 != null ? depth0.cities : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cities","hash":{},"data":data,"loc":{"start":{"line":6,"column":48},"end":{"line":6,"column":58}}}) : helper)))
    + "</p1>\n          <p1 class=\"post-text-input\">Time: "
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":7,"column":44},"end":{"line":7,"column":52}}}) : helper)))
    + "</p1>\n      </div>\n    </a>\n</div>\n";
},"useData":true});
})();