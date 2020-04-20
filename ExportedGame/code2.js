gdjs.WaveCompleteCode = {};
gdjs.WaveCompleteCode.GDBackgroundObjects1= [];
gdjs.WaveCompleteCode.GDBackgroundObjects2= [];
gdjs.WaveCompleteCode.GDBackgroundObjects3= [];
gdjs.WaveCompleteCode.GDFiniteGreenSmokeEmitterObjects1= [];
gdjs.WaveCompleteCode.GDFiniteGreenSmokeEmitterObjects2= [];
gdjs.WaveCompleteCode.GDFiniteGreenSmokeEmitterObjects3= [];
gdjs.WaveCompleteCode.GDLoopedGreenSmokeEmitterObjects1= [];
gdjs.WaveCompleteCode.GDLoopedGreenSmokeEmitterObjects2= [];
gdjs.WaveCompleteCode.GDLoopedGreenSmokeEmitterObjects3= [];
gdjs.WaveCompleteCode.GDCountingDownObjects1= [];
gdjs.WaveCompleteCode.GDCountingDownObjects2= [];
gdjs.WaveCompleteCode.GDCountingDownObjects3= [];
gdjs.WaveCompleteCode.GDMoreArrivingObjects1= [];
gdjs.WaveCompleteCode.GDMoreArrivingObjects2= [];
gdjs.WaveCompleteCode.GDMoreArrivingObjects3= [];
gdjs.WaveCompleteCode.GDGetReadyObjects1= [];
gdjs.WaveCompleteCode.GDGetReadyObjects2= [];
gdjs.WaveCompleteCode.GDGetReadyObjects3= [];
gdjs.WaveCompleteCode.GDWaveCompleteObjects1= [];
gdjs.WaveCompleteCode.GDWaveCompleteObjects2= [];
gdjs.WaveCompleteCode.GDWaveCompleteObjects3= [];
gdjs.WaveCompleteCode.GDCountSprayObjects1= [];
gdjs.WaveCompleteCode.GDCountSprayObjects2= [];
gdjs.WaveCompleteCode.GDCountSprayObjects3= [];

gdjs.WaveCompleteCode.conditionTrue_0 = {val:false};
gdjs.WaveCompleteCode.condition0IsTrue_0 = {val:false};
gdjs.WaveCompleteCode.condition1IsTrue_0 = {val:false};


gdjs.WaveCompleteCode.eventsList0x7acb7c = function(runtimeScene) {

{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.05, "FadeIn");
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {
gdjs.WaveCompleteCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
{runtimeScene.getVariables().getFromIndex(1).sub(10);
}{for(var i = 0, len = gdjs.WaveCompleteCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.WaveCompleteCode.GDBackgroundObjects1[i].setOpacity(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FadeIn");
}}

}


}; //End of gdjs.WaveCompleteCode.eventsList0x7acb7c
gdjs.WaveCompleteCode.eventsList0x745934 = function(runtimeScene) {

{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 0;
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaveCompleteCode.eventsList0x7acb7c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.WaveCompleteCode.eventsList0x745934
gdjs.WaveCompleteCode.mapOfGDgdjs_46WaveCompleteCode_46GDCountSprayObjects1Objects = Hashtable.newFrom({"CountSpray": gdjs.WaveCompleteCode.GDCountSprayObjects1});gdjs.WaveCompleteCode.eventsList0x6c46a4 = function(runtimeScene) {

{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 0;
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WaveCompleteCode.GDCountingDownObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "impactGlass_light_004.ogg", false, 10, 1);
}{for(var i = 0, len = gdjs.WaveCompleteCode.GDCountingDownObjects1.length ;i < len;++i) {
    gdjs.WaveCompleteCode.GDCountingDownObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


}; //End of gdjs.WaveCompleteCode.eventsList0x6c46a4
gdjs.WaveCompleteCode.mapOfGDgdjs_46WaveCompleteCode_46GDGetReadyObjects1Objects = Hashtable.newFrom({"GetReady": gdjs.WaveCompleteCode.GDGetReadyObjects1});gdjs.WaveCompleteCode.mapOfGDgdjs_46WaveCompleteCode_46GDMoreArrivingObjects1Objects = Hashtable.newFrom({"MoreArriving": gdjs.WaveCompleteCode.GDMoreArrivingObjects1});gdjs.WaveCompleteCode.eventsList0x74417c = function(runtimeScene) {

{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.05, "FadeOut");
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {
gdjs.WaveCompleteCode.GDBackgroundObjects2.createFrom(runtimeScene.getObjects("Background"));
{runtimeScene.getVariables().getFromIndex(1).add(10);
}{for(var i = 0, len = gdjs.WaveCompleteCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.WaveCompleteCode.GDBackgroundObjects2[i].setOpacity(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FadeOut");
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, gdjs.evtTools.sound.getSoundOnChannelVolume(runtimeScene, 1) - (5));
}}

}


}; //End of gdjs.WaveCompleteCode.eventsList0x74417c
gdjs.WaveCompleteCode.eventsList0x744064 = function(runtimeScene) {

{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) < 255;
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaveCompleteCode.eventsList0x74417c(runtimeScene);} //End of subevents
}

}


{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 245;
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Testing Scene", false);
}}

}


}; //End of gdjs.WaveCompleteCode.eventsList0x744064
gdjs.WaveCompleteCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {
gdjs.WaveCompleteCode.GDCountingDownObjects1.createFrom(runtimeScene.getObjects("CountingDown"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CD");
}{for(var i = 0, len = gdjs.WaveCompleteCode.GDCountingDownObjects1.length ;i < len;++i) {
    gdjs.WaveCompleteCode.GDCountingDownObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FadeIn");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Blazing-Stars_Looping.mp3", 1, false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FadeOut");
}}

}


{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaveCompleteCode.eventsList0x745934(runtimeScene);} //End of subevents
}

}


