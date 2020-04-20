gdjs.evtsExt__Enemy__CreateRandom = {};
gdjs.evtsExt__Enemy__CreateRandom.repeatCount2 = 0;

gdjs.evtsExt__Enemy__CreateRandom.repeatIndex2 = 0;

gdjs.evtsExt__Enemy__CreateRandom.GDEnemyObjects1= [];
gdjs.evtsExt__Enemy__CreateRandom.GDEnemyObjects2= [];

gdjs.evtsExt__Enemy__CreateRandom.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__CreateRandom.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__CreateRandom.mapOfGDgdjs_46evtsExt_95_95Enemy_95_95CreateRandom_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.evtsExt__Enemy__CreateRandom.GDEnemyObjects2});gdjs.evtsExt__Enemy__CreateRandom.eventsList0x6d6d44 = function(runtimeScene, eventsFunctionContext) {

}; //End of gdjs.evtsExt__Enemy__CreateRandom.eventsList0x6d6d44
gdjs.evtsExt__Enemy__CreateRandom.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Enemy__CreateRandom.repeatCount2 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("enemyNumber")) || 0 : 0);
for(gdjs.evtsExt__Enemy__CreateRandom.repeatIndex2 = 0;gdjs.evtsExt__Enemy__CreateRandom.repeatIndex2 < gdjs.evtsExt__Enemy__CreateRandom.repeatCount2;++gdjs.evtsExt__Enemy__CreateRandom.repeatIndex2) {
gdjs.evtsExt__Enemy__CreateRandom.GDEnemyObjects2.length = 0;


if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Enemy__CreateRandom.mapOfGDgdjs_46evtsExt_95_95Enemy_95_95CreateRandom_46GDEnemyObjects2Objects, 20 + gdjs.random(600), 0 - gdjs.random(500), "");
}}
}

}


}; //End of gdjs.evtsExt__Enemy__CreateRandom.eventsList0x5b7538


gdjs.evtsExt__Enemy__CreateRandom.func = function(runtimeScene, enemyNumber, Enemy, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Enemy": Enemy
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
if (argName === "enemyNumber") return enemyNumber;
    return "";
  }
};

gdjs.evtsExt__Enemy__CreateRandom.GDEnemyObjects1.length = 0;
gdjs.evtsExt__Enemy__CreateRandom.GDEnemyObjects2.length = 0;

gdjs.evtsExt__Enemy__CreateRandom.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

