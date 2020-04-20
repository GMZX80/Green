gdjs.FirstSceneCode = {};
gdjs.FirstSceneCode.GDBackgroundObjects1= [];
gdjs.FirstSceneCode.GDBackgroundObjects2= [];
gdjs.FirstSceneCode.GDFiniteGreenSmokeEmitterObjects1= [];
gdjs.FirstSceneCode.GDFiniteGreenSmokeEmitterObjects2= [];
gdjs.FirstSceneCode.GDLoopedGreenSmokeEmitterObjects1= [];
gdjs.FirstSceneCode.GDLoopedGreenSmokeEmitterObjects2= [];
gdjs.FirstSceneCode.GDPANICNOTObjects1= [];
gdjs.FirstSceneCode.GDPANICNOTObjects2= [];
gdjs.FirstSceneCode.GDAndPressAKeyObjects1= [];
gdjs.FirstSceneCode.GDAndPressAKeyObjects2= [];

gdjs.FirstSceneCode.conditionTrue_0 = {val:false};
gdjs.FirstSceneCode.condition0IsTrue_0 = {val:false};
gdjs.FirstSceneCode.condition1IsTrue_0 = {val:false};


gdjs.FirstSceneCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "OpeningScene", false);
}}

}


}; //End of gdjs.FirstSceneCode.eventsList0x5b7028


gdjs.FirstSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FirstSceneCode.GDBackgroundObjects1.length = 0;
gdjs.FirstSceneCode.GDBackgroundObjects2.length = 0;
gdjs.FirstSceneCode.GDFiniteGreenSmokeEmitterObjects1.length = 0;
gdjs.FirstSceneCode.GDFiniteGreenSmokeEmitterObjects2.length = 0;
gdjs.FirstSceneCode.GDLoopedGreenSmokeEmitterObjects1.length = 0;
gdjs.FirstSceneCode.GDLoopedGreenSmokeEmitterObjects2.length = 0;
gdjs.FirstSceneCode.GDPANICNOTObjects1.length = 0;
gdjs.FirstSceneCode.GDPANICNOTObjects2.length = 0;
gdjs.FirstSceneCode.GDAndPressAKeyObjects1.length = 0;
gdjs.FirstSceneCode.GDAndPressAKeyObjects2.length = 0;

gdjs.FirstSceneCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['FirstSceneCode'] = gdjs.FirstSceneCode;
