class Masters 
{
	constructor(e)
	{
		this.articleMasters = e;
		this.iconIndex = 0;
		this.parentMasters = this.articleMasters.children[1];
		this.icons = this.parentMasters.children[0];
		this.masters = this.parentMasters.children[1];
	}

	clickEvent(e) 
	{
		var newIndex = +(e.getAttribute('data-masters-index')) - 1;
		var newBlock = this.masters.children[newIndex];
		var oldBlock = this.masters.children[this.iconIndex];
		var oldIcon = this.icons.children[this.iconIndex];
		oldBlock.style.opacity = 0;
		e.style.borderBottom = "none";
		oldIcon.style.borderBottom = "1px solid #e5e5e5";
		setTimeout(this.swapBlocks(newIndex, newBlock, oldBlock), 200);
		this.iconIndex = newIndex;
		return this.iconIndex;
	}

	swapBlocks(nI, nB, oB)
	{
		oB.style.display = "none";
		nB.style.display = "flex";
		nB.style.opacity = 1;
		return 0;
	}
}