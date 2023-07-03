/*
  Create JavaScript objects that will store the DOM elements locators.
  Example:
  const duckduckgoHomepage = {
    searchBar: "#search_form_input_homepage",
    searchBtn: "#search_button_homepage",
  }
*/

/*
  Initialized empty object that.
  List every object name created above.
  Example:
  const locatorPages = { group1, group2, group3 }

  Do not change the name of the object.
  Uncomment line below and add group names in {}.
*/
// const locatorPages = {  }

/*
 Function that checks if the locator passed in step is not empty.
 It retrieves the DOM element from Objects above.
*/

const locatorPages = {};

export function readLocator(element) {
  const locatorDivided = element.split(".");
  const parent = locatorDivided[0];
  const child = locatorDivided[1];
  if (parent && child) {
    return locatorPages[parent][child];
  }
}
