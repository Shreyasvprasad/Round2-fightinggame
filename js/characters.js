const background = new Sprite({
	position: {
	x: 0,
	y: 0
	},
	imageSrc:'background.png',
})

 const player = new Fighter({
	   position:{
	x:50,
	y:0
   },
   velocity:
   {
	   x:0,
	   y:0
   },
   offset: {
	   x:0,
	   y:0
   },
   imageSrc:'widle.png',
   scale:2,
   framesMax: 6,
   framesHold: 8,
   offset: {
	   x:215,
	   y:65
	   },
	sprites: {
       idle:{
		   imageSrc:'widle.png',
           framesMax: 6	,
           framesHold: 9	   
	   },
       run:{
		   imageSrc:'wRun.png',
           framesMax: 8,
		   framesHold: 5	 
	},
	jump:{
		   imageSrc:'wJump.png',
           framesMax: 2	,
		   framesHold: 2
	},
	fall:{
		   imageSrc:'wFall.png',
           framesMax: 2	,
		   framesHold: 2
	},
	attack1:{
		   imageSrc:'wAttack2.png',
           framesMax: 8	,
		   framesHold: 4
	},
	takeHit:{
		   imageSrc:'wHit.png',
           framesMax: 4	,
		   framesHold: 5
	},
	death:{
		   imageSrc:'wDeath.png',
           framesMax: 7,
		   framesHold: 5
	}
	},
attackBox:{
	 offset:{
		 x:30,
		 y:50
	 },
	 width:200,
	 height:50
	},
health: 200	
 })
 
   const enemy = new Fighter({
	   position:{
	x:880,
	y:0
   },
   velocity:
   {
	   x:0,
	   y:0
   },
   color: 'blue',
   offset: {
	   x:-50,
	   y:0
   },
    imageSrc:'ewidle.png',
   scale:2.4,
   framesMax: 8,
   framesHold: 8,
   offset: {
	   x:230,
	   y:185
	   },
	sprites: {
       idle:{
		   imageSrc:'ewidle.png',
           framesMax: 8	,
           framesHold: 9	   
	   },
       run:{
		   imageSrc:'ewRun.png',
           framesMax: 8,
		   framesHold: 4	 
	},
	jump:{
		   imageSrc:'ewJump.png',
           framesMax: 2	,
		   framesHold: 2
	},
	fall:{
		   imageSrc:'ewFall.png',
           framesMax: 2	,
		   framesHold: 2
	},
	attack1:{
		   imageSrc:'ewAttack2.png',
           framesMax: 8,
		   framesHold: 5
	},
	takeHit:{
		   imageSrc:'ewTake hit.png',
           framesMax: 3  	,
		   framesHold:12
	},
	death:{
		   imageSrc:'ewDeath.png',
           framesMax: 7	,
		   framesHold: 5
	}
	},
	attackBox:{
	 offset:{
		 x:-168,
		 y:50
	 },
	 width:250,
	 height:50
	},
	health: 300
   })