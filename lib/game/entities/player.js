ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
	size: {x: 20, y: 25},
	offset: {x: 4, y: 4},
	id: 1,
	
	type: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.PASSIVE,
	
	animSheet: new ig.AnimationSheet( 'media/psheet.png', 20, 25 ),	
	
	face: 0,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );

		// Animations
        this.addAnim( 'idle', 1, [1] );
        this.addAnim( 'idleTop', 1, [12] );

        this.addAnim( 'walkDown', 1, [0,2] );
        this.addAnim( 'walkRight', 1, [5,6] );
        this.addAnim( 'walkUp', 1, [9,11] );
        this.addAnim( 'walkLeft', 1, [13,15] );
/*
        this.addAnim( 'hitDown', 0.1, [0,2] );
        this.addAnim( 'hitRight', 0.1, [5,6] );
        this.addAnim( 'hitUp', 0.1, [9,11] );
        this.addAnim( 'hitLeft', 0.1, [14,16] );
*/
	},
	
	
	update: function() {
		
		this.parent();

		// move left or right
		if( ig.input.state('left') ) {
			this.pos.x = this.pos.x - 3;
			this.currentAnim = this.anims.walkLeft;
			this.face = 0;
		}
		else if( ig.input.state('right') ) {
			this.pos.x = this.pos.x + 3;
			this.currentAnim = this.anims.walkRight;
			this.face = 1;
		}
		else if( ig.input.state('up') ) {
			this.pos.y = this.pos.y - 3;
			this.currentAnim = this.anims.walkUp;
			this.face = 2;
		}
		else if( ig.input.state('down') ) {
			this.pos.y = this.pos.y + 3;
			this.currentAnim = this.anims.walkDown;
			this.face = 3;
		}
		else {
			this.currentAnim = this.anims.idle;
			this.face = 3;
		}
/*
		if( ig.input.state('space')) {

			isHitting = true;

			if(this.face = 0){
				this.currentAnim = this.anims.hitLeft;
			} else if (this.face = 1) {
				this.currentAnim = this.anims.hitRight
			} else if (this.face = 2) {
				this.currentAnim = this.anims.hitUp
			} else if (this.face = 3) {
				this.currentAnim = this.anims.hitDown
			}

		}
*/	
		//this.body.SetXForm(this.body.GetPosition(), 0);
	}
});

});