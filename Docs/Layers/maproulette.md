

 maproulette 
=============



<img src='https://mapcomplete.osm.be/./assets/layers/maproulette/logomark.svg' height="100px"> 

Layer showing all tasks in MapRoulette






  - This layer is shown at zoomlevel **15** and higher
  - <img src='../warning.svg' height='1rem'/> This layer is loaded from an external source, namely  `https://maproulette.org/api/v2/tasks/box/{x_min}/{y_min}/{x_max}/{y_max}`




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - title~^..*$


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22title%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/status#values) [status](https://wiki.openstreetmap.org/wiki/Key:status) | Multiple choice | [0](https://wiki.openstreetmap.org/wiki/Tag:status%3D0) [1](https://wiki.openstreetmap.org/wiki/Tag:status%3D1) [2](https://wiki.openstreetmap.org/wiki/Tag:status%3D2) [3](https://wiki.openstreetmap.org/wiki/Tag:status%3D3) [4](https://wiki.openstreetmap.org/wiki/Tag:status%3D4) [5](https://wiki.openstreetmap.org/wiki/Tag:status%3D5) [6](https://wiki.openstreetmap.org/wiki/Tag:status%3D6) [9](https://wiki.openstreetmap.org/wiki/Tag:status%3D9)




### status 



This tagrendering has no question and is thus read-only





  - Task is created  corresponds with  `<a href='https://wiki.openstreetmap.org/wiki/Key:status' target='_blank'>status</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:status%3D0' target='_blank'>0</a>`
  - Task is fixed  corresponds with  `<a href='https://wiki.openstreetmap.org/wiki/Key:status' target='_blank'>status</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:status%3D1' target='_blank'>1</a>`
  - Task is a false positive  corresponds with  `<a href='https://wiki.openstreetmap.org/wiki/Key:status' target='_blank'>status</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:status%3D2' target='_blank'>2</a>`
  - Task is skipped  corresponds with  `<a href='https://wiki.openstreetmap.org/wiki/Key:status' target='_blank'>status</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:status%3D3' target='_blank'>3</a>`
  - Task is deleted  corresponds with  `<a href='https://wiki.openstreetmap.org/wiki/Key:status' target='_blank'>status</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:status%3D4' target='_blank'>4</a>`
  - Task is already fixed  corresponds with  `<a href='https://wiki.openstreetmap.org/wiki/Key:status' target='_blank'>status</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:status%3D5' target='_blank'>5</a>`
  - Task is marked as too hard  corresponds with  `<a href='https://wiki.openstreetmap.org/wiki/Key:status' target='_blank'>status</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:status%3D6' target='_blank'>6</a>`
  - Task is disabled  corresponds with  `<a href='https://wiki.openstreetmap.org/wiki/Key:status' target='_blank'>status</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:status%3D9' target='_blank'>9</a>`




### blurb 



This tagrendering has no question and is thus read-only



Only visible if  `blurb~^..*$`  is shown 

This document is autogenerated from [assets/layers/maproulette/maproulette.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/maproulette/maproulette.json)