{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "CD");
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {
gdjs.WaveCompleteCode.GDCountingDownObjects1.createFrom(runtimeScene.getObjects("CountingDown"));
gdjs.WaveCompleteCode.GDCountSprayObjects1.length = 0;

{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WaveCompleteCode.mapOfGDgdjs_46WaveCompleteCode_46GDCountSprayObjects1Objects, (( gdjs.WaveCompleteCode.GDCountingDownObjects1.length === 0 ) ? 0 :gdjs.WaveCompleteCode.GDCountingDownObjects1[0].getX()) + 20, (( gdjs.WaveCompleteCode.GDCountingDownObjects1.length === 0 ) ? 0 :gdjs.WaveCompleteCode.GDCountingDownObjects1[0].getY()) + 30, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CD");
}
{ //Subevents
gdjs.WaveCompleteCode.eventsList0x6c46a4(runtimeScene);} //End of subevents
}

}


{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {
gdjs.WaveCompleteCode.GDGetReadyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WaveCompleteCode.mapOfGDgdjs_46WaveCompleteCode_46GDGetReadyObjects1Objects, 165, 400, "");
}}

}


{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {
gdjs.WaveCompleteCode.GDMoreArrivingObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WaveCompleteCode.mapOfGDgdjs_46WaveCompleteCode_46GDMoreArrivingObjects1Objects, 90, 320, "");
}}

}


{


gdjs.WaveCompleteCode.condition0IsTrue_0.val = false;
{
gdjs.WaveCompleteCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < -(2);
}if (gdjs.WaveCompleteCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaveCompleteCode.eventsList0x744064(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.WaveCompleteCode.eventsList0x5b7028


gdjs.WaveCompleteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WaveCompleteCode.GDBackgroundObjects1.length = 0;
gdjs.WaveCompleteCode.GDBackgroundObjects2.length = 0;
gdjs.WaveCompleteCode.GDBackgroundObjects3.length = 0;
gdjs.WaveCompleteCode.GDFiniteGreenSmokeEmitterObjects1.length = 0;
gdjs.WaveCompleteCode.GDFiniteGreenSmokeEmitterObjects2.length = 0;
gdjs.WaveCompleteCode.GDFiniteGreenSmokeEmitterObjects3.length = 0;
gdjs.WaveCompleteCode.GDLoopedGreenSmokeEmitterObjects1.length = 0;
gdjs.WaveCompleteCode.GDLoopedGreenSmokeEmitterObjects2.length = 0;
gdjs.WaveCompleteCode.GDLoopedGreenSmokeEmitterObjects3.length = 0;
gdjs.WaveCompleteCode.GDCountingDownObjects1.length = 0;
gdjs.WaveCompleteCode.GDCountingDownObjects2.length = 0;
gdjs.WaveCompleteCode.GDCountingDownObjects3.length = 0;
gdjs.WaveCompleteCode.GDMoreArrivingObjects1.length = 0;
gdjs.WaveCompleteCode.GDMoreArrivingObjects2.length = 0;
gdjs.WaveCompleteCode.GDMoreArrivingObjects3.length = 0;
gdjs.WaveCompleteCode.GDGetReadyObjects1.length = 0;
gdjs.WaveCompleteCode.GDGetReadyObjects2.length = 0;
gdjs.WaveCompleteCode.GDGetReadyObjects3.length = 0;
gdjs.WaveCompleteCode.GDWaveCompleteObjects1.length = 0;
gdjs.WaveCompleteCode.GDWaveCompleteObjects2.length = 0;
gdjs.WaveCompleteCode.GDWaveCompleteObjects3.length = 0;
gdjs.WaveCompleteCode.GDCountSprayObjects1.length = 0;
gdjs.WaveCompleteCode.GDCountSprayObjects2.length = 0;
gdjs.WaveCompleteCode.GDCountSprayObjects3.length = 0;

gdjs.WaveCompleteCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['WaveCompleteCode'] = gdjs.WaveCompleteCode;
