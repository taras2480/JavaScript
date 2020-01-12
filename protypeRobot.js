'use strict'

function RobotParents() {

}

RobotParents.prototype.work = function(value) {

	console.log(value);

}

Robot.prototype = Object.create(RobotParents.prototype);
Robot.prototype.constructor = Robot;

function Robot() {

	this.work('Я Robot – я просто працюю')

}

CoffeRobot.prototype = Object.create(RobotParents.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;

function CoffeRobot() {

	this.work('Я CoffeRobot – я варю каву')

}

RobotDancer.prototype = Object.create(RobotParents.prototype);
RobotDancer.prototype.constructor = RobotDancer;

function RobotDancer() {

	this.work('Я RobotDancer – я просто танцюю')

}

RobotCoocker.prototype = Object.create(RobotParents.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

function RobotCoocker() {

	this.work('Я RobotCoocker – я просто готую')

}

console.log('Обєкти');
console.log('------------');

let robot = new Robot();
robot;

let coffeRobot = new CoffeRobot();
coffeRobot;

let robotDancer = new RobotDancer();
robotDancer;

let robotCoocker = new RobotCoocker();
robotCoocker;

console.log('-------------');
console.log('Масив елементів');
console.log('------------');

let arrRobot = [ new Robot(), new CoffeRobot(), new RobotDancer(),
		new RobotCoocker() ];

for (let i = 0; i < arrRobot.length; i++) {
	arrRobot[i];
}




























