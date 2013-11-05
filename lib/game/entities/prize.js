ig.module(
	'game.entities.prize'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPrize = ig.Entity.extend({
	size: {x: 64, y: 61},
	offset: {x: 15, y: 15},
	id: 2,
	checkAgainst: ig.Entity.TYPE.A, 
	hitCount: 0,
	
	type: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.FIXED,
	
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
        this.addAnim( 'win', 1, [6]);
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
            	this.currentAnim = this.anims.win;
                ig.game.winSound.play();
            	ig.game.gameover = true;
            }

	}
});

});