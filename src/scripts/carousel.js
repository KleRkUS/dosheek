class CarouselFactory 
{
	createClass(id, e, r, i)
	{
		let newClass = new Carousel(id, e, r, i);
		return newClass;
	}
}


class Carousel 
{
	constructor(id, elem, range, index)
	{
		this.id = id;
		this.carousel = elem;
		this.carouselRange = range;
		this.carouselIndex = +index - 1;
		this.frame = this.carousel.children[0];
		this.dots = this.carousel.children[3];
		this.status = 0;
	}

	carouselClickEvent(e, increment = false) {		var increment = e.getAttribute('data-carousel-increment');
		if (+increment == this.status) {
			return 0;
		}
		var index = this.carouselIndex + +increment;
		var currentItem = this.frame.children[this.carouselIndex];
		var newItem = this.frame.children[index];
		currentItem.style.opacity = 0;
		setTimeout(this.swapItems(currentItem, newItem), 200);
		this.carouselDotsEvent(index);
		this.carouselCheckAndDisable(index);
		this.carouselIndex = index;
		return this.carouselIndex;
	}

	swapItems(c, n) {
		c.style.display = "none";
		n.style.display = "inline-block";
		n.style.opacity = "1";
		return 0;
	}

	carouselCheckAndDisable(e) {
		var existence = this.carouselRange.indexOf(String(e));
		if (existence == -1) {
			this.status = 0;
			return this.status;
		} else if (existence == 0) {
			this.status = -1;
			return this.status;
		} else if (existence == 2) {
			this.status = 1;
			return this.status;
		}
	}

	carouselDotsEvent(i) {
		var dots = this.dots;
		var dotsUl = dots.children[0];
		var oldIndex = this.carouselIndex;
		var activeDot = dotsUl.children[oldIndex];
		var newDot = dotsUl.children[i];
		activeDot.setAttribute("data-carousel-active", "false");
		newDot.setAttribute("data-carousel-active", "true");
	}

	carouselStop()
	{
		this.carousel.setAttribute('index', this.carouselIndex);
	}
}