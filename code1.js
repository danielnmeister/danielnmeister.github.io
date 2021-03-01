gdjs.Level1Code = {};
gdjs.Level1Code.GDBluePlayerObjects1= [];
gdjs.Level1Code.GDBluePlayerObjects2= [];
gdjs.Level1Code.GDBluePlayerObjects3= [];
gdjs.Level1Code.GDBulletObjects1= [];
gdjs.Level1Code.GDBulletObjects2= [];
gdjs.Level1Code.GDBulletObjects3= [];
gdjs.Level1Code.GDMovementAreaObjects1= [];
gdjs.Level1Code.GDMovementAreaObjects2= [];
gdjs.Level1Code.GDMovementAreaObjects3= [];
gdjs.Level1Code.GDRedEnemy1Objects1= [];
gdjs.Level1Code.GDRedEnemy1Objects2= [];
gdjs.Level1Code.GDRedEnemy1Objects3= [];
gdjs.Level1Code.GDGameOverObjects1= [];
gdjs.Level1Code.GDGameOverObjects2= [];
gdjs.Level1Code.GDGameOverObjects3= [];
gdjs.Level1Code.GDContinueObjects1= [];
gdjs.Level1Code.GDContinueObjects2= [];
gdjs.Level1Code.GDContinueObjects3= [];
gdjs.Level1Code.GDScoreTextObjects1= [];
gdjs.Level1Code.GDScoreTextObjects2= [];
gdjs.Level1Code.GDScoreTextObjects3= [];
gdjs.Level1Code.GDScoreCountObjects1= [];
gdjs.Level1Code.GDScoreCountObjects2= [];
gdjs.Level1Code.GDScoreCountObjects3= [];
gdjs.Level1Code.GDPurpleSpaceObjects1= [];
gdjs.Level1Code.GDPurpleSpaceObjects2= [];
gdjs.Level1Code.GDPurpleSpaceObjects3= [];
gdjs.Level1Code.GDRedPillObjects1= [];
gdjs.Level1Code.GDRedPillObjects2= [];
gdjs.Level1Code.GDRedPillObjects3= [];
gdjs.Level1Code.GDHeartObjects1= [];
gdjs.Level1Code.GDHeartObjects2= [];
gdjs.Level1Code.GDHeartObjects3= [];
gdjs.Level1Code.GDInvincibilityObjects1= [];
gdjs.Level1Code.GDInvincibilityObjects2= [];
gdjs.Level1Code.GDInvincibilityObjects3= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};
gdjs.Level1Code.condition3IsTrue_1 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.Level1Code.GDBluePlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.Level1Code.GDBluePlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMovementAreaObjects1Objects = Hashtable.newFrom({"MovementArea": gdjs.Level1Code.GDMovementAreaObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMovementAreaObjects1Objects = Hashtable.newFrom({"MovementArea": gdjs.Level1Code.GDMovementAreaObjects1});gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("RedEnemy1"), gdjs.Level1Code.GDRedEnemy1Objects2);
{for(var i = 0, len = gdjs.Level1Code.GDRedEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDRedEnemy1Objects2[i].addPolarForce(180, 300, 0);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedEnemy1Objects2Objects = Hashtable.newFrom({"RedEnemy1": gdjs.Level1Code.GDRedEnemy1Objects2});gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "EnemyCreation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDRedEnemy1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedEnemy1Objects2Objects, 800, gdjs.random(500) + 50, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyCreation");
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedEnemy1Objects1Objects = Hashtable.newFrom({"RedEnemy1": gdjs.Level1Code.GDRedEnemy1Objects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects1});gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedEnemy1"), gdjs.Level1Code.GDRedEnemy1Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedEnemy1Objects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects1);
/* Reuse gdjs.Level1Code.GDBulletObjects1 */
/* Reuse gdjs.Level1Code.GDRedEnemy1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreCount"), gdjs.Level1Code.GDScoreCountObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDRedEnemy1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRedEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBluePlayerObjects1[i].returnVariable(gdjs.Level1Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDScoreCountObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreCountObjects1[i].setString("");
}
}}

}


};gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level1Code.eventsList0(runtimeScene);
}


{


gdjs.Level1Code.eventsList1(runtimeScene);
}


{


gdjs.Level1Code.eventsList2(runtimeScene);
}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedPillObjects2Objects = Hashtable.newFrom({"RedPill": gdjs.Level1Code.GDRedPillObjects2});gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.random(100) + 45, "HealthTimer");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDRedPillObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedPillObjects2Objects, 799, gdjs.random(400) + 100, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HealthTimer");
}}

}


};gdjs.Level1Code.eventsList5 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("RedPill"), gdjs.Level1Code.GDRedPillObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDRedPillObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDRedPillObjects2[i].addPolarForce(180, 400, 0);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.Level1Code.GDBluePlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedPillObjects1Objects = Hashtable.newFrom({"RedPill": gdjs.Level1Code.GDRedPillObjects1});gdjs.Level1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedPill"), gdjs.Level1Code.GDRedPillObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBluePlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedPillObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBluePlayerObjects1 */
/* Reuse gdjs.Level1Code.GDRedPillObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDRedPillObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRedPillObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBluePlayerObjects1[i].getBehavior("Health").Heal(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Level1Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level1Code.eventsList4(runtimeScene);
}


{


gdjs.Level1Code.eventsList5(runtimeScene);
}


{


gdjs.Level1Code.eventsList6(runtimeScene);
}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects1});gdjs.Level1Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "FireRate");
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDBluePlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDBluePlayerObjects1[k] = gdjs.Level1Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDBluePlayerObjects1.length = k;}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBluePlayerObjects1 */
gdjs.Level1Code.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects, (( gdjs.Level1Code.GDBluePlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBluePlayerObjects1[0].getPointX("firePoint")), (( gdjs.Level1Code.GDBluePlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBluePlayerObjects1[0].getPointY("firePoint")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].addPolarForce(0, 400, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedEnemy1Objects2Objects = Hashtable.newFrom({"RedEnemy1": gdjs.Level1Code.GDRedEnemy1Objects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBluePlayerObjects2Objects = Hashtable.newFrom({"BluePlayer": gdjs.Level1Code.GDBluePlayerObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedEnemy1Objects2Objects = Hashtable.newFrom({"RedEnemy1": gdjs.Level1Code.GDRedEnemy1Objects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBluePlayerObjects2Objects = Hashtable.newFrom({"BluePlayer": gdjs.Level1Code.GDBluePlayerObjects2});gdjs.Level1Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("RedEnemy1"), gdjs.Level1Code.GDRedEnemy1Objects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedEnemy1Objects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBluePlayerObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDBluePlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDBluePlayerObjects2[i].getVariableNumber(gdjs.Level1Code.GDBluePlayerObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDBluePlayerObjects2[k] = gdjs.Level1Code.GDBluePlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDBluePlayerObjects2.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDRedEnemy1Objects2 */
{for(var i = 0, len = gdjs.Level1Code.GDRedEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDRedEnemy1Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("RedEnemy1"), gdjs.Level1Code.GDRedEnemy1Objects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRedEnemy1Objects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBluePlayerObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8334460);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBluePlayerObjects2 */
/* Reuse gdjs.Level1Code.GDRedEnemy1Objects2 */
{for(var i = 0, len = gdjs.Level1Code.GDRedEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDRedEnemy1Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBluePlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDBluePlayerObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level1Code.GDBluePlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDBluePlayerObjects2[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDBluePlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDBluePlayerObjects1[k] = gdjs.Level1Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDBluePlayerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBluePlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.Level1Code.GDContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level1Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Level1Code.GDHeartObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHeartObjects1[i].setAnimationName("Full0");
}
}{for(var i = 0, len = gdjs.Level1Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBluePlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDContinueObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.3);
}}

}


};gdjs.Level1Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDBluePlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDBluePlayerObjects2[i].getBehavior("Health")._getHealth() == 3 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDBluePlayerObjects2[k] = gdjs.Level1Code.GDBluePlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDBluePlayerObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Level1Code.GDHeartObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDHeartObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDHeartObjects2[i].setAnimationName("Full3");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDBluePlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDBluePlayerObjects2[i].getBehavior("Health")._getHealth() == 2 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDBluePlayerObjects2[k] = gdjs.Level1Code.GDBluePlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDBluePlayerObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Level1Code.GDHeartObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDHeartObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDHeartObjects2[i].setAnimationName("Full2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDBluePlayerObjects1[i].getBehavior("Health")._getHealth() == 1 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDBluePlayerObjects1[k] = gdjs.Level1Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDBluePlayerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Level1Code.GDHeartObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHeartObjects1[i].setAnimationName("Full1");
}
}}

}


};gdjs.Level1Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8340212);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDBluePlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDBluePlayerObjects2[i].returnVariable(gdjs.Level1Code.GDBluePlayerObjects2[i].getVariables().getFromIndex(0)).mul(-(1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDBluePlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDBluePlayerObjects2[i].getVariableNumber(gdjs.Level1Code.GDBluePlayerObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDBluePlayerObjects2[k] = gdjs.Level1Code.GDBluePlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDBluePlayerObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Invincibility"), gdjs.Level1Code.GDInvincibilityObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDInvincibilityObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDInvincibilityObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Level1Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) == -(1) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDBluePlayerObjects1[k] = gdjs.Level1Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDBluePlayerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Invincibility"), gdjs.Level1Code.GDInvincibilityObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDInvincibilityObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDInvincibilityObjects1[i].hide();
}
}}

}


};gdjs.Level1Code.eventsList12 = function(runtimeScene) {

{


gdjs.Level1Code.eventsList11(runtimeScene);
}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDContinueObjects1Objects = Hashtable.newFrom({"Continue": gdjs.Level1Code.GDContinueObjects1});gdjs.Level1Code.eventsList13 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.Level1Code.GDContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level1Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Invincibility"), gdjs.Level1Code.GDInvincibilityObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementArea"), gdjs.Level1Code.GDMovementAreaObjects1);
gdjs.Level1Code.GDBluePlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBluePlayerObjects1Objects, 19, 313, "");
}{for(var i = 0, len = gdjs.Level1Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBluePlayerObjects1[i].rotateTowardAngle(91, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMovementAreaObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMovementAreaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDContinueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDInvincibilityObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDInvincibilityObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Level1Code.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementArea"), gdjs.Level1Code.GDMovementAreaObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBluePlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMovementAreaObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBluePlayerObjects1 */
/* Reuse gdjs.Level1Code.GDMovementAreaObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBluePlayerObjects1[i].separateFromObjectsList(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMovementAreaObjects1Objects, false);
}
}}

}


{


gdjs.Level1Code.eventsList3(runtimeScene);
}


{


gdjs.Level1Code.eventsList7(runtimeScene);
}


{


gdjs.Level1Code.eventsList8(runtimeScene);
}


{


gdjs.Level1Code.eventsList9(runtimeScene);
}


{


gdjs.Level1Code.eventsList10(runtimeScene);
}


{


gdjs.Level1Code.eventsList12(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.Level1Code.GDContinueObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDContinueObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDBluePlayerObjects1.length = 0;
gdjs.Level1Code.GDBluePlayerObjects2.length = 0;
gdjs.Level1Code.GDBluePlayerObjects3.length = 0;
gdjs.Level1Code.GDBulletObjects1.length = 0;
gdjs.Level1Code.GDBulletObjects2.length = 0;
gdjs.Level1Code.GDBulletObjects3.length = 0;
gdjs.Level1Code.GDMovementAreaObjects1.length = 0;
gdjs.Level1Code.GDMovementAreaObjects2.length = 0;
gdjs.Level1Code.GDMovementAreaObjects3.length = 0;
gdjs.Level1Code.GDRedEnemy1Objects1.length = 0;
gdjs.Level1Code.GDRedEnemy1Objects2.length = 0;
gdjs.Level1Code.GDRedEnemy1Objects3.length = 0;
gdjs.Level1Code.GDGameOverObjects1.length = 0;
gdjs.Level1Code.GDGameOverObjects2.length = 0;
gdjs.Level1Code.GDGameOverObjects3.length = 0;
gdjs.Level1Code.GDContinueObjects1.length = 0;
gdjs.Level1Code.GDContinueObjects2.length = 0;
gdjs.Level1Code.GDContinueObjects3.length = 0;
gdjs.Level1Code.GDScoreTextObjects1.length = 0;
gdjs.Level1Code.GDScoreTextObjects2.length = 0;
gdjs.Level1Code.GDScoreTextObjects3.length = 0;
gdjs.Level1Code.GDScoreCountObjects1.length = 0;
gdjs.Level1Code.GDScoreCountObjects2.length = 0;
gdjs.Level1Code.GDScoreCountObjects3.length = 0;
gdjs.Level1Code.GDPurpleSpaceObjects1.length = 0;
gdjs.Level1Code.GDPurpleSpaceObjects2.length = 0;
gdjs.Level1Code.GDPurpleSpaceObjects3.length = 0;
gdjs.Level1Code.GDRedPillObjects1.length = 0;
gdjs.Level1Code.GDRedPillObjects2.length = 0;
gdjs.Level1Code.GDRedPillObjects3.length = 0;
gdjs.Level1Code.GDHeartObjects1.length = 0;
gdjs.Level1Code.GDHeartObjects2.length = 0;
gdjs.Level1Code.GDHeartObjects3.length = 0;
gdjs.Level1Code.GDInvincibilityObjects1.length = 0;
gdjs.Level1Code.GDInvincibilityObjects2.length = 0;
gdjs.Level1Code.GDInvincibilityObjects3.length = 0;

gdjs.Level1Code.eventsList13(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
