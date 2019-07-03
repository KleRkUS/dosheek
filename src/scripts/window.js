/*
* Класс открытия дополнительных
* элементов поверх страницы
*/

class Window 
{
	constructor()
	{
		this.screenHeight = document.documentElement.clientHeight;
	}

	clickEvent(e, w)
	{
		document.body.style.overflow = 'hidden';
		e.style.display = "flex";
	}
}