ig.module(
	'game.entities.rock'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityRock = ig.Entity.extend({
	size: {x: 64, y: 61},
	offset: {x: 10, y: 10},
	id: 3,
	checkAgainst: ig.Entity.TYPE.A, 
    
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.FIXED,
    hitCount: 0,
    
    animSheet: new ig.AnimationSheet( 'media/rocks.png', 64, 61),
	

	init: function( x, y, settings ) {
		this.parent( x, y, settings );

        // Add the animations
        this.addAnim( 'idle', 1, [0] );
        this.addAnim( 'one', 1, [1]);
        this.addAnim( 'two', 1, [2]);
        this.addAnim( 'three', 1, [3] );
        this.addAnim( 'four', 1, [4]);
        this.addAnim( 'five', 1, [5]);
	},
	
	
	update: function() {
        this.parent();
	},

	check: function( other ) {

            if(this.hitCount == 0){
            	this.currentAnim = this.anims.one;
            	this.hitCount = 1;
                ig.game.clangSound.play();
            } else if (this.hitCount == 1){
            	this.currentAnim = this.anims.two;
            	this.hitCount = 2;
                ig.game.clangSound.play();
            } else if (this.hitCount == 2){
            	this.currentAnim = this.anims.three;
            	this.hitCount = 3;
                ig.game.clangSound.play();
            } else if (this.hitCount == 3){
            	this.currentAnim = this.anims.four;
            	this.hitCount = 4;
                ig.game.clangSound.play();
            } else if (this.hitCount == 4){
            	this.currentAnim = this.anims.five;
            	this.hitCount = 5;
                ig.game.clangSound.play();
            }  else if (this.hitCount == 5){
                ig.game.boomSound.play();
            	this.kill();
            }

	}
});

});