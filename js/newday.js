var newday = (function(module){

	module.getDay = function(resultObject) {
           resultObject.prepend(Date() + '</br>' );
};

return module;
} (newday || {}));