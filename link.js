class Link {

constructor(bodyA,bodyB) {
 var lastLink = bodyA.body.bodies.length-2 ;
 this.chain = Constraint.create({
     bodyA : bodyA.body.bodies[lastLink],
     bodyB : bodyB,
     length: -10,
     stiffness : 0.01,
    })
  World.add (world,this.chain);
}



}