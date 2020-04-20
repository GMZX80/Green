gdjs.evtsExt__Enemy__PlaceMushrooms = {};
gdjs.evtsExt__Enemy__PlaceMushrooms.repeatCount2 = 0;

gdjs.evtsExt__Enemy__PlaceMushrooms.repeatIndex2 = 0;

gdjs.evtsExt__Enemy__PlaceMushrooms.GDmushroomTypeObjects1= [];
gdjs.evtsExt__Enemy__PlaceMushrooms.GDmushroomTypeObjects2= [];

gdjs.evtsExt__Enemy__PlaceMushrooms.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__PlaceMushrooms.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__PlaceMushrooms.mapOfGDgdjs_46evtsExt_95_95Enemy_95_95PlaceMushrooms_46GDmushroomTypeObjects2Objects = Hashtable.newFrom({"mushroomType": gdjs.evtsExt__Enemy__PlaceMushrooms.GDmushroomTypeObjects2});gdjs.evtsExt__Enemy__PlaceMushrooms.eventsList0x860024 = function(runtimeScene, eventsFunctionContext) {

}; //End of gdjs.evtsExt__Enemy__PlaceMushrooms.eventsList0x860024
gdjs.evtsExt__Enemy__PlaceMushrooms.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Enemy__PlaceMushrooms.repeatCount2 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("numberOfMushrooms")) || 0 : 0);
for(gdjs.evtsExt__Enemy__PlaceMushrooms.repeatIndex2 = 0;gdjs.evtsExt__Enemy__PlaceMushrooms.repeatIndex2 < gdjs.evtsExt__Enemy__PlaceMushrooms.repeatCount2;++gdjs.evtsExt__Enemy__PlaceMushrooms.repeatIndex2) {
gdjs.evtsExt__Enemy__PlaceMushrooms.GDmushroomTypeObjects2.length = 0;


if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Enemy__PlaceMushrooms.mapOfGDgdjs_46evtsExt_95_95Enemy_95_95PlaceMushrooms_46GDmushroomTypeObjects2Objects, gdjs.random(640), 50 + gdjs.random(720), "");
}}
}

}


}; //End of gdjs.evtsExt__Enemy__PlaceMushrooms.eventsList0x5b7538


gdjs.evtsExt__Enemy__PlaceMushrooms.func = function(runtimeScene, numberOfMushrooms, mushroomType, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"mushroomType": mushroomType
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
        var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "numberOfMushrooms") return numberOfMushrooms;
    return "";
  }
};

gdjs.evtsExt__Enemy__PlaceMushrooms.GDmushroomTypeObjects1.length = 0;
gdjs.evtsExt__Enemy__PlaceMushrooms.GDmushroomTypeObjects2.length = 0;

gdjs.evtsExt__Enemy__PlaceMushrooms.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

