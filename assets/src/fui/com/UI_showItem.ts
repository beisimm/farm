/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_gmBtn from "./UI_gmBtn";

export default class UI_showItem extends fgui.GComponent {

	public m_n11:fgui.GImage;
	public m_pic:fgui.GLoader;
	public m_name:fgui.GTextField;
	public m_gmBtm:UI_gmBtn;
	public m_price:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugb03x6p";

	public static createInstance():UI_showItem {
		return <UI_showItem>(fgui.UIPackage.createObject("com", "showItem"));
	}

	protected onConstruct():void {
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_gmBtm = <UI_gmBtn>(this.getChild("gmBtm"));
		this.m_price = <fgui.GTextField>(this.getChild("price"));
	}
}