/* direct-asia : 0.0.0 : Fri Apr 10 2015 11:42:18 GMT+0800 (CST) */

/*
Directive for dropdown menus containing selectable items.
This will apply to all elements with the class 'input-group'.
 */
angular.module("DirectAsia").directive("inputGroup", function() {
  return {
    restrict: "C",
    link: function(scope, element, attrs) {

      /*
      			Find the input element in the group
       */
      var input, links;
      input = element.find("input");

      /*
      			Find the list of input options
       */
      links = element.find(".dropdown-menu a");

      /*
      			When any of the input options are selected then
      			update the content of the input element
       */
      return links.on("click", function(e) {
        e.preventDefault();
        return input.val(e.target.innerText);
      });
    }
  };
});