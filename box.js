// Registering component in log-component.js
AFRAME.registerComponent('moving-box', {
    schema: {
      moveX: {type: 'number', default:1},
	  moveY: {type: 'number', default:1}
    },
    tick:function(){
		var position = this.el.getAttribute("position")
		this.data.moveX= this.data.moveX+0.01
		position.x = this.data.moveX
		this.data.moveY = this.data.moveY+0.01
		position.y = this.data.moveY
		this.el.setAttribute("position",{x:position.x, y:position.y, z:position.z})

		
	}
}

);

