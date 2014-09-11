/**
 * The base class for all elements that appear in the game.
 * @author Some guy
 * @class
 */
function VisualGameObject()
{
	/**
	 * The image that will be displayed by this object
	 * @type Image
	 */
	 this.image = null;
	
	/**
	 * Draws this element to the back buffer
	 * @param dt Time in seconds since the last frame
	 */
	this.draw = function(/**Number*/ dt, /**CanvasRenderingContext2D*/ context, /**Number*/ xScroll, /**Number*/ yScroll)
	{
		context.drawImage(this.image, this.x - xScroll, this.y - yScroll);
	}
	
	/**
	 * Initializes this object
	 * @param image The image to be displayed
	 */
	this.startupVisualGameObject = function(/**Image*/ image, /**Number*/ x, /**Number*/ y, /**Number*/ z)
	{
		this.startupGameObject(x,y,z);
		this.image = image;
		return this;
	}
	
	/**
	 * Clean this object up
	 */
	this.shutdownVisualGameObject = function()
	{
		this.shutdownGameObject();
	}
	
	this.collisionArea = function()
	{
		return new Rectangle().startupRectangle(this.x, this.y, this.image.width, this.image.height);
	}
}
VisualGameObject.prototype = new GameObject;
