'use strict'
function RobotParents() {

	this.work = function(value) {
		console.log(value);
	}
}

function Robot() {
	RobotParents.call(this);
	this.work('Я Robot – я просто працю')

}

function CoffeRobot() {
	RobotParents.call(this);
	this.work('Я CoffeRobot – я варю каву')

}

function RobotDancer() {
	RobotParents.call(this);
	this.work('Я RobotDancer – я просто танцюю')

}

function RobotCoocker() {
	RobotParents.call(this);
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
