require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"app":[function(require,module,exports){
var backgroundA, layerA, myButton, projectLayers;

backgroundA = new BackgroundLayer({
  backgroundColor: "00F"
});

projectLayers = Framer.Importer.load("imported/project@1x");

myButton = projectLayers.button;

myButton.centerX();

myButton.states.add({
  stateA: {
    y: 121,
    scale: .8
  },
  stateB: {
    scale: 1.2,
    x: 279,
    y: 374
  },
  stateC: {
    x: 503,
    y: 199,
    scale: 1.2,
    width: 115,
    height: 31
  }
});

myButton.onTap(function() {
  return myButton.states.next();
});

layerA = new Layer({
  x: Align.center,
  y: Align.center,
  backgroundColor: "f00"
});

layerA.states.add({
  a: {
    x: Align.right,
    y: Align.bottom
  },
  b: {
    x: Align.left,
    y: Align.top
  }
});

layerA.onTap(function() {
  return layerA.states.next();
});


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcmljaC9EZXNrdG9wL2NzX3Rlc3RzL0NTX3Rlc3QyLmZyYW1lci9tb2R1bGVzL2FwcC5jb2ZmZWUiLCIvVXNlcnMvcmljaC9EZXNrdG9wL2NzX3Rlc3RzL0NTX3Rlc3QyLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0tBLElBQUE7O0FBQUEsV0FBQSxHQUFrQixJQUFBLGVBQUEsQ0FBZ0I7RUFBQSxlQUFBLEVBQWlCLEtBQWpCO0NBQWhCOztBQUdsQixhQUFBLEdBQWdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBaEIsQ0FBcUIscUJBQXJCOztBQUtoQixRQUFBLEdBQVcsYUFBYSxDQUFDOztBQUd6QixRQUFRLENBQUMsT0FBVCxDQUFBOztBQUNBLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBaEIsQ0FDQztFQUFBLE1BQUEsRUFDQztJQUFBLENBQUEsRUFBRyxHQUFIO0lBQ0EsS0FBQSxFQUFPLEVBRFA7R0FERDtFQUlBLE1BQUEsRUFDQztJQUFBLEtBQUEsRUFBTyxHQUFQO0lBQ0EsQ0FBQSxFQUFHLEdBREg7SUFFQSxDQUFBLEVBQUcsR0FGSDtHQUxEO0VBU0EsTUFBQSxFQUNDO0lBQUEsQ0FBQSxFQUFHLEdBQUg7SUFDQSxDQUFBLEVBQUcsR0FESDtJQUVBLEtBQUEsRUFBTyxHQUZQO0lBR0EsS0FBQSxFQUFPLEdBSFA7SUFJQSxNQUFBLEVBQVEsRUFKUjtHQVZEO0NBREQ7O0FBaUJBLFFBQVEsQ0FBQyxLQUFULENBQWUsU0FBQTtTQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBaEIsQ0FBQTtBQUFILENBQWY7O0FBS0EsTUFBQSxHQUFhLElBQUEsS0FBQSxDQUNUO0VBQUEsQ0FBQSxFQUFHLEtBQUssQ0FBQyxNQUFUO0VBQ0EsQ0FBQSxFQUFHLEtBQUssQ0FBQyxNQURUO0VBRUEsZUFBQSxFQUFpQixLQUZqQjtDQURTOztBQU1iLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBZCxDQUNJO0VBQUEsQ0FBQSxFQUNJO0lBQUEsQ0FBQSxFQUFHLEtBQUssQ0FBQyxLQUFUO0lBQ0EsQ0FBQSxFQUFHLEtBQUssQ0FBQyxNQURUO0dBREo7RUFHQSxDQUFBLEVBQ0k7SUFBQSxDQUFBLEVBQUcsS0FBSyxDQUFDLElBQVQ7SUFDQSxDQUFBLEVBQUcsS0FBSyxDQUFDLEdBRFQ7R0FKSjtDQURKOztBQVFBLE1BQU0sQ0FBQyxLQUFQLENBQWEsU0FBQTtTQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBZCxDQUFBO0FBQUgsQ0FBYjs7OztBQ2pEQSxPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgU2hhcGVzIFRlc3RcbiMgUmljaGFyZCBQcmljZVxuIyBAUmljaEV4cGVyaWVuY2VzXG5cbiMgIFBSUk9KRUNUIFBSRVAgLSAtIC0gLSAtIC0gLSAtIFxuYmFja2dyb3VuZEEgPSBuZXcgQmFja2dyb3VuZExheWVyIGJhY2tncm91bmRDb2xvcjogXCIwMEZcIlxuXHRcbiMgSW1wb3J0IGZpbGUgXCJwcm9qZWN0XCIgd2l0aCBhc3NldHMgZnJvbSBTa2V0Y2hcbnByb2plY3RMYXllcnMgPSBGcmFtZXIuSW1wb3J0ZXIubG9hZChcImltcG9ydGVkL3Byb2plY3RAMXhcIilcblxuIyBTRVRVUCBteUJ1dHRvbiAtIC0gLSAtIC0gLSAtIC0gLSBcblxuIyBnZXQgYnV0dG9uXG5teUJ1dHRvbiA9IHByb2plY3RMYXllcnMuYnV0dG9uXG5cbiMgcGxhY2UgaXQgdG9wIGNlbnRlclxubXlCdXR0b24uY2VudGVyWCgpICAgICAgICAgICBcbm15QnV0dG9uLnN0YXRlcy5hZGRcblx0c3RhdGVBOlxuXHRcdHk6IDEyMVxuXHRcdHNjYWxlOiAuOFxuXG5cdHN0YXRlQjpcblx0XHRzY2FsZTogMS4yXG5cdFx0eDogMjc5XG5cdFx0eTogMzc0XG5cdFx0XG5cdHN0YXRlQzpcblx0XHR4OiA1MDNcblx0XHR5OiAxOTlcblx0XHRzY2FsZTogMS4yXG5cdFx0d2lkdGg6IDExNVxuXHRcdGhlaWdodDogMzFcblx0XHRcbm15QnV0dG9uLm9uVGFwIC0+IG15QnV0dG9uLnN0YXRlcy5uZXh0KClcbiAgICAgICAgICAgICAgXG4jICBTRVRVUCBTcXVhcmUgTGF5ZXIgLSAtIC0gLSAtIC0gLSAtIC0gICAgICAgICAgICAgXG4gICAgICAgIFxuIyBDcmVhdGUgYSBsYXllciBhbiBwb3NpdGlvbiBpdCBpbiB0aGUgY2VudGVyIFxubGF5ZXJBID0gbmV3IExheWVyXG4gICAgeDogQWxpZ24uY2VudGVyXG4gICAgeTogQWxpZ24uY2VudGVyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImYwMFwiXG4gXG4jIENyZWF0ZSBhIHN0YXRlIGluIHRoZSBib3R0b20gcmlnaHQgY29ybmVyIFxubGF5ZXJBLnN0YXRlcy5hZGRcbiAgICBhOlxuICAgICAgICB4OiBBbGlnbi5yaWdodFxuICAgICAgICB5OiBBbGlnbi5ib3R0b21cbiAgICBiOlxuICAgICAgICB4OiBBbGlnbi5sZWZ0XG4gICAgICAgIHk6IEFsaWduLnRvcFxuIFxubGF5ZXJBLm9uVGFwIC0+IGxheWVyQS5zdGF0ZXMubmV4dCgpXG5cblxuXG5cblxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
