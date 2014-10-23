;(function(){
  'use strict';


  angular
    .module('onyxLightningApp')
    .controller('MapCtrl', function(){

        /* 
         * Code below inserts a d3 map into <div id="map">
         * TODO: move d3 logic into separate file
         */

        d3.select(window).on("resize", throttle);

        // Allow zooming
        var zoom = d3.behavior.zoom()
            // scaleExtent allows zooming from size of image (1) to (9) times magnification
            .scaleExtent([1, 9])
            .on("zoom", move);


        var width = document.getElementById('map').offsetWidth;
        var height = 400;

        var topo,projection,path,svg,g;

        var graticule = d3.geo.graticule();

        var tooltip = d3.select("#map").append("div").attr("class", "tooltip hidden");

        setup(width,height);

        function setup(width,height){
          projection = d3.geo.mercator()
            .translate([(width/2), (height/1.5)])
            .scale( width / 3.4 / Math.PI);

          path = d3.geo.path().projection(projection);

          svg = d3.select("#map").append("svg")
              .attr("width", width)
              .attr("height", height)
              .call(zoom)
              .on("click", click)
              .append("g");


          g = svg.append("g");

        }

        d3.json("app/map/data/world-topo-min.json", function(error, world) {
          var countries = topojson.feature(world, world.objects.countries).features;

          topo = countries;
          draw(topo);

        });

        function draw(topo) {

          // svg.append("path")
          //    .datum(graticule)
          //    .attr("class", "graticule")
          //    .attr("d", path);



          // g.append("path")
          //  .datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
          //  .attr("class", "equator")
          //  .attr("d", path);


          var country = g.selectAll(".country").data(topo);

          country.enter().insert("path")
              .attr("class", "country")
              .attr("d", path)
              .attr("id", function(d,i) { return d.id; })
              .attr("title", function(d,i) { return d.properties.name; })
              .style("fill", 'red');

          //offsets for tooltips
          var offsetL = document.getElementById('map').offsetLeft+20;
          var offsetT = document.getElementById('map').offsetTop+10;

          //tooltips
          country
            .on("mousemove", function(d,i) {

              var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );

              tooltip.classed("hidden", false)
                     .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
                     .html(d.properties.name);

              })
              .on("mouseout",  function(d,i) {
                tooltip.classed("hidden", true);
              });

        }


        function redraw() {
          width = document.getElementById('map').offsetWidth;
          height = 400;
          d3.select('svg').remove();
          setup(width,height);
          draw(topo);
        }


        function move() {

          var t = d3.event.translate;
          var s = d3.event.scale;
          var zscale = s;
          var h = height/4;


          t[0] = Math.min(
            (width/height)  * (s - 1),
            Math.max( width * (1 - s), t[0] )
          );

          t[1] = Math.min(
            h * (s - 1) + h * s,
            Math.max(height  * (1 - s) - h * s, t[1])
          );

          zoom.translate(t);
          g.attr("transform", "translate(" + t + ")scale(" + s + ")");

          //adjust the country hover stroke width based on zoom level
          d3.selectAll(".country").style("stroke-width", 1.5 / s);

        }



        var throttleTimer;
        function throttle() {
          window.clearTimeout(throttleTimer);
            throttleTimer = window.setTimeout(function() {
              redraw();
            }, 200);
        }


        //geo translation on mouse click in map
        function click() {
          var latlon = projection.invert(d3.mouse(this));
          console.log(latlon);
        }


        //function to add points and text to the map (used in plotting capitals)
        function addpoint(lat,lon,text) {

          var gpoint = g.append("g").attr("class", "gpoint");
          var x = projection([lat,lon])[0];
          var y = projection([lat,lon])[1];

          gpoint.append("svg:circle")
                .attr("cx", x)
                .attr("cy", y)
                .attr("class","point")
                .attr("r", 1.5);

          //conditional in case a point has no associated text
          if(text.length>0){

            gpoint.append("text")
                  .attr("x", x+2)
                  .attr("y", y+2)
                  .attr("class","text")
                  .text(text);
          }

        }
    });

}).call(this);
