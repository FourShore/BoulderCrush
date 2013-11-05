ig.module( 
	'game.main' 
)
.requires(
	// Impact Core
	'impact.game',
	'impact.font',
	
	// Entities
	'game.entities.player',
	'game.entities.rock',
	'game.entities.prize',
	'game.entities.gold',

	// Levels
	'game.levels.main',
	'game.levels.title'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	bigFont: new ig.Font( 'media/big-font.png' ),
	titleFont: new ig.Font('media/titlefont.png'),
	mainFont: new ig.Font('media/mainfont.png'),
	smallFont: new ig.Font('media/smallfont.png'),

	// Music and sound
	mainMusic: new ig.Sound('media/music/zelda.*'),
	titleMusic: new ig.Sound('media/music/music.*'),
	winSound: new ig.Sound('media/music/win.*'),
	clangSound: new ig.Sound('media/music/clang.*'),
	boomSound: new ig.Sound('media/music/boom.*'),

	// Custom
	gameover: false,
	
	init: function() {
		// Bind keys
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.UP_ARROW, 'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
		ig.input.bind( ig.KEY.SPACE, 'space' );
		ig.input.bind( ig.KEY.H, 'H' );
		//ig.input.bind( ig.KEY.ENTER, 'enter' );
		
		// Load the Leveltitle as required above ('game.level.title')
		this.ctx = ig.system.context;
		this.loadLevel( LevelTitle );
		ig.music.add( this.mainMusic, ['mainmusic'] );
		ig.music.add( this.titleMusic, ['titlemusic'] );
		ig.music.volume = 1;
		ig.music.play(['titlemusic']);
	},
	
	loadLevel: function( data ) {
		this.currentLevel = data;
		this.parent( data );

		this.gameover = false;

		if (this.currentLevel === LevelMain) {
			ig.music.play(['mainmusic']);
		}
		else if (this.currentLevel === LevelTitle) {
			
		}
	},
	
	update: function() {
		this.parent();
		if (ig.input.state('space') && this.currentLevel === LevelTitle) {
                ig.game.loadLevel(LevelMain);
        }
        if (ig.input.state('space') && this.gameover) {
                ig.game.loadLevel(LevelMain);
        }
	},
	
	// Draw main title screen on LevelTitle
	drawTitle: function() {
        this.mainFont.draw("!! Treasure Hunter !!", 350, 50, ig.Font.ALIGN.CENTER);
        this.smallFont.draw("An Interntainment Production", 350, 80, ig.Font.ALIGN.CENTER);
        this.smallFont.draw("@author: Zach Rasavanh\n http://zachras.public.iastate.edu/", 350, 100, ig.Font.ALIGN.CENTER);

        this.mainFont.draw("Instructions:", 350, 170, ig.Font.ALIGN.CENTER);
        this.smallFont.draw("Mine the rocks to find the prize", 350, 200, ig.Font.ALIGN.CENTER);

        this.mainFont.draw("Controls:", 350, 260, ig.Font.ALIGN.CENTER);
        this.smallFont.draw("Arrow Keys to move. Spacebar to mine.", 350, 290, ig.Font.ALIGN.CENTER);

        this.mainFont.draw("Press [Space] to start!", 350, 400, ig.Font.ALIGN.CENTER);
	},

	// Game over text appears on same level as main.
	drawGameOver: function() {
		if (this.gameover) {
			this.mainFont.draw("!! Congradulations !!", 350, 150, ig.Font.ALIGN.CENTER);
			this.mainFont.draw("You found 1,000,000 points!!", 350, 190, ig.Font.ALIGN.CENTER);
			this.mainFont.draw("Press [Space] to continue", 350, 380, ig.Font.ALIGN.CENTER);
		}
	},

	// Main draw function
	draw: function() {
	//	ig.system.context.clearRect( 0 ,0, ig.system.realWidth, ig.system.realHeight );

		// Draw all entities and backgroundMaps
		this.parent();
		if (this.currentLevel === LevelTitle) {
			this.drawTitle();
		} else {
			this.drawGameOver();
		}
	}
});

//ig.main( '#canvas', MyGame, 60, window.innerWidth, window.innerHeight, 1 );
ig.main( '#canvas', MyGame, 60, 700, 450, 1.5 );

});
